// Page Load
var video;
video = document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay=false;
	video.loop=false;

});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	
	sliderDiv = document.getElementById('volume');
	sliderDiv.innerHTML = document.getElementById('slider').value + '%';
});

// Pause Button
document.querySelector('#pause').addEventListener('click', function(){
	console.log("Video Paused");
	video.pause();
});

// Slow Down
document.querySelector('#slower').addEventListener("click", function(){
	video.defaultPlaybackRate = 1;
	let speed = .1;
	video.playbackRate -= speed;
	console.log('The video speed is ' + video.playbackRate + '.');
});

// Speed Up
document.querySelector('#faster').addEventListener("click", function(){
	video.defaultPlaybackRate = 1;
	let speed = .1;
	video.playbackRate += speed;
	console.log('The video speed is ' + video.playbackRate + '.');
});

// Skip Ahead
document.querySelector('#skip').addEventListener("click", function(){
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	console.log('The current time of video is ' + video.currentTime + '.');
});

// Mute
document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true;
		document.getElementById('mute').innerHTML = 'Unmute';
	}
	else{
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
	}
});

// Volume Slider
document.querySelector('#slider').addEventListener("click", function(){
	sliderDiv = document.getElementById('volume');
	sliderDiv.innerHTML = document.getElementById('slider').value + '%';

	video.volume = document.getElementById('slider').value/100;
});

// Styled
document.querySelector('#vintage').addEventListener("click", function(){
	document.querySelector('video').setAttribute('class','oldSchool');
});

// Original
document.querySelector('#orig').addEventListener("click", function(){
	document.querySelector('video').setAttribute('class','video');
});