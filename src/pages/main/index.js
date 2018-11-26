import React from 'react';
import { Component } from 'react';
import api from '../../services/api';
import './style.css';

import { Link } from 'react-router-dom';

export default class Main extends Component{
    state  = {
        cardsList: [],
        cardInfo: {},
        page: 1,
    }

    componentDidMount() {
        this.loadCards();
    }

    loadCards = async (page = 1) => {
        const response = await api.get(`/cards?page=${page}`);

        const { cards, ...cardInfo } = response.data

        this.setState({ cardsList: cards, cardInfo, page });
        console.log(response.data.cards);
    };

    nextPage = () => {
        const { page, cardInfo} = this.state;

        if(page === 374) return;

        const pageNumber = page + 1;
        console.log(pageNumber);
        this.loadCards(pageNumber);
    }

    prevPage = () => {

    }

    render() {
        const { cardsList, page } = this.state;

        return (
            <main className="main-wrapper">
                <div className="card-list">
                {cardsList.map( card => (
                    <article key={card.multiverseid}>
                        <strong className="card-title">{card.name}</strong>
                        <p>{`Number: #${card.number}`}</p>
                        <p>{`Rarity: #${card.rarity}`}</p>
                        <div className="crop-wrapper">
                            <img className="card-image" srcSet={card.imageUrl} />
                        </div>

                        <Link to={`/cards/${card.number}`}>Detalhes</Link>
                    </article>
                ))}

                </div>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === 374} onClick={this.nextPage}>Proximo</button>
                </div>
            </main>
        )
    }
}