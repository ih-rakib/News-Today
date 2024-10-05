import { Button } from "@/components/ui/button";
import React from "react";

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
          <span className="text-slate-700 dark:text-gray-100">
            Next News Today
          </span>
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
          Your trusted source for the latest and most important news across the
          globe. Stay informed, stay ahead.
        </p>

        <div className="bg-gray-200 rounded-md px-3 w-max mx-auto">
          <div className="flex justify-center space-x-10 mb-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                50+
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Daily Articles
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                50K+
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Monthly Readers
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                20+
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Countries Covered
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At Next News Today, we are committed to providing our audience with
            timely, accurate, and impactful news coverage. Our team consists of
            skilled journalists, editors, and analysts who ensure the highest
            quality of reporting across a variety of topics.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            We believe that informed individuals can make a significant
            difference in their communities and the world. That’s why we go
            beyond the headlines to bring you the stories that matter most.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-blue-50 dark:bg-gray-900 p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To become the world’s most trusted and respected news platform,
              delivering unbiased and transparent information to empower people
              everywhere.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-gray-900 p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide comprehensive and real-time news coverage, fostering an
              informed and educated global audience, while upholding the values
              of journalistic integrity and accuracy.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Want to stay updated?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to our newsletter for daily updates directly in your
            inbox!
          </p>
          <Button variant="default">Subscribe Now</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
