var html_el = document.querySelector("html");

var bg_colors = ["#B4D3E7", "#B9D2D4", "#004D75", "white"];


function showHTML() {
    html_el.style.visibility = false;
    html_el.style.opacity = 1;
    document.body.style.backgroundColor = "";
}


function hideHTML() {
    html_el.style.visibility = true;
    html_el.style.opacity = 0;
    let thm_pref = loadFromLocalStorage("thm_pref", 0);
    document.body.style.backgroundColor = bg_colors[thm_pref];
}


hideHTML();