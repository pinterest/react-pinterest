import React from 'react';

import Const from '../util/PinConst';
import i18n from '../util/i18n';
import Util from '../util/PinUtil';

/**
 * @prop {string} (required) type - enum of either 'any' or 'one'
 * 
 */
export default class PinterestBase extends React.Component {

    constructor(props) {
        super(props)
        this.ensureConfig();
        this.debounceInitialLogging();
        i18n.setLang(this.props.lang || 'en');
    }

    /**
     * Only set config data once. This will create the tracking guid and
     * initialize the widget counts.
     */
    ensureConfig() {
        if (!window[Const.GLOBAL]) {
            var config = {
                guid: '',
                initialized: false,
                resolution: window.devicePixelRatio >= 2 ? 2 : 1,
                callbacks: [],
                [Const.COUNT.BUTTON]: 0,
                [Const.COUNT.FOLLOW]: 0,
                [Const.COUNT.PIN_SMALL]: 0,
                [Const.COUNT.PIN_MEDIUM]: 0,
                [Const.COUNT.PIN_LARGE]: 0,
                [Const.COUNT.PROFILE]: 0,
                [Const.COUNT.BOARD]: 0
            };
            for (var i = 0; i < 12; i++) {
                config.guid += Const.GUID_VARS.substr(Math.floor(Math.random() * 60), 1);
            }
            window[Const.GLOBAL] = config;
        }
        this.config = window[Const.GLOBAL];
    }

    /**
     * Wait for the page to settle before logging the widget counts
     */
    debounceInitialLogging() {
        if (!window[Const.GLOBAL].initialized) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                var data = window[Const.GLOBAL];
                data.initialized = true;
                Util.log({
                    [Const.COUNT.BUTTON]: data[Const.COUNT.BUTTON],
                    [Const.COUNT.FOLLOW]: data[Const.COUNT.FOLLOW],
                    [Const.COUNT.PIN_SMALL]: data[Const.COUNT.PIN_SMALL],
                    [Const.COUNT.PIN_MEDIUM]: data[Const.COUNT.PIN_MEDIUM],
                    [Const.COUNT.PIN_LARGE]: data[Const.COUNT.PIN_LARGE],
                    [Const.COUNT.PROFILE]: data[Const.COUNT.PROFILE],
                    [Const.COUNT.BOARD]: data[Const.COUNT.BOARD]
                });
            }, 1000);
        }
    }

    /**
     * Increases the log count for the page, only matters if called
     * before the initial logging call
     * @param {string} type - the type of widget to log
     */
    logCount(type) {
        this.config[type]++;
    }
}
