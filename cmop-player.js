// JavaScript Document



var playlist = [];
var playlist_index = 0; 

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
var entry = document.getElementsByClassName('s-entry');
 
 
	var audio = new Audio();
   audio.preload = false;
    audio.src(dir + playlist[0] + ext);
    audio.loop = false;
 
 

//$('.s-entry').click(function(){
	//alert($(this).html());
	//var aud = $('#play-src')

	//var src = dir + playlist[0] + ext;
;
	//aud.att('src', src);
	//console.log('source:',src);
	
	//});


$('#tracklist li').click(function(){
	alert($(this).html());
	

var src = $('#a-src');

src.attr('src',dir|$(this).html()|ext);
	
	console.log('source:',src);
	
	});
	
	
	