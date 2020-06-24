

for (var i = 0; i < 5; i++) {
    ((i) => setTimeout(() => {
        console.log(i)
    }, 1000 * i))(i)
}


for(var i = 0; i < 5; i++) {
    let _i = i;
    setTimeout(() => {
        console.log(_i)
    }, 1000*_i);
}