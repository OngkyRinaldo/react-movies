import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HomeProvider } from './context/home.context.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <HomeProvider>
                    <App />
                </HomeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
