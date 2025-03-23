import React, { memo, ReactNode, ForwardedRef } from "react";
import { cn } from "@/lib";
import { VariantProps, cva } from "class-variance-authority";

// https://www.youtube.com/watch?v=qGQRdCg6JRQ
// https://www.youtube.com/watch?v=eXRlVpw1SIQ
// https://github.com/joschan21/image-alt-generator/blob/main/src/components/ui/button.tsx
// https://flowbite.com/docs/components/buttons/
// https://cva.style/docs/getting-started/composing-components

const enum ButtonState {
  default,
  loader,
  disabled,
}

const enum ButtonKind {
  default, // Default
  pills, // Pills
  gradient_monochrome, //Gradient monochrome
  gradient_duotone, // Gradient duotone
  gradient_outline, // Gradient outline
  colored_shadows, // Colored shadows
  outline, // Outline
  label, // Button with label
  icon, // Icon
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
  size = "default",
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
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      <span className={cn({ "mr-2": icon })}>{icon && icon}</span>
      {children}
    </button>
  );
};

ButtonComponent.displayName = "Button";

const Button = memo(ButtonComponent);

export { Button, ButtonState, ButtonKind };
