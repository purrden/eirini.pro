import { goBack } from "@/assets/snippets/navigation";
import "./BackButton.css";

export default function BackButton() {
  return (
    <div className="centered-column">
      <button onClick={goBack} className="back-button">Back</button>
    </div>
  );
}
