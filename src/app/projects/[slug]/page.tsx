// import { projects } from "@/data/projects";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export function generateStaticParams() {
//   return projects.map((project) => ({ slug: project.slug }));
// }

// type Props = {
//   params: {
//     slug: string;
//   };
// }
// export default async function ProjectPage({ params }: Props) {
//   const project = projects.find((p) => p.slug === params.slug);
//   if (!project) return notFound();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-3xl text-white ">
//         <h1 className="text-3xl  font-bold mb-4">{project.title}</h1>
//         <Image
//           src={project.image}
//           alt={project.title}
//           width={800}
//           height={400}
//           className="rounded-md w-full flex flex-col justify-center items-center h-auto object-cover mb-4"
//         />
//         <p className="mt-2 text-gray-300 mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2">
//           {project.tags?.map((tag: string) => (
//             <span
//               key={tag}
//               className="bg-gray-700 text-white text-sm px-2 py-1 rounded"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ generateStaticParams inside function (with inline data)
export async function generateStaticParams() {
  const projects = await getProjects(); // move data fetching inside
  return projects.map((project) => ({ slug: project.slug }));
}

// ✅ Metadata workaround — works if data is fetched properly

export async function generateMetadata(props: { params: { slug: string } }) {
  const params = await props.params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

// ✅ Page Props
type PageProps = {
  params: {
    slug: string;
  };
};

// ✅ Page Component

export default async function ProjectPage(props: PageProps) {
  const params = await props.params;
  const projects = await getProjects();
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl text-white">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-md w-full h-auto object-cover mb-4"
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

// ✅ Helper to fetch projects data (simulate static file)
async function getProjects() {
  const { projects } = await import("@/data/projects");
  return projects;
}
