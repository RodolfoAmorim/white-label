import Image from "next/image";
import { Badge } from "../ui/badge";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ProductCardProps {
  layout?: "default" | "small" | "medium" | "large";
  className?: string;
}

export function ProductCard({
  layout = "default",
  className,
}: ProductCardProps) {
  const isSmall = layout === "small";

  const productVariants = cva(
    "group relative flex flex-col items-center gap-2 rounded-lg text-center",
    {
      variants: {
        layout: {
          default: "w-full p-2 bg-white rounded-2xl",
          small: " justify-start gap-1 xl:gap-2",
          medium: "w-40",
          large:
            "flex-col items-center text-center border-2 border-gray-100 bg-gray-50",
        },
      },
    },
  );

  return (
    <div className={cn(productVariants({ layout }), className)}>
      <div
        className={`flex w-full items-center justify-center ${isSmall ? "h-21.5" : "p-2"} `}
      >
        <Image
          src="https://m.media-amazon.com/images/I/61KU9GYqDPL._AC_SX342_SY445_QL70_ML2_.jpg"
          alt=""
          width={144}
          height={156}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <p
        className={`leading-tighter tracking-light px-2 font-medium ${isSmall ? "line-clamp-1 text-xs" : "line-clamp-2 text-sm"} `}
      >
        The Last of Us Part II Remastered
      </p>

      <div
        className={`${isSmall ? "flex items-center justify-between gap-2" : "w-full space-y-1"}`}
      >
        {!isSmall && (
          <div className="flex items-center justify-center gap-2">
            <span className="tracking-light relative text-xs text-gray-300 uppercase before:absolute before:top-1/2 before:-right-1 before:-left-1 before:h-px before:-translate-y-1/2 before:bg-gray-300">
              R$200,00
            </span>

            <Badge variant="success">15% off</Badge>
          </div>
        )}

        <p
          className={`tracking-light font-bold text-gray-800 uppercase ${isSmall ? "text-xs" : "text-base"}`}
        >
          R$ 168,<sup>00</sup>
        </p>

        {isSmall && (
          <p className="tracking-light text-success-700 text-xs leading-tight font-semibold uppercase">
            15% off
          </p>
        )}
      </div>
    </div>
  );
}
