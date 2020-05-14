import React, { Component } from "react"
import Table from './Table'

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  removeCharacter = i => {
    const { characters } = this.state
    this.setState({
      characters: characters.filter((char, j) => {
        return j !== i
      })
    })
  }
    render() {
      const { characters } = this.state 
      return (
        <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
      )
    }
}
export default App