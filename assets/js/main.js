function isTetDate(){let e=new Date,t=new Intl.DateTimeFormat("vi-u-ca-lunar").format(e);return/(1|2|3|4)\/(1|13)$/.test(t)}function isMobile(){let e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return e}function myFunctionOpenTopNav(){var e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"}function hideDivOnSmallScreens(){return window.innerWidth<600}function isRelative(){return!0}function isMobileDevice(){return/Mobi|Android/i.test(navigator.userAgent)}function isSlowCPU(){let e=localStorage.getItem("interfaceState");if(!e||"savemode"===e){var t=new Date().getTime();window.onload=function(){var e=document.querySelector(".featured-image");return e&&e.addEventListener("load",function(){var e=document.getElementById("ctn-preloader");e&&e.classList.contains("loaded")&&e.queue(function(){this.remove()})}),new Date().getTime()-t>8e3}}}hideDivOnSmallScreens()&&isRelative()&&isMobileDevice()&&(document.querySelector(".topnav").style.display="block"),isMobileDevice()&&document.getElementById("url-album").setAttribute("href","https://www.instagram.com/anhhangxom.daily/");const currentState=localStorage.getItem("interfaceState");function isHomePage(){return"/"===window.location.pathname}if(isMobileDevice()&&isHomePage()){let e=localStorage.getItem("interfaceState");(isSlowCPU()||!e||"savemode"===e)&&localStorage.setItem("interfaceState","savemode")}else isMobileDevice()||localStorage.setItem("interfaceState","normalmode");const interfaceState=localStorage.getItem("interfaceState");function preLoader(){var e=function(){$("#ctn-preloader").addClass("loaded"),$("#ctn-preloader").hasClass("loaded")&&$("#preloader").queue(function(){$(this).remove()})};$(window).on("load",e),setTimeout(e,1e3)}preLoader();const isLocalhost="localhost"===window.location.hostname;if(!isLocalhost){let t=document.createElement("script");t.src="https://static.elfsight.com/platform/platform.js",t.defer=!0,document.body.appendChild(t);let a=document.getElementById("searchBox");a&&(a.style.display="block")}function checkDevice(){return window.innerWidth<768||void 0!==window.orientation}const navMenu=document.getElementById("nav-menu");function consentGrantedAdStorage(){gtag("consent","update",{ad_storage:"granted"})}function loadFacebookSDK(){window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v3.2"})};var e,t=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||((e=document.createElement("script")).id="facebook-jssdk",e.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",t.parentNode.insertBefore(e,t))}function loadFacebookSDKLoad(){var e=document.createElement("script");e.async=!0,e.defer=!0,e.crossOrigin="anonymous",e.src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2086804534891096&autoLogAppEvents=1",e.nonce="y8xxA5Uo",document.head.appendChild(e)}function handleChatButtonClick(){var e=document.getElementById("chat-button");if(e){e.style.display="none";let t=document.createElement("div");t.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1"),t.setAttribute("data-elfsight-app-lazy",""),document.body.appendChild(t)}}checkDevice()||isMobileDevice()||(navMenu.style.display="none"),$(window).on("scroll",function(){window.scrollY>window.outerHeight?($("#scrollToTop").addClass("active"),document.getElementById("next-post-active").onclick=function(){window.location.replace(g||"{{ site.baseurl }}")},document.getElementById("scrollToTop").style.display="block",!hideDivOnSmallScreens()&&!isRelative&&isMobileDevice()?document.querySelector(".topnav").style.display="block":document.querySelector(".topnav").style.display="none"):($("#scrollToTop").removeClass("active"),document.getElementById("scrollToTop").style.display="none",document.querySelector(".topnav").style.display="none"),$.each($("img"),function(){if($(this).attr("data-src")&&$(this).offset().top<$(window).scrollTop()+$(window).height()+100){var e=$(this).data("src");$(this).attr("src",e),$(this).removeAttr("data-src")}})}),$("#scrollToTopButton").on("click",function(){$("html, body").animate({scrollTop:0},500)});var chatButtonAuto=!0;function checkScrollAndClick(){if(chatButtonAuto){let e=document.getElementById("replace-day"),t=document.getElementById("chat-button");e&&t&&e.getBoundingClientRect().top<=window.innerHeight&&(t.click(),handleChatButtonClick(),chatButtonAuto=!1)}}isMobile()?console.log("Bạn đang sử dụng thiết bị di động"):setTimeout(()=>{checkScrollAndClick()},1e4);const pageProgressBar=document.querySelector(".progress-bar"),scrollContainer=()=>document.documentElement||document.body;function gtag(){dataLayer.push(arguments)}document.addEventListener("scroll",()=>{let e=scrollContainer().scrollTop/(scrollContainer().scrollHeight-scrollContainer().clientHeight)*100;pageProgressBar.style.width=`${e}%`,checkScrollAndClick()}),$(document).ready(function(){$("img[loading='lazy']").each(function(){if(!$(this).hasClass("img-thumb")&&!$(this).hasClass("author-thumb")){var e=$(this).parent("a");e.length&&!e.attr("data-fancybox")&&$(this).wrap("<a href='"+$(this).attr("src")+"' data-fancybox='gallery' data-caption='source: imgur.com'></a>")}}),$("a[data-fancybox='gallery']").fancybox({})}),window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","TAG_ID"),gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"denied"}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("img").forEach(function(e){e.getAttribute("loading")||(e.classList.add("lazyload"),e.setAttribute("loading","lazy")),e.alt&&""!==e.alt.trim()||(e.alt="anhhangxom.xyz")}),document.querySelectorAll("img").forEach(function(e){e.addEventListener("load",function(){e.style.width=e.width+"px",e.style.height=e.height+"px"})});
