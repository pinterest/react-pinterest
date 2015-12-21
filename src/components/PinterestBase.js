import React from 'react';

import { Counts } from '../util/PinConfig';
import { COUNT_TYPES } from '../util/PinConst';
import i18n from '../util/i18n';
import { log } from '../util/PinUtil';

/**
 * @prop {string} (required) type - enum of either 'any' or 'one'
 *
 */
export default class PinterestBase extends React.Component {

    constructor(props) {
        super(props)
        this.debounceInitialLogging();
        i18n.lang = this.props.lang;
    }

    /**
     * Wait for the page to settle before logging the widget counts
     */
    debounceInitialLogging() {
        if (!PinterestBase.initialized) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                PinterestBase.initialized = true;
                log({
                    [COUNT_TYPES.BUTTON]: Counts.BUTTON,
                    [COUNT_TYPES.FOLLOW]: Counts.FOLLOW,
                    [COUNT_TYPES.PIN_SMALL]: Counts.PIN_SMALL,
                    [COUNT_TYPES.PIN_MEDIUM]: Counts.PIN_MEDIUM,
                    [COUNT_TYPES.PIN_LARGE]: Counts.PIN_LARGE,
                    [COUNT_TYPES.PROFILE]: Counts.PROFILE,
                    [COUNT_TYPES.BOARD]: Counts.BOARD
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
        Counts[type]++;
    }
}
