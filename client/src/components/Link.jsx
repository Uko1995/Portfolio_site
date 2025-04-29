export default function Link({ children, href = "", target = "" }) {
  return (
    <a href={href} rel="noopener noreferrer" target={target}>
      {children}
    </a>
  );
}
