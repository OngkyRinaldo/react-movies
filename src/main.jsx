import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HomeProvider } from './context/home.context.jsx';
import { TitleProvider } from './context/dynamicTitle.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <TitleProvider>
                <HomeProvider>
                    <App />
                </HomeProvider>
            </TitleProvider>
        </BrowserRouter>
    </React.StrictMode>
);
