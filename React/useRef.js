import React, { useState, useEffect, useMemo, useRef } from 'react';

export default function App(props) {
    const [count, setCount] = useState(0);

    const doubleCount = useMemo(() => {
        return 2 * count;
    }, [count]);

    const timerID = useRef();

    useEffect(() => {
        timerID.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    }, []);

    useEffect(() => {
        if (count > 10) {
            clearInterval(timerID.current);
        }
    });

    return (
        <>
            <button ref={couterRef} onClick={() => { setCount(count + 1) }}>Count: {count}, double: {doubleCount}</button>
        </>
    );
}
/*
https://blog.csdn.net/hjc256/article/details/102587037

1. useRef这个hooks函数，除了传统的用法之外，它还可以“跨渲染周期”保存数据。
2. 在一个组件中有什么东西可以跨渲染周期，也就是在组件被多次渲染之后依旧不变的属性？第一个想到的应该是state。没错，一个组件的state可以在多次渲染之后依旧不变。但是，state的问题在于一旦修改了它就会造成组件的重新渲染。
那么这个时候就可以使用useRef来跨越渲染周期存储数据，而且对它修改也不会引起组件渲染。

在上面的例子中，我用ref对象的current属性来存储定时器的ID，这样便可以在多次渲染之后依旧保存定时器ID，从而能正常清除定时器。
*/