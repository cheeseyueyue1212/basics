let arr = [1, 3, 12, 9, 4, 13, 5, 6, 2, 7, 8, 10, 11, 14]

function findMaxNums(arr) {
    let targets = arr.splice(0, 9).sort((a, b) => a - b);
    let minNum = targets[0]

    arr.forEach(item => {
        if (item > minNum) {
            targets.shift();
            targets.push(item);
            targets.sort((a, b) => a - b)
        }
    });

    return targets;
}

console.log(findMaxNums(arr))


```go
func Heap (data []int) {
	hi := len(data)

	for i := (hi-1)/2; i>=0; i-- {
		siftDown(data, i, hi)
	}
	//至此data树及所有子树都是大顶
}

func siftDown(data []int, lo, hi int){    //lo为需要下沉的节点，hi为堆节点个数
	root := lo
	for {
		child := 2*root + 1
		if child >= hi {    //左孩子不存在结束
			break
		}
		if child+1 < hi && data[child] < data[child+1] {    //右孩子存在且大于左孩子， child为两个孩子节点中大的一个
			child++
		}
		if data[root] >= data[child] {    //父节点大于孩子中大的那个，结束下沉
			return
		}
		data[root], data[child] = data[child], data[root]  //下沉
		root = child     //继续子树下沉
	}
}
```