jest.dontMock('../PinterestAnchor');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const shallowRenderer = TestUtils.createRenderer();

// Require the component to test
const PinterestAnchor = require('../PinterestAnchor').default;

describe('PinterestAnchor', () => {

    const validAnchor = (<PinterestAnchor
        href="https://pinterest.com/adamburmister"
        log="test_log"
        className="test-anchor"
        style={{ fontWeight: 'bold' }}>Follow Adam Burmister</PinterestAnchor>);
    let shallowRender;
    let anchor;

    beforeEach(() => {
        anchor = TestUtils.renderIntoDocument(validAnchor);
        shallowRenderer.render(validAnchor);
        shallowRender = shallowRenderer.getRenderOutput();
    });

    it('should render an anchor with child text', () => {
        expect(shallowRender.type).toBe('a');
        expect(shallowRender.props.children).toEqual('Follow Adam Burmister');
    });

    xit('should trigger the click handler when clicked', () => {
        shallowRender.props.onClick = jest.genMockFunction;
        TestUtils.Simulate.click(shallowRender);
        expect(shallowRender.props.onClick).toBeCalled();
    });

});
