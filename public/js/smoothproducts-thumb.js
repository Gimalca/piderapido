$(".sp-wrap").append('<div class="sp-large"></div>'),$(".productThumb").append('<div class="sp-thumbs sp-tb-active"></div>'),$(".sp-wrap a").appendTo(".sp-thumbs"),$(".sp-thumbs a:first").addClass("sp-current").clone().removeClass("sp-current").appendTo(".sp-large"),$(".sp-wrap").css("display","inline-block");var slideTiming=300,maxWidth=$(".sp-large img").width();$(".sp-thumbs").live("click",function(e){e.preventDefault()}),$(".sp-tb-active a").live("click",function(e){$(".sp-current").removeClass(),$(".sp-thumbs").removeClass("sp-tb-active"),$(".sp-zoom").remove();var s=$(".sp-large").height();$(".sp-large").css({overflow:"hidden",height:s+"px"}),$(".sp-large a").remove(),$(this).addClass("sp-current").clone().hide().removeClass("sp-current").appendTo(".sp-large").fadeIn(slideTiming,function(){var e=$(".sp-large img").height();$(".sp-large").height(s).animate({height:e},"fast",function(){$(".sp-large").css("height","auto")}),$(".sp-thumbs").addClass("sp-tb-active")}),e.preventDefault()}),$(".sp-large a").live("click",function(e){var s=$(this).attr("href");$(".sp-large").append('<div class="sp-zoom"><img src="'+s+'"/></div>'),$(".sp-zoom").fadeIn(),$(".sp-large").css({left:0,top:0}),e.preventDefault()}),$(document).ready(function(){$(".sp-large").mousemove(function(e){var s=$(".sp-large").width(),t=$(".sp-large").height(),a=$(".sp-zoom").width(),p=$(".sp-zoom").height(),i=$(this).parent().offset(),o=e.pageX-i.left,r=e.pageY-i.top,l=Math.floor(o*(s-a)/s),n=Math.floor(r*(t-p)/t);$(".sp-zoom").css({left:l,top:n})}).mouseout(function(){})}),$(".sp-zoom").live("click",function(e){$(this).fadeOut(function(){$(this).remove()})});