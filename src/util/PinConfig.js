import Const from './PinConst';

let guid = '';
for (var i = 0; i < 12; i++) {
    guid += Const.GUID_VARS.substr(Math.floor(Math.random() * 60), 1);
}

export default {
    guid: guid,
    [Const.COUNT.BUTTON]: 0,
    [Const.COUNT.FOLLOW]: 0,
    [Const.COUNT.PIN_SMALL]: 0,
    [Const.COUNT.PIN_MEDIUM]: 0,
    [Const.COUNT.PIN_LARGE]: 0,
    [Const.COUNT.PROFILE]: 0,
    [Const.COUNT.BOARD]: 0
};