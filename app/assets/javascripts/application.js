// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function(){
$(function () {
  var url = "http://localhost:8071/motion-control/update";
  
  $(".turnLeft").on("click", function () {
    $.ajax(url, { dataType: "jsonp", data: {turn: -0.5}, success: function() {
    	console.log("turning left.. [DONE]");
    	
    }});
  })

  $(".turnRight").on("click", function () {
    $.ajax(url, { dataType: "jsonp", data: {turn: +0.5}, success: function() {
  		console.log ("turning right..[DONE]");
  		
  	}})
  })
   
  $(".stop").on("click", function (){
    $.ajax(url, { dataType: "jsonp", data: {turn: 0}, success: function() {
  		console.log ("stopping..[DONE]");
  	}})
  })

  $(".forward").on("click", function (){
    $.ajax(url, { dataType: "jsonp", data: {forward: 0.5}, success: function() {
  		console.log ("forward..[DONE]");
  		$(".robot").animate({"left": "+=400px"}, 1000);

  	}})
  })

  $(".backward").on("click", function (){
    $.ajax(url, { dataType: "jsonp", data: {forward: -0.5}, success: function() {
  		console.log ("backward..[DONE]");
  		$(".robot").animate({"left": "-=400px"}, 1000);
  	}})
  })

  $(".strafeRight").on("click", function (){
    $.ajax(url, { dataType: "jsonp", data: {strafe: +0.5}, success: function() {
  		console.log ("strafeRight..[DONE]");
  		$(".robot").animate({"top": "+=150px"}, 1000);
  	}})
  })

  $(".strafeLeft").on("click", function (){
    $.ajax(url, { dataType: "jsonp", data: {strafe: -0.5}, success: function() {
  		console.log ("strafeLeft..[DONE]");
  		$(".robot").animate({"top":"-=150px" }, 1000);
  	}})
  })

});

});

	// $.ajax({url: "127.0.0.1:8071/motion-control/update", data: {forward: 1}, dataType: "jsonp"});
