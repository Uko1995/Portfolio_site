export default function Link({
  children,
  href = "",
  target = "",
  onEmailClick = () => {},
}) {
  return (
    <a
      aria-label={`Link to ${href}`}
      href={href}
      onClick={onEmailClick}
      rel="noopener noreferrer"
      target={target}
      className="cursor-pointer"
    >
      {children}
    </a>
  );
}
