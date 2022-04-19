$(document).ready(() => {
    $(".btn").click(() => {
        redirect();
    });
});

function redirect() {
    /* let links = ["https://forms.gle/WPmGUA2yWdu5Aucy8", "https://forms.gle/amqmnBim7tQFDZZUA", "https://forms.gle/cuFAEfAdV8W56E7Y8", "https://forms.gle/QaGpo9XcBS9pqBph9", "https://forms.gle/Qj68rfKreKLnkwbF8", "https://forms.gle/jKGbNDjMCnpuYHVH8", "https://forms.gle/mmPuV5pLLVBuhxw26", "https://forms.gle/T3LUAMvymuJ4bJrP6", "https://forms.gle/58gu3RFF9jDKdxoa8", "https://forms.gle/7mhNzYhZzJyUGtZi6"];
    let cookie = getCookieIfExists();

    if (cookie == null) {
        let n = getRandomInt(0, 10); //remember to change this when changing links
        writeCookie(n);
        var url = links[n]
    } else {
        var url = links[cookie];
    } */

    var url = "https://forms.gle/e9QTUkNzMUPceWAw8"; //notify sign up link

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