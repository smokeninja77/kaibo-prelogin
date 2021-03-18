import $ from 'jquery';

(function() {
	// Run only if section exist
    if ($('.game-page').length != 1) { return 0; }
    console.log('timer js')

    // //All buttons
    // let startBtn = document.querySelector(".start");
    // let stopBtn = document.querySelector(".stop");
    // let resetBtn = document.querySelector(".reset");

    // //DOM elements
    // let timeLabel = document.getElementById("base-timer-label");

    // //Time related vars
    // const TIME_LIMIT = 10 //in seconds
    // let timePassed = -1;
    // let timeLeft = TIME_LIMIT;
    // let timerInterval = null;

    // function reset() {
    //     clearInterval(timerInterval);
    //     resetVars();
    //     startBtn.innerHTML = "Start";
    // }

    // function start() {
    //     var withReset = false;
    // // setDisabled(startBtn);
    // // removeDisabled(stopBtn); 
    // if (withReset) {
    //     resetVars();
    // }
    // startTimer();
    // }

    // document.getElementById ("timeStart").addEventListener ("click", start, false);

    // // $('.time-start').on('click', function(){
    // //     alert('haha')
    // // })

    // function stop() {
    // // setDisabled(stopBtn);
    // // removeDisabled(startBtn);
    // // startBtn.innerHTML = "Continue";
    // clearInterval(timerInterval);
    // var a = $('.base-timer__label').html();
    // var b = $('#finalTime').html(a);
    // }

    // document.getElementById ("timeStop").addEventListener ("click", stop, false);

    // function startTimer() {
    // timerInterval = setInterval(() => {
    //     timePassed = timePassed += 1;
    //     timeLeft = TIME_LIMIT - timePassed;
    //     timeLabel.innerHTML = formatTime(timeLeft);
    //     // setCircleDasharray();

    //     if (timeLeft === 0) {
    //     timeIsUp();
    //     }
    // }, 1000);
    // }

    // window.addEventListener("load", () => {
    // timeLabel.innerHTML = formatTime(TIME_LIMIT);
    // // setDisabled(stopBtn);
    // });

    // //---------------------------------------------
    // //HELPER METHODS
    // //---------------------------------------------
    // // function setDisabled(button) {
    // // button.setAttribute("disabled", "disabled");
    // // }

    // function removeDisabled(button) {
    // button.removeAttribute("disabled");
    // }
    // function timeIsUp() {
    // // setDisabled(startBtn);
    // // removeDisabled(stopBtn);
    // clearInterval(timerInterval);
    // var a = $('.base-timer__label').html();
    // var b = $('#finalTime').html(a);
    // // let confirmReset = confirm("Time is UP! Wanna restart?");
    // // if (confirmReset) {
    // //   reset();
    // //   startTimer();
    // // } else {
    // //   reset();
    // // }
    // }

    // $('.cowspot').on('click', function(){
    //     if ( hotelName.length == 5) {
    //         timeIsUp()
    //     }
    // })

    // function resetVars() {
    // // removeDisabled(startBtn);
    // // setDisabled(stopBtn);
    // timePassed = -1;
    // timeLeft = TIME_LIMIT;
    // console.log(timePassed, timeLeft);
    // timeLabel.innerHTML = formatTime(TIME_LIMIT);
    // }

    // function formatTime(time) {
    // const minutes = Math.floor(time / 60);
    // let seconds = time % 60;

    // if (seconds < 10) {
    //     seconds = `0${seconds}`;
    // }

    // return `0${minutes}:${seconds}`;
    // }


})(); 