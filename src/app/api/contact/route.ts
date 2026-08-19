import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    // Log 1: Request received
    console.log("📨 [1/5] Contact form submission received");
    
    const body = await req.json();
    console.log("📨 [2/5] Request body:", body);
    
    // Validate the data
    const validatedData = contactSchema.parse(body);
    const { name, email, message } = validatedData;
    console.log("✅ [3/5] Data validated successfully:", { name, email, messageLength: message.length });

    // Check environment variable
    const destinationEmail = process.env.CONTACT_DESTINATION_EMAIL;
    console.log("📧 [4/5] Sending email to:", destinationEmail || "Using fallback: test@example.com");
    
    if (!destinationEmail) {
      console.warn("⚠️ CONTACT_DESTINATION_EMAIL not set in environment variables, using fallback");
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Default resend testing email
      to: [destinationEmail || "test@example.com"],
      subject: `New message from ${name} via Portfolio`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // Optional: Add HTML version for better formatting
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    console.log("✅ [5/5] Resend response:", data);

    if (data.error) {
      console.error("❌ Resend error:", data.error);
      return NextResponse.json({ 
        error: data.error.message,
        details: data.error
      }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      data,
      message: "Email sent successfully!"
    });
    
  } catch (error) {
    // Log the full error for debugging
    console.error("❌ Server error:", error);
    
    if (error instanceof z.ZodError) {
      console.error("❌ Validation error:", error.issues);
      return NextResponse.json({ 
        error: "Invalid form data",
        details: error.issues 
      }, { status: 400 });
    }
    
    // Log any other errors
    console.error("❌ Unexpected error:", error);
    return NextResponse.json({ 
      error: "Internal server error",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}