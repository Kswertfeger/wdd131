let select = document.querySelector(".theme-selector");

select.addEventListener("change", () => {
    let select_value = select.value;
    let body = document.body;
    let byui_logo = document.querySelector(".byui-logo");

    changeTheme(select_value, body, byui_logo);
})

let changeTheme = (select, body, logo) => {
    if (select == "dark") {
        logo.src = "byui-logo_white.png";
        body.classList.add("dark"); 
    }
    else {
        logo.src = "byui-logo_blue.webp";
        body.classList.remove("dark");
    }
        
}