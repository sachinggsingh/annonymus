// import { HoverEffect } from "@/components/ui/card-hover-effect";
import { IconCheck } from "@tabler/icons-react";
import { AnimatedTestimonialsDemo } from "./Testimonials";
import { Pricing } from "./Prices";
import { ContactUsPage } from "./Contact";
import { FeaturesSectionDemo } from "./WeOffer";
// IconStar
export function CardHoverEffectDemo() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="text-center py-16 px-8">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    We Offer you
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    Discover our comprehensive range of laundry services designed to make your life easier.
                    From quick express washes to premium care, we&apos;ve got you covered.
                </p>
                <div className="flex justify-center space-x-4">
                    <div className="flex items-center text-blue-600">
                        <IconCheck className="w-5 h-5 mr-2" />
                        <span>Same Day Delivery</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                        <IconCheck className="w-5 h-5 mr-2" />
                        <span>Eco-Friendly</span>
                    </div>
                    <div className="flex items-center text-blue-600">
                        <IconCheck className="w-5 h-5 mr-2" />
                        <span>Premium Quality</span>
                    </div>
                </div>
            </div>

            {/* Main Services Grid */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <FeaturesSectionDemo/>
            </div>

            {/* Pricing Section */}
            <Pricing />

            {/* Testimonials Section */}
            <div className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        What Our Customers Say
                    </h2>
                    <AnimatedTestimonialsDemo />
                </div>
            </div>
            {/* contact */}
            <ContactUsPage/>
        </div>
    );
}

export const services = [
    {
        title: "Pickup & Delivery",
        description:
            "Schedule laundry pickups and deliveries at your convenience. We come to your door, so you never have to worry about laundry day again!",
        link: "/services/pickup-delivery",
    },
    {
        title: "Express Wash",
        description:
            "Need your clothes in a hurry? Our express wash service ensures your laundry is cleaned and delivered within hours.",
        link: "/services/express-wash",
    },
    {
        title: "Premium Care",
        description:
            "We use high-quality detergents and gentle processes to keep your garments looking and feeling their best.",
        link: "/services/premium-care",
    },
    {
        title: "Eco-Friendly Cleaning",
        description:
            "Our eco-friendly cleaning methods protect your clothes and the environment. Clean clothes, clean conscience!",
        link: "/services/eco-friendly",
    },
    {
        title: "Real-Time Tracking",
        description:
            "Track your laundry orders in real time and get notified when your clothes are ready for delivery.",
        link: "/services/tracking",
    },
    {
        title: "Subscription Plans",
        description:
            "Save more with our monthly and yearly laundry subscription plans. Hassle-free laundry, always.",
        link: "/services/subscription",
    },
];
