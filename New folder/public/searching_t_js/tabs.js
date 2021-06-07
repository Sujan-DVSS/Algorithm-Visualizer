$(".tabContent").hide();
$("ul.tabs li:first").addClass("active").show();
$("ul.tabs_ li:first").addClass("active").show();
$(".tabContent:first").show();
$(".tabContent_:first").show();


$("ul.tabs li").click(function () {
  $("ul.tabs li").removeClass("active");
  $("ul.tabs_ li").removeClass("active");

  $(this).addClass("active");

  $(".tabContent").hide();
  $("ul.tabs_ li:first").addClass("active");
  $(".tabContent_").hide();


  var activeTab = $(this).find("a").attr("href");

  $(activeTab).fadeIn();
  return false;
});

$("ul.tabs_ li").click(function(){
  $("ul.tabs_ li").removeClass("active");
  $(this).addClass("active");
$(".tabContent_").hide();
  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});
