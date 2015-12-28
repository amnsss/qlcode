var http = require('http');
var url = 'http://www.qlcoder.com/train/spider3/';
var index = 9;
var cUrl = url+index;
// console.log(cUrl);
var arr = [];
var refreshTime = 1;
var interval = 1000;
var oldHtml = '';
var sure = false;
// setTimeout('get()', refreshTime)
get();

// setInternal(function() {}, refreshTime);
function get() {
	http.get(cUrl, function(res) {
		var newHtml = '';
		res.on('data', function(data) {
			newHtml += data;
		})
		res.on('end', function() {
			console.log(newHtml);
			calculateTime(newHtml);
		})
	}).on('error', function() {
		console.log('获取html出错!');
	})
}

function calculateTime(newHtml) {
	if(!oldHtml) {
		oldHtml = newHtml;
		// console.log(oldHtml);
		setTimeout(get, interval);
	} else {
		// console.log(newHtml);
		if(oldHtml != newHtml) {
			if(sure){ 
				// console.log(index+ ' '+'refreshTime: '+refreshTime);
				arr.push({index: index, refreshTime: refreshTime});
				console.log(arr);
				index++;
				cUrl = url+index;
				oldHtml = '';
				refreshTime = 1;
				sure = false;
				if(index > 10) {
					console.log(arr);
					return ;
				}
				get();
				return ;
			}
			// console.log('refreshTime: '+refreshTime);
			oldHtml = newHtml;
			refreshTime = 1;
			setTimeout(get, interval);
			sure = true;
		} else {
			refreshTime++;
			setTimeout(get, interval);
		}
	}
}