import React from 'react';
import { H2, P } from '../../landing/ui/typography';

function AboutSection() {
  return (
    <div className="w-full py-12 mb-16">
      <div className="w-full px-4 md:max-w-[1100px] md:mx-auto">
        <div className="max-w-2xl mx-auto bg-gray-50/50 p-8 rounded-lg text-center border border-black/15">
          <H2 className="mb-4">About Sole Composer</H2>
          <P className="text-lg text-gray-600">
            Sole Composer is a powerful 3D design tool that lets you create and customize your own unique shoe designs. With real-time visualization and an intuitive interface, you can experiment with different colors, materials, and patterns to bring your creative vision to life.
          </P>
        </div>
      </div>
    </div>
  );
}

export default AboutSection; 