import React from 'react';
import ReactDom from 'react-dom';

import Application from './routers';

import '../public/scss/main';
import 'bootstrap'

const mountApp = document.getElementById('root');

ReactDom.render(
    <Application />,
    mountApp
);
