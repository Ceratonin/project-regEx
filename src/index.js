import {createRoot} from "react-dom/client"
import "./styles/styles123.scss"
import App from "./components/App";

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App/>)

// ReactDOM.render(<App />, document.getElementById("root"));