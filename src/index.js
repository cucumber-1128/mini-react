import { React } from './lib/react'
import ReactDOM from "./lib/react-dom"
import App from './App'

const log = console.log.bind(console)

const __main = () => {
    let root = document.getElementById('root')
    ReactDOM.render(<App />, root)

    // let r = React.createElement(App, null)
    // ReactDOM.render(r, root)
}

__main()