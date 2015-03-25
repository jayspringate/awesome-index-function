$(document).ready(function () {
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

var awesomeIndexArray = _.pluck(_.filter(indexArray, 'occupation', 'programmer'), 'awesomeIndex');
var awesomeIndexArraySum = _.sum(awesomeIndexArray);
var awesomeIndexArrayLength = awesomeIndexArray.length;
$('#awesome-index').html(awesomeIndexArraySum / awesomeIndexArrayLength);
});
