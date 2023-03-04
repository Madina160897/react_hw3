import React, { Component } from 'react';
import { IShop } from "../../types";
// import './TodoListIteam.css'

interface ITodoListItemPops extends IShop {
    onDeleteClick: () => void
}

export default class TodoListItem extends Component<ITodoListItemPops> {

    render() {

        const { nameShop, openingTime, closingTime, remoteness, special } = this.props;

        return (
            <tr>
                <td>{nameShop}</td>
                <td>{openingTime}</td>
                <td>{closingTime}</td>
                <td>{remoteness}</td>
                <td>{special}</td>
                <td><button onClick={this.props.onDeleteClick}>Delete</button></td>
            </tr>
        )
    }
}
