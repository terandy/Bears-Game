class Enemy { 
    update(now) { 
            if(this.y>GAME_HEIGHT-50){
                    this.originy=GAME_HEIGHT-50
                    this.startTimey=now
            }
            let tx = (now-this.startTime)/120
            let ty = (now-this.startTimey)/120
            this.y = this.originy - ty * this.speedy +  ( (ty**2 )*(9.8/2)) 
            this.x = this.originx + tx * this.speedx 
            this.domElement.style.top = this.y + "px" 
            this.domElement.style.left = this.x + "px" 
            if (this.x > GAME_WIDTH) { 
                    this.root.removeChild(this.domElement) 
                    this.destroyed = true 
            } 
    } 
    constructor(theRoot, enemySpot) { 
            this.root = theRoot 
            this.spot = enemySpot 
            this.x = -ENEMY_WIDTH
            this.originx = -ENEMY_WIDTH
            this.originy = GAME_HEIGHT/(enemySpot+2)
            this.y = GAME_HEIGHT/(enemySpot+2)
            this.startTime = (new Date).getTime()
            this.startTimey = (new Date).getTime()
            this.destroyed = false 
            this.domElement = document.createElement("img") 
            this.domElement.src = "images/coconut.png"
            this.domElement.style.position = "absolute" 
        //     this.domElement.style.border="1px solid red"
            this.domElement.style.left = this.x + "px" 
            this.domElement.style.top = this.y + "px" 
            this.domElement.style.height = ENEMY_HEIGHT

            this.domElement.style.zIndex = 10 
            theRoot.appendChild(this.domElement) 
            this.speedy = Math.random()*(50-10)+10 //px/second
            this.speedx = Math.random()*(75-30)+30
    } 
} 
console.log('Enemy.js')