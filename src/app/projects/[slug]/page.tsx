import ProjectPageClient from "@/components/ProjectPageClient";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// ✅ Async Functional Component for the page
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) return <div>Project not found</div>;

  return <ProjectPageClient {...project} />;
}

// ✅ Static Params Function for Pre-rendering
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
