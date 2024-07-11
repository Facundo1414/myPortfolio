import React from 'react';
import { cn } from "@/utils/cn";
import CardCv from '../extra/CardCv';
import { HoverEffect } from './HoverEffect';
import { SparklesCore } from './SparklesCore';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[23rem] grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  sectionType,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  sectionType?: number;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-indigo-800 relative",
        className
      )}
    >
      <div
        className="relative h-full bg-indigo-800 rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10"
          style={{
            backgroundImage: "url(/noise.webp)",
            backgroundSize: "30%",
          }}
        ></div>
        <div className="p-4 px-6">
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-bold text-white text-2xl  mb-2 mt-2">
              {title}
            </div>
            <div className="font-normal text-white text-lg ">
              {/* Primera section */}
              {sectionType == 1 && (
                <div className="flex flex-col xs:flex-col md:flex-row justify-between items-center gap-8">
                  <div className="w-full md:w-2/3">
                    {description}
                  </div>
                  <div className="w-full md:w-1/3">
                    <CardCv />
                  </div>
                </div>

              ) }

              {/* Segunda section */}
              {sectionType == 2 && (
                <div className="font-normal text-white text-lg" >
                  {description}
                </div>
              ) }

              {/* Tercera section */}
              {sectionType == 3 && (
              <div className="relative">
                  {description}
                </div>
              ) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
