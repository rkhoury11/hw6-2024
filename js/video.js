var video;
var mute = false;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1");
	video.setAttribute("autoplay", false);
	video.setAttribute("loop", false);

});

document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();

});

function updateVolume() {
	let volumeSpan = document.getElementById("volume");
	volumeSpan.innerHTML = (video.volume * 100) + "%";
}

document.getElementById("pause").addEventListener("click", function() {
	console.log("Paused video!");
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	console.log("slowing down video");
	video.playbackRate -= 0.1;
	console.log("New speed: " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	console.log("speeding up video");
	video.playbackRate += 0.1;
	console.log("New speed: " + video.playbackRate);
});

document.getElementById("skip").addEventListener("click", function() {
	console.log("skip ahead working");
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}

	console.log("current time: " + video.currentTime);
});

document.getElementById("mute").addEventListener("click", function() {
	if (!mute) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
		mute = true;
		console.log("muted the video");
	} else {
		video.muted = false;
		mute = false;
		document.getElementById("mute").innerHTML = "Mute";
		console.log("unmuted the video");
	}
});

document.getElementById("slider").addEventListener("input", function() {
	video.volume = slider.value / 100;
	console.log("updated volume using slider");
	updateVolume();
})

document.getElementById("vintage").addEventListener("click", function () {
	console.log("applied oldSchool style");
	video.classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function () {
	console.log("removed oldSchool style");
	video.classList.remove("oldSchool");
});