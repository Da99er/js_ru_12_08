import React from 'react';
import { render } from 'react-dom';
import { articles } from './fixtures';

import Container from './components/Container';

render(<Container articles = {articles} />, document.getElementById('container'))