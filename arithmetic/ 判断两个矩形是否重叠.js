// 原理：http://www.geeksforgeeks.org/find-two-rectangles-overlap/
const isOverlap = (rect1, rect2) => {
    const l1 = { x: rect1.x, y: rect1.y }
    const r1 = { x: rect1.x + rect1.width, y: rect1.y + rect1.height }
    const l2 = { x: rect2.x, y: rect2.y }
    const r2 = { x: rect2.x + rect2.width, y: rect2.y + rect2.height }
    if (
      l1.x > r2.x ||
      l2.x > r1.x ||
      l1.y > r2.y ||
      l2.y > r1.y
    ) return false
    return true
  }

const rect1 = { x: 100, y: 100, width: 100, height: 100 }
const rect2 = { x: 150, y: 150, width: 100, height: 100 }
isOverlap(rect1, rect2) // => true