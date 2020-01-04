import React from 'react';
import ReactDom from 'react-dom';

import './index.scss';
import { Desktop } from './views';

const ROOT = document.querySelector('#app');

ReactDom.render(<Desktop />, ROOT);
