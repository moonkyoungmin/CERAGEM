var now = 0;
var img = 3;
$('.fade').eq(0).siblings().hide();

function slide(){
  if (now == img){
    $('.fade').eq(now).fadeOut(3000);
    $('.fade').eq(0).fadeIn(3000);
    now = 0;
  }
  else{
    $('.fade').eq(now).fadeOut();
    $('.fade').eq(now+1).fadeIn();
    now++;
  }
};

setInterval(slide, 3000);