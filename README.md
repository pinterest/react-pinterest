## react-pinterest

A collection of official Pinterest button/widget components

![](https://raw.githubusercontent.com/zackargyle/react-pinterest/master/examples/images/demo.png)

## Install

``` js
// TODO
npm install react-pinterest --save
```

The full list of available widgets are:
  - [PinItButton](#PinItButton)
  - PinterestFollowButton
  - PinterestPinWidget
  - PinterestProfileWidget
  - PinterestBoardWidget
  - PinterestGrid

## PinItButton
General Props
 * @prop {string}  type - enum of { 'any', 'one' }: default 'any'
 * @prop {string}  color - enum of { red, white, grey }: default grey
 * @prop {boolean} large - is large sized button: default false
 * @prop {boolean} round - is circular button: default false

For type="one" you can either repin or create a new Pin
 *      @prop {string} pin - the id of the Pin to `repin`
 *      @prop {string} media - the image url of the Pin to create
 *      @prop {string} url - the link back of the Pin to create
 *      @prop {string} description - the description of the Pin to create

Use: 
``` js
import { PinItButton } from 'react-social-buttons';

// To create a Pin one Pin It button
<PinItButton type="one" media="https://goo.gl/zFFBUK" url="https://goo.gl/hQmcWP" description="Example Stuff"/>

// To Create a repin Pin It button
<PinItButton type="one" pin="356417757988637350" />

// To Create a Pin any Pin It Button: opens the image picker overlay
<PinItButton type="any" />
<PinItButton type="any" color="white" />
<PinItButton type="any" color="white" large={true}/>
<PinItButton type="any" color="red" />
<PinItButton type="any" color="red" large={true} />
<PinItButton type="any" round={true} />
<PinItButton type="any" round={true} large={true} />
```

## PinterestFollowButton
General Props: choose one or the other, favors board
 * @prop {string} board - the board slug of the board to follow (<username>/<board_name>)
 * @prop {string} user - the username of the user to follow (<username>/<board_name>)

Use:
``` js
import { PinterestFollowButton } from 'react-social-buttons';

// To create a board follow button
<PinterestFollowButton board="pinterest/official-news">Official News</PinterestFollowButton>

// To create a profile follow button
<PinterestFollowButton user="pinterest">Pinterest</PinterestFollowButton>
```

## PinterestPinWidget
General Props: required=pin
 * @prop {string} pin - the id of the Pin to display
 * @prop {string} size - enum of { small, medium, large }: default: small
 * @prop {string} lang - language code for Pin: default: en
 
Use:
``` js
import { PinterestPinWidget } from 'react-social-buttons';

// Pin Widgets default to small
<PinterestPinWidget pin="530158187357124374" />
<PinterestPinWidget size="medium" pin="530158187357124374" />
<PinterestPinWidget size="large" pin="530158187357124374" />
```

## PinterestBoardWidget
General Props: required=board,width,height,columns
 * @prop {string} board - the board slug of the board (<username>/<board_name>)
 * @prop {number} width - the width of the board widget
 * @prop {number} height - the height of the board widget
 * @prop {number} columns - the number of columns in the grid

Use:
``` js
import { PinterestBoardWidget } from 'react-social-buttons';

<PinterestBoardWidget board="pinterest/official-news" width={300} height={300} columns={5} />
```

## PinterestProfileWidget
General Props: required=user,width,height,columns
 * @prop {string} user - the username of the profile
 * @prop {number} width - the width of the profile widget
 * @prop {number} height - the height of the profile widget
 * @prop {number} columns - the number of columns in the grid

Use:
``` js
import { PinterestProfileWidget } from 'react-social-buttons';

<PinterestProfileWidget user="pinterest" width={300} height={300} columns={5} />
```

## PinterestGrid
General Props: required=none
 * @prop {string} gutter - the margin between grid elements
 * @prop {string} columns - the number of columns to use in the grid, if unspecified
 *          it will guess based on the width of the first grid element

Use:
``` js

import { PinterestGrid, PinterestPinWidget } from 'react-social-buttons';

<PinterestGrid gutter={gutter}>
    <PinterestPinWidget pin="530158187357124374" />
    <PinterestPinWidget pin="356417757989339525" />
    <PinterestPinWidget pin="356417757986524080" />
    <PinterestPinWidget pin="356417757986724718" />
    <PinterestPinWidget pin="356417757988564358" />
    <PinterestPinWidget pin="356417757988206582" />
    <PinterestPinWidget pin="202802789445693269" />
    <PinterestPinWidget pin="89438742571585339" />
    <PinterestPinWidget pin="232850243203755319" />
    <PinterestPinWidget pin="137008013639035297" />
    <PinterestPinWidget pin="264797653065817757" />
    <PinterestPinWidget pin="144467100519920447" />
</PinterestGrid>

```
## Running the example

    cd examples; node server.js

Then open `http://localhost:3000`

Try adding a query param to change the PinterestPinWidget size `?size=medium` or `?size=large`

## License
[MIT](http://isekivacenz.mit-license.org/)

## Notes
``` js
/* TODO
  - use PinterestBase to handle href click logging
  - internationalize all the thingz (www -> domain)
  - <PinitHoverButton /> extend from PinitButton?
  - Extract out global "window" object
*/
```
