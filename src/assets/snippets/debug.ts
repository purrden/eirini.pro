type DebugKind = "data_fetch"
type Outcome = "success" | "failure"

type DebugOptions = {
  kind: DebugKind;
  outcome: Outcome;
  message?: string;
  value?: any;
  error?: Error;
  url?: string; // Optional URL for the request
}
let debugRunningNumber = 1;

export default function debug(debugOptions: DebugOptions) {

  if (!(import.meta.env.DEV && import.meta.env.DEV)) {
    console.info("For debugging, set `DEBUG_MODE=true` in your .env file.");
    return;
  }

  const { kind, outcome, message, value, error, url } = debugOptions;
  let title = "hello human, let's investigate this together";
  let content = "";

  switch (kind) {
    case "data_fetch":
      title = `Data Fetch - ${outcome}`;
      break;
    default:
      title = `Debug - ${kind} - ${outcome}`;
  };

  if (message) {
    content += `Message:   ${message}\n`;
  }
  if (value) {
    content += `Value:     ${JSON.stringify(value, null, 2)}\n`;
  }
  if (error) {
    content += `Error:     ${error.message}\n`;
  }
  if (url) {
    content += `URL:       ${url}\n`;
  }


  console.log(`=============== [ ${debugRunningNumber} ] ================`);
  console.log(`${title}`);
  console.log(`${content}`);
  console.log(`__________________________________________`);

  debugRunningNumber += 1;
}
