var http = require('http');
var querystring = require('querystring');

var postData = {
  '_token' : 'Rit2Jnje2ET1YFg9IohzjV72WTIC6ToFjuBX3y9T',
  'username' : 'shinian',
  'password' : '123'
};

var options = {
    'host': 'www.qlcoder.com',
    'path': '/train/admin',
    'method': 'POST',
    '_token' : 'Rit2Jnje2ET1YFg9IohzjV72WTIC6ToFjuBX3y9T',
    'headers' : {
    	'origin':'http://www.qlcoder.com',
    	'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36',
    	'referer' : 'http://www.qlcoder.com/train/admin',
    	'Cookie' : 'è¿é¢çç­æ¡æ¯oreo=eyJpdiI6Ik96RUZ4Tmt2NFV0enk3eUZnTVlPSEE9PSIsInZhbHVlIjoiSTNFditDQ3RvSzhab2kwSU5zSmtKZz09IiwibWFjIjoiNmE4YjdlMTAyYWFjNWVlNjQwNjE4ODhjOTQ5YTEwMTJhZWI1ZGQyNTk3YTc5MTgzNTViZjU1NDhmMTgyMjZmNyJ9; Hm_lvt_420590b976ac0a82d0b82a80985a3b8a=1451026591,1451268868,1451355701,1451357844; Hm_lpvt_420590b976ac0a82d0b82a80985a3b8a=1451447324; XSRF-TOKEN=eyJpdiI6Im5qRG9MK3ZBZDVkUXBEbEJSb0tmcXc9PSIsInZhbHVlIjoicUc1bjgyMW5IN0RQN0R3bGF6Tzc1Z3o5bEo0bklVKzRRRnB1dk8rcUZHNFFVMkduTnd0ZFVPN0g0TzVqdkZuUFNpQkZYTGdhWCtEUU01ZnVSWTZYcnc9PSIsIm1hYyI6Ijc0NWVmMDdkYjRiOWU3MWIxZmU5YmExMTdiOWI0ZWZjZTgxY2NhMDg1ZmU4YTJkZjAyMTUyZDgxMmJkMzBlOGEifQ%3D%3D; laravel_session=eyJpdiI6Ik5zVXlWRE91XC9tdzdYdkRYSldoOW13PT0iLCJ2YWx1ZSI6InJubmhGMXlrd0pieTNaT2JkWE11U01HYWxXalJLU0cxcmJGNVNETDJpbTRTSHArcnQySXBhdjkyZnVcLzZWM3Rua1BXZkFZWklKZzdpYW9DaWdQYm9LZz09IiwibWFjIjoiY2FkNWEwOGQ1MzUyNzVkZmVjNGZlMmU3NGEwNmE0ODA4OTEwODdmMjQ3MDIwNTY0YzE4MzAzMTNhMDk1ZjkyNiJ9'
    }
};

var req = http.request(options, function(res) {
		var html = '';
		res.on('data', function(data) {
			html += data;
		})
		res.on('end', function() {
			console.log(html);
		})
	});
req.write(querystring.stringify(postData));
req.end();