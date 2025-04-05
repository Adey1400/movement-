const player= document.getElementById("player");
let posX = 225;
        let posY = 225;
        const step = 20; 
        document.addEventListener("keydown",(e)=>{
         switch(e.key){
            case "ArrowUp":
                    if (posY > 0) posY -= step;
                    break;
                case "ArrowDown":
                    if (posY < 450) posY += step;
                    break;
                case "ArrowLeft":
                    if (posX > 0) posX -= step;
                    break;
                case "ArrowRight":
                    if (posX < 450) posX += step;
                    break;
         }
         player.style.top = posY + "px";
         player.style.left = posX + "px";
        })