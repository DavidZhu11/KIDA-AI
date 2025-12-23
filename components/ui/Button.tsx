import React from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

type ButtonProps = ButtonBaseProps & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-all duration-300 rounded-full focus:outline-none overflow-hidden font-display tracking-wide cursor-pointer";
  
  const variants = {
    primary: "text-black bg-primary hover:bg-white hover:text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] border border-transparent",
    outline: "text-white bg-transparent border border-white/20 hover:bg-white/5 hover:border-primary/50 backdrop-blur-sm",
    ghost: "text-gray-400 hover:text-primary hover:bg-white/5"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></span>
      )}
      
      {/* Content wrapper to stay above shimmer */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (props.href) {
    return (
      <a className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
};