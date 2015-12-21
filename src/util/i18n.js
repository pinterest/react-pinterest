import { DEFAULT_LANGUAGE, I18N_DICTIONARY } from './PinConst';

export class I18n {

    /**
     * @property
     * @type {string} The currently set language
     */
    get lang() {
        return this._lang;
    }

    /**
     * If the lang is supported (found has a key in Strings), set new lang.
     * @property
     * @param {string} _lang - the language code to set
     */
    set lang(lang) {
        if (this.dictionary.hasOwnProperty(lang)) {
            this._lang = lang;
        }
    }

    /**
     * @property
     * @type {Object} map of languages and strings
     */
    get dictionary() {
        return this._dictionary;
    }

    /**
     * @property
     * @param  {object} dictionary
     */
    set dictionary(dictionary) {
        this._dictionary = dictionary;
    }

    /**
     * Create a new i18n class to translate strings
     * @param {Object} dictionary
     * @param {string} language Initial language for the dictionary
     */
    constructor(dictionary, language) {
        this._lang = language || DEFAULT_LANGUAGE;
        this._dictionary = dictionary;
    }

    /**
     * This is a wrapper for translating strings. It provides simple
     * interpolation via "test $1 $2". Each $index will be replaced
     * with the argument at $index.
     *
     * @param {string} key - the string to translate
     * @param {string} ...args - the list of arguments to use in interpolation
     * @returns {string} the translated/interpolated string
     */
    translate(key, ...args) {
        return this.dictionary[this.lang][key].replace(/\$([1-9])/g, (match, index) => {
            return args[index - 1] || match;
        });
    }
}

const singleton = new I18n(I18N_DICTIONARY, DEFAULT_LANGUAGE)

export default singleton;
