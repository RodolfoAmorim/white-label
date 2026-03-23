import { cn } from "@/utils/cn";
import {
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ElementType,
  ButtonHTMLAttributes,
} from "react";

const InputRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn(
        "flex h-10 w-full items-center justify-start gap-4 rounded-xl bg-white px-4 py-2",
        props.className,
      )}
    >
      {children}
    </div>
  ),
);

InputRoot.displayName = "InputRoot";

const InputField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => (
  <input
    ref={ref}
    {...props}
    className={cn(
      "flex-1 text-gray-800 outline-none placeholder:text-gray-300",
      props.className,
    )}
  />
));

InputField.displayName = "InputField";

const InputIcon = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & { icon: ElementType }
>(({ icon: Icon, ...props }, ref) => (
  <Icon
    ref={ref}
    {...props}
    className={cn("size-5 text-gray-300 md:size-6", props.className)}
  />
));

InputIcon.displayName = "InputIcon";

const InputAction = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ ...props }, ref) => (
  <button ref={ref} {...props} className={cn("size-6", props.className)} />
));

InputAction.displayName = "InputAction";

export const Input = {
  Root: InputRoot,
  Field: InputField,
  Icon: InputIcon,
  Action: InputAction,
};
