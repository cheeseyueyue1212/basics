		function test() {
			return new Promise(resolve => {
				// setTimeout(() => {
				console.log('setTimeout')
				resolve(111)
				// }, 100)
			})
		}

		async function test1() {
			console.log('test1')
			await test()

			console.log('await 后的值')
		}
		test1()

		new Promise((resolve) => {
			console.log('promise')
			resolve()
		}).then(res => {
			console.log('then')
		})
		console.log('endding')
