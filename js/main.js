console.log('main.js')

let app = document.getElementById("app")
addBackground(app)

let button = document.createElement('img')
let scroll = document.createElement('img')
let scrollText = document.createElement('div')

scroll.style.height="400px"
scrollText.style.height="400px"
button.style.height="120px"
button.style.cursor="pointer"

button.style.position="absolute"
scroll.style.position="absolute"
scrollText.style.position="absolute"
button.style.left="300px"
scroll.style.right="300px"
scrollText.style.right="390px"
scrollText.style.height="100px"
button.style.top="200px"
scroll.style.top="50px"
scrollText.style.top="150px"
button.style.zIndex="100"
scroll.style.zIndex="100"
scrollText.style.zIndex="101"
scrollText.innerText=
"MISSION:\n \n Spend as much \ntime as possible \nwith the Turtle \n\n Avoid coconuts \n\nGOOD LUCK!"
scrollText.style.fontFamily="Courier New"


button.src="images/play.png"
scroll.src="images/scroll2.png"

app.appendChild(button)
app.appendChild(scroll)
app.appendChild(scrollText)

button.addEventListener('click',event=>{
    app.removeChild(button)
    app.removeChild(scroll)
    app.removeChild(scrollText)
    let gameEngine = new Engine(document.getElementById("app"))
    let keydownHandler = event => { 
        if (event.code === "ArrowLeft") { 
            gameEngine.player.moveLeft()
            
        } 
        if (event.code === "ArrowRight") { 
            gameEngine.player.moveRight() 
        }
        if (event.code === "ArrowUp") { 
            gameEngine.player.jump() 
        } 
}


    document.addEventListener("keydown", keydownHandler) 
    gameEngine.gameLoop() 
    
})