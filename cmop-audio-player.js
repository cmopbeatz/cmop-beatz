// JavaScript Document
window.onload = initap;
function initap(){
//element assignment
var playlist = [];
var playlist_index = 0;
    //SONG COMPENDIUM//
    //ADD SONG REFERENCES HERE//
    ////////////////////////////////
    //USE "playlist [element number]= [var for song data]"//
    ///////////////////////////////
    playlist[0] = "After Me(no-hook)";
    playlist[1] = "All In(no-hook)";
    playlist[2] = "Baddest Bitch(no-hook)";
    playlist[3] = "Beach Cruiser(no-hook)";
    playlist[4] = "Bi-Coastal(no-hook)";
    playlist[5] = "Bottles(no-hook)";
    playlist[6] = "Destined(no-hook)";
	playlist[7] = "F-n Do It(no-hook)";
    playlist[8] = "Frenchie(no-hook)";
    playlist[9] = "Functional Fyre(no-hook)";
    playlist[10] = "Gyros(no-hook)";
    playlist[11] = "Hands-Up(no-hook)";
    playlist[12] = "HH-e(no-hook)";
    playlist[13] = "Hi-Jinx(no-hook)";
    playlist[14] = "In My Mind(no-hook)";
    playlist[15] = "Justify(no-hook)";
    playlist[16] = "Like Neon(no-hook)";
    playlist[17] = "Make It Count(no-hook)";
    playlist[18] = "Numbers(no-hook)";
    playlist[19] = "Position2(no-hook)";
var dir = "CMO_P-Music/Masters/";
var ext = ".mp3"
var prd = "prod. by d1nero";
var curtimetext = document.getElementById('cur-time');
var durtimetext = document.getElementById('duration');
var track_List = document.getElementById('tracklist');
var playlist_status = document.getElementById('track-title');
var progress = document.getElementById('s-prog-bar');
var prv = document.getElementById('prev');
var nxt = document.getElementById('next');
var playbtn = document.getElementById('play-pause');

playlist_status.innerHTML = playlist[playlist_index]+ prd;
 //Audio Object//
    var audio = new Audio();
   audio.preload = false;
    audio.src = dir + playlist[0] + ext;
    audio.loop = false;
	//event handlers//
	prv.addEventListener("click",function(){
		prevtrack();
		});
	nxt.addEventListener("click",function(){
		nexttrack();
		});
	playbtn.addEventListener("click", playPause);
	audio.addEventListener("timeupdate", function() {
        seektimeupdate();
    });
    audio.addEventListener("ended", function() {
        switchTrack();
    });
    track_List.addEventListener("change", pickTrack);
    track_List.addEventListener("change", switchStatus);

  ////Pick Track//////
    function pickTrack(event) {
        audio.src = dir + event.target.value;
        audio.play();
		}
    ////Switch Status////
    function switchStatus() {
var selected_Track = track_List.options[track_List.selectedIndex].value;

        //if (selected_Track === "emptyfile.mp3") {
           //playlist_status.innerHTML = "Select a Track";

           
			if (selected_Track === "After Me(no-hook).mp3") {
            playlist_status.innerHTML = "After Me(no-hook) prod. by d1nero";

        } else if (selected_Track === "All In(no-hook).mp3") {
            playlist_status.innerHTML = "All In(no-hook) prod. by d1nero";
        } else if (selected_Track === "Baddest Bitch(no-hook).mp3") {
            playlist_status.innerHTML = "Baddest Bitch(no-hook) prod. by d1nero";
        } else if (selected_Track === "Beach Cruiser(no-hook).mp3") {
            playlist_status.innerHTML = "Beach Cruiser(no-hook) prod. by d1nero";
        } else if (selected_Track === "Bi-Coastal(no-hook).mp3") {
            playlist_status.innerHTML = "Bi-Coastal(no-hook) prod. by d1nero";
        }  else if (selected_Track === "Bottles(no-hook).mp3") {
            playlist_status.innerHTML = "Bottles(no-hook) prod. by d1nero";
        } else if (selected_Track === "Destined(no-hook).mp3") {
            playlist_status.innerHTML = "Destined(no-hook) prod. by d1nero";
			        }
	 else if (selected_Track === "F-n Do It(no-hook).mp3") {
            playlist_status.innerHTML = "F-n Do It(no-hook) prod. by d1nero";
			}
			else if(selected_Track === "Frenchie(no-hook).mp3"){
				playlist_status.innerHTML = "Frenchie(no-hook) prod. by d1nero";}
			
			 else if (selected_Track === "Functional Fyre(no-hook).mp3") {
            playlist_status.innerHTML = "Functional Fyre(no-hook) prod. by d1nero";
		}
			else if (selected_Track === "Gyros(no-hook).mp3") {
            playlist_status.innerHTML = "Gyros(no-hook) prod. by d1nero";
        } else if (selected_Track === "Hands-Up(no-hook).mp3") {
            playlist_status.innerHTML = "Hands-Up(no-hook) prod. by d1nero";
			        } else if (selected_Track === "HH-e(no-hook).mp3") {
            playlist_status.innerHTML = "HH-e(no-hook) prod. by d1nero";
        } else if (selected_Track === "Hi-Jinx(no-hook).mp3") {
            playlist_status.innerHTML = "Hi-Jinx(no-hook) prod. by d1nero";
        } else if (selected_Track === "In My Mind(no-hook).mp3") {
            playlist_status.innerHTML = "In My Mind(no-hook) prod. by d1nero";
        } else if (selected_Track === "Justify(no-hook).mp3") {
            playlist_status.innerHTML = "Justify(no-hook) prod. by d1nero";
        } else if (selected_Track === "Like Neon(no-hook).mp3") {
            playlist_status.innerHTML = "Like Neon(no-hook) prod. by d1nero";
        } else if (selected_Track === "Make It Count(no-hook).mp3") {
            playlist_status.innerHTML = "Make It Count(no-hook) prod. by d1nero";
        } else if (selected_Track === "Numbers(no-hook).mp3") {
            playlist_status.innerHTML = "Numbers(no-hook) prod. by d1nero";
        } else if (selected_Track === "Position2(no-hook).mp3") {
            playlist_status.innerHTML = "Position2(no-hook) prod. by d1nero";
    }
	}
//previous track
 function prevtrack(){
	 if(playlist_index <= 0){
	 playlist_index = 20;
	 }
	 playlist_index--;
	 console.log(playlist.length);
var x = playlist[playlist_index];
    console.log(x);
 audio.src = dir + playlist[playlist_index] + ext;
       	   playlist_status.innerHTML = playlist[playlist_index]+ prd;
	    console.log(playlist_index)
		audio.play();
  }
//next track
function nexttrack(){
	if(playlist_index >= 19){
		playlist_index = -1;
		}
	playlist_index++;
	console.log(playlist.length);
var x = playlist[playlist_index];
    console.log(x);
      audio.src = dir + playlist[playlist_index] + ext;
      	   playlist_status.innerHTML = playlist[playlist_index]+ prd;
	   console.log(playlist_index)
		audio.play();
}
    /////Switch Track/////////

    function switchTrack() {
		for(var i = 0;i<playlist;i++){
		if(playlist[i].index == undefined){
			drop_list.push(playlist[i]);
			}
		}
        if (playlist_index == (playlist.length)) {
            playlist_index = 0;
        } else {
            playlist_index++;
        }
        playlist_status.innerHTML = playlist[playlist_index]+ prd;
        audio.src = dir + playlist[playlist_index] + ext;
        audio.play();
    }
    /////play or pause/////////


    function playPause() {

        if (audio.paused) {

            audio.play();
            playbtn.src = "images/pausebtn.png";
        } else {
            audio.pause();
            playbtn.src = "images/playbutton.png";
        }

 playlist_status.innerHTML = playlist[playlist_index]+prd;
    }

   
   
function updateProgress() {

  var value = 0;
  if (audio.currentTime > 0) {
    value = Math.ceil((100 / audio.duration) * audio.currentTime);
  }
  progress.style.width = value + "%";
}


audio.addEventListener("timeupdate", updateProgress, false);
   
   
   
  

    ///////time update///////
    function seektimeupdate() {
        var nt = audio.currentTime * (500 / audio.duration);
     

        var curmins = Math.floor(audio.currentTime / 60);
        var cursecs = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - durmins * 60);

        if (cursecs < 10) {
            cursecs = "0" + cursecs;
        }
        if (dursecs < 10) {
            dursecs = "0" + dursecs;
        }
        if (curmins < 10) {
            curmins = "0" + curmins;
        }
        if (durmins < 10) {
            durmins = "0" + durmins;
        }

        curtimetext.innerHTML = curmins + "." + cursecs;
        durtimetext.innerHTML = durmins + "." + dursecs;
	}
	
	
	
}

