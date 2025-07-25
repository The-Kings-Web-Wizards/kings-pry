import React from 'react';
import { Link } from 'react-router-dom';

function Button({ 
  path, 
  name, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  fullWidth = false,
  icon,
  className = '',
  ...props 
}) {
  // Base classes
  const baseClasses = `inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004d24] ${
    fullWidth ? 'w-full' : 'w-auto'
  } ${className}`;

  // Size variants
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-3.5 text-base',
    large: 'px-6 py-4 text-lg'
  };

  // Color variants
  const variantClasses = {
    primary: `bg-[#004d24] text-white hover:bg-[#00361a]`,
    secondary: `bg-white text-[#004d24] border-2 border-[#004d24] hover:bg-[#f0f7f3]`,
    ghost: `text-[#004d24] hover:bg-[#f0f7f3]`,
    danger: `bg-red-600 text-white hover:bg-red-700`
  };

  // Disabled state
  const disabledClasses = disabled || loading 
    ? 'opacity-70 cursor-not-allowed' 
    : 'cursor-pointer';

  return (
    <Link
      to={path}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {name}
        </>
      )}
    </Link>
  );
}

export default Button;