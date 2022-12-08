let gimmeButton = document.getElementById("gimme");
let catImgDiv = document.getElementById("catImgDiv");
let typeSel = document.getElementById("typeSel");
let filterSel = document.getElementById("filterSel");


gimmeButton.addEventListener('click', fetchMyCat);

async function fetchMyCat() {
    showSpinner();
    let filter = filterSel.options[filterSel.selectedIndex].value;
    let type = typeSel.options[typeSel.selectedIndex].value;
    let width = document.getElementById("widthInp").value;
    let height = document.getElementById("heightInp").value;

    let url = "https://cataas.com/cat?";

    if (filter != "nofilter"){
        url += "filter=" + filter;
    }
    if (type != "notype"){
        url += "&type=" + type;
    }
    if (width != ""){
        url += "&width=" + width;
    }
    if (height != ""){
        url += "&height=" + height
    }

    console.log(url);
    await fetch(url)
    .then(response => {
        catImgDiv.innerHTML = `<img src="${url}" />`
    })
    .catch(err => console.log(err));
    hideSpinner();
}

function hideSpinner() {
    document.getElementById("spinner")
            .style.display = 'none';
    document.getElementById('gimme')
            .disabled = false;
}

function showSpinner() {
    document.getElementById('spinner')
            .style.display = 'inline-block';
    document.getElementById('gimme')
            .disabled = true;
} 