function main() {
	// 1.遍历List构建 map信息(每个相关点周围生命体个数) 相关点-每个生命体自身和周围的8个点共9个
	// 2.根据规则判断每个相关点的生死繁殖
	// 3.一次迭代结束记录List长度
	var list = [{x:10000, y:10001}, {x:10000, y:10002}, {x:10001, y:10000}, {x:10001, y:10001}, {x:10002, y:10001}];
	var max = 5, flag = 0;
	var map = {};
	for(var i=1; i<=1500; i++) {
		traverse(list, map);
		console.log(i+' '+list.length);
		if(list.length>max) {
			max = list.length;
			flag = i;
		}
		// console.log(map);
		map = {};
	}
	console.log(flag+' '+max);
}

function traverse(list, map) {
	for(var i=0, length = list.length;  i<length; i++) {
		processList(list[i], map);
	}
	processMap(map, list);
}

function processList(item, map) {
	var x = item.x, y = item.y; // 自身
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y] : 0;
	x = item.x - 1; y = item.y // 上
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x - 1; y = item.y + 1; // 上右
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x; y = item.y + 1; // 右
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x + 1; y = item.y + 1 // 右下
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x + 1; y = item.y // 下
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x + 1; y = item.y - 1 // 左下
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x; y = item.y - 1; // 左
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
	x = item.x - 1; y = item.y - 1 // 左上
	map[x+'-'+y] = map[x+'-'+y] ? map[x+'-'+y]+1 : 1;
}
function processMap(map, list) {
	for(props in map) {
		// if(map.hasOwnProperty(props)) {
			var xyArr = props.split('-');
			var x = parseInt(xyArr[0]);
			var y = parseInt(xyArr[1]);
			item = {x : x, y : y};
			index = listIndex(item, list);
			if(map[props] < 2 || map[props] > 3) {
				// 不管list中有没有 删除掉	
				if( index != -1) {
					list.splice(index, 1);
				}
			} else if(map[props] === 3) {
				// 添加到list中
				if(index ==  -1) {
					list.push(item);
				}
			}
		// }
	}
}
function listIndex(item, list) {
	for(var i=0, length=list.length; i<length; i++) {
		if(item.x == list[i].x && item.y == list[i].y) {
			return i;
		}
	}
	return -1;
}
main();