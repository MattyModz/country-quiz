import { cn } from "../../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

import * as React from "react";

const buttonVariants = cva(
  " inline-flex items-center justify-center  text-sm font-medium transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default:
          " text-black bg-gradient-to-r from-blue-500 to-indigo-500 border-2 border-blue-400 rounded-xl hover:bg-black    text-white text-lg lg:text-xl font-normal font-semibold",
        option:
          "text-white bg-black rounded-xl border-2 border-blue-400 hover:bg-white hover:text-black",
      },
      size: {
        default: "h-14 px-4",
        small: "h-8 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, variant, isLoading, onClick, size, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={onClick}
        disabled={isLoading}
        {...props}
      >
        {/* {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null} */}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
