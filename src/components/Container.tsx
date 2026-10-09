export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-margin-mobile sm:px-margin ${className}`}>
      {children}
    </div>
  );
}
