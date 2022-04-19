/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const selectElt = document.getElementById('mySelect');
const oldSelectSort = document.getElementById('listbox-content');

const newSortButton = document.createElement("button")
oldSelectSort.appendChild(newSortButton)


const newSort = document.createElement("label");
newSortButton.appendChild(newSort)
newSortButton.classList.add("new-listbox");
newSortButton.setAttribute("aria-label", "SortSelected")
newSortButton.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML;

const newOptionOfSelect = document.createElement("div");
newOptionOfSelect.classList.add("select-items", "select-hide");



for (let option of selectElt.options) {
  const newOption = document.createElement("label");
  newOption.setAttribute("tabindex", "0")
  newOption.setAttribute("role", "option")

  newOption.innerHTML = option.innerHTML;
  newOption.addEventListener("click", function () {
    for (let option of selectElt.options) {
      if (option.innerHTML === newOption.innerHTML) {
        selectElt.selectedIndex = option.index;
        newSortButton.innerHTML = newOption.innerHTML;
      }
    }
    newSortButton.click();
  });
  newOption.addEventListener("keydown", function (e) {
    if (e.code === 'Enter') {
      for (let option of selectElt.options) {
        if (option.innerHTML === newOption.innerHTML) {
          selectElt.selectedIndex = option.index;
          newSortButton.innerHTML = newOption.innerHTML;
        }
      }
      newSortButton.click();
    }
  });
  newOptionOfSelect.appendChild(newOption);
}
oldSelectSort.appendChild(newOptionOfSelect);

newSortButton.addEventListener("click", function (e) {
  e.stopPropagation();
  newSortButton.nextSibling.classList.toggle("select-hide");
  newSortButton.classList.toggle("active");

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