import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold)]",
  {
    variants: {
      variant: {
        default:
          "bg-ebony text-pearl hover:bg-graphite uppercase tracking-wider text-[13px]",
        gold: "bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-pearl uppercase tracking-wider text-[13px] hover:shadow-lg hover:shadow-gold/20",
        ghost:
          "bg-transparent border border-hair text-ebony hover:border-gold hover:text-gold-deep uppercase tracking-wider text-[13px]",
        link: "text-gold-deep underline-offset-4 hover:underline text-[13px] uppercase tracking-wider",
        outline:
          "border border-ebony text-ebony hover:bg-ebony hover:text-pearl uppercase tracking-wider text-[13px]",
      },
      size: {
        default: "h-11 px-8 py-3 rounded",
        sm: "h-9 px-5 py-2 rounded text-xs",
        lg: "h-14 px-10 py-4 rounded text-sm",
        icon: "h-10 w-10 rounded",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
