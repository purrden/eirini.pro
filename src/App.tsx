import "./App.css";
const indexes = Array(4).fill(0);
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Player } from "@lottiefiles/react-lottie-player";

const animation = {
  houseAmongLeavesAnimation: {
    path: "./lottie/house_among_leaves.json",
  },
  peoplePlantingTogether: {
    path: "./lottie/people_planting_together.json",
  },
};

function App() {
  return (
    <div
      className="wrapper"
      style={
        {
          // backgroundColor: "#b56767",
          // position: "absolute",
          // width: "100%",
          // height: "100%",
        }
      }
    >
      {/* <svg>
        <filter id="noise" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence baseFrequency={0.39} />
          <feColorMatrix
            type="matrix"
            values="0.3 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0.4 0"
          />
        </filter>

        <rect x="0" y="0" width="100%" height="100%" filter="url(#noise)" />
      </svg>

      <div>
        {indexes.map((_, i) => {
          console.log("pean");
          return (
            <div key={`lottie-a-${i + 1}`}>
              <h1>ANIMA: {i + 1}</h1>(
              <Player
                style={{ width: 100, height: 100 }}
                src={`./lottie/a${i + 1}.json`}
                loop
                autoplay
              ></Player>
              );
            </div>
          );
        })} */}
      {/* </div> */}
    </div>
  );
}

export default App;
