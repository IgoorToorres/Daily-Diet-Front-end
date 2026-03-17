import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

export const ButtonVariants = tv({
  base: "font-bold text-[14px] w-28.5 h-12.5 rounded-lg flex justify-center items-center gap-2",
  variants: {
    variant: {
      primaryBlack: "bg-gray-2 text-white",
      secondaryBlack: "bg-gray-1 text-white",
      primaryWhite: "bg-white text-gray-1",
      secondaryWhite: "bg-gray-500 text-gray-1",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "primaryBlack",
    disabled: false,
  },
})

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof ButtonVariants> {}

export default function Button({
  className,
  type = "button",
  variant,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled ?? false}
      className={ButtonVariants({
        variant,
        disabled,
        className,
      })}
      {...props}
    />
  )
}
