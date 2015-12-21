import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/css/pinterest.css';
import { 
    PinItButton,
    PinterestFollowButton,
    PinterestPinWidget,
    PinterestBoardWidget,
    PinterestProfileWidget,
    PinterestGrid
} from '../../src/main.js'

/**
 * Some helper stuff to let you use query parameters for the pin sizes
 * i.e. ?size=medium or ?size=large
 */
const size = location.search ? location.search.split('=')[1] : 'small';
const sizeMap = { small: 237, medium: 345, large: 600 };
const gutter = 10;
const width = Math.floor(1400 / (sizeMap[size] + gutter)) * (sizeMap[size] + gutter);
const gridStyle = { width: width + 'px' };

/**
 * An example component utilizing some of the freaking sweet Pinterest
 * widget/button components. 
 */
class Examples extends React.Component {
    render () {
        return <div>
            <div>
                <PinItButton type="one" media="https://goo.gl/zFFBUK" url="https://goo.gl/hQmcWP" description="Example Stuff"/>
                <PinItButton type="one" pin="356417757988637350" />
                <PinItButton type="any" />
                <PinItButton type="any" color="white" />
                <PinItButton type="any" color="white" large={true}/>
                <PinItButton type="any" color="red" />
                <PinItButton type="any" color="red" large={true} />
                <PinItButton type="any" round={true} />
                <PinItButton type="any" round={true} large={true} />
                <PinItButton type="any" />
                <PinterestFollowButton user="pinterest">Pinterest</PinterestFollowButton>
                <PinterestFollowButton board="pinterest/official-news">Official News</PinterestFollowButton>
            </div>
            <div>
                <PinterestBoardWidget board="pinterest/official-news" width={300} height={300} columns={5} />
                <PinterestProfileWidget user="pinterest" width={300} height={300} columns={5} />
            </div>
            <PinterestGrid style={gridStyle} gutter={gutter}>
                <PinterestPinWidget size={size} pin="530158187357124374" />
                <PinterestPinWidget size={size} pin="356417757989339525" />
                <PinterestPinWidget size={size} pin="356417757986524080" />
                <PinterestPinWidget size={size} pin="356417757986724718" />
                <PinterestPinWidget size={size} pin="356417757988564358" />
                <PinterestPinWidget size={size} pin="356417757988206582" />
                <PinterestPinWidget size={size} pin="202802789445693269" />
                <PinterestPinWidget size={size} pin="89438742571585339" />
                <PinterestPinWidget size={size} pin="232850243203755319" />
                <PinterestPinWidget size={size} pin="137008013639035297" />
                <PinterestPinWidget size={size} pin="264797653065817757" />
                <PinterestPinWidget size={size} pin="144467100519920447" />
            </PinterestGrid>
        </div>;
    }
}

ReactDOM.render(<Examples />, document.getElementById('app'));
