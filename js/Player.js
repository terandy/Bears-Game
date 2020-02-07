class Player { 
    constructor(root) { 
        this.x = 0
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 20 
        this.domElement = document.createElement("img") 
        this.domElement.src = "images/stackedBears.gif" 
        this.domElement.style.position = "absolute" 
        this.domElement.style.left = this.x + "px" 
        this.domElement.style.top = this.y + "px" 
        this.domElement.style.zIndex = 10
        this.domElement.style.height=PLAYER_HEIGHT
        // this.domElement.style.border="1px solid red"
        this.jumped=false
        this.jumpinit=0
        this.jumpinity=0
        root.appendChild(this.domElement) 
    } 
    moveLeft() { 
        if (this.x > -20) { 
            this.x = this.x - PLAYER_WIDTH
        } 
        this.domElement.style.left = this.x + "px"
        this.domElement.src = "images/stackedBearsLeft.gif"
    } 
    moveRight() {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH-120) { 
            this.x = this.x + PLAYER_WIDTH
        } 
        this.domElement.style.left = this.x + "px" 
        this.domElement.src = "images/stackedBearsRight.gif"
    } 
    jump() {
        this.jumped=true
        this.jumpinit= (new Date).getTime()
        this.jumpinity= this.y
        if(this.domElement.src.includes("images/stackedBearsRight.gif")){
            this.domElement.src = "images/jumpBearsRight.gif"
        }else{this.domElement.src = "images/jumpBearsLeft.gif"}
        
    } 
} 
console.log('Player.js')