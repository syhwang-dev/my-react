import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 현재 경로 밑에 있는 App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
    // {/* 태그처럼 생겼음. 이것이 바로 사용자 정의 태그 // 일반적은 태그는 소문자로 시작 / 리액트 태그는 대문자로 시작 / 사용자정의 태그(뜻: 내가 만든 태그) */}
    // {/* 사용자정의 태그는 반드시 리턴이 있어야 한다. */}
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
