
/** 
 * @method reduce 计数：（arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)）
 */
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    let nameNum = names.reduce((pre,cur)=>{
        if(cur in pre){
            pre[cur]++
        }else{
            pre[cur] = 1 
        }
        return pre;
    },{})
    console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}

    //方法二：
    let newObj = {}
    names.map((item,i) => {
        if (newObj[item]) {
            newObj[item]++ 
        }else {
            newObj[item] = 1;
        }
    })


/** 
 * @method  数组去重
 */
    let names = [1, 2, 3, 4, 4, 3];

    let nameNum = names.reduce((pre,cur)=>{
        if(!pre.includes(cur)) {
            return pre.concat(cur)
        }else{
            return pre;
        }
    },[])
    console.log(nameNum); //[1, 2, 3, 4]



/** 
 * @method  [1, 2, 3, 4]>[2, 4, 6, 8]
 */
    let names = [1, 2, 3, 4];

    let nameNum = names.reduce((pre,cur)=>{
        return pre.concat(cur*2)
    },[])
    console.log(nameNum);




/** 
 * @method  将二维数组转化为一维
 */
    let arr = [[0, 1], [2, 3], [4, 5]]

    let nameNum = arr.reduce((pre,cur)=>{
        return pre.concat(cur) //concat 可以打散一层数组， 连接时不改变原数组
    },[])
    console.log(nameNum);


/** 
 * @method 将多维数组转化为一维
 */
    let arr = [[0, 1], [2, 3], [4,[5,6,7]]]

    const newArr = function(arr) {
        return arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur)?newArr(cur): cur)
            },[])
    }
    console.log(newArr(arr));

    //方法二：
    let pre = [];
    let newArr = function(arr) {
        arr.map((item,i) => {
            if(Array.isArray(item)) {
                newArr(item)
            }else {
                pre.push(item); //push 可以改变原数组
            }
        })
        return pre;
    }

    


/** 
 * @method 对象里的属性求和
 */
    var result = [
        {
            subject: 'math',
            score: 10
        },
        {
            subject: 'chinese',
            score: 20
        },
        {
            subject: 'english',
            score: 30
        }
    ];

    const sum = result.reduce((pre, cur) => {
        return pre + cur.score
    },0)
    console.log(sum);

