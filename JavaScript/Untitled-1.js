function aa(val){  //函数参数的变量也会提升
    console.log(val);//'函数传参'
    var val='变量声明';
    console.log(val);//'变量声明'
}
aa('函数传参');
