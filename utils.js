function genarateRandomNr(minNr,maxNr){
    return Math.floor(Math.random() * (maxNr - minNr+1) ) + minNr;
}