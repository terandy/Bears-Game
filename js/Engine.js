class Engine { 
    gameLoop = () => { 
      if (this.lastFrame === undefined) {
        this.lastFrame = (new Date).getTime()
        this.firstFrame = (new Date).getTime()
      }
      this.enemies.forEach(enemy => { 
        enemy.update(this.lastFrame) 
      }) 
      this.lastFrame = (new Date).getTime() 

      this.enemies = this.enemies.filter(enemy => { 
        return !enemy.destroyed 
      }) 
      while (this.enemies.length < MAX_ENEMIES) { 
        let spot = nextEnemySpot(this.enemies) 
        this.enemies.push(new Enemy(this.root, spot)) 
      }
      if(this.player.jumped===true){
        let time=((new Date).getTime()-this.player.jumpinit+1)/120
        let originy=this.player.jumpinity
        this.player.y =  originy - time * 50 +  ( (time**2 )*(9.8/2))
        this.player.domElement.style.top = this.player.y + "px" 
        if(this.player.y>=GAME_HEIGHT - PLAYER_HEIGHT - 20  ){
          this.player.jumped=false
          this.player.y=GAME_HEIGHT - PLAYER_HEIGHT - 20
        
        }
      }
      if (this.isPlayerDead()) { 
        let gameover = document.createElement("img")
        gameover.src="images/gameover.png"
        gameover.style.position="absolute"
        gameover.style.top="10px"
        gameover.style.height="400px"
        gameover.style.left="200px"
        gameover.style.zIndex=102
        this.root.appendChild(gameover)
        return 
      }

      if (this.player.x>(GAME_WIDTH/2-100)&&this.player.x<(GAME_WIDTH/2-50)&& this.player.y>(GAME_HEIGHT - PLAYER_HEIGHT - 50 )){
        this.counter.update()
      }

      if (((this.lastFrame-this.firstFrame)%5000<10) && this.firstFrame!==this.lastFrame){
        if(MAX_ENEMIES<3){
          MAX_ENEMIES +=1
          console.log('max enemy increase')
        }
      }
      setTimeout(this.gameLoop, 10) 
    } 
    isPlayerDead = () => { 
      let dead = false
      this.enemies.forEach(enemy => {
        if(enemy.y>this.player.y && enemy.y<(this.player.y+PLAYER_HEIGHT-30) && enemy.x>this.player.x+20 && enemy.x<this.player.x+ENEMY_WIDTH+PLAYER_WIDTH+10){ 
          dead = true
        }
      })
      return dead
    } 
    constructor(theRoot) { 
      this.root = theRoot 
      this.player = new Player(this.root) 
      this.enemies = [] 
      this.counter = new Text(this.root)
      // addBackground(this.root) 
    } 
} 
