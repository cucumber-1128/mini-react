import { React } from './lib/react'

const log = console.log.bind(console)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.onIncrement = this.onIncrement.bind(this)
        this.state = {
            count: 0,
        }
    }
    onIncrement() {
        this.setState({
            count: this.state.count + 1,
        })
    }
    onDecrement() {
        this.setState({
            count: this.state.count - 1,
        })
    }
    render(props, state) {
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={ () => { this.onDecrement() }}>-</button>
                <p>
                    count: { this.state.count }
                </p>
            </div>
        )
    }
}

export default App