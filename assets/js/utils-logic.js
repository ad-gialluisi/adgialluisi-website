
AVAILABLE_LANGUAGES = ["en", "it"];
N_LANGUAGES = AVAILABLE_LANGUAGES.length;


function loadFromLocalStorage(identifier, default_val) {
    var v = localStorage.getItem(identifier);
    if (v === null) {
        saveToLocalStorage(identifier, default_val);
        return default_val;
    }
    return JSON.parse(v);
}

function saveToLocalStorage(identifier, value) {
    localStorage.setItem(identifier, JSON.stringify(value));
}

function makeButton(id, funct) {
    let btn = document.createElement("button");
    btn.setAttribute("id", id);
    btn.addEventListener("click", funct);
    return btn;
}

function makeSpan(className, label) {
    let sp = document.createElement("span");
    sp.setAttribute("class", className);
    sp.appendChild(document.createTextNode(label));
    return sp;
}

function makeP(id, label) {
    let p = document.createElement("p");
    p.id = id;
    p.appendChild(document.createTextNode(label));
    return p;
}

function makeHeader(labels) {
    let hd = document.createElement("h4");

    for (let i = 0; i < labels.length; i++) {
        let lang_val = AVAILABLE_LANGUAGES[i];
        let sp = makeSpan("cont-" + lang_val, labels[i]);
        hd.appendChild(sp);
        if (i < labels.length - 1) {
            sp = makeSpan("lang-separator", " - ");
            hd.appendChild(sp);
        }
    }
    return hd;
}