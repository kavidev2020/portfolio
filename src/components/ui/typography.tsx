import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';


const typographyVariants = cva("text-foreground", 
 {
  variants:{
   variant : {
    muted:"text-xs",
    small:"text-sm",
    p:"text-base",
    h1:"text-3xl font-heading font-bold",
    h2:"text-3xl font-heading font-semibold",
    h3:"text-2xl font-heading font-semibold",
    h4:"text-lg font-heading font-semibold letter-wider",
    h5:"text-base font-heading font-semibold letter-wider"
   }  
  },
  defaultVariants:{
    variant : "p"  
  }  
 }   
)

interface TypographyProps extends React.HtmlHTMLAttributes<HTMLElement>,
 VariantProps<typeof typographyVariants> {
  as?:React.ElementType   
 }

export function Typography({variant, className, as: Component = "p", ...props}:TypographyProps){
 return (
  <Component
   className={cn(typographyVariants({variant}), className)}
   {...props}
  />   
 )    
}