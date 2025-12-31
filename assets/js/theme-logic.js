var THEME_DEFAULT = 0;
var THEME_OLD = 1;
var THEME_DARK = 2;
var THEME_NONE = 3;


var thm_pref = 0;
var style_list = [];
var themech_btn= null;

var theme_colors = ["#B4D3E7", "#4B787C", "#004D75", "white"];


// Function used to avoid any kind of confusion
// disabled = false -> enabled = true
// disabled = true -> enabled = false
// Kinda confusing, isn't it?
function setStyleSheetEnabled(styleSheet, v) {
    styleSheet.disabled = !v;
}

function isStyleSheetEnabled(styleSheet) {
    return !styleSheet.disabled;
}

function collectStyleSheets() {
    styles_structure = document.styleSheets[0];
    styles_default = document.styleSheets[1];
    styles_old = document.styleSheets[2];
    styles_dark = document.styleSheets[3];
}

function setTheme(v) {
    setStyleSheetEnabled(styles_default, v === THEME_DEFAULT);
    setStyleSheetEnabled(styles_old, v === THEME_OLD);
    setStyleSheetEnabled(styles_dark, v === THEME_DARK);
    setStyleSheetEnabled(styles_structure, v !== THEME_NONE);

    let nv = v + 1;
    if (nv > THEME_NONE) {
        nv = THEME_DEFAULT;
    }

    themech_btn.style.background = theme_colors[nv];
}



function getCurrentTheme() {
    style_list = [styles_default, styles_old, styles_dark, styles_structure];

    for (let i = 0; i < style_list.length; i++) {
        if (isStyleSheetEnabled(style_list[i])) {
            return i;
        }
    }

    return THEME_NONE;
}



function toggleTheme(evt) {
    thm_pref = getCurrentTheme();
    if (thm_pref < THEME_NONE) {
        thm_pref++;
    } else {
        thm_pref = 0;
    }
    saveToLocalStorage("thm_pref", thm_pref);
    setTheme(thm_pref);
}









function initThemes() {
    collectStyleSheets();
    thm_pref = loadFromLocalStorage("thm_pref", 0);
    themech_btn = document.getElementById("theme-button");
    themech_btn.addEventListener("click", toggleTheme);
    setTheme(thm_pref);
}