// header visual
$(function () {
  $(" .main_visual ul li:nth-child(1)").addClass("on");
  $(" .main_visual ul li:nth-child(3)").addClass("on");
  $(".color_yellow_h2").addClass("on");
  $(".color_fff_h2").addClass("on");
  $(".banner > h2 ").addClass("on");
  $(" .banner_bg h2").addClass("on");

  //   menu 클릭 시
  $(".hambergur").on("click", function () {
    $(".menu li").toggleClass("on");
  });

  //   햄버거바 움직임
  $(".hambergur").on("mouseenter", function () {
    $(".ham_btn1").addClass("on");
    $(".ham_btn2").addClass("on");
  });
  $(".hambergur").on("mouseleave", function () {
    $(".ham_btn1").removeClass("on");
    $(".ham_btn2").removeClass("on");
  });

  //   상단 이동 버튼

  $(".top_move").on("click", function () {
    let button = $("header").offset().top;
    // console.log(button);
    $("html,body").stop().animate({ scrollTop: button });
  });
});

function srcollIndex() {
  // header
  $(window).scrollTop() > $("header").offset().top - +0
    ? $("nav h1").addClass("on")
    : $("nav h1").removeClass("on");

  // con1

  $(window).scrollTop() > $(".con1").offset().top - +500
    ? $(".con1 .line").addClass("on")
    : $(".con1 .line").removeClass("on");

  $(window).scrollTop() > $(".con1").offset().top - +500
    ? $(".con1 >h2").addClass("on")
    : $(".con1 >h2").removeClass("on");

  $(window).scrollTop() > $(".con1").offset().top - +200
    ? $(".img_icon > img").addClass("on")
    : $(".img_icon > img").removeClass("on");

  $(window).scrollTop() > $(".con1").offset().top - +0
    ? $(".icon_wrap li").addClass("on")
    : $(".icon_wrap li").removeClass("on");

  $(window).scrollTop() > $(".con1").offset().top - +0
    ? $(".profile_txt").addClass("on")
    : $(".profile_txt").removeClass("on");
  // con2
  $(window).scrollTop() > $(".con2").offset().top - +500
    ? $(".con2 > h2").addClass("on")
    : $(".con2 > h2").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - +300
    ? $(".brid_move_ul li:nth-child(3)").addClass("on")
    : $(".brid_move_ul li:nth-child(3)").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - +300
    ? $(".brid_move_ul li:nth-child(2)").addClass("on")
    : $(".brid_move_ul li:nth-child(2)").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - +300
    ? $(".brid_move_ul li:nth-child(1)").addClass("on")
    : $(".brid_move_ul li:nth-child(1)").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - +100
    ? $(".strong_txt").addClass("on")
    : $(".strong_txt").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - +100
    ? $(".cog").addClass("on")
    : $(".cog").removeClass("on");

  $(window).scrollTop() > $(".con2").offset().top - -50
    ? $(".color_box ul li:nth-child(1)").addClass("on")
    : $(".color_box ul li:nth-child(1)").removeClass("on");
  $(window).scrollTop() > $(".con2").offset().top - -50
    ? $(".color_box ul li:nth-child(2)").addClass("on")
    : $(".color_box ul li:nth-child(2)").removeClass("on");
  $(window).scrollTop() > $(".con2").offset().top - -50
    ? $(".color_box ul li:nth-child(3)").addClass("on")
    : $(".color_box ul li:nth-child(3)").removeClass("on");

  // con3
  $(window).scrollTop() > $(".con3").offset().top - +800
    ? $(".con3 > h2").addClass("on")
    : $(".con3 > h2").removeClass("on");

  $(window).scrollTop() > $(".con3").offset().top - +600
    ? $(".mySwiper ").addClass("on")
    : $(".mySwiper ").removeClass("on");
  // con4
  $(window).scrollTop() > $(".con4").offset().top - +300
    ? $(".con4 > h2 ").addClass("on")
    : $(".con4 > h2 ").removeClass("on");
  $(window).scrollTop() > $(".con4").offset().top - +300
    ? $(" .move_wrap").addClass("on")
    : $(" .move_wrap").removeClass("on");
  $(window).scrollTop() > $(".con4").offset().top - +0
    ? $(".con4 .line ").addClass("on")
    : $(".con4 .line ").removeClass("on");

  // footer
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $("  .circle1").addClass("on")
    : $("  .circle1").removeClass("on");

  $(window).scrollTop() > $("footer").offset().top - +500
    ? $("  .circle2").addClass("on")
    : $("  .circle2").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .fo_blog ").addClass("on")
    : $("  .fo_blog ").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .tel ").addClass("on")
    : $("  .tel ").removeClass("on");

  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .left1 ").addClass("on")
    : $(" .left1 ").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .left2 ").addClass("on")
    : $(" .left2 ").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .right1 ").addClass("on")
    : $(" .right1").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .right2 ").addClass("on")
    : $(" .right2").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .right3 ").addClass("on")
    : $(" .right3").removeClass("on");
  $(window).scrollTop() > $("footer").offset().top - +500
    ? $(" .right4 ").addClass("on")
    : $(" .right4").removeClass("on");
}

$(window).scroll(function () {
  srcollIndex();
});
