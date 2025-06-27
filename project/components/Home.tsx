import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { TextGenerateEffectDemo } from "./AnimatedText";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center w-full">
          <HoverBorderGradient
            containerClassName="m-2"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center text-violet-600 dark:text-blue-400">
              Welcome to LaundrySeva
            </h1>
          </HoverBorderGradient>

          {/* text animation */}
          <TextGenerateEffectDemo />
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
