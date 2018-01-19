/*
分线程执行的模块
 */
function fibonacci (number) {
  return number<=2 ? 1 : fibonacci(number-1) + fibonacci(number-2)
}
console.log(this)
alert('分线程执行')
// 分线程接收到主线程发送的消息
var onmessage = function (event) {
  const number = event.data
  console.log('分线程接收到主线程发送的消息', number)
  const result = fibonacci(number)
  // 分线程向主线程发送消息
  postMessage(result)
  console.log('分线程向主线程发送消息', result)
}