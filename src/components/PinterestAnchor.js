import React from 'react';

import { POPUP_OPTIONS } from '../util/PinConst';
import { log } from '../util/PinUtil';

/**
 * An <a> tag. Is used to manage click logging and popups.
 * @prop {string} href - the anchor tag's href attribute
 * @prop {string} log - the string to log as <type>
 * @prop {string} className - the string of classes
 * @prop {object} style - the JSX style object
 * @prop {bool} popup - Show url in popup window
 */
export default class Anchor extends React.Component {

    /**
     * Handle click logging and optional popup
     * @param {Event} React event object
     */
    handleClick(evt) {
        const { href } = this.props;
        if (this.props.popup) {
            evt.preventDefault();
            const key = this.props.popup.toUpperCase();
            window.open(href, 'pin' + new Date().getTime(), POPUP_OPTIONS[key]);
        }
        log({ type: this.props.log, href: href });
    }

    render() {
        const { className, style, href } = this.props;
        return (
            <a className={className} style={style} href={href} onClick={this.handleClick.bind(this)} target="_blank">
                {this.props.children}
            </a>
        );
    }
}

Anchor.propTypes = {
    href: React.PropTypes.string.isRequired,
    log: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    style: React.PropTypes.object
};
