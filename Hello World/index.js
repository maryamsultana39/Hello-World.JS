var s;
function setup () {
createCanvas(600,600);
s=new Snake();

}
function draw(){

    background (51);
    s.update();
    s.show();
}
function Snake ()
{
    this.x =0;
    this.y =0;
    this.xspeed = 1;
    this.yspeed =0;
    
    this.update = function()
    {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.xspeed;
    }
}
console.log ('hi');