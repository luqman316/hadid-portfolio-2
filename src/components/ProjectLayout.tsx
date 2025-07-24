/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";

type ProjectLayoutProps = {
  image: string;
  title: string;
  description: string;
  //   link: string;
};

function ProjectLayout({ image, title, description }: ProjectLayoutProps) {
  return (
    <>
      <div className="border border-white rounded-lg p-5">
        <div className="flex flex-col">
          {/* Image and Category */}
          <div className="relative w-full h-48 mb-4">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          {/* Title */}
          <h3 className="font-semibold text-lg mb-1 text-gray-300">{title}</h3>
          {/* Description */}
          <p className="text-gray-200 text-sm mb-4 flex-1">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectLayout;
