var http = require('http');
var url = 'http://movie.douban.com/top250?start=';
var scroeArr = [];

function filterScore(html, index) {
	var regex = /rating_num.*?<\/span>/g;
	var arr = html.match(regex);
	var subScroeArr = arr.map(function getScore(item) {
		var regex = /\d\.\d/g;
		return item.match(regex);
	});
	scroeArr = scroeArr.concat(subScroeArr);
	console.log(subScroeArr);
	getScoreArr(index+25);
}
function getScoreArr(index) {
	if(index<250) {
		var newUrl = url + index;
		http.get(newUrl, function(res) {
			var html = '';
			res.on('data', function(data) {
				html += data;
			})
			res.on('end', function() {
				filterScore(html, index);
			})
		}).on('error', function() {
			console.log('获取html出错!');
		})
	} else {
		var sum = 0;
		// console.log(scroeArr);
		console.log(scroeArr.length);
		for(var i=0; i<166; i++) {
			sum += parseInt(scroeArr[i][0].replace(".", ""));
		}
		// scroeArr.forEach(function(item){
		// 	console.log(parseFloat(item[0]));
		// 	sum += parseInt(item[0].replace(".", ""));
		// 	console.log(sum);
		// })
		console.log(sum);
	}
}
getScoreArr(0);
// function sumTop250() {
// 	var index = 0;
// 	var step = 25;
// 	var scroeArr = [];
// 	for(; index<250; index+=step) {
// 		newUrl = url + index;
// 		scroeArr = scroeArr.concat(getScoreArr(newUrl));
// 	}
// 	console.log(scroeArr);
// }

// sumTop250();



