$(document).ready(function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($.fn.exists=function(e){var a=[].slice.call(arguments,1);return this.length&&e.call(this,a),this},$(".parallax-image-1").exists(function(){var e=$(".parallax-image-1").offset().top;$(".parallax-image-1").parallax("50%",e,.1,!0)}),$(".parallax-image-2").exists(function(){var e=$(".parallax-image-2").offset().top;$(".parallax-image-2").parallax("50%",e,.1,!0)})),$(".slider-v1").cycle({fx:"scrollHorz",slides:".slider-item",timeout:5e3,speed:1200,easeIn:"easeInOutExpo",easeOut:"easeInOutExpo",pager:"#pager2"}),$(".slider-v2").cycle({fx:"scrollHorz",slides:".slider-item",timeout:5e3,speed:1200,easeIn:"easeInOutExpo",easeOut:"easeInOutExpo",pager:"#pager"}),$("#loader_img").show(),$(".sliderImg").load(function(){$("#loader_img").hide()})});