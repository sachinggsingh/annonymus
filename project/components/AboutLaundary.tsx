import React from "react";
import { Meteors } from "./ui/meteors";
import { IconCheck } from "@tabler/icons-react";
import { Button } from "./ui/moving-border";

export function AboutLaundrySection() {
  return (
    <section className="py-10 px-8 bg-gray-50 flex justify-center items-center min-h-[80vh]">
      <div className="relative w-full max-w-7xl mx-auto flex justify-center items-center">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-white blur-2xl" />
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white px-8 py-12 shadow-2xl w-full">
          <h2 className="text-4xl font-bold text-neutral-500 mb-6 w-full text-center">
            About LaundryApp
          </h2>
          <p className="text-lg text-gray-700 mb-8 w-full text-center">
            Our team of laundry experts uses state-of-the-art equipment and
            eco-friendly practices to ensure your clothes look and feel their
            best. From delicate fabrics to everyday wear, we treat each item
            with the care it deserves.
          </p>
          <div className="flex justify-center text-center space-x-4 mb-8">
            <div className="flex items-center text-blue-600">
              <IconCheck className="w-5 h-5 mr-2" />
              <span>Professional Service</span>
            </div>
            <div className="flex items-center text-blue-600">
              <IconCheck className="w-5 h-5 mr-2" />
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center text-blue-600">
              <IconCheck className="w-5 h-5 mr-2" />
              <span>Fast Delivery</span>
            </div>
          </div>
          <h1 className="relative z-50 mb-4 text-2xl md:text-3xl font-extrabold text-neutral-500 text-center w-full tracking-tight">
            LaundrySeva by the Numbers
          </h1>
          <p className="relative z-50 mb-8 text-base md:text-lg font-medium text-gray-700 text-center w-full">
            Trusted by thousands, LaundrySeva delivers fast, eco-friendly, and
            reliable laundry solutions—right to your door. Experience
            convenience, care, and satisfaction with every order.
          </p>
          <div className="relative z-50 w-full space-y-6 px-4 md:px-16 lg:px-32 xl:px-64 mb-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Happy Customers</span>
              <span className="text-2xl font-bold text-gray-900">10,000+</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Laundry Loads</span>
              <span className="text-2xl font-bold text-gray-900">50,000+</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Cities Served</span>
              <span className="text-2xl font-bold text-gray-900">25+</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Average Rating</span>
              <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
          </div>
          <Button className="cursor-pointer relative z-50 rounded-lg border border-gray-300 px-6 py-2 text-gray-800 font-semibold bg-gray-100 hover:bg-gray-200 transition mx-auto block">
            Join LaundrySeva
          </Button>
          {/* Meteor effect */}
          <Meteors
            number={8}
            className="bg-black before:bg-gradient-to-r before:from-black before:to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
