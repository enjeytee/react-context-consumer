import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import App from "./components/App"
import ThemeContext from "./components/themeContext"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContext.Provider value={"dark"}>
        <App />
    </ThemeContext.Provider>
)
