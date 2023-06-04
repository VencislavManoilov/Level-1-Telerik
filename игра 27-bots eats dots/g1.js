let a;

function lajnoQd(lqwoOko,dqsnoOko){
    if(dqsnoOko==1){
        return 0;
    }
    if(lqwoOko==1){
        return 1;
    }
    if(dqsnoOko==-1){
        return 1;
    }
    if(lqwoOko==-1 && dqsnoOko==0){
        return 1;
    }
    if(lqwoOko==0 && dqsnoOko==0){
        return 0;
    }
    if(lqwoOko==-1 && dqsnoOko==-1){
        return -1;
    }
    if(lqwoOko==0 && dqsnoOko==-1){
        return -1;
    }
    if(lqwoOko==1 && dqsnoOko==1){
        return 0;
    }
    if(lqwoOko==1 && dqsnoOko==0){
        return 1;
    }
    if(lqwoOko==0 && dqsnoOko==1){
        return -1
    }

    return 0;
}
