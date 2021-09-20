export function tranLisToTreeData(list, rootValue) {
  var arr = []
  list.forEach(item => {
    if (item.pid === rootValue) {
      const children = tranLisToTreeData(list, item.id)
      if (children.length) {
        item.children = children
      }
      arr.push(item)
    }
  })
  return arr
}
