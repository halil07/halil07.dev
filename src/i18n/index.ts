import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import tr from './locales/tr';
import en from './locales/en';

export const defaultNS = 'translation';
export const resources = {tr, en};

const preferredLanguage = 'tr';
const storedLanguage = localStorage.getItem('language');

const i18 = i18n.use(initReactI18next);
i18.init({
    resources,
    defaultNS,
    lng: storedLanguage || preferredLanguage,
});

export default i18n;
