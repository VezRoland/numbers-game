export function genarateRandomNr(minNr,maxNr){
    return Math.floor(Math.random() * (maxNr - minNr+1) ) + minNr;
}

export function compare(guessedNr, randomNr) {
	if (guessedNr === randomNr) return 'Helyes megfejtés.'
	if (guessedNr < randomNr) return 'A te számod kisebb.'
	if (guessedNr > randomNr) return 'A te számod nagyobb.'
}