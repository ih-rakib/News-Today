import React from "react";
import bannerImg from "@/assets/ai-image.jpg";
import Image from "next/image";
import { Button } from "./ui/button";

const Banner = () => {
  return (
    <section className="bg-gray-100 text-white dark:bg-gray-800 dark:text-white py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* banner image */}
        <div className="w-full">
          <Image
            src={bannerImg}
            alt="Banner image"
            placeholder="blur"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* banner content */}
        <div className="flex flex-col space-y-4 py-8">
          <h3 className="text-sm font-medium text-blue-600">Technology</h3>
          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
            OpenAI Revolutionizes Human-Machine Interaction with Advanced AI
            Capabilities
          </h4>
          <p className="text-gray-900 dark:text-gray-100">
            OpenAI&apos;s groundbreaking developments in artificial intelligence
            are transforming how humans engage with technology. By creating
            highly adaptive models capable of understanding and generating
            natural language. <br />
            <br /> These innovations are not only enhancing productivity but
            also reshaping industries across the globe, from healthcare to
            entertainment, where the potential for AI-driven solutions is
            limitless.
          </p>
          <Button variant="default" className="w-max">
            Read More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
