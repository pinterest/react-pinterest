import React from 'react';

import PinterestGridWidgetBase from './PinterestGridWidgetBase';
import Const from '../util/PinConst';

/**
 * Pinterest Profile Widget.
 *
 * <PinterestProfileWidget user="zackargyle" />
 *
 * @prop {string} user - the username of the profile
 * @prop {number} width - the width of the profile widget
 * @prop {number} height - the height of the profile widget
 * @prop {number} columns - the number of columns in the grid
 */
export default class PinterestProfileWidget extends PinterestGridWidgetBase {

    constructor(props) {
        super(props);
        this.data = {
            type: 'user',
            fetchURL: `${Const.URL.PROFILE}${props.user}/pins/?base_scheme=http`,
            followURL: `https://www.pinterest.com/${props.user}/pins/follow/?guid=ZEtR27kXo22a`
        }
        this.logCount(Const.COUNT.PROFILE);
    }

}

PinterestProfileWidget.propTypes = {
    user: React.PropTypes.string.isRequired
};
