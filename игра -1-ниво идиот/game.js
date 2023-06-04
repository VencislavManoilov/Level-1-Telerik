let a=0, kvadratY=[], stoinost=randomInteger(100),currentLetter=randomInteger(26)+65,secundi=10,start=false,pochnali=false,time=0,dy=[];

console.log("Trqbva da natisnesh", stoinost, "pyti!!!")

function update() {
    if(pochnali){
        time++
    }

    for(i=0; i<a; i++) {
        dy[i]+=0.05
        kvadratY[i]+=dy[i]

        if(kvadratY[i]>window.innerHeight-10){
            kvadratY[i]=window.innerHeight-10
            dy[i]=-dy[i]
        }
    }
}

function draw() {
    for(i=0; i<a; i++){
        context.fillStyle='magenta'
        context.fillRect(i*15, kvadratY[i], 10, 10)
    }

    if(start){
        pochnali=true
    }

    context.fillStyle='black'
    context.font="20px Arial"
    context.fillText(secundi+" секунди", 10, 50)

    if(pochnali){
        if(time>=100){
            if(secundi>0){
                secundi--
                time=0
            }else{
                start=false
                pochnali=false
                console.log("you trash")
            }
        }
    }
}

function keyup() {
    if(!start){
        start=true
    }
    if(a<=stoinost){
        //if(key==currentLetter){
            a++
            console.log(a, "(",stoinost,")")
            dy[a]=0
            kvadratY[a]=0
        //}
    }else{
        console.log("Kakvo iskash!?")
    }
}

function mouseup() {
    if(a!=stoinost){
        console.log("typak ne opitvaj pak")
        a=0
    }else{
        console.log("bravo :(")
        pochnali=false
        start=false
    }
}