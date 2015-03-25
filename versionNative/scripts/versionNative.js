var indexArray = [
								{
									name: 'Bob', 
									occupation: 'programmer', 
									awesomeIndex: 7
								}, 
								{
									name: 'Alice',
									occupation: 'programmer', 
									awesomeIndex: 9
								},
								{
									name: 'Zaphod',
									occupation: 'President of the Galaxy'
								}
								];

function calcAwesomeIndexMean (array) {
	var programmerCount = 0, awesomeIndexSum = 0, awesomeIndexMean = 0;
	for (i=0; i<indexArray.length; i++) {
		if (indexArray[i].occupation === 'programmer') {
		awesomeIndexSum = indexArray[i].awesomeIndex + awesomeIndexSum;
		programmerCount++;
	};
};
	awesomeIndexMean = awesomeIndexSum / programmerCount;
	document.getElementById('awesome-index').innerHTML = awesomeIndexMean;
};

calcAwesomeIndexMean(indexArray);