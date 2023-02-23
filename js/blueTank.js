//初始化
var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var CANVAS_WIDTH =  canvas.width;
var CANVAS_HEIGHT = canvas.height;

//关于控件的类
class InputHandler {
    constructor(){
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight')
                    && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
            }
        });
        window.addEventListener('keyup', e => {
            if (    e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' ||
                    e.key === 'ArrowRight'){
                this.keys.splice(this.keys.indexOf(e.key),1);
            }
        });
    }
}
//用于控制玩家的类
class Player {
    constructor(){
        this.width = 80;
        this.height = 80;
        this.x = bulletPosition = 0;//bullet用来确定子弹发射的位置
        this.y = canvas.height - this.height;
        this.axisX = direction = 0;
        this.image = document.getElementById("blueTank");
        this.speed = 0;
    }
    draw(context){
        context.drawImage(this.image, this.axisX, 0, 300, 300, this.x,this.y,this.width, this.height);
    }
    update(input){
        //限制
        if(this.x>canvas.width - this.width){
            this.speed = 0;
            this.x = canvas.width - this.width;
        }else if (input.keys.indexOf('ArrowRight') > -1){
            this.speed = 1.5;
            this.axisX = direction = 0;
        }else{
            this.speed = 0;
        }
        if(this.x < 0){
            this.x = 0;
        }else if(input.keys.indexOf('ArrowLeft') > -1){
            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.speed = -1.5;
            this.axisX = direction = 300;
            ctx.drawImage(this.image, this.axisX, 0, 300, 300, this.x,this.y,this.width, this.height);
        }
        //前进与后退
        this.x = bulletPosition += this.speed;
    }
}
//用于武器的类
class Fight {
    constructor(){
        this.y = canvas.height - 55;
    }
    update(bulletPosition,speed){
        this.x = bulletPosition;
        this.speed = speed;
    }
    draw(context){
        context.fillRect(this.x , this.y , 7 , 7);
    }
    move(input){
        this.x += this.speed;
        if(this.x > canvas.width - 10){
            this.speed = 0;
            ctx.clearRect(this.x , this.y , 7 , 7);
        }else if(this.x < 0){
            this.speed = 0;
            ctx.clearRect(this.x , this.y , 7 , 7);
        }
    }
}

function displayStatusText(){

}
//接收内部函数或变量
var bulletPosition;
var direction;
//类的调用
var input = new InputHandler();
var player = new Player();
//动画函数
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.draw(ctx);
    player.update(input);
    requestAnimationFrame(animate);
}
animate();
function openFire(){
    var fight = new Fight();
    if(direction == 0){
        fight.update(bulletPosition + 68 ,5);
    } else{
        fight.update(bulletPosition + 4,-5);
    }
    function Update(){
        fight.draw(ctx);
        fight.move(input);
        requestAnimationFrame(Update);
    }
    Update();
}