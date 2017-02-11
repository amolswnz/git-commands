    var count = 4;
    var countdown = setInterval(function(){
    $("#data").html(count);
    if (count == 0) {
      clearInterval(countdown);
      window.open('index.html', "_self");

    }
    count--;
    }, 1000);
