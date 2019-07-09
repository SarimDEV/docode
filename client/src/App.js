import React, {Component} from 'react'
import axios from 'axios'
import Nav from './components/Nav'


class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      tasks: []
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  componentDidMount() {
    axios("tasks")
      .then(res => {
        this.setState({
          tasks: res.data
        })
      })
  }


  render() {
    return(
      <div>
        <Nav />
      </div>
    )
  };
}

export default App;