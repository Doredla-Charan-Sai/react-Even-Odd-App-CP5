// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <h1 className="main-head">Count {count}</h1>
          <p className="even-or-odd">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button type="button" className="btn" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="note-para">
            *Increase By Random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
