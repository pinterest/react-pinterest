
import React from 'react';

import PinterestBase from './PinterestBase';
import Anchor from './PinterestAnchor';
import { GUID, COUNT_TYPES } from '../util/PinConst';
import Util from '../util/PinUtil';

/**
 * This is the classic Pinterest follow button, for either a user or a board.
 *
 * <PinterestFollowButton board="zackargyle/travel-ideas" />
 *
 * @prop {string} board - the board slug of the board to follow (<username>/<board_name>)
 * @prop {string} user - the username of the user to follow (<username>/<board_name>)
 */
export default class PinterestFollowButton extends PinterestBase {

    constructor(props) {
        super(props);
        if (!props.board && !props.user) {
            throw 'PinterestFollowButton requires either a <board> slug or a <user> name.';
        }
        this.logCount(COUNT_TYPES.FOLLOW);
    }

    /**
     * Render method. Deviates only in the href for either a board or user
     */
    render() {
        let href;
        if (this.props.board) {
            href = `https://www.pinterest.com/${this.props.board}/follow/?guid=${GUID}`;
        } else {
            href = `https://www.pinterest.com/${this.props.user}/pins/follow/?guid=${GUID}`
        }
        return (
            <Anchor className="pinterest-follow-button" href={href} log="button_follow" popup="follow">
                <i></i>
                {this.props.children}
            </Anchor>
        );
    }

}

PinterestFollowButton.propTypes = {
  board: React.PropTypes.string,
  user: React.PropTypes.string
};

PinterestFollowButton.defaultProps = {
    board: undefined,
    user: undefined
};
