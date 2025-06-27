import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import { BackgroundBeamsWithCollisionDemo } from "@/components/Home";
import { CardHoverEffectDemo } from "@/components/Services";
import { WorldMapDemo } from "@/components/WorldMap";
import {
  IconTruck,
  IconClock,
  IconLeaf,
  IconShield,
  IconStar,
  IconCheck,
} from "@tabler/icons-react";
import { Footer } from "@/components/Footer";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AboutLaundrySection } from "@/components/AboutLaundary";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavbarDemo />
      </header>
      <main className="flex-1">
        <BackgroundBeamsWithCollisionDemo />

        {/* Features Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose LaundrySeva?
              </h2>
              <h2>
                {" "}
                We&apos;re not just another laundry service. We&apos;re your
                laundry partner, committed to making your life easier with
                innovative solutions and exceptional care.
              </h2>
            </div>
            <HoverEffect
              items={[
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconTruck className="w-8 h-8 text-blue-600" />
                      </div>
                      Door-to-Door Service
                    </>
                  ),
                  description:
                    "We pick up and deliver your laundry right to your doorstep. No more trips to the laundromat!",
                  link: "#door-to-door",
                },
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconClock className="w-8 h-8 text-green-600" />
                      </div>
                      Same Day Delivery
                    </>
                  ),
                  description:
                    "Need your clothes in a hurry? Our express service delivers within hours, not days.",
                  link: "#same-day",
                },
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconLeaf className="w-8 h-8 text-purple-600" />
                      </div>
                      Eco-Friendly
                    </>
                  ),
                  description:
                    "We use environmentally friendly detergents and processes to protect our planet.",
                  link: "#eco-friendly",
                },
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconShield className="w-8 h-8 text-yellow-600" />
                      </div>
                      Premium Care
                    </>
                  ),
                  description:
                    "Your clothes deserve the best. We use high-quality detergents and gentle processes.",
                  link: "#premium-care",
                },
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconStar className="w-8 h-8 text-red-600" />
                      </div>
                      5-Star Service
                    </>
                  ),
                  description:
                    "Join thousands of satisfied customers who trust us with their laundry needs.",
                  link: "#5-star",
                },
                {
                  title: (
                    <>
                      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconCheck className="w-8 h-8 text-indigo-600" />
                      </div>
                      100% Satisfaction
                    </>
                  ),
                  description:
                    "Not happy? We'll make it right. Your satisfaction is our top priority.",
                  link: "#satisfaction",
                },
              ]}
            />
          </div>
        </section>

        {/* About Section */}
        <AboutLaundrySection/>

        <div className="max-w-5xl mx-auto flex justify-center">
          <WorldMapDemo />
        </div>
        <CardHoverEffectDemo />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
