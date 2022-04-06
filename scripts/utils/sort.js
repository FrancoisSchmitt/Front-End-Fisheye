
const selectElt = document.getElementById('mySelect');
const listboxCustomt = document.getElementById('listbox-content');



for (let option of selectElt.options) {
    var opt = document.querySelectorAll("option").value;
    opt = selectElt.options;
    option.addEventListener("change", function () {
        for (let option of selectElt.options) {
            if (option === option.innerHTML) {
                selectElt.selectedIndex = option.index;
            }
        }
    });
}
listboxCustomt.addEventListener("change", function (event) {
    event.stopPropagation();
    displayDataMedia();
    initLikes()
});





function sortByTitle(a, b) {
    if (a.title < b.title) {
        return -1;
    }
    if (b.title > b.title) {
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