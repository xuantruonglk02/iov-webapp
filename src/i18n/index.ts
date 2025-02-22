import { createI18n } from 'vue-i18n';
import en from 'src/i18n/locales/en';
import th from 'src/i18n/locales/th';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        th,
    },
});

export default i18n;
