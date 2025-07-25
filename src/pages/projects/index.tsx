import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import BeamingSticks from "../../assets/lottie/beaming_sticks.json";
import CornerSticks from "../../assets/lottie/corner_sticks.json";
import DancingCircle from "../../assets/lottie/dancing_circles.json";
import Stones from "../../assets/lottie/stones.json";
import Zigzags from "../../assets/lottie/zigzags.json";

import "./index.css";


const App = () => (
	<div>
		<h1>Projects Page</h1>
		<p>This is the projects page.</p>
	</div>
);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
