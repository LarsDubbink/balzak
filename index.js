function changeRandomAudio() {
    var audio = document.getElementById("myAudio");
    
    var songs = [
      "music/AlwaysRememberUsThisWay.mp3",
      "music/BabyOneMoreTime.mp3",
      "music/CaliforniaGurls.mp3",
      "music/CallMeMaybe.mp3",
      "music/DieYoung.mp3",
      "music/FeelThisMoment.mp3",
      "music/HipsDontLie.mp3",
      "music/LastFridayNight.mp3",
      "music/PartyInTheUSA.mp3",
      "music/PokerFace.mp3",
      "music/Shallow.mp3",
      "music/TiKToK.mp3",
      "music/Timber.mp3",
      "music/WheneverWherever.mp3",
    ];
    
  var randomIndex = Math.floor(Math.random() * songs.length);
  var randomSong = songs[randomIndex];
  
  audio.src = randomSong;
  
  audio.load();
  audio.play();
}

function selectSong(x) {
    var songs = [
        "music/AlwaysRememberUsThisWay.mp3",
        "music/BabyOneMoreTime.mp3",
        "music/CaliforniaGurls.mp3",
        "music/CallMeMaybe.mp3",
        "music/DieYoung.mp3",
        "music/FeelThisMoment.mp3",
        "music/HipsDontLie.mp3",
        "music/LastFridayNight.mp3",
        "music/PartyInTheUSA.mp3",
        "music/PokerFace.mp3",
        "music/Shallow.mp3",
        "music/TiKToK.mp3",
        "music/Timber.mp3",
        "music/WheneverWherever.mp3",
      ];

    var songSelected = songs[x - 1]
    var audio = document.getElementById("myAudio");
    audio.src = songSelected
    audio.load();
    audio.play();
}
