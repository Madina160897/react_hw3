import React, { Component, ChangeEvent } from 'react'

interface IAddInputProps {
    onAdd: (nameShop: string, openingTime: string, closingTime: string, remoteness: number, special: string) => void
}

export default class AddInput extends Component<IAddInputProps> {

    state = {
        nameShop: '',
        openingTime: '',
        closingTime: '',
        remoteness: 0,
        special: ''
    }

    handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            nameShop: event.target.value,
        })
    }

    handleChangeOpen = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            openingTime: event.target.value,
        })
    }

    handleChangeClose = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            closingTime: event.target.value,
        })
    }

    handleChangeRemteness = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            remoteness: event.target.value,
        })
    }

    handleChangeSpecial = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            special: event.target.value
        })
    }

    onSumbit = () => {
        this.props.onAdd(this.state.nameShop, this.state.openingTime, this.state.closingTime, this.state.remoteness, this.state.special);
        this.setState({ nameShop: '', openingTime: '', closingTime: '', remoteness: '', special: '' })
    }

    render() {
        return (

            <div className='add-input'>
                <div className='name-input'>
                    <b>Название магазина</b>
                    <input type="text"
                        value={this.state.nameShop}
                        onChange={this.handleChangeName} />
                </div>
                <div className='name-input'>
                    <b>Время открытия</b>
                    <input type="text"
                        value={this.state.openingTime}
                        onChange={this.handleChangeOpen} />
                </div>
                <div className='name-input'>
                    <b>Времия закрытия</b>
                    <input type="text"
                        value={this.state.closingTime}
                        onChange={this.handleChangeClose} />
                </div>
                <div className='name-input'>
                    <b>Удаленность</b>
                    <input type="number"
                        value={this.state.remoteness}
                        onChange={this.handleChangeRemteness} />
                </div>
                <div className='name-input'>
                    <b>Важность</b>
                    <input type="text"
                        value={this.state.special}
                        onChange={this.handleChangeSpecial} />
                </div>
                <button onClick={this.onSumbit}>Add</button>
            </div>

        )
    }
}
