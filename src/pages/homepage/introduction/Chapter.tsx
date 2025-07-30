import { Body } from "@/shared/components/typography";

interface ChapterProps {
  text: string;
}

export default function Chapter({ text }: ChapterProps) {


  return (
    <Body className="intro-chapter">{text}</Body>
  );
}
