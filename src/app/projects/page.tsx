import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { projects } from "@/content/projects";
import { ProjectsClient } from "@/components/sections/ProjectsClient";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "A comprehensive collection of Obinna's work, ranging from AI-powered systems to full-stack applications.",
});

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
