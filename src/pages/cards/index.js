import React from 'react';
import { Component } from 'react';
import api from '../../services/api'

export default class Card extends Component {
    state = {
        card: {},

    };

    async componentDidMount() {

        const { id } = this.props.match.params;
        console.log(id);
        const response = await api.get(`/cards/${id}`);
        console.log(response.data.card)
        this.setState({ card: response.data.card });
    }

    render() {
        const { card }   = this.state;
        console.log(card)
        return (
            <h1>{card.text}</h1>
        );
    }
}