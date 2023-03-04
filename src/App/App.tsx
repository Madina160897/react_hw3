import React, { Component } from 'react';
import { ShopList, Header, SearchInput, AddInput } from "../component"
import { IShop } from "../types"
import '../style.css'

interface IAppState {
    shops: IShop[],
    searchText: string
}

export default class App extends Component<{}, IAppState> {

    state = {
        shops: [
            { id: 1, nameShop: "New Yorker", openingTime: "10:00", closingTime: "22:00", remoteness: 100, special: "Не особенный" },
            { id: 2, nameShop: "Timberland", openingTime: "09:00", closingTime: "21:00", remoteness: 500, special: "Особенный" },
            { id: 3, nameShop: "Miniso", openingTime: "10:00", closingTime: "23:00", remoteness: 350, special: "Особенный" },
            { id: 4, nameShop: "Tommy Hilfiger", openingTime: "08:00", closingTime: "21:00", remoteness: 454, special: "Не особенный" },
            { id: 5, nameShop: "Calvin Klein Jeans", openingTime: "08:00", closingTime: "22:00", remoteness: 252, special: "Особенный" },
        ],
        searchText: ''
    }

    onSearch = (value: string) => {
        this.setState({ searchText: value })
    }

    handleDelete = (id: number) => {
        console.log({ id });

        this.setState((state) => {
            const shopsIdx = this.state.shops.findIndex(item => item.id === id)
            const before = state.shops.slice(0, shopsIdx)
            const after = state.shops.slice(shopsIdx + 1)

            return {
                shops: [...before, ...after]
            }
        })
    }

    onAddTask = (nameShop: string, openingTime: string, closingTime: string, remoteness: number, special: string) => {
        this.setState((state) => {
            const newShop: IShop = {
                id: Math.random(),
                nameShop: nameShop,
                openingTime: openingTime,
                closingTime: closingTime,
                remoteness: remoteness,
                special: special
            }
            return {
                shops: [...state.shops, newShop]
            }
        })
    }

    render() {
        const { searchText, shops } = this.state
        const filteredTodos = shops.filter(todo => todo.nameShop.toLowerCase().includes(searchText.toLowerCase()))
        return (
            <div>
                <Header title="Список магазин" />
                <div className='input'>
                    <AddInput onAdd={this.onAddTask} />
                    <SearchInput search={this.state.searchText}
                        onSearch={this.onSearch} />
                </div>
                <ShopList
                    shops={filteredTodos}
                    onDelete={this.handleDelete}
                />
            </div>
        )
    }
};
