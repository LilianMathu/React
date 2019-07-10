import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return(
        <div>Hello!</div>
    );
}
ReactDOM.render(<Hello />, document.querySelector('#root'));