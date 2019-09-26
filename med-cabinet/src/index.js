import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
//navbar
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Router>
<App />
</Router>,
document.getElementById('root'));
