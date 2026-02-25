'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import LayoutWrapper from './LayoutWrapper';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </ThemeProvider>
  );
}
