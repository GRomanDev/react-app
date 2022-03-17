import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const text = 'Hellow everyone!'
const elem = (
    <div>
        <h2>{text}</h2>
        <input type="text" />
        <button>click</button>
    </div>
)

ReactDOM.render(
    elem,
    document.getElementById('root')
);