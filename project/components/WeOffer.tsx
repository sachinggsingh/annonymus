import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Doorstep Pickup & Delivery",
      description:
        "We pick up your laundry from your doorstep and deliver it fresh and clean—right to your home.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Express Wash",
      description:
        "Need it fast? Our express wash ensures your clothes are ready in just a few hours.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Eco-Friendly Cleaning",
      description:
        "We use eco-friendly detergents and processes to care for your clothes and the planet.",
      icon: <IconCloud />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Transparent, competitive pricing with no hidden fees. Quality service at the best rates.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Premium Garment Care",
      description:
        "Delicate fabrics? Stains? Our experts treat every item with the utmost care.",
      icon: <IconHeart />,
    },
    {
      title: "Real-Time Order Tracking",
      description:
        "Track your laundry order from pickup to delivery with live updates.",
      icon: <IconTerminal2 />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "Questions or requests? Our support team is always here to help you.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "Not happy? We'll re-clean your clothes or refund your money. Your satisfaction is our priority!",
      icon: <IconEaseInOut />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-violet-50 to-white dark:from-violet-900/20 dark:to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-violet-50 to-white dark:from-violet-900/20 dark:to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-violet-600 dark:text-violet-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-violet-300 dark:bg-violet-600 group-hover/feature:bg-violet-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
