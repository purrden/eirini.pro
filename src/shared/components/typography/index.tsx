import "@shared/styles/index.css";
import "./Typography.css";

interface BodyProps {
  children?: React.ReactNode;
  className?: string;
}

export function Body({ children, className }: BodyProps) {
  return <p className={`body-text ${className ?? ""}`}>{children}</p>;
}

export function PrimaryHeading({ children, className }: BodyProps) {
  return <p className={`primary-heading-text ${className ?? ""}`}>{children ?? null}</p>;
}

export function SecondaryHeading({ children, className }: BodyProps) {
  return <p className={`secondary-heading-text ${className ?? ""}`}>{children ?? null}</p>;
}
