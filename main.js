song_1="";
song_2="";
song_3="";
function preload(){
    song_1=loadSound("music.mp3");
    song_2=loadSound("music1.mp3");
    song_3=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(430,260);
    video=createCapture(300,400);
    video.hide()
} 
function draw(){
    image(video,0,0)
}
function play1(){
    song_1.play()
}
function play3(){
    song_3.play()
}
function stop1(){
    song_1.stop()
}
function stop3(){
    song_3.stop()
}