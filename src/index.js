import {createRoot} from "react-dom/client"
import "./styles/index.scss"
import App from "./components/App";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)

// ReactDOM.render(<App />, document.getElementById("root"));