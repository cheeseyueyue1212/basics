# Css实现自适应屏幕宽度的正方形

## 方法一：
```html
	<div class="vw">hello,viewport</div>
	<style>
		.vw {
			width: 50%;
			height: 50vw;
			background: #ccc;
		}
    </style> 
```



## 方法二：
```html
	<div class="div3">hello,viewport</div>
	<style>
		.div3 {
			width: 100%;
			/*基于父级的宽度设置*/
			padding-top: 100%;
			/* 或者padding-bottom: 20%; */
			background: red;
		}
	</style>
```



## 方法三：
```html
	<div class="square">
		<div class="content">
			Hello!
		</div>
	</div>
	<style>
		.square {
			width: 50%;
			background: #ccc;
		}

		.square:after {
			content: "";
			display: block;
			padding-bottom: 100%;
		}

		.content {
			position: absolute;
			width: 100%;
			height: 100%;
		}
	</style>
```