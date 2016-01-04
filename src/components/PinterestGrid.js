import React from 'react';
import ReactDOM from 'react-dom';

import PinterestBase from './PinterestBase';
import { extend } from '../util/PinUtil';

/**
 * This is the classic Pinterest "masonry" grid. It lays out all of the
 * child nodes in columns, fitting them into the shortest available
 * column for each child.
 *    *** GOTCHA ***
 * If the child component is a custom React component, it must apply its
 * <style> prop to the root node of the component.
 */
export default class PinterestGrid extends PinterestBase {

    constructor(props) {
        super(props);
        this.state = { styles: [] };
    }

    componentDidMount() {
        if (this.props.children.length) {
            this.layout();
        }
    }

    componentDidUpdate() {
        this.layout();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.children.length ||
            (this.props.children.length !== nextProps.children.length) ||
            (this.state.styles.length !== nextState.styles.length)
        );
    }

    /**
     * Build a style attribute based on passed in styles
     * and the opacity signifying readiness
     * @returns {object} style key/value map
     */
    getStyle() {
        return extend({
            opacity: this.state.styles.length ? 1 : 0
        }, this.props.style);
    }

    /**
     * Find which column is the shortest
     * @param {array} a list of column heights
     * @returns {number} the index of the column to use
     */
    getShortestColumn(columns) {
        const shortest = columns.reduce((smallest, columnHeight) => {
            return columnHeight < smallest ? columnHeight : smallest;
        });
        return columns.indexOf(shortest);
    }

    /**
     * Look at the root node and/or its parent, and determine
     * how many columns we can fit.
     * @returns {number} the number of columns to use
     */
    getColumnCount() {
        if (this.props.columns) {
            return this.props.columns;
        } else {
            const rootNode = ReactDOM.findDOMNode(this.refs.root);
            const rootWidth = rootNode.offsetWidth || rootNode.parentNode.offsetWidth;
            const childNode = ReactDOM.findDOMNode(this.refs['child-0']);
            const childWidth = childNode.offsetWidth;
            return Math.floor(rootWidth / (childWidth + this.props.gutter));
        }
    }

    /**
     * Wait for children to render, and then determine each element's
     * absolute positioning within the grid
     * @returns {Promise}
     */
    layout() {
        this.waitForChildren().then(() => {
            const columnCount = this.getColumnCount();
            const gutter = this.props.gutter;
            const nodeWidth = ReactDOM.findDOMNode(this.refs['child-0']).offsetWidth;
            let columnHeights = Array.apply(null, Array(columnCount)).map(x => 0);
            const styles = this.props.children.map((child, i) => {
                const node = ReactDOM.findDOMNode(this.refs[`child-${i}`]);
                const columnIndex = this.getShortestColumn(columnHeights);
                const top = columnHeights[columnIndex];
                const left = columnIndex * (nodeWidth + gutter);
                columnHeights[columnIndex] += node.offsetHeight + gutter;
                return {
                    position: 'absolute',
                    top: `${top}px`,
                    left: `${left}px`
                };
            });
            this.setState({ styles });
        });
    }

    /**
     * Wait for all children to have been rendered
     * @returns {Promise}
     */
    waitForChildren() {
        return new Promise(resolve => {
            var interval = setInterval(() => {
                const ready = this.props.children.every((child, i) => {
                    const node = ReactDOM.findDOMNode(this.refs[`child-${i}`]);
                    return ReactDOM.findDOMNode(this.refs[`child-${i}`]);
                });
                if (ready) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });
    }

    /**
     * Build out the child nodes with the additional style and ref attributes
     * @returns {array} a list of ready-to-render child nodes
     */
    getUpdatedChildren() {
        return React.Children.map(this.props.children, (child, i) => {
            const style = child.props.style || {};
            return React.cloneElement(child, {
                ref: `child-${i}`,
                style: extend({}, this.state.styles[i], child.props.style)
            });
        });
    }

    /**
     * Render the children absolutely positioned within parent
     */
    render() {
        return (
            <div ref="root" className="pinterest-grid" style={this.getStyle()}>
                { this.getUpdatedChildren() }
            </div>
        );
    }

}

PinterestGrid.propTypes = {
    gutter: React.PropTypes.number
};

PinterestGrid.defaultProps = {
    gutter: 0
};
