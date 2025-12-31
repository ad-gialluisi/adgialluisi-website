

// Global state
var curr_lang = loadFromLocalStorage("curr_lang", 0);
var langch_btn = null;


function setLangElementsVisibility(className, v) {
    var els = document.querySelectorAll("." + className);
    for (let i = 0; i < els.length; i++) {
        els[i].className = v ? className : className + " hidden";
    }
}


function setSingleLangVisibility(lang_id, v) {
    let lang_val = AVAILABLE_LANGUAGES[lang_id];
    setLangElementsVisibility("cont-lang-" + lang_val, v);
}


function initLanguages() {
        for (let i = 0; i < N_LANGUAGES; i++) {
        setSingleLangVisibility(i, curr_lang === i);
    }
    setLangElementsVisibility("lang-separator", false);
    setLangElementsVisibility("cont-seplang", false);
    langch_btn = document.getElementById("lang-button");
    langch_btn.addEventListener("click", toggleLanguage);

    let next_lang = curr_lang;
    if (next_lang === N_LANGUAGES - 1) {
        next_lang = 0;
    } else {
        next_lang++;
    }

    }


function toggleLanguage(evt) {
    setSingleLangVisibility(curr_lang, false);

    if (curr_lang === N_LANGUAGES - 1) {
        curr_lang = 0;
    } else {
        curr_lang++;
    }
    saveToLocalStorage("curr_lang", curr_lang);

    let next_lang = curr_lang;
    if (next_lang === N_LANGUAGES - 1) {
        next_lang = 0;
    } else {
        next_lang++;
    }

    setSingleLangVisibility(curr_lang, true);
}