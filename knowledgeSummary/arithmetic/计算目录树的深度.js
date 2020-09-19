const tree = {
    name: 'root',
    children: [
        { name: '叶子1-1' },
        { name: '叶子1-2' },
        {
            name: '叶子2-1',
            children: [{
                name: '叶子3-1',
                children: [{
                    name: '叶子4-1'
                }]
            }]
        }
    ]
}

function getDepth(tree) {
    let depth = 0

    if (tree) {
        let arr = [tree]
        let temp = arr
        while (temp.length) {
            arr = temp
            temp = []
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].children && arr[i].children.length) {
                    for (let j = 0; j < arr[i].children.length; j++) {
                        temp.push(arr[i].children[j])
                    }
                }
            }
            depth++
        }
    }
    return depth
}

console.log(getDepth(tree)); //输出4

//   定义变量depth为0
//   定义一个空数组temp,然后遍历tree，如果tree有children，就push到temp里面
//   开始while循环，如果temp长度不为0，depth++；如果temp长度为0，停止
//   得出depth即为树的高度