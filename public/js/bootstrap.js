!function(t){"use strict";t.fn.TouchSpin=function(n){var o={min:0,max:100,initval:"",step:1,decimals:0,stepinterval:100,forcestepdivisibility:"round",stepintervaldelay:500,prefix:"",postfix:"",prefix_extraclass:"",postfix_extraclass:"",booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:"btn btn-default",buttonup_class:"btn btn-default"};return this.each(function(){function e(){if(!T.data("alreadyinitialized")){if(T.data("alreadyinitialized",!0),!T.is("input"))return void console.log("Must be an input.");u(),s(),b(),p(),l(),d(),f()}}function s(){""!==C.initval&&""===T.val()&&T.val(C.initval)}function a(t){i(t),b();var n=Number(k.input.val());k.input.val(n.toFixed(C.decimals))}function u(){C=t.extend({},o,S,n)}function i(n){C=t.extend({},C,n)}function p(){var n=T.val(),o=T.parent();""!==n&&(n=Number(n).toFixed(C.decimals)),T.data("initvalue",n).val(n),T.addClass("form-control"),t("<style type='text/css'>.bootstrap-touchspin-prefix:empty,.bootstrap-touchspin-postfix:empty{display:none;}</style>").appendTo("head"),o.hasClass("input-group")?r(o):c()}function r(n){n.addClass("bootstrap-touchspin");var o,e,s=T.prev(),a=T.next(),u='<span class="input-group-addon bootstrap-touchspin-prefix">'+C.prefix+"</span>",i='<span class="input-group-addon bootstrap-touchspin-postfix">'+C.postfix+"</span>";s.hasClass("input-group-btn")?(o='<button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">-</button>',s.append(o)):(o='<span class="input-group-btn"><button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">-</button></span>',t(o).insertBefore(T)),a.hasClass("input-group-btn")?(e='<button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">+</button>',a.prepend(e)):(e='<span class="input-group-btn"><button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">+</button></span>',t(e).insertAfter(T)),t(u).insertBefore(T),t(i).insertAfter(T),D=n}function c(){var n='<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">-</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+C.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+C.postfix+'</span><span class="input-group-btn"><button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">+</button></span></div>';D=t(n).insertBefore(T),t(".bootstrap-touchspin-prefix",D).after(T),T.hasClass("input-sm")?D.addClass("input-group-sm"):T.hasClass("input-lg")&&D.addClass("input-group-lg")}function l(){k={down:t(".bootstrap-touchspin-down",D),up:t(".bootstrap-touchspin-up",D),input:t("input",D),prefix:t(".bootstrap-touchspin-prefix",D).addClass(C.prefix_extraclass),postfix:t(".bootstrap-touchspin-postfix",D).addClass(C.postfix_extraclass)}}function d(){T.on("keydown",function(t){var n=t.keyCode||t.which;38===n?("up"!==B&&(m(),w()),t.preventDefault()):40===n&&("down"!==B&&(x(),g()),t.preventDefault())}),T.on("keyup",function(t){var n=t.keyCode||t.which;38===n?y():40===n&&y()}),T.on("blur",function(){b()}),k.down.on("keydown",function(t){var n=t.keyCode||t.which;(32===n||13===n)&&("down"!==B&&(x(),g()),t.preventDefault())}),k.down.on("keyup",function(t){var n=t.keyCode||t.which;(32===n||13===n)&&y()}),k.up.on("keydown",function(t){var n=t.keyCode||t.which;(32===n||13===n)&&("up"!==B&&(m(),w()),t.preventDefault())}),k.up.on("keyup",function(t){var n=t.keyCode||t.which;(32===n||13===n)&&y()}),k.down.on("mousedown touchstart",function(t){x(),g(),t.preventDefault(),t.stopPropagation()}),k.up.on("mousedown touchstart",function(t){m(),w(),t.preventDefault(),t.stopPropagation()}),k.up.on("mouseout touchleave touchend touchcancel",function(t){B&&(t.stopPropagation(),y())}),k.down.on("mouseout touchleave touchend touchcancel",function(t){B&&(t.stopPropagation(),y())}),k.down.on("mousemove touchmove",function(t){B&&(t.stopPropagation(),t.preventDefault())}),k.up.on("mousemove touchmove",function(t){B&&(t.stopPropagation(),t.preventDefault())}),t(document).on("mouseup touchend touchcancel",function(t){B&&(t.preventDefault(),y())}),t(document).on("mousemove touchmove scroll scrollstart",function(t){B&&(t.preventDefault(),y())}),C.mousewheel&&T.on("mousewheel DOMMouseScroll",function(t){var n=t.originalEvent.wheelDelta||-t.originalEvent.detail;t.stopPropagation(),t.preventDefault(),0>n?x():m()})}function f(){T.on("touchspin.uponce",function(){y(),m()}),T.on("touchspin.downonce",function(){y(),x()}),T.on("touchspin.startupspin",function(){w()}),T.on("touchspin.startdownspin",function(){g()}),T.on("touchspin.stopspin",function(){y()}),T.on("touchspin.updatesettings",function(t,n){a(n)})}function h(t){switch(C.forcestepdivisibility){case"round":return(Math.round(t/C.step)*C.step).toFixed(C.decimals);case"floor":return(Math.floor(t/C.step)*C.step).toFixed(C.decimals);case"ceil":return(Math.ceil(t/C.step)*C.step).toFixed(C.decimals);default:return t}}function b(){var t,n,o;t=T.val(),""!==t&&(C.decimals>0&&"."===t||(n=parseFloat(t),isNaN(n)&&(n=0),o=n,n.toString()!==t&&(o=n),n<C.min&&(o=C.min),n>C.max&&(o=C.max),o=h(o),Number(t).toString()!==o.toString()&&(T.val(o),T.trigger("change"))))}function v(){if(C.booster){var t=Math.pow(2,Math.floor(I/C.boostat))*C.step;return C.maxboostedstep&&t>C.maxboostedstep&&(t=C.maxboostedstep,_=Math.round(_/t*t)),Math.max(C.step,t)}return C.step}function m(){b(),_=parseFloat(k.input.val()),isNaN(_)&&(_=0);var t=_,n=v();_+=n,_>C.max&&(y(),_=C.max,T.trigger("touchspin.max")),k.input.val(Number(_).toFixed(C.decimals)),t!==_&&T.trigger("change")}function x(){b(),_=parseFloat(k.input.val()),isNaN(_)&&(_=0);var t=_,n=v();_-=n,_<C.min&&(y(),_=C.min,T.trigger("touchspin.min")),k.input.val(_.toFixed(C.decimals)),t!==_&&T.trigger("change")}function g(){y(),I=0,B="down",N=setTimeout(function(){F=setInterval(function(){I++,x()},C.stepinterval)},C.stepintervaldelay)}function w(){y(),I=0,B="up",P=setTimeout(function(){M=setInterval(function(){I++,m()},C.stepinterval)},C.stepintervaldelay)}function y(){clearTimeout(N),clearTimeout(P),clearInterval(F),clearInterval(M),I=0,B=!1}var C,D,k,_,F,M,N,P,T=t(this),S=T.data(),I=0,B=!1;e()})}}(jQuery);