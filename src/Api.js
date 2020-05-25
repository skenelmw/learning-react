import React, { Component } from 'react'

class Api extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res,
                })
            })
    }
    render() {
        const { data } = this.state
    return <ul>{ data.map((entry, i) => <li key={i}>{entry}</li>)}</ul>
    }
}

export default Api