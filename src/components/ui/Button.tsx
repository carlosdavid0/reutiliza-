import { cva, type VariantProps } from 'class-variance-authority';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-md justify-center',
  {
    variants: {
      variant: {
        default: 'bg-primary',
        secondary: 'bg-secondary',
        destructive: 'bg-destructive',
        ghost: 'bg-slate-700',
        link: 'text-primary underline-offset-4',
      },
      size: {
        default: 'h-10 px-4',
        sm: 'h-8 px-2',
        lg: 'h-12 px-8',
        xl: 'h-14 px-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const buttonTextVariants = cva('text-center font-medium', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      ghost: 'text-primary-foreground',
      link: 'text-primary-foreground underline',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      xl: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
  VariantProps<typeof buttonVariants> {
  label: string | React.ReactNode;
  labelClasses?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
function Button({
  label,
  labelClasses,
  className,
  variant,
  size,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {leftIcon ? leftIcon : <View className="absolute left-0 p-4 h-full rounded-l-md" />}

      {typeof label === 'string' ?
        <Text
          className={cn(
            buttonTextVariants({ variant, size, className: labelClasses })
          )}
        >
          {label}
        </Text> : label
      }
      {rightIcon ? rightIcon : <View className="absolute right-0 p-4 h-full rounded-r-md" />}
    </TouchableOpacity>
  );
}

export { Button, buttonTextVariants, buttonVariants };

