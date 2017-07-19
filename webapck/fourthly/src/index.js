import _ from 'lodash';

import './style/index.css';


function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Super!'], ' ');

    return element;
}

document.body.appendChild(component());

