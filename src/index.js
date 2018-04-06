import React from 'react';
import ReactDOM from 'react-dom';
import  'react-bootstrap';
import './css/index.css';
//import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
