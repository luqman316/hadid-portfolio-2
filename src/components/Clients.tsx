"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const client = [
  { image: "/client/1.png" },
  { image: "/client/2.png" },
  { image: "/client/3.png" },
  { image: "/client/4.png" },
  { image: "/client/5.png" },
  { image: "/client/6.png" },
  { image: "/client/7.png" },
  { image: "/client/8.png" },
];

function Clients() {
  return (
    <>
      <div className="w-full flex flex-col container mx-auto px-2 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 sm:mb-8 underline underline-offset-8 tracking-tight">
          OUR CLIENTS
        </h2>
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-6 sm:gap-y-10">
            {client.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-2 hover:bg-neutral-600 hover:rounded-lg hover:shadow-2xl sm:p-4"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                }}
              >
                <Image
                  src={item.image}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain h-14  sm:h-20 w-auto max-w-[120px] sm:max-w-[140px] max-h-[60px] sm:max-h-[80px] transition-all duration-300"
                  priority
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
