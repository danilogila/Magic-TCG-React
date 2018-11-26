import React from 'react';
import { Component } from 'react';
import api from '../../services/api'

export default class Card extends Component {
    state = {
        card: {},

    };

    async componentDidMount() {

        const { id } = this.props.match.params; 
        const response = await api.get(`/products/${id}`);
        this.setState({ card: response.data });
    }

    render() {
        const { card } = this.state;

        return <h1>Carta</h1>
    }
}