let ys,xs,razst=0,ys2=100,xs2=600,explosion=true

function update(){
    razst=razst+1
    
    if(razst>425){
        explosion=false
    }
    
    if(explosion==false){
        xs=-8
        ys=-8
        razst=0
    }
}

function draw(){
    drawImage(backStars, 0, 0, 800, 600)
    if(explosion==true){
        for(xs=-8; xs<=8; xs=xs+1){
            for(ys=-8; ys<=8; ys=ys+1){
                if(xs==0 || ys==0 || xs==ys || xs+ys==0){
                    if(xs==0 && ys==0){

                    }else{
                        drawImage(paddle, 385+razst*xs, 300+razst*ys, 4, 4)
                    }
                }
            }
        }
    }
}

function keyup(key){
    if(explosion==false){
        explosion=true
    }else{
        explosion=false
    }
}