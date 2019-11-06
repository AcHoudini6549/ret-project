var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "blue", 20, 20)
    //adding the game piece
}

var myGameArea = {
     canvas : document.getElementById("canvas"),
    start:function() {
       this.canvas.width = 1000;
       this.canvas.height = 500;
       this.context = this.canvas.getContext("2d");
       document.body.insertBefore(this.canvas, document.body.childNodes[0]);
       this.interval = setInterval(updateGameArea, 20);
       window.addEventListener('keydown', function (e) {
           myGameArea.keys = (mygameArea.keys || []);
           myGameArea.keys[e.keycode] = (e.type == "keydown");
       })
       window.addEventListener('keyup', function (e) {
           myGameArea.keys[e.keycode] = (e.type == "keydown");
       })
    },
    clear : function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    }
} // adding control functions and clear function

function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
} //adding update function and newPos function

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedX = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; s}
    myGamePiece.newPos();
    myGamePiece.update(); 
}