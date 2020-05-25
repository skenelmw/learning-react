import React, { Component } from "react"
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: [],
  }
  removeCharacter = i => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((char, j) => {
        return j !== i
      })
    })
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
    render() {
      const { characters } = this.state 
      return (
        <div className="container">
            <Form handleSubmit={this.handleSubmit} />
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      )
    }
}
export default App