import { cn } from '@src/lib/utils'
import { cva } from 'class-variance-authority'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

type TextProps = RNTextProps & {
    size?: 'base' | 'sm' | 'md'
    variant?: 'base' | 'text' | 'light' | 'bold'
}

const textVariants = cva('', {
    variants: {
        variant: {
            base: 'text-body',
            text: 'text-text',
            light: 'text-light',
            bold: 'text-bold',
        },
        size: {
            base: 'text-base leading-6 thought-paragraph',
            sm: 'text-sm leading-5 thought-paragraph',
            md: 'text-md leading-5 thought-paragraph',
        },
    },
    defaultVariants: {
        variant: 'base',
        size: 'base',
    },
})
export function Text({ children, variant, size, className, ...rest }: TextProps) {
    const fonts = {
        base: 'Roboto_400Regular',
        text: 'Roboto_400Light',
        light: 'Roboto_300Light',
        bold: 'Roboto_700Medium',
    }

    return (
        <RNText
            style={{ fontFamily: fonts[variant || 'base'] }}
            {...rest}
            className={cn(
                className,
                textVariants({
                    size, variant
                })
            )}
        >
            {children}
        </RNText>
    )

}