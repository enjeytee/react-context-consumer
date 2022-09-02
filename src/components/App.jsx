import React from "react"
import Header from "./Header"
import Button from "./Button"
import ThemeContext from "./themeContext"

function App() {
    return (
        <div>
            <Header />
            <ThemeContext.Consumer>
                {theme => (
                    <Button theme={theme}></Button>
                )}
            </ThemeContext.Consumer>
            <Button theme='light'/>
        </div>
    )
}

export default App