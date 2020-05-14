import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}
const TableBody = ({data, removeCharacter}) => {
  return (
  <tbody>
    {data.map((char, i) => {
      return (
      <tr key={i} >
        <td>{char.name}</td>
        <td>{char.job}</td>
        <td>
          <button onClick={() => removeCharacter(i)}>Deleted!</button>
        </td>
      </tr>
      )
  })}
  </tbody>
  )
}

const Table = props => {
  
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody data={characterData} removeCharacter={removeCharacter} />
    </table>
  )
  
}

export default Table