import { Component } from 'react'

function App() {
  return (
    <Counter></Counter>
  )
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0}
  }

  hundlePlusButton = () => {
    this.setState({ count: this.state.count + 1})
  }
  hundleMinusButton = () => {
    this.setState({ count: this.state.count - 1})
  }
  render() {
    console.log(this.state)
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={this.hundlePlusButton}>+1</button>
        <button onClick={this.hundleMinusButton}>-1</button>
      </>
    )
  }
}

export default App;
