import React from 'react';
//import createRoot from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import reportWebVitals from "./reportWebVitals";
//import Library from "./chapter_03/Library";
//import Clock from './chapter_04/Clock';
//import CommentList from "./chapter_05/CommentList";
import NotificationList from './chapter_06/NotificationList';
//const root = ReactDOM.createRoot(document.getElementById('root'));

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<CommentList />);
ReactDOM.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
