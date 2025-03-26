import React, { memo, ReactNode, ForwardedRef } from "react";
import { cn } from "@/lib";
import { VariantProps, cva } from "class-variance-authority";
import {Fragment} from "@/components";

const enum ButtonState {
  default,
  loader,
  disabled,
}

const enum ButtonKind {
  default, // Default
  icon, // Icon
}

const buttonVariants = cva(
  "font-medium text-white bg-blue-700 focus:ring-blue-300 text-center rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
{
  variants: {
    variant: {
      default: "rounded-lg",
      pills: "rounded-full",
      "gradient-monochrome": "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br",
      "gradient-duotone": "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl",
      "gradient-outline": "bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 relative inline-flex items-center justify-center p-0.5",
      "colored-shadows": "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80",
    },
    size: {
        "extra-small": "px-3 py-2 text-xs",
        small: "px-3 py-2 text-sm",
        base: "px-5 py-2.5 text-sm",
        large: "px-5 py-3 text-base",
        "extra-large": "px-6 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  /**
   * Left icon.
   */
  icon?: ReactNode;
  /**
   * Reference object.
   */
  ref?: ForwardedRef<HTMLButtonElement>;
  /**
   * Button state
   */
  state?: ButtonState;
  /**
   * Button kind
   */
  kind?: ButtonKind;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  icon = null,
  className = "",
  children = null,
  ref = null,
  kind = ButtonKind.default,
  state = ButtonState.default,
  size = "base",
  variant = "default",
  ...props
}: ButtonProps) => {
  if (kind === ButtonKind.icon) {
    console.log("Kind Icon");
  }

  return (
    <button
      ref={ref}
      type="button"
      disabled={state === ButtonState.disabled}
      className={cn(buttonVariants({ variant, size }), className, {'group p-0.5': variant === 'gradient-outline'})}
      {...props}
    >
      { variant !== 'gradient-outline' &&
        <Fragment>
        <span className={cn({ "mr-2": icon })}>{icon && icon}</span>
        {children}
      </Fragment>}
      { variant === 'gradient-outline' &&
        <Fragment>
          <span
            className={`px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent`}>
            <span className={cn({ "mr-2": icon })}>{icon && icon}</span>
            {children}
          </span>
        </Fragment>}
    </button>
  );
};

ButtonComponent.displayName = "Button";

const Button = memo(ButtonComponent);

export { Button, ButtonState, ButtonKind };
