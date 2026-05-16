"use client";

import clsx from "clsx";
import Image from "next/image";

interface QuboLogoProps {
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  className?: string;
}

/**
 * Brand logo with two icon assets:
 * - purple icon for light surfaces (#3E157B)
 * - white icon for dark surfaces
 */
export function QuboLogo({
  variant = "full",
  theme = "light",
  className,
}: QuboLogoProps) {
  const iconSrc =
    theme === "dark" ? "/brand/qubo-icon-white-clean.png" : "/brand/qubo-icon-purple.png";
  const textClass = theme === "dark" ? "text-white" : "text-[#3E157B]";

  return (
    <div className={clsx("inline-flex items-center", className)}>
      {variant === "full" ? (
        <div className="inline-flex items-center gap-2">
          <span className="relative h-9 w-9 sm:h-10 sm:w-10">
            <Image
              src={iconSrc}
              alt="Qubo"
              fill
              className="object-contain scale-[1.6]"
              sizes="40px"
              priority
            />
          </span>
          <span className={clsx("font-semibold tracking-tight text-xl sm:text-2xl", textClass)}>
            Qubo
          </span>
        </div>
      ) : (
        <span className="relative h-10 w-10">
          <Image
            src={iconSrc}
            alt="Qubo icon"
            fill
            className="object-contain scale-[1.6]"
            sizes="40px"
          />
        </span>
      )}
    </div>
  );
}

