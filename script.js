let toggleBtn = document.getElementById("toggle-menu");

toggleBtn.addEventListener('click', () => {
    let menu = document.querySelector("#toggle-menu + ul");
    menu.classList.toggle('show');
});