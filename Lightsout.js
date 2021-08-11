var grid = document.getElementsByClassName("box");


Array.from(grid).forEach(click => click.addEventListener("click", function changeColor() {
    if (click.style.background === 'blue') {
        click.style.background = "red";
        click.textContent = "box";
    } else {
        click.style.background = "blue";
    }
}));