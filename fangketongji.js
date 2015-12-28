var fs = require('fs');

fs.readFile('../uv.txt', 'utf-8', function (err, data) {
  if (err) throw err;
  var dataArr = data.split('\r\n');
  var myMap = new Map();
  // console.log(dataArr);
  dataArr.forEach(function(itemStr) {
  	var item = itemStr.split(' ');
  	if(!myMap.has(item[1]) && /08-24/.test(item[0])){
  		myMap.set(item[1], itemStr);
  		// console.log(item);
  	}
  });
  // console.log(dataArr.length);
  console.log(myMap.size);
});