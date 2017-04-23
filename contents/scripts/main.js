import React from 'react';
import ReactDOM from 'react-dom';
import WorkerForm from './WorkerForm';
import RecruiterForm from './RecruiterForm';

window.WorkerForm = WorkerForm;
window.RecruiterForm = RecruiterForm;
window.renderApp = function(rootComponent, element){
  ReactDOM.render(React.createElement(rootComponent), element);
};