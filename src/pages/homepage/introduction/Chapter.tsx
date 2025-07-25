interface ChapterProps {
  text: string;
}

function getPiecesOf(text: string) {
  // We expect only one nbsp object between a pair of * symbols
  // example:
  // "It will cost *7 pounds* and change"
  //   => ["It will cost ", "7 pounds", " and change"]
  const nbspContentPattern = /^(.*?)\*(.*?)\*(.*)$/;
  return (nbspContentPattern.exec(text) || []).filter((s) => s !== text);
}


export default function Chapter({ text }: ChapterProps) {
  const pieces = getPiecesOf(text);

  if (pieces.length < 2) {
    return <p className="intro-chapter">{text}</p>;
  }

  const nbspParts = pieces[1].split(" ");
  return (
    // TODO: refactor all of it into something that returns nbsp'ed
    <p className="intro-chapter">
      {pieces[0]}
      {`${nbspParts[0]}`}&nbsp;{`${nbspParts[1]}`}
      {pieces[2]}
    </p>
  );
}
