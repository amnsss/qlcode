var crypto = require('crypto');
var http = require('http');
var vote = 6;

function guoguan(checkcode) {
	var options = {
    	host: 'www.qlcoder.com',
    	path: '/train/handsomerank?_token=Rit2Jnje2ET1YFg9IohzjV72WTIC6ToFjuBX3y9T&user=amnsss&checkcode='+checkcode
	};
	http.get(options, function(res) {
		var html = '';
		res.on('data', function(data) {
			html += data;
		})
		res.on('end', function() {
			// console.log(html);
			vote++;
			process(vote);
		})
	}).on('error', function() {
		console.log('获取html出错!');
	})
}

function process(vote) {
	var date = '20151228';
	var name = 'amnsss';
		vote = vote || 1;
	var	x;
	var pstr = date+name+vote;
	for(x=9000000; ;x++) {
		var str = pstr + x;
		var md5Str = md5(str);
		// console.log(md5Str+' '+x+' '+str);
		if(/^000000.*/.test(md5Str)) {
			console.log(vote+' '+x);
			guoguan(x);
			break;
		}
	}
}


function md5(str){
	return crypto.createHash('md5').update(str).digest('hex');
}

process(vote);