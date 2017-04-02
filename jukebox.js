$(document).ready(function() {
// // Stores info about the songs
// 	function Track(title,artist,genre,variable) {
// 		this.title = title;
// 		this.artist = artist;
// 		this.genre = genre;
// 		this.variable = variable;
// 	}

// 	my_girl = new Track('My Girl', 'Temptations', 'Soul', item1);
// 	dancing_in_the_street = new Track('Dancin in the Street', 'IDK', 'Soul', item2);
// 	bambi = new Track('Bambi', 'Jidenna', 'Hip-Hop',item3)
// 	some_song = new Track('Some Song I Found On the Internet', 'Some Artist', 'Some Genre',item4);
// 	var tracklist = [my_girl, dancing_in_the_street, bambi, some_song];
// Stores the songs
	// var item1 = new Audio('item1.mp3');
	// var item2 = new Audio('item2.mp3');
	// var item3 = new Audio('item3.mp3');
	// var item4 = new Audio('item4.mp3');
	// var playlist = [item1, item2, item3, item4];

// Creates JukeBox object

	function Jukebox() {
		var item1 = new Audio('item1.mp3');
		var item2 = new Audio('item2.mp3');
		var item3 = new Audio('item3.mp3');
		var item4 = new Audio('item4.mp3');
		var playlist = [item1, item2, item3, item4];
		var i = 0; 
		this.song = playlist[i];
		this.play = function() {
			this.song.play();
		}
		this.stopSong = function() {
			this.song.pause();
			this.song.currentTime = 0;
		}
		this.pause = function() {
			this.song.pause();
		}
		this.next = function () {
			this.song.pause();
			this.song.currentTime = 0;
			i++;
			this.song = playlist[i];
			this.song.play();
		}
		this.previousSong = function () {
			this.song.pause();
			this.song.currentTime = 0;
			if (i > 0) {
				i--;
				this.song = playlist[i];
				this.song.play();
			}
		}
		this.shuffle = function () {
			this.song.pause();
			this.song.currentTime = 0;
			i = Math.floor((Math.random()*4)+1);
			this.song = playlist[i];
			this.song.play();
		}
		this.firstSong = function(){
			this.song.pause();
			this.song.currentTime = 0;
			i = 1;
			this.song = playlist[i];
			this.song.play();
		}
		this.secondSong = function(){
			this.song.pause();
			this.song.currentTime = 0;
			i = 1;
			this.song = playlist[i];
			this.song.play();
		}
		this.thirdSong = function(){
			this.song.pause();
			this.song.currentTime = 0;
			i = 2;
			this.song = playlist[i];
			this.song.play();
		}
		this.fourthSong = function(){
			this.song.pause();
			this.song.currentTime = 0;
			i = 3;
			this.song = playlist[i];
			this.song.play();
		} 

		// this.Song = function() {
		// 	if (this.song = playlist[0]) {
		// 		$("#currentSongPlaying").innerText = ('My Girl');
		// 	} else {
		// 		$("#currentSongPlaying").innerText = ('ugh');
		// 	}
		// }
	}
// Creates instance of a Jukebox
	jukebox = new Jukebox();

// Creates 'buttons' for jukebox
	$('#playIt').click(function() {
 	 	jukebox.play();
	})
	$('#pauseIt').click(function() {
		jukebox.pause();
	})
	$('#stopIt').click(function() {
		jukebox.stopSong();
	})
	$('#next').click(function() {
		jukebox.next();
	})
	$('#goBack').click(function() {
			jukebox.previousSong();
	})
	$('#shuffleIt').click(function() {
		jukebox.shuffle();
	})
	$('#myGirlTrack').click(function() {
		jukebox.firstSong();

	})
	$('#dancinInTheStreetTrack').click(function() {
		jukebox.secondSong();
	})
	$('#bambiTrack').click(function() {
		jukebox.thirdSong();
	})
	$('#someSongTrack').click(function() {
		$('#someSongTrack').css('font-size', '50px');
		jukebox.fourthSong();
	})


	// jukebox.play();

});




