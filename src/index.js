import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { IntlProvider, addLocaleData } from 'react-intl';

import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

addLocaleData([...locale_en, ...locale_de]);

const messages = {
    'de': messages_de,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
    <IntlProvider  locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>, 
    document.getElementById('root')
);

registerServiceWorker();

