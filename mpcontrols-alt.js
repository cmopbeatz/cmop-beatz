// JavaScript Document//

window.onload = initAudioPlayer;









function initAudioPlayer() {
	
	

    var audio, playbtn, mutebtn, seekslider, volumeslider, seekto, seeking = false, songShare,
        curtimetext, durtimetext, playlist_status, dir, playlist, playlist_index, tBox, track_List, ext, emlBtn, payBtn, pCart, tWindow, tLink, abtFooter, abtText, clicked = false,
        pHead, tPanels, APlinks, closeAP, ActP, icon_TB, clockdisp, toggleClock, caldisp, contactbtn, sharebtn, contactCtn, shareCtn, optionbtn, lTAB, sTAB, pTAB, eTAB, ordSelect,ovBtn,sumBtn,lSum,sSum,pSum,eSum,lTable,sTable,pTable,eTable,pLoader,wContainer,apContainer, actPOC, 
        playlist = [];


    playlist_index = 0;

    dir = "CMO_P-Music/Masters/";
    ext = ".mp3"

    //SONG COMPENDIUM//
    //ADD SONG REFERENCES HERE//
    ////////////////////////////////
    //USE "playlist [element number]= [var for song data]"//
    ///////////////////////////////
    playlist[0] = "emptyfile";
    playlist[1] = "After Me(no-hook)";
    playlist[2] = "All In(no-hook)";
    playlist[3] = "Baddest Bitch(no-hook)";
    playlist[4] = "Beach Cruiser(no-hook)";
    playlist[5] = "Bi-Coastal(no-hook)";
    playlist[6] = "Biz_as_usual(no-hook)";
    playlist[7] = "Bottles(no-hook)";
    playlist[8] = "F-n Do It(no-hook)";
    playlist[9] = "Frenchie(no-hook)";
    playlist[10] = "Functional Fyre(no-hook)";
    playlist[11] = "Gyros(no-hook)";
    playlist[12] = "Hands-Up(no-hook)";
    playlist[13] = "HH-e(no-hook)";
    playlist[14] = "Hi-Jinx(no-hook)";
    playlist[15] = "In My Mind(no-hook)";
    playlist[16] = "Justify(no-hook)";
    playlist[17] = "Like Neon(no-hook)";
    playlist[18] = "Make It Count(no-hook)";
    playlist[19] = "Numbers(no-hook)";
	playlist[20] = "Position2(no-hook)";
   


    ////////////////////////////////////////////
    ////TRACK SELECTION ASSIGNMENTS////
    //ASSIGN HYPERLINKS TO PLAYLIST TRACKS using "hyperlinkID = playlist[position].play();"//
    ////////////////////////////////////////////


    // Set object references
	
actPOC = document.getElementById('actPOC');
 apContainer = document.getElementById('actionContainer');
	   clockdisp = document.getElementById('clock');
    toggleClock = document.getElementById('clock-toggle');
    caldisp = document.getElementById('calendar');

    playbtn = document.getElementById('playpausebtn');
    mutebtn = document.getElementById('mutebtn');

    seekslider = document.getElementById('seekslider');
    volumeslider = document.getElementById('volumeslider');

    curtimetext = document.getElementById('curtimetext');
    durtimetext = document.getElementById('durtimetext');
    playlist_status = document.getElementById('playlist_status');

    track_List = document.getElementById('trackbox');
    expandTB = document.getElementById('exp_tracklist');


    icon_TB = document.getElementById('tb_Icon');
    tBox = document.getElementById('textbox');
    emlBtn = document.getElementById('eMail');
    scBtn = document.getElementById('soundCloud');
    payBtn = document.getElementById('addToCart');

    tWindow = document.getElementById('termWindow');

    tLink = document.getElementById('ToS');
    pHead = document.getElementById('PricingHeader');
   
    tPanels = document.getElementById('pricingPanel');
    abtFooter = document.getElementById('footer');
    abtText = document.getElementById('aboutField');

   
    closeAP = document.getElementById('closeAction');
    ActP = document.getElementById('actionPanel');

    APlinks = document.getElementById('buyLinks');

    contactbtn = document.getElementById('contact');
    sharebtn = document.getElementById('share');
    contactCtn = document.getElementById('contact-options');
    shareCtn = document.getElementById('share-options');

    optionbtn = document.getElementById('options-toggle');
    optionCtn = document.getElementById('options-container');

    lTAB = document.getElementById('limitedTab');
    sTAB = document.getElementById('standardTab');
    pTAB = document.getElementById('proTab');
    eTAB = document.getElementById('exclusiveTab');

    lCont = document.getElementById('limitedContent');
    sCont = document.getElementById('standardContent');
    pCont = document.getElementById('proContent');
    eCont = document.getElementById('exclusiveContent');

    ordSelect = document.getElementsByClassName('order-dropdown');
    option1 = document.createElement('option');
    option2 = document.createElement('option');
    option3 = document.createElement('option');
	
	songshare = document.getElementById('shareSong-container');
	
	ovBtn = document.getElementById('ovBtn');
	sumBtn = document.getElementById('summBtn');
	lSum = document.getElementById('limitedInfo');
	sSum = document.getElementById('standardInfo');
	pSum = document.getElementById('proInfo');
	eSum = document.getElementById('exclusiveInfo');
	lTable  = document.getElementById('lOv');
	sTable = document.getElementById('sOv');
	pTable = document.getElementById('pOv');
	eTable = document.getElementById('eOv');

    //Audio Object//
    audio = new Audio();
    audio.preload = false;
    audio.src = dir + playlist["0"] + ext;
    audio.loop = false;
   // audio.play();


    //order dropdown add options//


  
    //Add Event Handling
    playbtn.addEventListener("click", playPause);
    mutebtn.addEventListener("click", mute);

    seekslider.addEventListener("mousedown", function(event) {
        seeking = true;
        seek(event);
    });
    seekslider.addEventListener("mousemove", function(event) {
        seek(event);
    });
    seekslider.addEventListener("mouseup", function() {
        seeking = false;
    });
    volumeslider.addEventListener("mousemove", setVolume);

    audio.addEventListener("timeupdate", function() {
        seektimeupdate();
    });
    audio.addEventListener("ended", function() {
        switchTrack();
    });

    track_List.addEventListener("change", pickTrack);
    track_List.addEventListener("change", switchStatus);

    //Functions//
///preloader ctrl////





  //options panel//
    optionbtn.onclick = function() {
        if (optionCtn.style.display === "") {

            optionCtn.style.display = "block";
        } else {
            optionCtn.style.display = "";


        }



    }


    //contact/Share(HEADER)//
    contactbtn.onclick = function() {
				   		           document.getElementById('tdDisplay').style.width="360px";
		           document.getElementById('ccCont').style.display="none";
        shareCtn.style.display = "none";

        contactCtn.style.display = "block";

    }
    sharebtn.onclick = function() {

		           document.getElementById('ccCont').style.display="none";
				   		           document.getElementById('tdDisplay').style.width="240px";
        contactCtn.style.display = "none";

        shareCtn.style.display = "block";

    }


    ////Display clock////
    toggleClock.onclick = function() {
        startTime();
        startDate();
        if (clockdisp.style.opacity === "") {

         document.getElementById('tdDisplay').style.width="360px";
			shareCtn.style.display="none";
			contactCtn.style.display="none";
           document.getElementById('ccCont').style.display="block";
		   clockdisp.style.display = "block";
            clockdisp.style.opacity = "1";
			caldisp.style.display = "block";
            caldisp.style.opacity = "1";
        } else {
			           document.getElementById('ccCont').style.display="none";
           		   clockdisp.style.display = "none";
            clockdisp.style.opacity = "";
						caldisp.style.display = "none";
            caldisp.style.opacity = "";
        }
    }

    function startDate() {
        var d = new Date();
        var day = d.getDay();
        var month = d.getMonth();
        var date = d.getDate();
        var year = d.getFullYear();

        caldisp.innerHTML = "[" + day + "]" + "¦" + month + "¦" + date + "¦" + year;
    }

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        clockdisp.innerHTML = h + ":" + m + ":" + s + "|" + "PST";
        var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {

        if (i < 10) {
            i = "0" + i
        }; // add zero in front of numbers < 10
        return i;
    }


/////expand hot-to-Contact///



    ////Expand / Close Footer////
    abtFooter.onclick = function() {
        if (abtText.style.display === "") {

            abtText.style.display = "block";
        } else {
            abtText.style.display = "";


        }



    }



    ////Terms of Service/////
    tLink.onclick = function() {
        
            if (tWindow.style.display === "") {
                tWindow.style.display = "block";
                   tPanels.style.display = "none";
            } else {
                tWindow.style.display = "";
               
            }

        }
		
		//////toggle Overview/Summary//////
		ovBtn.onclick = function(){
		ovBtn.style.backgroundColor="#999";
		sumBtn.style.backgroundColor="#333";
		ovBtn.style.color ="#333";
		sumBtn.style.color ="#999";
			
		lTable.style.display = "block";
		lSum.style.display = "none";

		sTable.style.display = "block";
		sSum.style.display = "none";

		pTable.style.display = "block";
		pSum.style.display = "none";

		eTable.style.display = "block";
		eSum.style.display = "none";
				
		}
		summBtn.onclick = function(){
		ovBtn.style.backgroundColor="#333";
		sumBtn.style.backgroundColor="#999"	
		ovBtn.style.color ="#999";
		sumBtn.style.color ="#333";	
			
		lTable.style.display = "none";
		lSum.style.display = "block";
	
		sTable.style.display = "none";
		sSum.style.display = "block";

		pTable.style.display = "none";
		pSum.style.display = "block";

		eTable.style.display = "none";
		eSum.style.display = "block";
				

		}
		
        ////Display Pricing////
    lTAB.onclick = function() {
        lCont.style.display = "block";
        sCont.style.display = "none";
        pCont.style.display = "none";
        eCont.style.display = "none";

    }
    sTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "block";
        pCont.style.display = "none";
        eCont.style.display = "none";
    }
    pTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "none";
        pCont.style.display = "block";
        eCont.style.display = "none";
    }
    eTAB.onclick = function() {
        lCont.style.display = "none";
        sCont.style.display = "none";
        pCont.style.display = "none";
        eCont.style.display = "block";
    }




    pHead.onclick = function() {

        if (tPanels.style.display === "") {
            pHead.innerHTML = "X";
            pHead.style.textIndent = "0.25px";
            tPanels.style.display = "block";
            tPanels.style.width = "330px";
            tWindow.style.display = "none";
        } else {
            pHead.innerHTML = "$";
            pHead.style.textIndent = "2px";
            tPanels.style.display = "";
            tPanels.style.width = "1px";


        }
    }

    ////Expand/Close Textbox////
    icon_TB.onclick = function() {
            if (tBox.style.opacity === "") {
                tBox.style.width = "auto";
                tBox.style.opacity = "1";


            } else {
                tBox.style.width = "0px";
                tBox.style.opacity = "";
            }


        }
        /////Expand/Close Trackbox/////

    expandTB.onclick = function() {
            if (track_List.style.opacity === ""
               ) {
                expandTB.style.borderRadius = "8px  8px 1px 1px";
                track_List.style.opacity = "1";
				  track_List.style.display = "block";
                track_List.style.height = "200px";
				expandTB.innerHTML = "COLLAPSE";




            } else {
                track_List.style.opacity = "";
				
								  track_List.style.display = "none";
                track_List.style.height = "0px";
				expandTB.style.borderRadius = "8px";
                expandTB.innerHTML = "EXPAND";

            }
        }
        //Clear Action Panel//////

  closeAP.onclick = function() {
	   if (ActP.style.display === "") {
		   actPOC.src="images/cmop-openactionbtn.png";
		 
            ActP.style.display = "none";
			ActP.style.opacity="0";
        } else {
			actPOC.src="images/cmop-closeactionbtn.png";
		   
            ActP.style.display = "";
			ActP.style.opacity = "1";
        }

    }

    
        

  


    ////eMail Display///////
    emlBtn.onclick = function() {
        document.getElementById('emailPanel')
            .style.display = 'block';
        document.getElementById('soundCloudPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'none';

    }

    ////SoundCloud Display////////
    scBtn.onclick = function() {
        document.getElementById('soundCloudPanel')
            .style.display = 'block';
        document.getElementById('emailPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'none';

    }

    ////Pay-Pal Display///////
    payBtn.onclick = function() {
        document.getElementById('soundCloudPanel')
            .style.display = 'none';
        document.getElementById('emailPanel')
            .style.display = 'none';
        document.getElementById('paypalPanel')
            .style.display = 'block';

    }



    /////Expand PanelOne/////

    ////Pick Track//////
    function pickTrack(event) {
        audio.src = dir + event.target.value;
        audio.play();
	

		}



    ////Switch Status////

    function switchStatus() {
        var selected_Track = track_List.options[track_List.selectedIndex].value;


        if (selected_Track === "emptyfile.mp3") {
            playlist_status.innerHTML = "Select a Track";

           	}else if (selected_Track === "After Me(no-hook).mp3") {
            playlist_status.innerHTML = "AfterMe";

        } else if (selected_Track === "All In(no-hook).mp3") {
            playlist_status.innerHTML = "All In";
        } else if (selected_Track === "Baddest Bitch(no-hook).mp3") {
            playlist_status.innerHTML = "Baddest Bitch";
        } else if (selected_Track === "Beach Cruiser(no-hook).mp3") {
            playlist_status.innerHTML = "Beach Cruiser";
        } else if (selected_Track === "Bi-Coastal(no-hook).mp3") {
            playlist_status.innerHTML = "Bi-Coastal";
        } else if (selected_Track === "Biz_as_usual(no-hook).mp3") {
            playlist_status.innerHTML = "Biz_as_usual";
        } else if (selected_Track === "Bottles(no-hook).mp3") {
            playlist_status.innerHTML = "Bottles";
        } else if (selected_Track === "Destined(no-hook).mp3") {
            playlist_status.innerHTML = "Destined";
			        }
	 else if (selected_Track === "F-n Do It(no-hook).mp3") {
            playlist_status.innerHTML = "F-n Do It";
			}
			else if(selected_Track === "Frenchie(no-hook).mp3")			      				{playlist_status.innerHTML = "Frenchie";}
			
			 else if (selected_Track === "Functional Fyre(no-hook).mp3") {
            playlist_status.innerHTML = "Functional Fyre";
		}
			else if (selected_Track === "Gyros(no-hook).mp3") {
            playlist_status.innerHTML = "Gyros";
        } else if (selected_Track === "Hands-Up(no-hook).mp3") {
            playlist_status.innerHTML = "Hands-Up";
			        } else if (selected_Track === "HH-e(no-hook).mp3") {
            playlist_status.innerHTML = "HH-e";
        } else if (selected_Track === "Hi-Jinx(no-hook).mp3") {
            playlist_status.innerHTML = "Hi-Jinx";
        } else if (selected_Track === "In My Mind(no-hook).mp3") {
            playlist_status.innerHTML = "In My Mind";
        } else if (selected_Track === "Justify(no-hook).mp3") {
            playlist_status.innerHTML = "Justify";
        } else if (selected_Track === "Like Neon(no-hook).mp3") {
            playlist_status.innerHTML = "Like Neon";
        } else if (selected_Track === "Make It Count(no-hook).mp3") {
            playlist_status.innerHTML = "Make It Count";
        } else if (selected_Track === "Numbers(no-hook).mp3") {
            playlist_status.innerHTML = "Numbers";
        } else if (selected_Track === "Position2(no-hook).mp3") {
            playlist_status.innerHTML = "Position2";

    }

	}


    /////Switch Track/////////

    function switchTrack() {

        if (playlist_index === (playlist.length - 1)) {
            playlist_index = 0;
        } else {
            playlist_index++;
        }
        playlist_status.innerHTML = playlist[playlist_index];
        audio.src = dir + playlist[playlist_index] + ext;
        audio.play();
    }

    /////play or pause/////////


    function playPause() {

        if (audio.paused) {

            audio.play();
            playbtn.style.background = "url(images/cmop-pausebtn.png) no-repeat";
        } else {
            audio.pause();
            playbtn.style.background = "url(images/cmop-playbtn.png) no-repeat";
        }


    }

    ///////mute////////
    function mute() {
        if (audio.muted) {
            audio.muted = false;
            mutebtn.style.background = "url(images/cmop-mute.png) no-repeat";
        } else {
            audio.muted = true;
            mutebtn.style.background = "url(images/cmop-unmute.png) no-repeat";
        }
    }
    ////////////seek slider/////
    function seek(event) {
        if (seeking) {
            seekslider.value = event.clientX - seekslider.offsetLeft;
            seekto = audio.duration * (seekslider.value / 500);
            audio.currentTime = seekto;
        }
    }

    ///////////vol slider//////
    function setVolume() {
        audio.volume = volumeslider.value / 100;
    }

    ///////time update///////
    function seektimeupdate() {
        var nt = audio.currentTime * (500 / audio.duration);
        seekslider.value = nt;

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


