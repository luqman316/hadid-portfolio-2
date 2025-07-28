import { projects } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl text-white ">
        <h1 className="text-3xl  font-bold mb-4">{project.title}</h1>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-md w-full flex flex-col justify-center items-center h-auto object-cover mb-4"
        />
        <p className="mt-2 text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="bg-gray-700 text-white text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
