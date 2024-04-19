var songs = [
  "WhiteGirlMusic/AlwaysRememberUsThisWay.mp3",
  "WhiteGirlMusic/BabyOneMoreTime.mp3",
  "WhiteGirlMusic/CaliforniaGurls.mp3",
  "WhiteGirlMusic/CallMeMaybe.mp3",
  "WhiteGirlMusic/DieYoung.mp3",
  "WhiteGirlMusic/FeelThisMoment.mp3",
  "WhiteGirlMusic/HipsDontLie.mp3",
  "WhiteGirlMusic/LastFridayNight.mp3",
  "WhiteGirlMusic/PartyInTheUSA.mp3",
  "WhiteGirlMusic/PokerFace.mp3",
  "WhiteGirlMusic/Shallow.mp3",
  "WhiteGirlMusic/TiKToK.mp3",
  "WhiteGirlMusic/Timber.mp3",
  "WhiteGirlMusic/WheneverWherever.mp3",
  
];

var songs2 = [
  "HipHopMusic/BoyzNTheHood.mp3",
  "HipHopMusic/CandyShop.mp3",
  "HipHopMusic/Changes.mp3",
  "HipHopMusic/CrazyInLove.mp3",
  "HipHopMusic/ExpressYourself.mp3",
  "HipHopMusic/Fein.mp3",
  "HipHopMusic/FollowGod.mp3",
  "HipHopMusic/FuckThaPolice.mp3",
  "HipHopMusic/HailMary.mp3",
  "HipHopMusic/HitEmUp.mp3",
  "HipHopMusic/InDaClub.mp3",
  "HipHopMusic/LikeToySoldiers.mp3",
  "HipHopMusic/LoveTheWayYouLie.mp3",
  "HipHopMusic/OnGod.mp3",
  "HipHopMusic/RealMuthaphuckkinGs.mp3",
  "HipHopMusic/SoFar.mp3",
  "HipHopMusic/Stan.mp3",
  "HipHopMusic/StraightOuttaCompton.mp3",
  "HipHopMusic/TheMonster.mp3",
  "HipHopMusic/ToLiveAndDieInLA.mp3",
  "HipHopMusic/WhatsTheDifference.mp3",
]

function changeRandomAudio() {
  var radioButtons = document.getElementsByName("radioButtons");

  
      
      if (radioButtons[0].checked) {

        console.log("White Girl Music button is checked");
        var audio = document.getElementById("myAudio");

      var randomIndex = Math.floor(Math.random() * songs.length);
      var randomSong = songs[randomIndex];
      
      audio.src = randomSong;
      
      audio.load();
      audio.play();

      } else if (radioButtons[1].checked) {

        console.log("HipHop button is checked");

        var audio = document.getElementById("myAudio");

      var randomIndex = Math.floor(Math.random() * songs2.length);
      var randomSong = songs2[randomIndex];
      
      audio.src = randomSong;
      
      audio.load();
      audio.play();

      }

    
}

function selectSong(x) {
    
  if (x < 15) {

    var songSelected = songs[x - 1]
    var audio = document.getElementById("myAudio");
    audio.src = songSelected
    
    audio.load();
    audio.play();

    if (document.getElementById("HipHopRadio").checked == true){
      document.getElementById("HipHopRadio").checked = false;
      document.getElementById("WhiteGirlRadio").checked = true;
    }
    

  } else if (x > 14) {
    
    

    var songSelected = songs2[x - 15]
    var audio = document.getElementById("myAudio");
    audio.src = songSelected
    
    audio.load();
    audio.play();

    if (document.getElementById("WhiteGirlRadio").checked == true){
      document.getElementById("WhiteGirlRadio").checked = false;
      document.getElementById("HipHopRadio").checked = true;
    }
    

  }

    
}