import "@shared/styles/index.css";
import "./Typography.css";

export function Body({ text, className }: { text: string, className?: string }) {
  return <p className={`body-text ${className ?? ""}`}>{text}</p>;
}

export function PrimaryHeading(t: string) {
  return <p className="primary-heading-text">{t}</p>;
}
