import React, {memo, ReactNode} from 'react';
import {cn} from "@/lib";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  icon?: ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({icon, secondary, className, children}) => {
  // Common classes
  const cCls = `inline-flex items-center py-2.5 px-5 text-sm font-medium focus:ring-4 focus:outline-none rounded-lg`;
  // Primary classes
  const clsPrimary = clsx(`text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`);
  // Secondary classes
  const clsSecondary = clsx(`text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`);
  // Internal classes
  const cls = secondary ? clsSecondary : clsPrimary;

  return (
    <button type="button" className={cn(cCls, cls, className)}>
      <span className={cn({'mr-2' : icon})}>{icon && icon}</span>{children}
    </button>
    );
}

ButtonComponent.displayName = "Button";

export const Button = memo(ButtonComponent);
