let nextKey=65,myX=0,myY=350,time=0,start=false,second=0

let audioFart = new Audio('Wet Fart Meme - Sound Effect (HD).mp3');
let audioYes = new Audio('Yes SOUND EFFECT.mp3');

function update(){
    //audioFart.play();
    if(nextKey>90){
        console.log("браво ти спечели!!! Опитай пак")
        audioYes.play();
        start=false
        console.log(second, "seconds")
        nextKey=65
        myX=0
    }
    if(start==true){
        time=time+1
        if(time>=100){
            second=second+1
            time=0
        }
    }else{
        time=0
        second=0
    }
}

function draw(){
    drawImage(backDesert, 0, 0, 800, 600)
    drawImage(femaleAction, myX, myY, 60, 80)
}

function keyup(key){
    if(key==65){
        start=true
    }

    if(nextKey==key){
        console.log("браво")
        nextKey=nextKey+1
        myX=myX+10
    }else{
        if(start==true){
            console.log("Тъпак опитай пак")
            audioFart.play();
            console.log(second, "seconds")
        }
        start=false
        nextKey=65
        myX=0
        time=0
        second=0
    }
}