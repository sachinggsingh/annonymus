import React from "react";
import { IconCheck } from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/moving-border";

export const Pricing = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="bg-violet-300 rounded-lg shadow-lg flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Basic</CardTitle>
              <CardDescription className="text-4xl font-bold text-blue-600 mb-6">
                $15<span className="text-lg text-gray-500">/load</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  Standard wash & dry
                </li>
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  Next day delivery
                </li>
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  Free pickup
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-white bg-violet-400 py-3 rounded-lg hover:bg-violet-500 transition-colors">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-violet-500 rounded-lg shadow-lg flex flex-col justify-between transform scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white mb-4">Premium</CardTitle>
              <CardDescription className="text-4xl font-bold text-white mb-6">
                $25<span className="text-lg text-blue-200">/load</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <IconCheck className="w-5 h-5 mr-2 text-green-300" />
                  Premium detergents
                </li>
                <li className="flex items-center text-white">
                  <IconCheck className="w-5 h-5 mr-2 text-green-300" />
                  Same day delivery
                </li>
                <li className="flex items-center text-white">
                  <IconCheck className="w-5 h-5 mr-2 text-green-300" />
                  Stain treatment
                </li>
                <li className="flex items-center text-white">
                  <IconCheck className="w-5 h-5 mr-2 text-green-300" />
                  Free pickup & delivery
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-violet-400 hover-bg-violet-800 py-3 rounded-lg  transition-colors font-semibold">
                Most Popular
              </Button>
            </CardFooter>
          </Card>

          {/* Express Plan */}
          <Card className="bg-violet-300 rounded-lg shadow-lg flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Express</CardTitle>
              <CardDescription className="text-4xl font-bold text-blue-600 mb-6">
                $35<span className="text-lg text-gray-500">/load</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  4-hour delivery
                </li>
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  Premium care
                </li>
                <li className="flex items-center text-gray-600">
                  <IconCheck className="w-5 h-5 mr-2 text-green-500" />
                  Priority scheduling
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-violet-400 text-white py-3 rounded-lg hover:bg-violet-600 transition-colors">
                Rush Order
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};
