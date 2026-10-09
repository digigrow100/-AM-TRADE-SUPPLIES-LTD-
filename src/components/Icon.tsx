type IconProps = {
  name: string;
  className?: string;
};

/**
 * Material Symbols ligature icon. Only icons present in the self-hosted subset
 * (src/assets/fonts/material-symbols.woff2) will render.
 */
export default function Icon({ name, className = "" }: IconProps) {
  return (
    <span aria-hidden="true" className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
