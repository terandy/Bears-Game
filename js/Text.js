console.log('Text.js')

class Text {
    constructor(root){
        this.domElement = document.createElement('div')
        this.domElement.style.position="absolute"
        this.domElement.style.right = 50
        this.domElement.style.top = 50
        this.domElement.innerText = 0
        root.appendChild(this.domElement)
        this.domElement.style.color = "white"
        this.domElement.style["font-size"]="50px"
    }
    update(){
        this.domElement.innerText= parseInt(this.domElement.innerText) + 1
    }
}