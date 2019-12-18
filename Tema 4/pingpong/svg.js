class Circulo{
    constructor(x,y,div){
        this.circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.svg = document.getElementById(div);
        this.vX = parseInt(Math.random()*10);
        this.vY = parseInt(Math.random()*10);
        this.circulo.setAttribute('cx',x);
        this.circulo.setAttribute('cy',y);
        this.dibujar();
        this.posX = x;
        this.posY = y;
        this.maxWidth = parseInt(svg.getAttribute("width"));
        this.maxHeight = parseInt(svg.getAttribute("height"));
        this.derecha = true;
        this.arriba = false;
        this.borde = parseInt(this.circulo.getAttribute("stroke-width"));
        this.radio = parseInt(this.circulo.getAttribute("r"))+this.borde/2;
    }
    dibujar(){
        this.circulo.setAttribute('r',20);
        this.circulo.setAttribute('stroke','black');
        this.circulo.setAttribute('stroke-width',4);
        this.circulo.setAttribute('fill',this.getRandomColor());
    }
    getCirculo(){
        return this.circulo;
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    mover(){
        if(this.derecha){
            this.posX += this.vX;
            if(this.posX > this.maxWidth-this.radio){
                this.posX -= (this.posX-this.maxWidth+this.radio);
                this.derecha = false;
            }
        }
        else{
            this.posX -= this.vX;
            if(this.posX < this.radio){
                this.posX += this.radio - this.posX;
                this.derecha = true;
            }
        }
        if(this.arriba){
            this.posY += this.vY;
            if(this.posY > this.maxHeight-this.radio){
                this.posY = this.posY - (this.posY-this.maxHeight+this.radio);
                this.arriba = false;
            }
        }
        else{
            this.posY -= this.vY;
            if(this.posY < this.radio){
                this.posY = this.posY + (this.radio - this.posY);
                this.arriba = true;
            }
        }
        this.circulo.setAttribute("cx",this.posX);
        this.circulo.setAttribute("cy",this.posY);
    }
}



window.onload = ()=>{
    var circulos = [];
    for(let i = 0; i<20; i++){
        circulos.push(new Circulo(50,50,"svg"));
    }
    var circulo = new Circulo(50,50);
    circulos.forEach((circulo) => {
        document.getElementById("svg").appendChild(circulo.getCirculo());
    });
    setInterval(function(){
        circulos.forEach((circulo) => {
            circulo.mover();
        });
    },50);
    /*
    var derecha = true;
    var arriba = true;
    let circulo = document.getElementById("circulo");
    let svg = document.getElementById("svg");
    let width = parseInt(svg.getAttribute("width"));
    let height = parseInt(svg.getAttribute("height"));
    let posX = parseInt(circulo.getAttribute("cx"));
    let this.posY = parseInt(circulo.getAttribute("cy"));
    let borde = parseInt(circulo.getAttribute("stroke-width"));
    let radio = parseInt(circulo.getAttribute("r"))+borde/2;
    setInterval(function(){
        if(derecha){
            posX += 10;
            if(posX > width-radio){
                posX = posX - (posX-width+radio);
                derecha = false;
            }
        }
        else{
            posX -= 10;
            if(posX < radio){
                posX = posX + (radio - posX);
                derecha = true;
            }
        }
        if(arriba){
            this.posY += 5;
            if(this.posY > height-radio){
                this.posY = this.posY - (this.posY-height+radio);
                arriba = false;
            }
        }
        else{
            this.posY -= 5;
            if(this.posY < radio){
                this.posY = this.posY + (radio - this.posY);
                arriba = true;
            }
        }
        circulo.setAttribute("cx",posX);
        circulo.setAttribute("cy",this.posY);
    },100);
    */
}