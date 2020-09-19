# stopPropagation与stopImmediatePropagation的区别 
## 它们的共同点：
都是阻止后续的侦听行为，即能阻挡掉事件流中事件的冒泡，简而言之就是让后面的侦听都不执行；

## 不同点：
是拥有事件监听函数的当前的节点是否执行该函数，stopPropagation()方法阻止事件对象移到到另一个节点上，但是允许当前节点的其他事件监听函数执行，而stopImmediatePropagation()方法不仅阻止事件从当前节点移动到另一个节点上，它还不允许当前节点的其他事件监听函数执行。

```html
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <style>
        .contDiv {padding:30px;background:#ccc;}
        .show {background:#666;display:inline-block;height:24px;width:300px;text-align:center;}
        .show a {color:#fff;font:12px/24px arial;text-decoration:none;}
    </style>
    <div class="contDiv">
        <input type="text" class="testInput" placeholder="请输入文字" />
        <span class="show"></span>
    </div>
    <script>
        $(function(){
            $(".testInput").keyup(function(e){
                $(".show").html("<a href='http://www.candoudou.com' title='前端开发' target='_blank'>http://www.candoudou.com</a>");
                //比较注释和不注释这一行的区别，stopImmediatePropagation可以阻止在这之后绑定的事件
                //e.stopImmediatePropagation();
            });
            $(".testInput").keyup(function(e){
                $(".show").html("<a href='http://www.rcttt.com' title='前端开发' target='_blank'>http://www.rcttt.com</a>");
            });
        });
    </script>
```