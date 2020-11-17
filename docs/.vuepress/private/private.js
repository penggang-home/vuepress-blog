function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}

function getDescription() {
  let arr = [
    '励志在糜烂的生活中写出优雅的代码',
    '男儿当自强',
    '好男儿志在四方',
    '人没有梦想，和咸鱼有什么区别'
  ]
  let index = randomNum(0, arr.length - 1)
  return arr[index]
}


module.exports = {
  appId: "X3BngL3TJOaKhbqvMkYD9DkL-gzGzoHsz",
  appKey: "kaCkhB2ENIxkpA5l3NMEbvxy",
  description: getDescription()
}