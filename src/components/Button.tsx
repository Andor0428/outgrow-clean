import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-300/30",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-lg hover:shadow-gray-200/30",
    outline: "border-2 border-gray-200 text-gray-900 hover:border-blue-600 hover:text-blue-600"
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-2.5 gap-2",
    lg: "text-lg px-8 py-4 gap-3"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
      {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
    </button>
  );
} 