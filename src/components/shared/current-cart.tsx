import { ShoppingBagIcon } from "lucide-react";

export function CurrentCart() {
  return (
    <button className="relative">
      <span className="bg-main-100 text-main-500 absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold">
        3
      </span>

      <ShoppingBagIcon />
    </button>
  );
}
