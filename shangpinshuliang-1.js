var fs = require('fs');

fs.readFile('../144043063958496.txt', 'utf-8', function(err, data){
	if(err) throw err;
	// data.replace(//g, '');
	var arr = [], sum = 0;
	var operates = data.split('\r\n');
	// console.log(operates);
	operates.pop();
	operates.forEach(function(operate) {
		optA = operate.split(' ');
		switch(optA[0]) {
			case 'up':
				arr[optA[2]] = arr[optA[2]] ? arr[optA[2]] + parseInt(optA[1]) : parseInt(optA[1]);
				break;
			case 'down':
				arr[optA[2]] -= parseInt(optA[1]);
				arr[optA[2]] = arr[optA[2]] < 0 ? 0 : arr[optA[2]];
				break;
			case 'query':
				for(var i= parseInt(optA[1]), j=parseInt(optA[2]); i<=j; i++) {
					arr[i] = arr[i] ? arr[i] : 0;
					sum += arr[i];
				}
				break;
			default: 
			break;
		}
		// console.log(optA);
		// console.log(sum);
	});
	console.log(sum);
});