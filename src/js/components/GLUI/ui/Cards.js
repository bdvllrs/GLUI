import React from 'react';

export const Cards = (props) => (
    <div className="cards">
        {props.children}
    </div>
);

export const Card = (props) => (
    <div className="card">
        <div className="card-heading">{props.title}</div>
        <div className="card-content">
            {props.children}
        </div>
        {props.list ?
            <ul className="card-list">
                {props.list}
            </ul>
            : null}
    </div>
);
