import React, { Component } from 'react';
import './card-list.css';

export class CardList extends Component {
  render() {
    return (
      <div className='card-list'>
        {this.props.list.map((l) => {
          const { name, id, email } = l;
          return (
            <div className='card-container' key={l.id}>
              <img alt='monster' src={`https://robohash.org/${id}?set=set2`} />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
