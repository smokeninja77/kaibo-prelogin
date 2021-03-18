import $ from 'jquery';
import pbHTMLStructure from './htmlHolder/publicLeaderboard';
import currentpbHTMLStructure from './htmlHolder/current';

(function() {
	// Run only if section exist
    if ($('.leaderboard-page').length != 1) { return 0; }
    // console.log('run ajax')


if (!String.prototype.format) {
    String.prototype.format = function(...args) {
      return this.replace(/(\{\d+\})/g, function(a) {
        return args[+(a.substr(1, a.length - 2)) || 0];
      });
    };
}  

function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

// $.ajax({ 
//     type:"GET",
//     url:"https://visit-dubai.aikenstaging.com/api/leaderboard/", 
//     success: function(data) { 
//         var leaderboardData = '';
//         $.each(data, function(key, value){
//             // leaderboardData += '<li>';
//             // leaderboardData += '<div class="leaderboard-table-list"><span class="user-name">'+value.player.name+'</span> <div class="timer-row"> <div> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"> <path d="M5.92583 12.6999C8.64656 12.6999 10.8521 10.4943 10.8521 7.77361C10.8521 5.05288 8.64656 2.84729 5.92583 2.84729C3.2051 2.84729 0.999512 5.05288 0.999512 7.77361C0.999512 10.4943 3.2051 12.6999 5.92583 12.6999Z" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.92578 5.31042V7.77358" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.69434 0.999939H7.15749" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.4679 3.46321L10.2363 2.23163L10.8521 2.84742L9.41113 4.28837" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div><span id="" class="user-endtime">'+value.time+'</span> </div></div>';
//             // leaderboardData += '</li>';
//             $('.leaderboard-table ol').append(pbHTMLStructure.format(value.player.name, value.time));
//         });
//     },
//     // error: function()
//     dataType: 'json',
// });

  $.ajax({ 
    type:"GET",
    url:"https://visitdubaicny.3tilabs.com/app/api/leaderboard", 
    success: function(data) { 
        // console.log(data)
        // $.each(data.above_me, function(key, value){
        //   $('.leaderboard-table ol').append(currentpbHTMLStructure.format(value.username, value.time));
        // });
        $.each(data, function(key,value){
          // console.log(value);
          $('.leaderboard-table ol').append(currentpbHTMLStructure.format(value.player.name, value.time));
        })
        //$('.leaderboard-table ol').append(currentpbHTMLStructure.format(data.player.name, data.time));
        // $.each(data.below_me, function(key, value){
        //   $('.leaderboard-table ol').append(currentpbHTMLStructure.format(value.username, value.time));
        // });

        // let playerScores = $('.leaderboard-table ol li')
        // playerScores.forEach(player => {
        //   var a = $('.user-endtime').split(':')
        //   player.duration = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
        // })
        // playerScores.sort(compare)
        // console.log(playerScores)

        // $('#currentRank').html(data.current.position);
        // $('#userEndTime').html(data.current.time)
        // if ($('#currentRank').html() == '1'){
        //   $('.unit').text('st')
        // }
        // if ($('#currentRank').html() == '2'){
        //   $('.unit').text('nd')
        // }
        // if ($('#currentRank').html() == '3'){
        //   $('.unit').text('rd')
        // }

        // $('.pop-ox, .pop-ox-hand, .leaf-1, .leaf-2').addClass('animate');
    },
    // error: function()
    dataType: 'json',
  });

  // $.ajax({ 
  //   type:"GET",
  //   url:"https://visit-dubai.aikenstaging.com/api/leaderboard/", 
  //   success: function(data) { 
  //     var leaderboardData = '';
  //     // $.each(data, function(key, value){
  //     //     // leaderboardData += '<li>';
  //     //     // leaderboardData += '<div class="leaderboard-table-list"><span class="user-name">'+value.player.name+'</span> <div class="timer-row"> <div> <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none"> <path d="M5.92583 12.6999C8.64656 12.6999 10.8521 10.4943 10.8521 7.77361C10.8521 5.05288 8.64656 2.84729 5.92583 2.84729C3.2051 2.84729 0.999512 5.05288 0.999512 7.77361C0.999512 10.4943 3.2051 12.6999 5.92583 12.6999Z" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.92578 5.31042V7.77358" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4.69434 0.999939H7.15749" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.4679 3.46321L10.2363 2.23163L10.8521 2.84742L9.41113 4.28837" stroke="#AAAAAA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </div><span id="" class="user-endtime">'+value.time+'</span> </div></div>';
  //     //     // leaderboardData += '</li>';
  //     //     $('.leaderboard-table ol').append(pbHTMLStructure.format(value.player.name, value.time));
  //     //     $('.leaderboard-table ol li:gt(9)').addClass('-lb-hide');
  //     //     $('.leaderboard-table ol li:gt(9)').empty();
  //     // });

  //     let playerScores = data
  //     playerScores.forEach(player => {
  //       var a = player.time.split(':')
  //       player.duration = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
  //     })
  //     playerScores.sort(compare)
  //     console.log(playerScores)
  //   },
  //   // error: function()
  //   dataType: 'json',
  // });



  // var liContents = [];
  // $('.leaderboard-table ol li .user-endtime').each(function() {
  //   liContents.push($(this).html().replace(":","."));
  // });
  // liContents.sort(numOrdDesc);
  // $('.leaderboard-table ol li').each(function() {
  //   $(this).html(liContents.pop().replace(".",":"));
  // });

  // function numOrdDesc(a, b) {
  //   return (b - a);
  // }




  
  // show top 10 list only //

})();


(function() {
	// Run only if section exist
  if ($('.-leaderboard-result').length != 1) { return 0; }
  // console.log('-leaderboard-result')

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
  };

  var userUUID = getUrlParameter('uuid');
  // console.log('user uuid ' + userUUID)

  $.ajax({ 
    type:"GET",
    url:"https://visitdubaicny.3tilabs.com/app/api/leaderboard/rank/" + userUUID, 
    success: function(data) { 
        // $.each(data.above_me, function(key, value){
        //   $('.leaderboard-table ol').append(currentpbHTMLStructure.format(value.username, value.time));
        // });
        // $('.leaderboard-table ol').append(currentpbHTMLStructure.format(data.current.username, data.current.time));
        // $.each(data.below_me, function(key, value){
        //   $('.leaderboard-table ol').append(currentpbHTMLStructure.format(value.username, value.time));
        // });

        // let playerScores = $('.leaderboard-table ol li')
        // playerScores.forEach(player => {
        //   var a = $('.user-endtime').split(':')
        //   player.duration = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2])
        // })
        // playerScores.sort(compare)
        // console.log(playerScores)

        $('#currentRank').html(data.current.position);
        $('#userEndTime').html(data.current.time)
        if ($('#currentRank').html() == '1'){
          $('.unit').text('st')
        }
        if ($('#currentRank').html() == '2'){
          $('.unit').text('nd')
        }
        if ($('#currentRank').html() == '3'){
          $('.unit').text('rd')
        }

        $('.pop-ox, .pop-ox-hand, .leaf-1, .leaf-2').addClass('animate');
    },
    // error: function()
    dataType: 'json',
  });


})();