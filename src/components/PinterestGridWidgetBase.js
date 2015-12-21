import React from 'react';
import ReactDOMServer from 'react-dom/server';

import PinterestBase from './PinterestBase';
import PinterestGrid from './PinterestGrid';
import Anchor from './PinterestAnchor';
import i18n from '../util/i18n';
import { URL } from '../util/PinConst';
import { fetch } from '../util/PinUtil';

const gutter = 2;
const border = 1;
const padding = 10;
const footerHeaderHeight = 48 + 60;

/**
 * This is the base class for the profile/board widgets
 * @prop {number} width - the width of the grid widget
 * @prop {number} height - the height of the grid widget
 * @prop {number} columns - the number of columns in the grid
 */
export default class PinterestGridWidgetBase extends PinterestBase {

    constructor(props) {
        super(props);
        this.state = { pins: [], user: null, board: null };
    }

    /**
     * Fetch the remote data for a grid widget
     */
    componentDidMount() {
        fetch(this.data.fetchURL, response => {
            if (response && response.data && response.data.user) {
                this.setState({
                    user: response.data.user,
                    board: response.data.board,
                    pins: response.data.pins
                });
            } else {
                console.error('Error in fetching Pin:', response);
            }
        });
    }

    /**
     * Get the fixed determined width of the grid elements
     * @returns {number} thumbnail width
     */
    getThumbWidth() {
        const { width, columns } = this.props;
        const availableWidth = width - (padding * 2) - ((columns - 1) * gutter);
        return Math.floor(availableWidth / columns);
    }

    /**
     * Get the fixed determined width of the grid, this is determined by the
     * thumbnail width rather than the absolute widget width because the rounded
     * thumbnail width can make the grid a few pixels too large, messing with
     * the border radius of the grid.
     * @returns {number} grid width
     */
    getGridWidth() {
        const { columns } = this.props;
        return this.getThumbWidth() * columns + (columns - 1) * gutter;
    }

    /**
     * Get the adjusted width/height. We have to remove the padding value
     * to keep the widget itself at <width>/<height>
     * @returns {object} style object
     */
    getGridStyle() {
        const { height, columns } = this.props;
        return {
            width: this.getGridWidth() + 'px',
            height: height - footerHeaderHeight + 'px'
        }
    }

    /**
     * Force the widget to size while waiting for grid to load
     * @returns {object} style object
     */
    getWidgetStyle() {
        return {
            width: this.props.width - (padding * 2) + 'px',
            height: this.props.height - (padding * 2) + 'px'
        }
    }

    /**
     * Create the list of clickable images for the grid. They should
     * each be scaled to fit the width of the grid based on number of
     * columns.
     * @returns {array} A list of JSX objects
     */
    renderImages() {
        const thumbWidth = this.getThumbWidth() + 'px';
        return this.state.pins.map((pin, i) => {
            return (
                <Anchor href={URL.PIN_CLOSEUP + pin.id} log="embed_board_thumb" key={`pin-${i}`}>
                    <img width={thumbWidth} src={pin.images['237x'].url} />
                </Anchor>
            );
        });
    }

    /**
     * Render helper for the header.
     * @returns {JSX} the header JSX
     */
    renderHeader() {
        const {full_name, profile_url, image_small_url} = this.state.user;
        const log = `embed_${this.data.type}_hd`;
        var board_name, board_url;
        if (this.state.board) {
            board_name = this.state.board.name;
            board_url = this.state.board.url;
        }
        return (
            <div className="grid-widget-header">
                <Anchor href={profile_url} log={log}>
                    <img src={image_small_url.replace('_30.jpg', '_60.jpg')} />
                </Anchor>
                <span className="grid-widget-header-text">
                    <Anchor href={profile_url} log={log}>{full_name}</Anchor>
                    { this.state.board && (
                        <Anchor href={URL.PINTEREST + board_url} log={log}>{board_name}</Anchor>
                    )}
                </span>
            </div>
        );
    }

    /**
     * Render helper for the footer follow button
     * @returns {JSX} the footer JSX
     */
    renderFooter() {
        const logo = ReactDOMServer.renderToString(<span className="grid-widget-logo"></span>);
        const log = `embed_${this.data.type}_ft`;
        const text = i18n.translate("Follow On $1", logo);
        const width = { width: this.getGridWidth() - border };
        return (
            <Anchor className="grid-widget-footer" style={width} href={this.data.followURL} log={log} popup="follow">
                <span dangerouslySetInnerHTML={{ __html: text }}></span>
            </Anchor>
        );
    }

    /**
     * Render
     */
    render() {
        const className = `pinterest-widget--grid pinterest-widget--${this.data.type}`;
        return this.state.user && (
            <div className={className} style={this.getWidgetStyle()}>
                { this.renderHeader() }
                <PinterestGrid style={this.getGridStyle()} gutter={gutter} columns={this.props.columns}>
                    { this.renderImages() }
                </PinterestGrid>
                { this.renderFooter() }
            </div>
        );
    }

}

PinterestGridWidgetBase.propTypes = {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    columns: React.PropTypes.number.isRequired
};
