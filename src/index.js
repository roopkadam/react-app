import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
        <div class="container">
            <p>Built.io joins Software AG! Read all about the news.</p>
            <a class="cta" href="#" id="ribbon-info">Link</a>
            <i class="fa fa-close icon-cancel" id="close"></i>
        </div>,
  document.getElementById('ribbon-div')
);

ReactDOM.render(
  <div class="col">
     <p>Communication section</p>
  </div>,
document.getElementById('communication-div')
);


