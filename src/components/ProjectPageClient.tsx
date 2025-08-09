"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const autoplayPlugin = Autoplay({ delay: 6000 });

type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string | string[];
  images?: string[];
  videos?: string[];
  tags?: string[];
};

export default function ProjectPageClient(project: Project) {
  // Normalize the image data
  const normalizedProject = {
    ...project,
    images: Array.isArray(project.image)
      ? project.image
      : project.image
      ? [project.image]
      : project.images || [],
    image: Array.isArray(project.image)
      ? project.image[0] ?? ""
      : typeof project.image === "string"
      ? project.image
      : "",
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-14 lg:py-20">
      <div className="text-white w-full">
        <h1 className="text-xl xs:text-2xl text-amber-500 sm:text-4xl md:text-5xl font-extrabold underline underline-offset-8 mb-3 sm:mb-4 text-balance break-words">
          {normalizedProject.title}
        </h1>

        {/* Multiple Images Carousel */}
        {normalizedProject.images && normalizedProject.images.length > 0 && (
          <Carousel
            plugins={[autoplayPlugin]}
            className="w-full overflow-hidden shadow-2xl px-14 mt-4"
          >
            <CarouselContent>
              {normalizedProject.images.map((img, i) => (
                <CarouselItem key={i}>
                  <div className="relative w-full h-[220px] xs:h-[300px] mt-4 sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
                    <Image
                      src={img}
                      alt={`${normalizedProject.title} image ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      quality={100}
                      className="rounded-md"
                      priority={i === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="!left-2 sm:!left-4 !bg-white !text-black !shadow-md hover:!bg-gray-100" />
            <CarouselNext className="!right-2 sm:!right-4 !bg-white !text-black !shadow-md hover:!bg-gray-100" />
          </Carousel>
        )}

        {/* Single fallback image if no images array */}
        {(!normalizedProject.images || normalizedProject.images.length === 0) &&
          normalizedProject.image && (
            <div className="relative w-full h-[220px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] mb-4">
              <Image
                src={normalizedProject.image}
                alt={normalizedProject.title}
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                className="rounded-md"
                priority
              />
            </div>
          )}

        <p className="text-gray-300 text-balance mt-6 mb-4 text-base sm:text-lg md:text-xl">
          {normalizedProject.description}
        </p>

        {/* Multiple Videos */}
        {normalizedProject.videos && normalizedProject.videos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full mt-8 mb-4">
            {normalizedProject.videos.map((vid, i) => (
              <div
                key={i}
                className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[350px] rounded-md overflow-hidden"
              >
                <video
                  src={vid}
                  loop
                  autoPlay={
                    typeof window !== "undefined" && window.innerWidth >= 640
                  }
                  muted
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {normalizedProject.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-gray-700 text-white text-xs sm:text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
