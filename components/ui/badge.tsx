import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    variant?: 'default' | 'outline' | 'secondary' | 'destructive';
    className?: string;
}

// Note: This is a simplified version. In a real design system, we might use cva for variants.
// For now, I'll keep it flexible to accept classNames for specific colors as seen in the codebase.
const Badge = ({ children, className, ...props }: BadgeProps) => {
    return (
        <span
            className={cn('inline-flex items-center px-3 py-1 rounded text-xs font-medium', className)}
            {...props}
        >
            {children}
        </span>
    );
};

export default Badge;
