	// const injectSections = (items, sections) => {
	// 	/* 需要插入坐标对应数据存放到 map 里面 */
	// 	const sectionsMap = new Map(sections.map(({ index, content }) => [index, content]))
	// 	/* 新建一个数组，然后往里面 push 原来数组的数据 */
	// 	return items.reduce((ret, item, index) => {
	// 		/* push 的时候先检查 map 里面有没有，有的话先 push map 里面的数据 */
	// 		if (sectionsMap.has(index)) ret.push(sectionsMap.get(index))
	// 		/* 再 push 原来的数据 */
	// 		ret.push(item)
	// 		return ret
	// 	}, [])
	// }

	const injectSections = (items, sections) => {
		const sectionMap = new Map(sections.map(({index, content}) => [index, content]))

		return items.reduce((res, item, index) => {
			if(sectionMap.has(index)) {
				res.push(sectionMap.get(index))
			}
			res.push(item)
			return res;
		}, [])

	}



	console.log(
		injectSections(
			['item1', 'item2', 'item3', 'item4', 'item5'],
			[
				{ content: 'section1', index: 0 },
				{ content: 'section2', index: 2 }
			]
		)
	)