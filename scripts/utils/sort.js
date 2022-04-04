

function sortByTitle(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
    }
    if (b.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
    }
    return 0;
}

function sortByLikes(a, b) {
    return b.likes - a.likes;
}

function sortByDate(a, b) {
    if (a.date > b.date) {
        return -1;
    }
    if (b.date < b.date) {
        return 1;
    }
    return 0;
}