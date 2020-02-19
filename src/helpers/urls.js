const hostname = window && window.location && window.location.hostname

let apiRoot
let pageRedirectRoot

if (hostname === "localhost"){
    apiRoot = "http://localhost:3000/"
    pageRedirectRoot = "http://localhost:3001/"
}
else {
    apiRoot = "https://serene-scrubland-24770.herokuapp.com/"
    pageRedirectRoot = "https://singwithnicky.herokuapp.com/"
}

export const API_ROOT = apiRoot
export const PAGE_REDIRECT_ROOT = pageRedirectRoot