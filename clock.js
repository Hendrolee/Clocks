// console.log("Yo, what time is it?...");
// console.log("It's CODING TIME!");

const showClock = function() {
  $('.clock').show()
}

// analog
// setInterval(() => {
//   var dt = new Date()
//   var seconds = dt.getSeconds() 
//   var minutes = dt.getMinutes()  
//   var hour = dt.getHours()  

//   var secDeg = seconds * 6 
//   var minDeg = minutes * 6
//   var hourDeg = hour * 30
  

//   $('#second-hand').css('transform', `rotate(${secDeg}deg)`)
  
//   $('#minute-hand').css("transform", "rotate(" + minDeg + "deg)")
  
//   $('#hour-hand').css("transform", "rotate(" + hourDeg + "deg)")

//   console.log(secDeg) 
// })

const transformClock = function(secDeg, minDeg, hourDeg) {
  $('#second-hand').css('transform', `rotateZ(${secDeg}deg)`)
    
  $('#minute-hand').css("transform", `rotateZ(${minDeg}deg)`)
  
  $('#hour-hand').css("transform", `rotateZ(${hourDeg}deg)`)

}

$(document).ready(function() {
  var clockHidden = true

 // var secDeg = 0
  //var minDeg = 0
  // var hourDeg = 0
  
  setInterval(() => {
    var dt = new Date()
    var seconds = dt.getSeconds() 
    var minutes = dt.getMinutes()  
    var hour = dt.getHours()  
  
    var secDeg = seconds * 6 
    var minDeg = minutes * 6
    var hourDeg = hour * 30
    
    transformClock(secDeg, minDeg, hourDeg)

    console.log(secDeg)
    if(clockHidden){
      clockHidden = false
      showClock()
    }
  })
})

// $(document).ready(function (){
//   $('#second-hand').css("transform", "rotate(" + secDeg + "deg)")
//   $('#minute-hand').css("transform", "rotate(" + minDeg  + "deg)")
//   $('#hour-hand').css("transform", "rotate(" + hourDeg + "deg)")
// })

// digital
$(document).ready(setInterval(function() {
  dt = new Date()
  hour = dt.getHours()
  minutes = dt.getMinutes()
  seconds = dt.getSeconds()
  time = hour + ":" + minutes + ":" + seconds

  $('#time').css({"text-align": "center", "font-size": "50px"})
  $('#time').text(time)
}))


// var secDeg = seconds * 6 
// setInterval(second, 1000) //const secInterval
// function second() {
//   $('#second-hand').css("transform", "rotate(" + secDeg   + "deg)")
//   secDeg += 6
// }

// var minDeg = minutes * 6
// setInterval(minute, 60000)
// function minute() {
//   $('#minute-hand').css("transform", "rotate(" + minDeg + "deg)")
//   minDeg += 6
// }

// var hourDeg = hour * 30
// setInterval(hours, 3600000)
// function hours() {
//   $('#hour-hand').css("transform", "rotate(" + hourDeg + "deg)")
//   hourDeg += 6
// }

// second not synced perfectly - delayed 1 sec
// minute-hand not working despite completed 60 secs - delayed 1 min (same behaviour as second-hand)
// minute-hand should synced real time, not based on the starting cycle of second-hand




// setInterval(function () {
//   $('#second-hand').css("transform", "rotate(" + deg + "deg)")
//   deg += 6
// }, 1000);

// setInterval(function () {
//   $('#minute-hand').css("transform", "rotate(" + deg + "deg)")
//   deg += 6
// }, 60000);












