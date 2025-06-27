"use client";
import { useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// Custom color classes
const violetWord = "text-violet-700 dark:text-violet-500";

const lines = [
  {
    text: "Your modern, hassle-free laundry solution.",
    className: "text-slate-900 dark:text-slate-200",
  },
  {
    text: "Schedule pickups, track your orders,",
    className: violetWord,
  },
  {
    text: "and enjoy fresh clothes delivered to your door—all with a single click.",
    className: "text-slate-900 dark:text-slate-200",
  },
];

export function TextGenerateEffectDemo() {
  const [step, setStep] = useState(0);
  const duration = 0.5; // seconds per word
  const handleDone = () => {
    setTimeout(() => {
      setStep((prev) => (prev < lines.length - 1 ? prev + 1 : prev));
    }, 400); // small pause between lines
  };

  return (
    <div className="text-xl md:text-2xl text-center mb-6 max-w-2xl mt-4 font-bold flex flex-col items-center gap-y-2">
      {lines.map((line, idx) =>
        idx === step ? (
          <TextGenerateEffect
            key={idx}
            className={line.className}
            words={line.text}
            duration={duration}
            filter={true}
            onDone={handleDone}
          />
        ) : idx < step ? (
          <div
            key={idx}
            className={line.className + " opacity-100 transition-all"}
          >
            {line.text}
          </div>
        ) : null
      )}
    </div>
  );
}
