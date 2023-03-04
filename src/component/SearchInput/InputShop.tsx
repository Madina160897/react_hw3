import React, { Component } from 'react'

interface ISearchInputProps {
  search: string
  onSearch: (value: string) => void
}

export default class InputShop extends Component <ISearchInputProps> {

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <input value={this.props.search}
        onChange={(e) => this.props.onSearch( e.target.value)}/>
      </div>
    )
  }
}
