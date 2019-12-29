let grid = new Array();
const DEFAULTSIZE = 16;
let userSize = 0;
content = document.querySelector("#container");

function createGrid(size){
    for(let i =0;i<(size*size);i++){
        grid[i] = document.createElement("div");
        grid[i].style.border = "solid 1px";
        grid[i].style.opacity = "0.0";
        grid[i].style.backgroundColor = "blue";
        
        grid[i].addEventListener('mouseenter', (e) => {
            let opacity = parseFloat(grid[i].style.opacity);
            opacity += 0.1;

            grid[i].style.opacity = opacity.toString();
        });

        content.append(grid[i]);
    }
}
const resetter = document.getElementById("resetter");
resetter.addEventListener('click', (e)=>{
    userSize = prompt("What size would you like the dimensions to be?");
    document.querySelectorAll("div div").forEach(e => e.parentNode.removeChild(e));

    createGrid(userSize);

    content.style.gridTemplateColumns = "repeat(" + userSize + ", 1fr)";
    content.style.gridTemplateRows = "repeat(" + userSize + ", 1fr)";
});

createGrid(DEFAULTSIZE);