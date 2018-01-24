// JavaScript Documentcmop-amp-player.js



	
	
	var playCount = 0;
	
	Amplitude.init({
        "tracks": [
            {
                "Title": "Song Name 1",
                "producer": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "hip-hop"
            },
            {
                "name": "Song Name 2",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "rock"
            },
            {
                "name": "Song Name 3",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "rock"
            },
            {
                "name": "Song Name 4",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "classical"
            },
            {
                "name": "Song Name 5",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "rock"
            },
            {
                "name": "Song Name 6",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "indie"
            },
            {
                "name": "Song Name 7",
                "artist": "Artist Name",
                "album": "Album Name",
                "url": "/song/url.mp3",
                "cover_art_url": "/cover/art/url.jpg",
                "genre": "rock"
            }
        ],
		"volume": .35,
		 "callbacks": {
             'after_play': function(){
                 playCount++;
                 alert( playCount );
             }
         }
    });