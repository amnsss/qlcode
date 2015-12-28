var http = require('http');
var options = {
    host: 'www.qlcoder.com',
    path: '/train/secret',
    headers: {
        'User-Agent': 'qlcoder spider'
    }
};

http.get(options, function(res) {
	var html = '';
	res.on('data', function(data) {
		html += data;
	})
	res.on('end', function() {
		console.log(html);
	})
}).on('error', function() {
	console.log('获取html出错!');
})