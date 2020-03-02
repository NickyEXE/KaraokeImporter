const hostname = window && window.location && window.location.hostname

let apiRoot
let pageRedirectRoot
let websocketRoot

if (hostname === "localhost"){
    apiRoot = "http://localhost:3000/"
    pageRedirectRoot = "http://localhost:3001/"
    websocketRoot = "http://localhost:3000/socket"
}
else {
    apiRoot = "https://serene-scrubland-24770.herokuapp.com/"
    pageRedirectRoot = "https://singwithnicky.herokuapp.com/"
    websocketRoot = "wss://serene-scrubland-24770.herokuapp.com/cable"
}

export const API_ROOT = apiRoot
export const PAGE_REDIRECT_ROOT = pageRedirectRoot
export const WEBSOCKET_ROOT = websocketRoot