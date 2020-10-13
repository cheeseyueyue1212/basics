function sum(root) {
    let que = [],
        newque = [],
        result = [];
    if (root !== null) {
        que.push(root);
    } else {
        return [0];
    }
    do {
        let sum = 0;
        que.forEach(function (item) {
            sum += item.value;
            if (item.l !== null) {
                newque.push(item.l);
            }
            if (item.r !== null) {
                newque.push(item.r);
            }
        })
        result.push(sum);

        let temp = newque;
        newque = [];
        que = temp;
    } while (que.length != 0);

    return result;
}

let r = {
    l: {
        l: {
            value: 4,
            l: null,
            r: null
        },
        r: {
            value: 5,
            l: null,
            r: null
        },
        value: 2
    },
    r: {
        l: {
            value: 6,
            l: null,
            r: null
        },
        r: null,
        value: 3
    },
    value: 1
};
let t = sum(r);
console.log(t); //[1,5,15]