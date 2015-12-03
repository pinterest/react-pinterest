import React from 'react';

import Config from '../util/PinConfig';
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
        this.debounceInitialLogging();
        i18n.setLang(this.props.lang || 'en');
    }

    /**
     * Wait for the page to settle before logging the widget counts
     */
    debounceInitialLogging() {
        if (!Config.initialized) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                Config.initialized = true;
                Util.log({
                    [Const.COUNT.BUTTON]: Config[Const.COUNT.BUTTON],
                    [Const.COUNT.FOLLOW]: Config[Const.COUNT.FOLLOW],
                    [Const.COUNT.PIN_SMALL]: Config[Const.COUNT.PIN_SMALL],
                    [Const.COUNT.PIN_MEDIUM]: Config[Const.COUNT.PIN_MEDIUM],
                    [Const.COUNT.PIN_LARGE]: Config[Const.COUNT.PIN_LARGE],
                    [Const.COUNT.PROFILE]: Config[Const.COUNT.PROFILE],
                    [Const.COUNT.BOARD]: Config[Const.COUNT.BOARD]
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
        Config[type]++;
    }
}
