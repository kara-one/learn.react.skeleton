import Card from './Card';
import React from 'react';

const CardList = ({ list }) => {
    return (
        <ul className="list">
            {list.items.map((item, index) => {
                return <Card key={index} item={item} channel={list.channel} />;
            })}
        </ul>
    );
};

export default CardList;
