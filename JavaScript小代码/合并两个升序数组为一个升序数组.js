//合并两个升序数组为一个升序数组  冒泡
var a=[1,3,4,5,7,8,9];
var b=[3,4,5,6,7,8,9];
 
var c= a.concat(b);
console.log(c);
for(var i=0;i<c.length;i++){
	for(var j=i+1;j<c.length;j++){
		if(c[i]==c[j]){
			c.splice(j,1);
			j--;
		}
	}
}
 
console.log(c);
c.sort();
console.log(c)