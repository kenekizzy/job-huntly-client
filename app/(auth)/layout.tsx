import ThemeToggle from "@/components/general/ThemeToggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>
  <div className="absolute top-8 right-8">
    <ThemeToggle />
  </div>
  {children}
  </>;
}
