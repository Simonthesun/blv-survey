$(document).ready(() => {
    $(".btn").click(() => {
        redirect();
    });
});

function redirect() {
    let links = ["https://twitter.com", "https://reddit.com", "https://facebook.com", "https://instagram.com", "https://google.com"];
    let cookie = getCookieIfExists();

    if (cookie == null) {
        let n = getRandomInt(0, 5);
        writeCookie(n);
        var url = links[n]
    } else {
        var url = links[cookie];
    }

    location.assign(url);
}

function getCookieIfExists() {
    let n = document.cookie
        .split('; ')
        .find(row => row.startsWith('n='))

    if (n == undefined) {
        return null;
    } else {
        return n.split("=")[1];
    }
}

function writeCookie(n) {
    document.cookie = "n=" + String(n);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}