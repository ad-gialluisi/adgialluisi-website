
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