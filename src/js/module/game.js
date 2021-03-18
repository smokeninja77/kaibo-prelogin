import $ from 'jquery';
import 'jquery-modal';

(function() {
	// Run only if section exist
    if ($('.page2').length != 1) { return 0; }
    console.log('page 2')

    
    // modal
    $('.instruction-btn').click(function(event) {
        $("#howToPlay").modal({
            fadeDuration: 250
        });
        return false;
    });
    $('#timePause').click(function(event) {
        $("#pauseModal").modal({
            fadeDuration: 0,
            showClose: false,
            clickClose: false
        });
        return false;
    });
    // END modal

    // call in game page
    $('.-start-game').on('click', function(){
        $('.gameplay-page').addClass('active');
        $('.ingame-modal').show();
    })
    $('.-start-game-instrunction').on('click', function(){
        start();
        $('.ingame-modal').hide();
        displayOX();
    })
    $('.-view-leaderboard').on('click', function(){
        $('.leaderboard-page-view').addClass('active');
    })
    $('.back-btn').on('click',function(){
        $('.gameplay-page').removeClass('active');
        $('.cowspot').removeClass('active -found-');
        $('.circle').remove();
        $('.counted-ox-wrap span').removeClass('active');
        oxBasket = [];
        clearInterval(timerInterval);
        resetVars();
    })
    $('.back-btn-result').on('click',function(){
        $('.gameplay-page').removeClass('active');
        $('.result-page').removeClass('active');
        $('.cowspot').removeClass('active -found-');
        $('.circle').remove();
        $('.counted-ox-wrap span').removeClass('active');
        oxBasket = [];
        clearInterval(timerInterval);
        resetVars();
    })
    $('.-ply-again-result').on('click',function(){
        $('.result-page').removeClass('active');
        reset();
    })
    $('.back-btn-leaderboard').on('click',function(){
        $('.leaderboard-page').removeClass('active');
    });
    $('.-exit').on('click',function(){
        $('.gameplay-page').removeClass('active');
        $('.cowspot').removeClass('active -found-');
        $('.circle').remove();
        $('.counted-ox-wrap span').removeClass('active');
        oxBasket = [];
        clearInterval(timerInterval);
        resetVars();
    })
    $('.-ready-game').on('click', function(){
        $('.ingame-modal').hide();
        displayOX();
    })
    // END call in game page

    // resize
    $(window).on('load', function(){
        var illusMapWidth = $('.illus-map').width();
        setTimeout(function(){ 
            $(".-dynamic-width").width(illusMapWidth);
            console.log('-dynamic-width') 
        }, 666);

    });
    $(window).on('resize', function(){
        var win = $(this); //this = window
        setTimeout(function(){ 
            var illusMapWidth = $('.illus-map').width();
            $('.-dynamic-width').width(illusMapWidth)
        }, 666);
    });
    //END

    // scroll to horizontal center
    $(window).on('load', function(){
        var outerContent = $('.map-wrap');
        var innerContent = $('.map-wrap .illus-map');
        outerContent.scrollLeft((innerContent.width() - outerContent.width()) / 2);
    });            
    // END 


    // OX hide
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function displayOX(){
    
    var scene1Elements = document.getElementsByClassName('cowspot-s1');
    var random = getRandomInt(4)
    scene1Elements[random].classList.add("active","-stanby-");
    var scene1aElements = document.getElementsByClassName('cowspot-s1a');
    var random = getRandomInt(4)
    scene1aElements[random].classList.add("active","-stanby-");

    var scene2Elements = document.getElementsByClassName('cowspot-s2');
    var random = getRandomInt(3)
    scene2Elements[random].classList.add("active","-stanby-");

    var scene3Elements = document.getElementsByClassName('cowspot-s3');
    var random = getRandomInt(4)
    scene3Elements[random].classList.add("active","-stanby-");
    var scene3aElements = document.getElementsByClassName('cowspot-s3a');
    var random = getRandomInt(4)
    scene3aElements[random].classList.add("active","-stanby-");
    }
    
    //END OX hide
    
    // number of OX clicked

    function detect(){
        if ( oxBasket.length == 1) {
            $(".counted-ox-wrap span:nth-child(1)").addClass('active');
        }
        if ( oxBasket.length == 2) {
            $(".counted-ox-wrap span:nth-child(2)").addClass('active');
        }
        if ( oxBasket.length == 3) {
            $(".counted-ox-wrap span:nth-child(3)").addClass('active');
        }
        if ( oxBasket.length == 4) {
            $(".counted-ox-wrap span:nth-child(4)").addClass('active');
        }
        if ( oxBasket.length == 5) {
            $(".counted-ox-wrap span:nth-child(5)").addClass('active');
            $(".result-page").addClass('active');
        }
    }

    var oxBasket = [];  
    $('.cowspot').on('click', function(){
        var data = 1;
        $(this).addClass('-found-');
        oxBasket.push( data );
        console.log(oxBasket.length);
        detect();
        $(this).prepend('<img class="circle" src="assets/img/game/circle.png" />')
        
        $(this).removeClass('-stanby-')

        // var n_elements = $(".cowspot.-stanby-").length;
        // console.log('cowspot active length' + n_elements);
        // var random = Math.floor(Math.random()*n_elements);
        // $(".cowspot.-stanby-").eq(random).addClass('-display');


    })
    // END number of OX clicked


        //All buttons
        let startBtn = document.querySelector(".start");
        let stopBtn = document.querySelector(".stop");
        let resetBtn = document.querySelector(".reset");
    
        //DOM elements
        let timeLabel = document.getElementById("base-timer-label");
    
        //Time related vars
        const TIME_LIMIT = 0 //in seconds
        let timePassed = -1;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
    
        function reset() {
            clearInterval(timerInterval);
            resetVars();
            startTimer();
            $('.cowspot').removeClass('active -found-');
            $('.circle').remove();
            $('.counted-ox-wrap span').removeClass('active');
            oxBasket = [];
            displayOX();   

            // var n_elements = $(".cowspot.-stanby-").length;
            // console.log('cowspot active length' + n_elements);
            // var random = Math.floor(Math.random()*n_elements);
            // $(".cowspot.-stanby-").eq(random).addClass('-display');
        }

        document.getElementsByClassName("-reset")[0].addEventListener ("click", reset, false);
    
        function start() {
            var withReset = false;
            // setDisabled(startBtn);
            // removeDisabled(stopBtn); 
            if (withReset) {
                resetVars();
            }
            startTimer();
            
            // var n_elements = $(".cowspot.-stanby-").length;
            // console.log('cowspot active length' + n_elements);
            // var random = Math.floor(Math.random()*n_elements);
            // $(".cowspot.-stanby-").eq(random).addClass('-display');
        }
        
        function resume(){
            var withReset = false;
            // setDisabled(startBtn);
            // removeDisabled(stopBtn); 
            if (withReset) {
                resetVars();
            }
            startTimer();
        }
    
        document.getElementById ("timeStart").addEventListener ("click", start, false);
        document.getElementsByClassName("-resume")[0].addEventListener ("click", resume, false);
    
        // $('.time-start').on('click', function(){
        //     alert('haha')
        // })
    
        function stop() {
        // setDisabled(stopBtn);
        // removeDisabled(startBtn);
        // startBtn.innerHTML = "Continue";
        clearInterval(timerInterval);
        var a = $('.base-timer__label').html();
        var b = $('#finalTime').html(a);
        }
    
        document.getElementById ("timePause").addEventListener ("click", stop, false);
    
        function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT + timePassed;
            timeLabel.innerHTML = formatTime(timeLeft);
            // setCircleDasharray();
    
            // if (timeLeft === 0) {
            // timeIsUp();
            // }
        }, 1000);
        }
    
        window.addEventListener("load", () => {
        timeLabel.innerHTML = formatTime(TIME_LIMIT);
        // setDisabled(stopBtn);
        });
    
        //---------------------------------------------
        //HELPER METHODS
        //---------------------------------------------
        // function setDisabled(button) {
        // button.setAttribute("disabled", "disabled");
        // }
    
        function removeDisabled(button) {
        button.removeAttribute("disabled");
        }
        function timeIsUp() {
        // setDisabled(startBtn);
        // removeDisabled(stopBtn);
        clearInterval(timerInterval);
        var a = $('.base-timer__label').html();
        var b = $('#finalTime').html(a);
        // let confirmReset = confirm("Time is UP! Wanna restart?");
        // if (confirmReset) {
        //   reset();
        //   startTimer();
        // } else {
        //   reset();
        // }
        }
    
        $('.cowspot').on('click', function(){
            if ( oxBasket.length == 5) {
                timeIsUp()
            }
        })
    
        function resetVars() {
        // removeDisabled(startBtn);
        // setDisabled(stopBtn);
        timePassed = -1;
        timeLeft = TIME_LIMIT;
        console.log(timePassed, timeLeft);
        timeLabel.innerHTML = formatTime(TIME_LIMIT);
        }
    
        function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
    
        return `0${minutes}:${seconds}`;
        }
    
        //wechat authe
        $('.login-wechat').click(function(){
            var playerResultTimer = $('#finalTime').html(); 
            window.location.href = "https://visitdubaicny.3tilabs.com/app/api/authentication/code/auth/" + playerResultTimer;  
        });

        $('currentRank')
    
})(); 