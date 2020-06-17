/**
 *@method 展平数组
 *
 * @param {*} tree 数组
 */
function* iterTree(tree) {
    if (Array.isArray(tree)) {

        for(let i=0; i < tree.length; i++) {
            yield* iterTree(tree[i]);
        }
    } 
    
    else {
        yield tree;
    }
}

const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

for(let x of iterTree(tree)) {
    console.log(x);
}

//方法2 扩展运算符
[...iterTree(tree)]