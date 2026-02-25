import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    title: React.ReactNode;
    linkText?: string;
    linkHref?: string;
    className?: string;
}

const SectionHeader = ({
    title,
    linkText = 'Show all jobs',
    linkHref,
    className,
}: SectionHeaderProps) => {
    return (
        <div className={cn('flex items-center justify-between mb-8', className)}>
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            {linkHref && (
                <Link
                    href={linkHref}
                    className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                    {linkText}
                    <ArrowRight className="w-5 h-5" />
                </Link>
            )}
        </div>
    );
};

export default SectionHeader;
