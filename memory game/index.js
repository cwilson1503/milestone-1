const tilesCon = document.querySelector('.tiles');
const colors = ["red", "blue", "green", "yellow", "purple", "orange", 'aquamarine'];
const colorsList = [...colors, ...colors];
const tileCount = colorsList.length;

let tilesRevealed = 0;
let lastTile = null;
PlayerSecondPick = false;



//main game 



//tiles
function buildTile(color){
    const ele = document.createElement('div');
    ele.classList.add('tile');
    ele.setAttribute('data-color',color);
    

    ele.addEventListener('click', () => {
        ele.style.backgroundColor = color;

        if(PlayerSecondPick){
            return;
        }
       
        if(!lastTile){
            lastTile = ele;
            return;
        }
        
        PlayerSecondPick = true ;

        setTimeout( function(){
            ele.style.backgroundColor = null;
            lastTile.style.backgroundColor = null;
        },1000);
    })

    return ele;
}


//shuffle
for( let i = 0; i < tileCount; i++){
    let randomInd = Math.floor(Math.random() * colorsList.length);
    const color = colorsList[randomInd];
    const tile = buildTile(color);

    colorsList.splice(randomInd,1);
    tilesCon.appendChild(tile);

    console.log(color);
}
