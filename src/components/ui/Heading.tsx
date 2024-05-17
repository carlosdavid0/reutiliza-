import { cn } from "@src/lib/utils";
import { cva } from "class-variance-authority";
import { Text, TextProps } from "react-native";

type HeadingProps = TextProps & {
    variant?: 'heading' | 'primary' | 'secondary' | 'destructive' | 'link';
    size?: 'default' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
};

const HeadingTextVariants = cva('', {
    variants: {
        variant: {
            heading: 'text-heading',
            primary: 'text-primary',
            secondary: 'text-secondary',
            destructive: 'text-red-600',
            link: 'text-blue-500 underline',
        },
        size: {
            default: 'text-lg',
            lg: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
            '4xl': 'text-4xl',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default',
    },
});

export function Heading({ children, variant, size, className, ...rest }: HeadingProps) {
    return (
        <Text
            style={{ fontFamily: "Ubuntu_700Bold" }}
            {...rest}
            className={cn(
                className,
                HeadingTextVariants({ variant, size }),
            )}

        >
            {children}
        </Text>
    );

}