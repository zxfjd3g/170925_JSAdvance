function myModule() {
  //1. 私有数据
  var data = 'atguigu.com'
  // 2. 操作数据的行为
  function doSomething() {
    console.log('doSomething()', data)
  }
  function doOtherthing() {
    console.log('doOtherthing()', data)
  }

  // 3. 向外暴露n个行为
  return {
    doSomething,
    doOtherthing
  }
}