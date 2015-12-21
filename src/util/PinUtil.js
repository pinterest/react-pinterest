const isBrowser = typeof window !== 'undefined';

import { GUID, URL } from './PinConst';

/**
 * Utility function for creating a logging request based on parameter data
 * @param {object} data - key/value pairs of query parameters to log
 */
export function log(data) {
    let uri;
    if (isBrowser) {
        uri = window.location.href;
    }
    let query = `?guid=${GUID}&via=${encodeURIComponent(uri)}`;
    Object.keys(data).forEach(key => query += `&${key}=${encodeURIComponent(data[key])}`);
    loadScript(URL.LOG + query, {});
}

/**
 * Utility function for loading a <script>
 * @param {string} src - the script src
 * @param {object} attributes - attributes to add to the <script>
 */
export function loadScript(src, attributes = {}) {
    if (!isBrowser) return;
    var script = document.createElement('script');
    script.src = src;
    Object.keys(attributes).forEach(key => {
        script[key] = attributes[key];
    });
    script.onload = () => document.body.removeChild(script);
    document.body.appendChild(script);
}

/**
 * Utility function for loading a script with a jsonp callback
 * @param {string} url - the url for the <script> src
 * @param {function} callback - the callback to be called on complete
 */
export function fetch(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            callback(JSON.parse(request.responseText));
        }
    };
    request.send();
}

/**
 * Utility function for extending an object with other objects
 * @param {object} base - the object to extend
 * @param {array} ...args - the objects to do the extending
 * @returns {object} <base> extended
 */
export function extend(base, ...args) {
    args.forEach(arg => {
        if (arg && typeof arg === 'object') {
            Object.keys(arg || {}).forEach(key => {
                base[key] = arg[key];
            });
        }
    });
    return base;
}

/**
 * Allow for server rendering
 * @returns {number} the screen resolution
 */
export function getResolution() {
    try {
        return window.devicePixelRatio >= 2 ? 2 : 1;
    } catch (e) {
        return 1;
    }
}

/**
 * Utility function for autobinding <this> to the function
 * @param {array<string>} args - list of function names to bind
 */
export function bind(context, ...args) {
    args.forEach(fn => context[fn] = context[fn].bind(context));
}
