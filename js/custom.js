$(document).ready(function () {
  var d = new Date();
  var x = d.getFullYear();
  var y = d.getMonth();
  var z = d.getDay();
  $(".year").text(x);
  $(".month").text(y);
  let count = 100 + Math.floor(Math.random() * 100);
  let tick = function () {
    let chances = (count <= 175) ? 3 : (count >= 396) ? 7 : 4;
    let up = Math.floor(Math.random() * 10) >= chances;
    let by = Math.floor(Math.random() * 10);
    return up ? by : by * -1;
  };
  setInterval(function () {
    count += tick();
    $('#counterpeople').text(count);
  }
               , 10000);
  $('#counterpeople').text(count);
  $('.carousel').carousel();
  setInterval(function () {
    setTimeout(function () {
      $('.text1').show("slow")
    }
                , 500);
    setTimeout(function () {
      $('.text2').show("slow")
    }
                , 1000);
    setTimeout(function () {
      $('.text3').show("slow")
    }
                , 2000);
    setTimeout(function () {
      $('.buttonload').show("slow")
    }
                , 3000);
  }
               , 15000);
  setInterval(function () {
    setTimeout(function () {
      $('.text1a').show("slow")
    }
                , 500);
    setTimeout(function () {
      $('.text2a').show("slow")
    }
                , 1000);
    setTimeout(function () {
      $('.text3a').show("slow")
    }
                , 2000);
    setTimeout(function () {
      $('.text4a').show("slow")
    }
                , 3000);
    setTimeout(function () {
      $('.text5a').show("slow")
    }
                , 4000);
    setTimeout(function () {
      $('.text6a').show("slow")
    }
                , 5000);
    setTimeout(function () {
      $('.text7a').show("slow")
    }
                , 6000);
    setTimeout(function () {
      $('.text8a').show("slow")
    }
                , 7000);
    setTimeout(function () {
      $('.text9a').show("slow")
    }
                , 8000);
    setTimeout(function () {
      $('.btnfinal').show("slow")
      , $('html, body').animate({
        scrollTop: ($('.btnfinal').last().offset().top)
        }
        , 500);
    }
                , 9000);
  }
               , 20000);
  function t(t) {
    $("html, body").animate({
      scrollTop: t
      }
      , 1e3)
  }
  setTimeout(t($(document).height()), 2e3), $(".tr-next-button").on("click", function () {
    $(this).closest(".step").hide().next(".step").fadeIn(), t(200)
  }
                                                                    ), $(".option").on("click", function () {
    $(this).toggleClass("checked tr-selected")
  }
                                                                                       )
  countdown(12);
}
                  );
var timeoutHandle;
function countdown(minutes) {
  var seconds = 60;
  var mins = minutes
  function tick() {
    var counter = document.getElementById("counter");
    var current_minutes = mins - 1
    seconds--;
    counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      timeoutHandle = setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        setTimeout(function () {
          countdown(mins - 1);
        }
                    , 1000);
      }
    }
  }
  tick();
}
