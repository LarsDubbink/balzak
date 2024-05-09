var LyricText = document.getElementById("lyricsh1")

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
  "WhiteGirlMusic/WheneverWherever.mp3"
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
  "HipHopMusic/GodIs.mp3",
  "HipHopMusic/GangstaGangsta"
]

const MusicLyrics = [

  `That Arizona sky burnin' in your eyes
  You look at me and, babe, I wanna catch on fire
  It's buried in my soul like California gold
  You found the light in me that I couldn't find
  So when I'm all choked up
  And I can't find the words
  Every time we say goodbye
  Baby, it hurts
  When the sun goes down
  And the band won't play
  I'll always remember us this way
  Lovers in the night
  Poets tryin' to write
  We don't know how to rhyme
  But, damn, we try
  But all I really know
  You're where I wanna go
  The part of me that's you will never die
  So when I'm all choked up
  And I can't find the words
  Every time we say goodbye
  Baby, it hurts
  When the sun goes down
  And the band won't play
  I'll always remember us this way
  Oh, yeah
  I don't wanna be just a memory, baby, yeah
  Hoo, hoo, hoo, hoo
  Hoo, hoo, hoo, hoo
  Hoo, hoo, hoo, hoo, hoo
  So when I'm all choked up
  And I can't find the words
  Every time we say goodbye
  Baby, it hurts
  When the sun goes down
  And the band won't play
  I'll always remember us this way, way, yeah
  When you look at me
  And the whole world fades
  I'll always remember us this way`,
  `Oh baby baby, Oh baby baby

  Oh baby baby, how was I supposed to know
  that something wasn't right here
  Oh baby baby, I shouldn't have let you go
  and now you're out of sight, yeah
  show me how you want it to be
  tell me baby cuz I need to know now what we've got
  
  My loneliness is killin me (and I)
  I must confess I still believe (still believe)
  When I'm not with you I lose my mind
  give me a sign, hit me baby one more time!
  
  
  Oh baby baby, the reason I breathe is you
  Boy you've got me blinded
  Oh pretty baby, there's nothin that I wouldn't do
  that's not the way I planned it
  
  Show me how you want it to be
  tell me baby cuz I need to know now what we've got
  
  My loneliness is killin me (and I)
  I must confess I still believe (still believe)
  When I'm not with you I lose my mind
  give me a sign, hit me baby one more time!
  
  Oh baby baby, Oh baby baby
  
  Oh baby baby, how was I supposed to know
  Oh pretty baby, I shouldn't have let you go
  I must confess that my loneliness is killin me now
  don't you know I still believe that you will be here
  and give me a sign, hit me baby one more time
  
  My loneliness is killin me (and I)
  I must confess I still believe (still believe)
  When I'm not with you I lose my mind
  give me a sign, hit me baby one more time!
  
  I must confess (my loneliness) that my loneliness (is killing me)
  Is killing me now (I must confess)
  Don't you know I still believe (I still believe)
  that you will be here (I lose my mind)
  And give me a sign...
  hit me baby one more time!`,
  `Greetings loved ones
  Let's take a journey
  I know a place
  Where the grass is really greener
  Warm, wet n' wild
  There must be something in the water
  Sippin' gin and juice
  Laying underneath the palm trees
  (Undone)
  The boys
  Break their necks
  Try'na to creep a little sneak peek
  (At us)
  You could travel the world
  But nothing comes close
  To the golden coast
  Once you party with us
  You'll be falling in love
  Ooh oh ooh oh oh ooh
  California girls
  We're unforgettable
  Daisy dukes
  Bikinis on top
  Sun-kissed skin
  So hot
  We'll melt your popsicle
  Ooh oh ooh
  Ooh oh ooh
  California girls
  We're undeniable
  Fine, fresh, fierce
  We got it on lock
  West coast represent
  Now put your hands up
  Ooh oh ooh
  Ooh oh ooh
  Sex on the beach
  We don't mind sand in our stilettos
  We freak
  In my jeep
  Snoop doggy-dog on the stereo oh oh
  You could travel the world
  But nothing comes close
  To the golden coast
  Once you party with us
  You'll be falling in love
  Ooh oh ooh ooh oh ooh
  California girls
  We're unforgettable
  Daisy dukes
  Bikinis on top
  Sun-kissed skin
  So hot
  We'll melt your popsicle
  Ooh oh ooh
  Ooh oh ooh
  California girls
  We're undeniable
  Fine, fresh, fierce
  We got it on lock
  West coast represent
  Now put your hands up
  Ooh oh ooh
  Ooh oh ooh
  Toned, tan
  Fit and ready
  Turn it up 'cause its gettin' heavy
  Wild, wild west coast
  These are the girls I love the most
  I mean the ones
  I mean like she's the one
  Kiss her, touch her
  Squeeze her buns
  The girl's a freak
  She drive a jeep
  And live on the beach
  I'm okay
  I won't play
  I love the bay
  Just like I love L.A.
  Venice Beach
  And Palm Springs
  Summertime is everything
  Home boys
  Bangin' out
  All that ass
  Hanging out
  Bikinis, zucchinis, martinis
  No weenies
  Just a king
  And a queenie
  Katy my lady
  (Yeah)
  And looky here baby
  (Uh huh)
  I'm all up on ya
  'Cause you representing California (oh yeah)
  California girls
  We're unforgettable
  Daisy dukes
  Bikinis on top
  Sun-kissed skin
  So hot
  We'll melt your popsicle
  Ooh oh ooh
  Ooh oh ooh
  California girls
  We're undeniable
  Fine, fresh, fierce
  We got it on lock
  West coast represent (west coast, west coast)
  Now put your hands up
  Ooh oh ooh
  Ooh oh ooh
  California girls man
  (California)
  (California girls)`,
  `I threw a wish in the well
  Don't ask me, I'll never tell
  I looked to you as it fell
  And now you're in my way
  I trade my soul for a wish
  Pennies and dimes for a kiss
  I wasn't looking for this
  But now you're in my way
  Your stare was holdin'
  Ripped jeans, skin was showin'
  Hot night, wind was blowin'
  Where you think you're going, baby?
  Hey, I just met you, and this is crazy
  But here's my number, so call me, maybe
  It's hard to look right at you, baby
  But here's my number, so call me, maybe
  Hey, I just met you, and this is crazy
  But here's my number, so call me, maybe
  And all the other boys try to chase me
  But here's my number, so call me, maybe
  You took your time with the call
  I took no time with the fall
  You gave me nothing at all
  But still, you're in my way
  I beg and borrow and steal
  At first sight, and it's real
  I didn't know I would feel it
  But it's in my way
  Your stare was holdin'
  Ripped jeans, skin was showin'
  Hot night, wind was blowin'
  Where you think you're going, baby?
  Hey, I just met you, and this is crazy
  But here's my number, so call me, maybe
  It's hard to look right at you, baby
  But here's my number, so call me, maybe
  Hey, I just met you, and this is crazy
  But here's my number, so call me, maybe
  And all the other boys try to chase me
  But here's my number, so call me, maybe
  Before you came into my life, I missed you so bad
  I missed you so bad, I missed you so, so bad
  Before you came into my life, I missed you so bad
  And you should know that
  I missed you so, so bad
  (Bad, bad, bad, bad, bad, bad)
  It's hard to look right at you, baby
  But here's my number, so call me, maybe
  Hey, I just met you, and this is crazy
  But here's my number, so call me, maybe
  And all the other boys try to chase me
  But here's my number, so call me, maybe
  Before you came into my life, I missed you so bad
  I missed you so bad, I missed you so, so bad
  Before you came into my life, I missed you so bad
  And you should know that
  So call me maybe`,
  `I hear your heart beat to the beat of the drums
  Oh, what a shame that you came here with someone
  So while you're here in my arms
  Let's make the most of the night like we're gonna die young
  We're gonna die young
  We're gonna die young
  Let's make the most of the night like we're gonna die young
  Let's make the most of the night like we're gonna die young
  Young hearts, out our minds
  Runnin' till we outta time
  Wild childs, lookin' good
  Livin' hard just like we should
  Don't care whose watching when we tearing it up (you know)
  That magic that we got nobody can touch (for sure)
  Looking for some trouble tonight (yeah)
  Take my hand, I'll show you the wild side
  Like it's the last night of our lives (uh huh)
  We'll keep dancing till we die
  I hear your heart beat to the beat of the drums
  Oh, what a shame that you came here with someone
  So while you're here in my arms
  Let's make the most of the night like we're gonna die young
  We're gonna die young
  We're gonna die young
  Let's make the most of the night like we're gonna die young
  Let's make the most of the night like we're gonna die
  Young hunks, taking shots
  Stripping down to dirty socks
  Music up, gettin' hot
  Kiss me, give me all you've got
  It's pretty obvious that you've got a crush (you know)
  That magic in your pants, it's making me blush (for sure)
  Looking for some trouble tonight (yeah)
  Take my hand I'll show you the wild side
  Like it's the last night of our lives (uh huh)
  We'll keep dancing till we die (till we die)
  I hear your heart beat to the beat of the drums
  Oh, what a shame that you came here with someone
  So while you're here in my arms,
  Let's make the most of the night like we're gonna die young
  I hear your heart beat to the beat of the drums
  Oh, what a shame that you came here with someone
  So while you're here in my arms
  Let's make the most of the night like we're gonna die young
  We're gonna die young
  We're gonna die young
  Let's make the most of the night like we're gonna die young`,
  `Ask for money, and get advice
  Ask for advice, get money twice
  I'm from the Dirty, but that chico nice
  Ya'll call it a moment, I call it life
  
  One day when the light is glowing
  I’ll be in my castle golden
  But until the gates are open
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment
  
  Mr. Worldwide
  Christina Aguilera
  Oye mamita, come on, dale, que la cosa esta rica
  (I wanna feel this moment)
  
  Feel this moment
  
  Reporting live, from the tallest building in Tokyo
  Long ways from the hard ways, bill sos, and oh yeas
  They count it always, 305 all day
  Now baby we can party, oh, baby we can party
  She read books, especially about red rooms and tie ups
  I got hooked, 'cause she seen me in a suit with the red ta-ta up
  Meet and greet, nice to meet ya, but time is money
  Only difference is I own it, now let's stop time and enjoy this moment One day when the light is glowing
  I’ll be in my castle golden
  But until the gates are open
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment
  
  Feel this moment
  
  I see the future but live for the moment, make sense don't it
  Now make dollars, I mean billions, im a genius, I mean brilliant
  This street is what scoot 'em and made em slicker, to slick with the ruler
  I've lost a lot, and learned a lot, but I'm still undefeated like Zula
  I'm far from cheap, I break down companies with all my peeps
  Baby we can travel the world and not given view, and all you can see
  Time is money, only difference is I own it
  Like a stop watch, let's stop time and enjoy this moment
  
  One day when the light is glowing
  I’ll be in my castle golden
  But until the gates are open
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment (ooohhh)
  I just wanna feel this moment
  
  Come on, feel this moment (ooohhh)
  I just wanna feel this moment(ooohhh)
  I just wanna feel this moment`,
  `Ladies up in here tonight
  No fighting
  We got the refugees up in here (no fighting)
  No fighting
  Shakira, Shakira
  I never really knew that she could dance like this (hey)
  She make a man wants to speak Spanish
  ¿Cómo se llama? (Sí), bonita (sí)
  Mi casa, su casa (Shakira, Shakira)
  Oh, baby, when you talk like that
  You make a woman go mad
  So be wise (sí) and keep on (sí)
  Reading the signs of my body (uno, dos, tres, cuatro)
  I'm on tonight
  You know my hips don't lie (no fighting)
  And I'm starting to feel it's right
  All the attraction, the tension
  Don't you see, baby, this is perfection?
  Hey, girl, I can see your body moving
  And it's driving me crazy
  And I didn't have the slightest idea
  Until I saw you dancing (yeah)
  And when you walk up on the dance floor
  Nobody cannot ignore the way you move your body, girl (just move)
  And everything so unexpected, the way you right and left it
  So you can keep on shaking it (let's go)
  I never really knew that she could dance like this
  She make a man wants to speak Spanish
  ¿Cómo se llama? (Sí), bonita (sí)
  Mi casa, su casa (Shakira, Shakira)
  Oh, baby, when you talk like that
  You make a woman go mad
  So be wise (sí) and keep on (sí)
  Reading the signs of my body (no fighting)
  I'm on tonight
  You know my hips don't lie (no fighting)
  And I am starting to feel you, boy
  Come on, let's go, real slow
  Don't you see, baby, así es perfecto?
  They know I am on tonight, my hips don't lie
  And I'm starting to feel it's right
  All the attraction, the tension
  Don't you see, baby, this is perfection? (Shakira, Shakira)
  Oh, boy, I can see your body moving
  Half animal, half man
  I don't, don't really know what I'm doing
  But you seem to have a plan
  My will and self-restraint
  Have come to fail now, fail now
  See, I am doing what I can, but I can't so you know
  That's a bit too hard to explain (uno, dos, tres, cuatro)
  Baila en la calle de noche (yeah)
  Baila en la calle de día (let's go)
  Baila en la calle de noche
  Baila en la calle de día
  I never really knew that she could dance like this
  She make a man wants to speak Spanish
  ¿Cómo se llama? (Sí), bonita (sí)
  Mi casa, su casa (Shakira, Shakira)
  Oh, baby, when you talk like that
  You know you got me hypnotized
  So be wise (sí) and keep on (sí)
  Reading the signs of my body
  Señorita, feel the conga
  Let me see you move like you come from Colombia
  Yeah (ladies sí) (yeah yeah)
  (Hey, yeah)
  ¡Mira en Barranquilla se baila así, say it! (yeah)
  En Barranquilla se baila así (yeah)
  Hey, brra!
  Yeah, she's so sexy, every man's fantasy
  A refugee like me back with the Fugees from a third world country
  I go back like when 'Pac carried crates for Humpty Humpty
  We leave the whole club dizzy
  Why the CIA wanna watch us?
  Colombians and Haitians
  I ain't guilty, it's a musical transaction
  Bo bop so bop, no more do we snatch ropes
  Refugees run the seas 'cause we own our own boats (no fighting)
  I'm on tonight, my hips don't lie
  And I'm starting to feel you, boy
  Come on, let's go, real slow
  Baby, like this is perfecto (no fighting)
  Oh, you know I'm on tonight, my hips don't lie
  And I am starting to feel it's right
  The attraction, the tension
  Baby, like this is perfection
  No fighting
  No fighting`,
  `There's a stranger in my bed
  There's a pounding in my head
  Glitter all over the room
  Pink flamingos in the pool
  I smell like a minibar
  DJ's passed out in the yard
  Barbies on the barbecue
  This a hickey or a bruise?
  Pictures of last night ended up online, I'm screwed
  Oh, well
  It's a blacked out blur, but I'm pretty sure it ruled
  Damn
  Last Friday night
  Yeah, we danced on tabletops, and we took too many shots
  Think we kissed, but I forgot last Friday night
  Yeah, we maxed our credit cards and got kicked out of the bar
  So we hit the boulevard last Friday night
  We went streaking in the park, skinny-dipping in the dark
  Then had a ménage à trois last Friday night
  Yeah, I think we broke the law, always say we're gonna stop-op, oh-whoa
  But this Friday night
  Do it all again
  But this Friday night
  Do it all again
  Trying to connect the dots
  Don't know what to tell my boss
  Think the city towed my car
  Chandelier is on the floor
  Ripped my favorite party dress
  Warrant's out for my arrest
  Think I need a ginger ale
  That was such an epic fail
  Pictures of last night ended up online, I'm screwed
  Oh, well
  It's a blacked out blur, but I'm pretty sure it ruled
  Damn
  Last Friday night
  Yeah, we danced on tabletops, and we took too many shots
  Think we kissed, but I forgot last Friday night
  Yeah, we maxed our credit cards and got kicked out of the bar
  So we hit the boulevard last Friday night
  We went streaking in the park, skinny-dipping in the dark
  Then had a ménage à trois last Friday night
  Yeah, I think we broke the law, always say we're gonna stop-op, oh-whoa
  But this Friday night
  Do it all again (do it all again)
  But this Friday night
  Do it all again (do it all again)
  But this Friday night
  Last Friday night
  Yeah, we danced on tabletops, and we took too many shots
  Think we kissed, but I forgot last Friday night
  Yeah, we maxed our credit cards and got kicked out of the bar
  So we hit the boulevard last Friday night
  We went streaking in the park, skinny-dipping in the dark
  Then had a ménage à trois last Friday night
  Yeah, I think we broke the law, always say we're gonna stop-op, oh-whoa
  But this Friday night
  Do it all again`,
  `I hopped off the plane at LAX
  With a dream and my cardigan
  Welcome to the land of fame excess (woah)
  Am I gonna fit in?
  Jumped in the cab, here I am for the first time
  Look to my right, and I see the Hollywood sign
  This is all so crazy
  Everybody seems so famous
  My tummy's turnin' and I'm feelin' kinda homesick
  Too much pressure and I'm nervous
  That's when the taxi man turned on the radio
  And a Jay-Z song was on
  And a Jay-Z song was on
  And a Jay-Z song was on
  So I put my hands up
  They're playin' my song, the butterflies fly away
  I'm noddin' my head like, yeah
  Movin' my hips like, yeah
  I got my hands up, they're playin' my song
  They know I'm gonna be okay
  Yeah, it's a party in the U.S.A.
  Yeah, it's a party in the U.S.A.
  Get to the club in my taxi cab
  Everybody's looking at me now
  Like, "Who's that chick that's rockin' kicks?
  She gotta be from out of town"
  So hard with my girls not around me
  It's definitely not a Nashville party
  'Cause all I see are stilettos
  I guess I never got the memo
  My tummy's turnin' and I'm feelin' kinda homesick
  Too much pressure and I'm nervous
  That's when the DJ dropped my favorite tune
  And a Britney song was on
  And a Britney song was on
  And a Britney song was on
  So I put my hands up
  They're playin' my song, the butterflies fly away
  I'm noddin' my head like, yeah
  Movin' my hips like, yeah
  I got my hands up, they're playin' my song
  They know I'm gonna be okay
  Yeah, it's a party in the U.S.A.
  Yeah, it's a party in the U.S.A.
  Feel like hoppin' on a flight (on a flight)
  Back to my hometown tonight (town tonight)
  Something stops me every time (every time)
  The DJ plays my song and I feel alright
  So I put my hands up
  They're playin' my song, the butterflies fly away
  I'm noddin' my head like, yeah (noddin' my head)
  Movin' my hips like, yeah (ooh, yeah)
  I got my hands up, they're playin' my song
  They know I'm gonna be okay (gonna be okay)
  Yeah, it's a party in the U.S.A.
  Yeah, it's a party in the U.S.A.
  So I put my hands up
  They're playin' my song, the butterflies fly away (flying away)
  I'm noddin' my head like, yeah (noddin' my head like, yeah)
  Movin' my hips like, yeah (movin' my hips like, yeah)
  I got my hands up, they're playin' my song
  They know I'm gonna be okay (I'm gonna be okay)
  Yeah, it's a party in the U.S.A.
  Yeah (ha-ha-ha-ha), it's a party in the U.S.A.`,
  `Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh
  Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh
  Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh
  Oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh, oh (she's got me like nobody)
  Can't read my, can't ready my
  She's got me like nobody
  Can't read my, can't ready my
  She's got me like nobody
  Can't read my, can't ready my
  She's got me like nobody
  Can't read my, can't ready my
  She's got me like nobody
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  I wanna hold 'em like they do in Texas, please
  Fold 'em, let 'em hit me, raise it, baby, stay with me (I love it)
  Love game intuition, play the cards with spades to start
  And after he's been hooked, I'll play the one that's on his heart
  Oh, whoa, oh, oh
  Whoa, oh, oh
  I'll get him hot, show him what I've got
  Oh, whoa, oh, oh
  Whoa, oh, oh
  I'll get him hot, show him what I've got
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  I wanna roll with him, a hard pair we will be (hey)
  A little gamblin' is fun when you're with me (I love it)
  Russian roulette is not the same without a gun
  And baby, when it's love, if it's not rough, it isn't fun (fun)
  Oh, whoa, oh, oh
  Whoa, oh, oh
  I'll get him hot, show him what I've got
  Oh, whoa, oh, oh
  Whoa, oh, oh
  I'll get him hot, show him what I've got
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  I won't tell you that I love you, kiss or hug you
  'Cause I'm bluffin' with my muffin
  I'm not lying, I'm just stunnin' with my love-glue-gunnin'
  Just like a chick in the casino
  Take your bank before I pay you out
  I promise this, promise this
  Check this hand 'cause I'm marvelous
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face
  P-p-p-poker face, f-f-fuck her face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Mum-mum-mum-mah
  Marvelous
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  Can't read my, can't read my
  No, he can't read my poker face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face
  P-p-p-poker face, f-f-fuck her face
  (She's got me like nobody)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)
  P-p-p-poker face, f-f-fuck her face (mum-mum-mum-mah)`,
  `Tell me something, girl
  Are you happy in this modern world?
  Or do you need more?
  Is there something else you're searchin' for?
  I'm falling
  In all the good times, I find myself longin' for change
  And in the bad times, I fear myself
  Tell me something, boy
  Aren't you tired trying to fill that void?
  Or do you need more?
  Ain't it hard keeping it so hardcore?
  I'm falling
  In all the good times, I find myself longing for change
  And in the bad times, I fear myself
  I'm off the deep end, watch as I dive in
  I'll never meet the ground
  Crash through the surface, where they can't hurt us
  We're far from the shallow now
  In the sha-ha, sha-ha-llow
  In the sha-ha-sha-la-la-la-llow
  In the sha-ha, sha-ha-llow
  We're far from the shallow now
  Oh, ha-ah-ah
  Ah, ha-ah-ah, oh, ah
  Ha-ah-ah-ah
  I'm off the deep end, watch as I dive in
  I'll never meet the ground
  Crash through the surface, where they can't hurt us
  We're far from the shallow now
  In the sha-ha, sha-ha-llow
  In the sha-ha-sha-la-la-la-llow
  In the sha-ha, sha-ha-llow
  We're far from the shallow now`,
  `Wake up in the morning feeling like P Diddy
  (Hey, what up girl?)
  Grab my glasses, I'm out the door, I'm gonna hit this city
  (Let's go)
  Before I leave, brush my teeth with a bottle of Jack
  'Cause when I leave for the night, I ain't coming back
  I'm talking pedicure on our toes, toes
  Trying on all our clothes, clothes
  Boys blowing up our phones, phones
  Drop-topping, playing our favorite CDs
  Pulling up to the parties
  Trying to get a little bit tipsy
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock on the clock
  But the party don't stop, no
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock, on the clock
  But the party don't stop, no
  Ain't got a care in world, but got plenty of beer
  Ain't got no money in my pocket, but I'm already here
  And now, the dudes are lining up cause they hear we got swagger
  But we kick 'em to the curb unless they look like Mick Jagger
  I'm talking about everybody getting crunk, crunk
  Boys tryin' to touch my junk, junk
  Gonna smack him if he getting too drunk, drunk
  Now, now, we go until they kick us out, out
  Or the police shut us down, down
  Police shut us down, down
  Po-po shut us
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock on the clock
  But the party don't stop, no
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock on the clock
  But the party don't stop, no
  DJ, you build me up
  You break me down
  My heart, it pounds
  Yeah, you got me
  With my hands up
  You got me now
  You got that sound
  Yeah, you got me
  DJ, you build me up
  You break me down
  My heart, it pounds
  Yeah, you got me
  With my hands up
  Put your hands up
  Put your hands up
  Now, the party don't start 'til I walk in
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock on the clock
  But the party don't stop, no
  Don't stop, make it pop
  DJ, blow my speakers up
  Tonight, I'mma fight
  'Til we see the sunlight
  Tick tock on the clock
  But the party don't stop, no`,
  `It's goin' down, I'm yellin' timber
  You better move, you better dance
  Let's make a night you won't remember
  I'll be the one you won't forget
  Ooh-ooh (timber), ooh-ooh (timber)
  Ooh-ooh-ooh-ooh-ooh-ooh (it's goin' down)
  Ooh-ooh (timber), ooh-ooh (timber)
  Ooh-ooh-ooh-ooh-ooh-ooh (it's goin' down, woo)
  The bigger they are, the harder they fall
  This biggity boy's a diggity dog
  I have 'em like Miley Cyrus, clothes off
  Twerking in their bras and thongs (timber)
  Face down, booty up (timber)
  That's the way we like to what (timber)
  I'm slicker than an oil spill
  She say she won't, but I bet she will (timber)
  Swing your partner 'round and 'round
  End of the night, it's goin' down
  One more shot, another round
  End of the night, it's goin' down
  Swing your partner 'round and 'round
  End of the night, it's goin' down
  One more shot, another round
  End of the night, it's goin' down
  It's goin' down, I'm yellin' timber
  You better move, you better dance
  Let's make a night you won't remember
  I'll be the one you won't forget
  It's goin' down (it's goin' down), I'm yellin' timber
  You better move (you better move), you better dance (you better dance)
  Let's make a night you won't remember
  I'll be the one you won't forget (you won't forget)
  Whoa-oh-oh (timber), whoa-oh-oh-oh-oh (timber)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (it's goin' down)
  Whoa-oh-oh (timber), whoa-oh-oh-oh-oh (timber)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (it's goin' down, woo)
  Look up in the sky, it's a bird? It's a plane?
  Nah, it's just me, ain't a damn thing changed
  Live in hotels, swing on planes
  Blessed to say, money ain't a thing
  Club jumpin' like LeBron, now Voli
  Order me another round, homie
  We about to climb, why?
  'Cause it's about to go down
  Swing your partner 'round and 'round
  End of the night, it's goin' down
  One more shot, another round
  End of the night, it's goin' down
  Swing your partner 'round and 'round
  End of the night, it's goin' down (oh-oh-oh)
  One more shot, another round
  End of the night, it's goin' down
  It's goin' down, I'm yellin' timber
  You better move, you better dance
  Let's make a night you won't remember
  I'll be the one you won't forget
  It's goin' down (it's goin' down), I'm yellin' timber
  You better move, you better dance (you better dance)
  Let's make a night (let's make a night) you won't remember
  I'll be the one you won't forget (you won't forget)
  Whoa-oh-oh (timber), whoa-oh-oh-oh-oh (hey, timber)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (it's goin' down, Pitbull)
  Whoa-oh-oh (timber, oh), whoa-oh-oh-oh-oh (timber)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (it's goin' down, woo)
  Whoa-oh-oh (timber), whoa-oh-oh-oh-oh (timber, come on)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (it's goin' down)
  Whoa-oh-oh (timber), whoa-oh-oh-oh-oh (you won't forget)
  Oh-oh, oh-oh-oh-oh, oh-oh-oh-oh (timber)`,
  `Lucky you were born that far away so
  We could both make fun of distance
  Lucky that I love a foreign land for
  The lucky fact of your existence
  Baby, I would climb the Andes solely
  To count the freckles on your body
  Never could imagine there were only
  Ten million ways to love somebody
  Le-do-lo-le-lo-le, le-do-lo-le-lo-le
  Can't you see? I'm at your feet
  Whenever, wherever
  We're meant to be together
  I'll be there, and you'll be near
  And that's the deal, my dear
  There over, hereunder
  You'll never have to wonder
  We can always play by ear
  But that's the deal, my dear
  Lucky that my lips not only mumble
  They spill kisses like a fountain
  Lucky that my breasts are small and humble
  So you don't confuse 'em with mountains
  Lucky I have strong legs like my mother
  To run for cover when I need it
  And these two eyes that for no other
  The day you leave, will cry a river
  Le-do-lo-le-lo-le, le-do-lo-le-lo-le
  At your feet, I'm at your feet
  Whenever, wherever
  We're meant to be together
  I'll be there, and you'll be near
  And that's the deal, my dear
  There over, hereunder
  Or up above, don't wonder
  We can always play by ear
  But that's the deal, my dear
  Le-do-lo-le-lo-le, le-do-lo-le-lo-le
  Think out loud, say it again
  Le-do-lo-le-lo-le-lo-le
  Tell me one more time
  That you'll live lost in my eyes
  Whenever, wherever
  We're meant to be together
  I'll be there, and you'll be near
  And that's the deal, my dear
  There over, hereunder
  You got me head over heels
  There's nothing left to fear
  If you really feel the way I feel
  Whenever, wherever
  We're meant to be together
  I'll be there, and you'll be near
  And that's the deal, my dear
  There over, hereunder
  You got me head over heels
  There's nothing left to fear
  If you really feel the way I feel`,
  `Cruising down the street in my six four
  Jockin' the freaks clocking the dough
  Went to the park to get the scoop
  Knuckleheads out there cold shooting some hoops
  A car pulls up who can it be
  A fresh El Camino rollin' Kilo G
  He rolls down his window and he started to say
  It's all about making that GTA
  
  'Cause the boyz n tha hood are always hard
  You come talking that trash we'll pull your card
  Knowing nothing in life but to be legit
  Don't quote me boy, 'cause I ain't said shit
  
  Donald B's in the place to give me the pace
  He said my man JD is on freebase
  The boy JD was a friend of mine
  Till I caught him in my car trying to steal my Alpine
  Chased him up the street to call a truce
  The silly cluck head pulled out a deuce-deuce
  Little did he know I had a loaded twelve gauge
  One sucker dead, LA Times front page
  
  'Cause the boyz n tha hood are always hard
  You come talking that trash we'll pull your card
  Knowing nothing in life but to be legit
  Don't quote me boy, 'cause I ain't said shit
  
  Bored as hell and I wanna get ill
  Went to the spot where my homebys chill
  The fellows out there, making that dollar
  I pulled up in my six four Impala
  They greet me with a forty and I started drinking
  And from the eight-ball my breath start stinking
  Love to get my girl, to rock that body
  Before I left I hit the Bacardi
  Went to her house to get her out of the pad
  Dumb hoe says something that made me mad
  She said somethin' that I couldn't believe
  So I grabbed the stupid bitch by her nappy ass weave
  She started talkin' shit, wouldn't you know?
  Reached back like a pimp and slapped the hoe
  Her father jumped out and he started to shout
  So I threw a right-cross cold knocked his old ass out
  
  'Cause the boyz n tha hood are always hard
  You come talking that trash we'll pull your card
  Knowing nothing in life but to be legit
  Don't quote me boy, 'cause I ain't said shit
  
  I'm rollin' hard now I'm under control
  Then wrapped my six four round the telephone poll
  I looked at my car and I said, "Oh brother
  I throw it in the gutter and go buy another"
  Walkin' home I see the G ride
  Now Kat is drivin' Kilo on the side
  As they busted a U, they got pulled over
  An undercover cop in a dark green Nova
  Kat got beaten for resistin' arrest
  He socked the pig in the head for rippin' his Guess
  Now G is caught for doin' the crime
  Fourth offense on the boy, he'll do some time
  
  'Cause the boyz n tha hood are always hard
  You come talking that trash we'll pull your card
  Knowing nothing in life but to be legit
  Don't quote me boy, 'cause I ain't said shit
  
  I went to get them out but there was no bail
  The fellaz start to riot in the county jail
  Two days later in municipal court
  Kilo G on trial cold cut a fart
  Disruption of a court, said the judge
  On a six-year sentence my man didn't budge
  Bailiff came over to turn him in
  Kilo G looked up and gave a grin
  He yelled out fire then came Suzy
  The bitch came in with a sub-machine Uzi
  Police shot the girl but didn't hurt her
  Both up state for attempted murder
  
  'Cause the boyz n tha hood are always hard
  You come talking that trash we'll pull your card
  Knowing nothing in life but to be legit
  Don't quote me boy, 'cause I ain't said shit`,
  `I'll take you to the candy shop
  I'll let you lick the lollipop
  Go 'head girl, don't you stop
  Keep going 'til you hit the spot (woah)
  You can have it your way, how do you want it
  You gon' back that thing up or should i push up on it
  Break it down for you now, baby it's simple
  If you be a nympho, I'll be a nympho
  Got the magic stick, I'm the love doctor
  Have your friends teasing you 'bout how sprung I gotcha
  Wanna show me how you work it baby, no problem
  Get on top then get to bouncing round like a low rider
  I'm a seasons vet when it come to this shit
  After you work up a sweat you can play with the stick
  I'm trying to explain baby the best way I can
  I melt in your mouth girl, fuckin not in your hands (ha ha)
  I'll take you to the candy shop
  I'll let you lick the lollipop
  Go 'head girl, don't you stop
  Keep going 'til you hit the spot (woah)
  Give it to me baby, nice and slow
  Climb on top, ride it like you in the rodeo
  You ain't never heard a sound like this before
  Cause I ain't never put it down like this before
  I touch the right spot at the right time
  Lights on or lights off, she like it from behind
  So seductive, you should see the way she wind
  Her hips in slow-mo on the floor when we grind
  As Long as she ain't stopping, homie I ain't stopping
  Dripping wet with sweat man, its on and popping
  Ohh I'm trying to explain baby the best way I can
  I melt in your mouth girl, fuckin not in your hands (ha ha)
  I'll take you to the candy shop
  I'll let you lick the lollipop
  Go 'head girl, don't you stop
  Keep going 'til you hit the spot (woah)
  Licking and such
  Licking and such
  Licking and such
  Licking and such...`,
  `Come on, come on
  I see no changes, wake up in the morning, and I ask myself
  Is life worth living, should I blast myself?
  I'm tired of bein' poor, and even worse I'm black
  My stomach hurts, so I'm lookin' for a purse to snatch
  Cops give a damn about a negro
  Pull the trigger, kill a nigga, he's a hero
  Give the crack to the kids who the hell cares
  One less hungry mouth on the welfare
  First, ship 'em dope and let 'em deal the brothers
  Give 'em guns, step back, watch 'em kill each other
  It's time to fight back, that's what Huey said
  Two shots in the dark, now Huey's dead
  I got love for my brother, but we can never go nowhere
  Unless we share with each other
  We gotta start makin' changes
  Learn to see me as a brother instead of two distant strangers
  And that's how it's supposed to be
  How can the devil take a brother, if he's close to me?
  I'd love to go back to when we played as kids
  But things changed, and that's the way it is
  Come on, come on
  That's just the way it is
  Things will never be the same
  That's just the way it is
  Ooh, yeah
  Come on, come on
  That's just the way it is
  Things will never be the same
  That's just the way it is
  Aww, yeah
  I see no changes, all I see is racist faces
  Misplaced hate makes disgrace to races
  We under, I wonder what it takes to make this
  One better place, let's erase the wasted
  Take the evil out the people, they'll be acting right
  'Cause mo' black and white is smokin' crack tonight
  And only time we chill is when we kill each other
  It takes skill to be real, time to heal each other
  And although it seems heaven sent
  We ain't ready, to see a black President
  It ain't a secret, don't conceal the fact
  The penitentiary's packed, and it's filled with blacks
  But some things will never change
  Try to show another way but you stayin' in the dope game
  Now tell me, what's a mother to do?
  Bein' real don't appeal to the brother in you
  You gotta operate the easy way
  (I made a G today) But you made it in a sleazy way
  Sellin' crack to the kid (I gotta get paid)
  Well, hey, well, that's the way it is
  Come on, come on
  That's just the way it is
  Things will never be the same
  That's just the way it is
  Aww, yeah
  Come on, come on
  That's just the way it is
  Things will never be the same
  That's just the way it is
  Aww, yeah
  We gotta make a change
  It's time for us as a people to start makin' some changes
  Let's change the way we eat
  Let's change the way we live
  And let's change the way we treat each other
  You see, the old way wasn't working so it's on us to do
  What we gotta do, to survive
  And still I see no changes, can't a brother get a little peace?
  There's war in the streets and war in the Middle East
  Instead of war on poverty, they got a war on drugs
  So the police can bother me
  And I ain't never did a crime, I ain't have to do
  But now, I'm back with the facts givin' 'em back to you
  Don't let 'em jack you up, back you up
  Crack you up and pimps smack you up
  You gotta learn to hold ya own
  They get jealous when they see ya, with ya mobile phone
  But tell the cops, they can't touch this
  I don't trust this, when they try to rush, I bust this
  That's the sound of my tool, you say it ain't cool?
  But mama didn't raise no fool
  And as long as I stay black, I gotta stay strapped
  And I never get to lay back
  'Cause I always got to worry 'bout the pay backs
  Some buck that I roughed up way back
  Comin' back after all these years
  Rat-a-tat, tat, tat, tat, that's the way it is
  That's just the way it is
  Things will never be the same
  That's just the way it is (Way it is)
  Aww, yeah
  That's just the way it is
  Things will never be the same
  That's just the way it is
  Aww, yeah`,
  `Tell myself that I was doing alright
  There's nothing left to do tonight
  But go crazy on you
  Crazy on you
  Let me go crazy, crazy on you
  
  Can't you see what you do to me baby?
  You make me crazy, you make me act like a maniac.
  I'm like a lunatic, you make me sick
  You're truly the only one who can do this to me
  You just make me get so crazy.
  
  I go schizo, I get so insane I just go schizophrenic
  One minute I wanna slit your throat, the next I wanna sex
  You make me crazy,
  The way we act
  Like two maniacs in the sack
  We fuck like two jackrabbits
  And maybe that's a bad habit.
  
  'Cause the next day we're right back at it
  In the same exact pattern
  What the fuck is the matter with us?
  We can't figure out if it's lust or it's love
  What's that that's attracting us to each other?
  They say that every man grows up to marry his own mother.
  
  Which would explain why you're such a motherfucking bitch
  But I stay and still stick it out with you even though I just hit you today
  But you deserve it you hit me first and provoked me to choke you
  Just 'cause I came home late last night crawled in bed and I woke you.
  
  But if there's one thing about you that I admire it's, baby,
  Because you stay with me, maybe, because you're as crazy as I am
  'Cause when I look at you I can see an angel in your eyes
  But if I look deeper inside I see your freakish little side.
  
  Like a devil in disguise,
  You're always full of surprises
  Always pullin' devices
  Out your purse: little vibrators and dildoes
  You fucked yourself so much
  You barely feel those anymore
  You're only twenty-four but you're plenty more mature
  Than those other little hoes
  Who just act like little girls
  Like they're in middle school still
  You're crazy sexy cool,
  
  Chilling you play your position
  You never step out of line
  Even though I stay in your business
  You've always kept out of mine.
  
  I wonder what's on your mind
  Sometimes they say love is blind
  Maybe that's why the first time I dotted your eye
  You ain't see the sign.
  
  Or maybe you did
  Maybe you like being shoved
  Maybe 'cause we're crazy in love
  
  Crazy on you
  Crazy on you
  Let me go crazy crazy on you
  
  You are the ink to my paper
  What my pen is to my pad
  The moral, the very fiber
  The whole substance to my rap.
  
  You are my reason for being
  The meaning of my existence
  If it wasn't for you
  I would never be able to spit this
  As intense as I do and the irony
  Is you rely on me as much
  As I rely on you to inspire me like you do.
  
  You provide me the lighter fluid
  You're fuel to my fire
  You're my entire supply
  Gas, the match and igniter.
  
  The only way that I am able
  To stay so stable
  Is you're the legs to my table
  If you were to break I'd fall on my face.
  
  But I'm always gonna make you feel
  I don't need you as much as I really need you
  So you don't use it to your advantage.
  
  But you're essential to me
  You're the air I breathe
  I believe if you ever leave me
  I'd probably have no reason to be.
  
  You are the Kim to my Marshall
  You're the Slim to my Shady
  The Dre to my Eminem
  The Alaina to my Hailie.
  
  You are the word that I'm looking for when
  I'm trying to describe how I feel inside
  And the right one just won't come to my mind.
  
  You're like the pillar that props me up
  The beam that supports me
  The bitch who never took half,
  The wife who never divorced me.
  
  You're like the root to my evil
  You let my devil come out me
  You let me beat the shit out you
  Before you beat the shit out me.
  
  And no matter how much
  Too much is never enough
  Maybe 'cause we're crazy in love
  
  Crazy on you
  Crazy on you
  Let me go crazy crazy on you`,
  `Yo man, there's a lot of brothers out there
  Flaking and perpetrating but scared to kick reality
  Man, you been doing all this dope producing
  You ain't had a chance to show 'em what time it is
  So what you want me to do?
  (Express yourself)
  I'm expressing with my full capabilities
  And now I'm living in correctional facilities
  'Cause some don't agree with how I do this
  I get straight and meditate like a Buddhist
  I'm dropping flavor, my behavior is hereditary
  But my technique is very necessary
  Blame it on Ice Cube, because he said it gets funky
  When you got a subject and a predicate
  Add it on a dope beat, and it'll make you think
  Some suckers just tickle me pink, to my stomach
  'Cause they don't flow like this one
  You know what? I won't hesitate to diss one
  Or two before I'm through, so don't try to sing this
  Some drop science, while I'm dropping English
  Even if Yella, makes it a-capella
  I still express, yo, I don't smoke weed or sess
  'Cause it's known to give a brother brain damage
  And brain damage on the mic don't manage, nothing
  But making a sucker and you equal
  Don't be another sequel (express yourself)
  Now, getting back to the PG
  That's program, and it's easy
  Dre is back, new jacks are made hollow
  Expressing ain't their subject because they like to follow
  The words, the style, the trend, the records I spin
  Again and again and again, yo, you're on the other end
  Watch a brother blend dope rhymes, with no help
  There's no fessing or guessing while I'm expressing myself
  It's crazy to see people be
  What society wants them to be, but not me
  Ruthless, is the way to go, they know
  Others say rhymes which fail to be original
  Or they kill where the hip-hop starts
  Forget about the ghetto, and rap for the pop charts
  Some musicians cuss at home
  But scared to use profanity when upon the microphone
  Yeah, they want reality, but you will hear none
  They'd rather exaggerate a little fiction
  Some say no to drugs, and take a stand
  But after the show, they go looking for the "Dopeman"
  Or they ban my group from the radio
  Hear N.W.A. and say, "Hell no"
  But you know it ain't all about wealth
  As long as you make a note to (express yourself)
  From the heart
  'Cause if you want to start to move up the chart
  Then expression is a big part of it
  You ain't efficient when you flow, you ain't swift
  Movin' like a tortoise, full of rigor mortis
  There's a little bit more to show
  I got rhymes in my mind, embedded like an embryo
  Or a lesson, all of 'em expression
  And if you start fessing, I got a Smith and Wesson for ya
  I might ignore your record because it has no bottom
  I get loose in the summer winter spring and autumn
  It's Dre on the mic, getting physical
  Doin' the job, N.W.A is the lynch mob
  Yes I'ma climb, but you know you need this
  And the knowledge is growing just like a fetus
  Or a tumor, but here is the rumor
  Dre is in the neighborhood and he's up to no good
  When I start expressing myself, Yella, slam it
  'Cause if I stay funky like this I'm doing damage
  Or I'ma be too hyped, and need a straight jacket
  I got knowledge, and other suckers lack it
  So, when you see Dre, a DJ on the mic
  Ask what it's like, it's like we're getting hyped tonight
  'Cause if I strike, it ain't for your good health
  But I won't strike if you just (express yourself)`,
  `Just come outside for the night (yeah)
  Take your time, get your light (yeah)
  Johnny Dang, huh-uh
  I been out geekin'
  Bitch
  Fein', fein', fein', fein'-fein' (yeah)
  Fein', fein', fein', fein'-fein' (yeah)
  Fein', fein', fein', fein'-fein'
  Fein', fein', fein', fein' (yeah)
  The career's more at stake when you in your prime (at stake)
  Fuck that paper, baby, my face on the dotted line (dot, yeah)
  I been flyin' out of town for some peace of mind (yeah, yeah, bitch)
  It's like always they just want a piece of mine (ah)
  I been focused on the future, never on right now (ah)
  But I'm sippin' that kombucha, either pink or brown (it's lit)
  I'm the one that introduced you to the you right now (mm, let's go)
  Oh my God, that bitch bite (that bitch bite)
  But alright (alright), tryna vibe (tryna vibe this)
  In the night, come alive
  Ain't asleep, ain't a-, ain't a-, ain't-ain't-ain't-
  Fein', fein', fein', fein'-fein'
  Fein', fein', fein', fein'-fein'
  Fein', fein', fein', fein'-fein'
  Fein', fein', fein', fein', fein'
  Fein', fein', fein'
  Syrup, whoa, what?
  What?
  (Homixide, Homixide, Homixide, Homixide) what?
  (Yeah, whoa, yeah, yeah)
  (Homixide, Homixide, Homixide, Homixide, yeah)
  (Yeah, hol' up, yeah)
  Yeah, I just been poppin' my shit it's been gettin' live, hol' up (shit)
  Yeah, you try to come wrong 'bout this shit, we poppin' ya tires, hol' up (shit)
  Uh, hunnid round, whoa, feelin' like I'm on ten
  Playin' both sides with these hoes (hol' up)
  Shawty, I'm fuckin' yo' friends (hol' up)
  I been goin' crazy, shawty, I've been in the deep end
  She not innocent, uh, shit, she tryna go
  Fein', fein' (talm 'bout), fein', fein'-fein'-fein' (yeah, syrup, oh-oh, what?)
  Fein', fein', fein', fein'-fein'-fein' (syrup, oh-oh)
  Fein', fein', fein', fein'-fein'-fein' (talm 'bout, talm 'bout, let's go)
  I just been icin' my hoes
  I just been drippin' my ho (drippin' my ho)
  This is a whole 'nother level, shawty
  I got these hoes on they toes (hoes on they toes)
  I put the bitch on the road
  She tryna fuck on the O, hol' up, hol' up
  I got this ho with me, she tryna show me some', hol' up, hol' up
  I got flows for days, these niggas ain't knowin' none, hol' up, hol' up
  Me and my bro locked in, you know we on one, hol' up (slatt, slatt)
  We in the spot goin' crazy, until the sun up
  You worried about that ho, that ho done chose us (slatt, bitch-ass)
  Uh, pistols all in the kitchen, can't give the zip code up, hol' up, yeah (wow)
  Fein', fein', fein' (hol' up, hol' up, huh, yeah)
  Why the fuck these niggas actin' like they know us?
  Double O, Cactus, yeah, we towed up, uh (skrrt, skrrt)
  Switch out the bag, these niggas get rolled up, hol' up, slatt (it's lit)
  Everything hit, hol' up
  Everything Homixide, Homixide (Homixide, Homixide, Homixide, Homixide)
  Fein', fein', fein', fein'-fein'-fein'
  (Homixide, Homixide, Homixide, Homixide, Homixide, Homixide, Homixide)`,
  `Father, I stretch
  Stretch my hands to You
  Lifelike, this is what your life like, try to live your life right
  People really know you, push your buttons like type write
  This is like a movie, but it's really very lifelike
  Every single night right, every single fight, right?
  I was looking at the 'Gram and I don't even like likes
  I was screamin' at my Dad, he told me, "It ain't Christ-like"
  I was screamin' at the referee just like Mike
  Lookin' for a bright light, Sigel, what your life like
  Riding on a white bike, feeling like excite bike (stretch my hands to You)
  Pressin' on the gas, supernova for a night light
  Screamin' at my dad and he told me, "It ain't Christ-like"
  But nobody never tell you when you're being like Christ
  Only ever seein' me only when they needin' me
  Like if Tyler Perry made a movie for BET
  Searchin' for a deity, now you wanna see it free
  Now you wanna see if we, let's just see if three a piece
  Tell me what your life like, turn it down, a bright light
  Drivin' with my dad, and he told me, "It ain't Christ-like" (stretch my hands to You)
  I'm just tryna find, I've been lookin' for a new way
  I'm just really tryna not to really do the fool way
  I don't have a cool way, bein' on my best, though
  Block 'em on the text though, nothin' else next though
  Not another word, letter, picture, or a decimal (Father, I stretch)
  Wrestlin' with God, I don't really want to wrestle
  Man, it's really lifelike, everything in my life (stretch my hands to You)
  Arguing with my dad, and he said, "It ain't Christ-like"
  Man
  You know, it's like
  Somebody only close who can get you, like, off your
  I be on my
  I woke up this morning, I said my prayers
  I'm all good, then I tried to talk to my dad (stretch my hands to You)
  Give him some advice, he starts spazzin' on me
  I start spazzin' back, he said "That ain't Christ-like"
  I said, "Aah"`,
  `Right about now NWA court is in full effect
  Judge Dre presiding in the case of NWA versus the police department.
  Prosecuting attourneys are MC Ren, Ice Cube and Eazy motherfuckin' E
  Order, order, order, Ice Cube take the motherfuckin' stand
  Do you swear to tell the truth the whole truth
  And nothin' but the truth so help your black ass?
  You goddamn right
  Well, won't you tell everybody what the fuck you gotta say?
  Fuck the police comin' straight from the underground
  A Young nigga got it bad 'cause I'm brown
  And not the other color so police think
  They have the authority to kill a minority
  Fuck that shit, 'cause I ain't the one
  For a punk motherfucker with a badge and a gun
  To be beatin' on, and thrown in jail
  We can go toe-to-toe in the middle of a cell
  Fuckin with me 'cause I'm a teenager
  With a little bit of gold and a pager
  Searchin' my car, lookin' for the product
  Thinkin' every nigga is sellin' narcotics
  You'd rather see me in the pen
  Than me and Lorenzo rollin' in the Benzo
  Beat a police outta shape
  And when I'm finished, bring the yellow tape
  To tape off the scene of the slaughter
  Still getting swole off bread and water
  I don't know if they fags or what
  Search a nigga down and grabbin' his nuts
  And on the other hand, without a gun, they can't get none
  But don't let it be a black and a white one
  'Cause they'll slam ya down to the street top
  Black police showin' out for the white cop
  Ice Cube will swarm
  On any motherfucker in a blue uniform
  Just 'cause I'm from the CPT, punk police are afraid of me
  A young nigga on a warpath
  And when I'm finished, it's gonna be a bloodbath
  Of cops, dyin' in L.A.
  Yo Dre, I got somethin' to say
  Fuck the police, fuck-, fuck-
  Fuck the police, fuck-, fuck-
  Fuck the police, fuck the-, fuck the-
  Fuck the police (Example of scene one)
  Pull your goddamn ass over right now
  Aw shit, now what the fuck you pullin' me over for?
  'Cause I feel like it
  Just sit your ass on the curb and shut the fuck up
  Man, fuck this shit
  Alright, smart-ass, I'm taking your black ass to jail
  MC Ren, will you please give your testimony
  To the jury about this fucked up incident
  Fuck the police and Ren said it with authority
  Because the niggas on the street is a majority
  A gang, is with whoever I'm steppin'
  And the motherfuckin' weapon is kept in
  A stash spot, for the so-called law
  Wishin' Ren was a nigga that they never saw
  Lights start flashin' behind me
  But they're scared of a nigga so they mace me to blind me
  But that shit don't work, I just laugh
  Because it gives 'em a hint not to step in my path
  For police, I'm sayin', "Fuck you, punk"
  Readin' my rights and shit, it's all junk
  Pullin' out a silly club, so you stand
  With a fake-ass badge and a gun in your hand
  But take off the gun so you can see what's up
  And we'll go at it, punk, I'ma fuck you up
  Make ya think I'm a kick your ass
  But drop your gat, and Ren's gonna blast
  I'm sneaky as fuck when it comes to crime
  But I'm a smoke 'em now, and not next time
  Smoke any motherfucker that sweats me
  Or any asshole that threatens me
  I'm a sniper with a hell of a scope
  Takin' out a cop or two, they can't cope with me
  The motherfuckin' villian that's mad
  With potential to get bad as fuck
  So I'm a turn it around
  Put in my clip, yo, and this is the sound
  Yeah, somethin' like that, but it all depends on the size of the gat
  Takin' out a police would make my day
  But a nigga like Ren don't give a fuck to say
  Fuck the police, fuck-, fuck-
  Fuck the police, fuck-, fuck-
  Fuck the police, fuck the-, fuck the-
  Fuck the police
  Yeah, man, what you need?
  Police, open now (Aww, shit)
  We have a warrant for Eazy-E's arrest
  Get down and put your hands right where I can see 'em!
  Man, what the fuck did I do? Man, what did I do?
  Just shut the fuck up and get your motherfucking ass on the floor!
  But I didn't do shit
  Man, just shut the fuck up!
  Eazy-E, won't you step up to the stand
  And tell the jury how you feel about this bullshit?
  I'm tired of the motherfuckin' jackin'
  Sweatin' my gang while I'm chillin' in the shack, and
  Shining the light in my face, and for what?
  Maybe it's because I kick so much butt
  I kick ass, or maybe 'cause I blast
  On a stupid ass nigga when I'm playin' with the trigger
  Of any Uzi or an AK
  'Cause the police always got somethin' stupid to say
  They put up my picture with silence
  'Cause my identity by itself causes violence
  The E with the criminal behavior
  Yeah, I'm a gangster, but still, I got flavor
  Without a gun and a badge, what do ya got?
  A sucka in a uniform waitin' to get shot
  By me, or another nigga.
  And with a gat, it don't matter if he's smarter or bigger
  (Size don't mean shit, he's from the old school, fool)
  And as you all know, E's here to rule
  Whenever I'm rollin', keep lookin in the mirror
  And ears on cue, yo, so I can hear a
  Dumb motherfucker with a gun
  And if I'm rollin' off the eight, he'll be the one
  That I take out, and then get away
  While I'm drivin off laughin'
  This is what I'll say
  Fuck the police, fuck-, fuck-
  Fuck the police, fuck-
  Fuck the police, fuck-, fuck-
  Fuck the police (The verdict)
  The jury has found you guilty of being a redneck
  Whitebread, chicken shit motherfucker
  Wait, that's a lie, that's a goddamn lie
  Get him out of here (I want justice)
  Get him the fuck out my face (I want justice)
  Out, right now
  Fuck you, you black motherfuckers
  Fuck the police
  Fuck the police
  Fuck the police`,
  `Makaveli in this... Killuminati, all through your body
  The blow's like a twelve gauge shotty
  Uh, feel me!
  And God said he should send his one begotten son
  To lead the wild into the ways of the man
  Follow me; eat my flesh, flesh and my flesh
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  I ain't a killer but don't push me
  Revenge is like the sweetest joy next to getting pussy
  Picture paragraphs unloaded, wise words being quoted
  Peeped the weakness in the rap game and sewed it
  Bow down, pray to God hoping that he's listening
  Seeing niggas coming for me, to my diamonds, when they glistening
  Now pay attention, rest in peace father
  I'm a ghost in these killing fields
  Hail Mary catch me if I go, let's go deep inside
  The solitary mind of a madman who screams in the dark
  Evil lurks, enemies, see me flee
  Activate my hate, let it break, to the flame
  Set trip, empty out my clip, never stop to aim
  Some say the game is all corrupted, fucked in this shit
  Stuck, niggas is lucky if we bust out this shit, plus
  Mama told me never stop until I bust a nut
  Fuck the world if they can't adjust
  It's just as well, Hail Mary
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  Penitentiaries is packed with promise makers
  Never realize the precious time the bitch niggas is wasting
  Institutionalized I lived my life a product made to crumble
  But too hardened for a smile, we're too crazy to be humble, we balling
  Catch me father please, cause I'm falling, in the liquor store
  That's the Hennessee I hear ya calling, can I get some more?
  Hail 'til I reach Hell, I ain't scared
  Mama checking in my bedroom; I ain't there
  I got a head with no screws in it, what can I do
  One life to live but I got nothing to lose, just me and you
  On a one way trip to prison, selling drugs
  We all wrapped up in this living, life as Thugs
  To my homeboys in Clinton Max, doing they bid
  Raise hell to this real shit, and feel this
  When they turn out the lights, I'll be down in the dark
  Thuggin eternal through my heart, now Hail Mary nigga
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  They got a APB, out on my Thug family
  Since the Outlawz run these streets, like these skanless freaks
  Our enemies die now, walk around half dead
  Head down, K blasted off Hennessee and Thai
  Trying it, mixed it, now I'm twisted blisted and high
  Visions of me, Thug living getting me by
  Forever live, and I multiply survived by Thugs
  When I die they won't cry unless they coming with slugs
  Peep the whole scene and whatever's going on around me
  Brain kinda cloudy, smoked out feeling rowdy
  Ready to wet the party up, and whoever in that motherfucker
  Nasty new street, slugger my heat seeks suckers
  On the regular mashing in a stolen black Ac Integ-ra
  Cock back, sixty seconds 'til the draw that's when I'm dead in ya
  Feet first, you got a nice gat but my heat's worse
  From a Thug to preaching church, I gave you love now you eating dirt
  Needing work, and I ain't the nigga to put you on
  Cause word is bond when I was broke I had to hustle 'til dawn
  That's when sun came up, there's only one way up
  Hold ya head and stay up, to all my niggas get ya pay and weight up
  If it's on then it's on, we break beat-breaks
  Outlawz on a paper chase, can you relate
  To this shit I don't got, be the shit I gotta take
  Dealing with fate, hoping God don't close the gate
  If it's on then it's on, we break beat-breaks
  Outlawz on a paper chase, can you relate
  To this shit I don't got, be the shit I gotta take
  Dealing with fate, hoping God don't close the gate
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  We've been traveling on this wayward road
  Long time 'til I be take a 'eavy load
  But we ride, ride it like a bullet
  Hail Mary, Hail Mary
  We won't worry everything will come real
  Free like the bird in the tree
  We won't worry everything will come real
  Yes we free like the bird in the tree
  We running from the penitentiary
  This is the time for we liberty
  Hail Mary, Hail Mary
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  Come with me, Hail Mary
  Run quick see, what do we have here
  Now, do you wanna ride or die
  La dadada, la la la la
  Westside, Outlawz, Makaveli the Don, Solo, Killuminati, The 7 Days`,
  `I ain't got no motherfuckin' friends (sucka-ass)
  That's why I fucked yo' bitch, you fat motherfucker
  West side, Bad Boy killers (take money, take money)
  You know who the realest is, niggas, we bring it to you (take money)
  That's aight
  (Take money)
  First off, fuck your bitch and the clique you claim
  Westside when we ride, come equipped with game
  You claim to be a player but I fucked your wife
  We bust on Bad Boy niggas fucked for life
  Plus, Puffy tryin' to see me weak hearts I rip
  Biggie Smalls and Junior M.A.F.I.A. some mark-ass bitches
  We keep on comin' while we runnin' for yo' jewels
  Steady gunnin', keep on bustin' at them fools, you know the rules
  Lil' Ceaser, go ask ya homie how I leave ya
  Cut your young ass up, leave you in pieces, now be deceased
  Lil' Kim, don't fuck around with real G's
  Quick to snatch yo' ugly ass off the streets, so fuck peace
  I let them niggas know it's on for life
  Don't let the Westside ride tonight (haha)
  Bad Boy murdered on wax and killed
  Fuck wit' me and get yo' caps peeled, you know, see
  Grab ya Glocks when you see Tupac
  Call the cops when you see Tupac, uh
  Who shot me? But ya punks didn't finish
  Now ya 'bout to feel the wrath of a menace
  Nigga, I hit em' up
  Check this out, you motherfuckers know what time it is (take money)
  I don't even know why I'm on this track (take money)
  Y'all niggas ain't even on my level
  I'ma let my little homies ride on you (take money)
  Bitch made-ass Bad Boy bitches, feel it (hey, yo, yo, hold the fuck up, yo)
  Get out the way, yo, get out the way, yo
  Biggie Smalls just got dropped
  Little Mu', pass the MAC and let me hit him in his back
  Frank White need to get spanked right for settin' traps
  Little accident murderers and I ain't never heard of ya
  Poisonous gats attack when I'm servin' ya
  Spank ya, shank ya whole style when I gank
  Guard your rank 'cause I'ma slam your ass in the paint
  Puffy weaker than the fuckin' block I'm runnin' through, nigga
  And I'm smokin' Junior M.A.F.I.A. in front of you, nigga
  With the ready power tuckin' my Guess under my Eddie Bauer
  Ya clout petty sour, I push packages every hour, hit 'em up
  Grab ya Glocks when you see Tupac
  Call the cops when you see Tupac, uh
  Who shot me? But ya punks didn't finish
  Now ya 'bout to feel the wrath of a menace
  Nigga, we hit em' up
  Peep how we do it, keep it real as penitentiary steel
  This ain't no freestyle battle
  All you niggas gettin' killed with ya mouths open
  Tryna come up offa me, you in the clouds hopin'
  Smokin' dope, it's like a sherm high, niggas think they learned to fly
  But they burn, motherfucker, you deserve to die
  Talkin' 'bout you gettin' money but it's funny to me
  All you niggas livin' bummy why you fuckin' with me?
  I'm a self-made millionaire
  Thug livin' outta prison, pistols in the air
  Biggie, remember when I used to let you sleep on the couch
  And beg a bitch to let you sleep in the house?
  Now it's all about Versace, you copied my style
  Five shots couldn't drop me, I took it and smiled
  Now I'm 'bout to set the record straight
  With my AK, I'm still the thug that you love to hate
  Motherfucker, I hit 'em up
  I'm from N-E-W Jers'
  Where plenty murders occurs
  No points or commas, we bring drama to all you herbs
  Now go check the scenario
  Little Ceas', I'll bring you fake G's to your knees
  Coppin' pleas in de Janeiro
  Little Kim, is you coked up or doped up?
  Get your little Junior Whopper clique smoked up
  What the fuck, is you stupid?
  I take money, crash and mash through Brooklyn
  With my clique lootin', shootin' and pollutin' your block
  With a 15-shot cocked Glock to your knot
  Outlaw MAFIA clique movin' up another notch
  And your pop stars popped and get mopped and dropped
  And all your fake ass East Coast props
  Brainstormed and locked
  You's a beat biter
  A Pac style taker
  I'll tell you to your face you ain't shit but a faker
  Softer than Alizé with a chaser
  About to get murdered for the paper
  E.D.I Mean approach the scene of the caper
  Like a loc, with Little Ceas' in a choke
  Gun totin' smoke, we ain't no motherfuckin' joke
  Thug Life, niggas better be known
  We approachin' in the wide open, gun smokin'
  No need for hopin', it's a battle lost
  I got 'em crossed as soon as the funk is boppin' off
  Nigga, I hit 'em up
  Now you tell me who won
  I see them, they run (hahaha)
  They don't wanna see us (take money)
  Whole Junior M.A.F.I.A. clique
  Dressing up trying to be us (take money)
  How the fuck they gon' be the mob when we always on our job? (Take money)
  We millionaires
  Killin' ain't fair but somebody gotta do it (take money)
  Oh yeah, Mobb Deep (take money) you wanna fuck with us?
  You little young-ass motherfuckers (take money)
  Don't one of you niggas got sickle cell or something? (Take money)
  You fucking with me
  Nigga, you fuck around and have a seizure or a heart attack (take money)
  You better back the fuck up 'fore you get smacked the fuck up
  This is how we do it on our side
  Any of you niggas from New York that wanna bring it, bring it
  But we ain't singin', we bringin' drama
  Fuck you and your motherfuckin' mama
  We gon' kill all you motherfuckers
  Now when I came out, I told you it was just about Biggie
  Then everybody had to open their mouth with a motherfuckin' opinion
  Well this is how we gon' do this
  Fuck Mobb Deep, fuck Biggie
  Fuck Bad Boy as a staff, record label and as a motherfuckin' crew
  And if you want to be down with Bad Bo, then fuck you too
  Chino XL, fuck you too
  All you motherfuckers, fuck you too (take money, take money)
  All of y'all motherfuckers, fuck you, die slow, motherfucker
  My .44 make sure all y'all kids don't grow
  You motherfuckers can't be us or see us
  We motherfuckin' Thug Life riders, Westside 'til we die
  Out here in California, nigga, we warned ya
  We'll bomb on you motherfuckers, we do our job
  You think you mob? Nigga, we the motherfuckin' mob
  Ain't nothin' but killers and the real niggas
  All you motherfuckers feel us
  Our shits go triple and 4-quadruple
  (Take money)
  You niggas laugh 'cause our staff got
  Guns in they motherfuckers belts
  You know how it is when we drop records, they felt
  You niggas can't feel it, we the realest
  Fuck 'em, we Bad Boy killers (we killers)`,
  `Go, go, go, go
  Go, go, go shawty
  It's your birthday
  We gon' party like it's your birthday
  We gon' sip Bacardi like it's your birthday
  And you know we don't give a fuck
  It's not your birthday!
  
  You can find me in the club, bottle full of bub
  Look mami, I got the X, if you into takin' drugs
  I'm into having sex, I ain't into making love
  So come give me a hug if you into to getting rubbed
  
  You can find me in the club, bottle full of bub
  Look mami, I got the X if you into takin' drugs
  I'm into having sex, I ain't into making love
  So come give me a hug if you into to getting rubbed
  
  When I pull out up front, you see the Benz on dubs
  When I roll 20 deep, there's always drama in the club
  Nigga heard I fuck with Dre, everybody show me love
  When you sell like Eminem you get plenty of groupie love
  Look homie, ain't nothin' changed: Pros down, G's up
  I see Xzibit in the cut, hey man, roll them trees up (roll it!)
  If you watch how I move, you'll mistake me for a player or pimp
  Been hit with a few shells, but I don't walk with a limp (I'm aight)
  In the hood in L.A. they sayin': 50, you hot (huh, uh)
  They like me, I want 'em to love me like they love Pac
  But holla in New York, fo' sho' they'll tell you I'm loco (yeah!)
  And the plan is to put the rap game in a chokehold (huh, uh)
  I'm fully focused, man, my money on my mind
  Got a mil' out the deal and I'm still on the grind (whoo!)
  Now Shorty said she feelin' my style, she feelin' my flow (huh, uh)
  Her girlfriend with her, they bi and they ready to go (okay!)
  
  You can find me in the club, bottle full of bub
  Look mami, I got the X if you into takin' drugs
  I'm into having sex, I ain't into making love
  So come give me a hug if you into to getting rubbed
  
  You can find me in the club, bottle full of bub
  Look mami, I got the X if you into takin' drugs
  I'm into having sex, I ain't into making love
  So come give me a hug if you into to getting rubbed
  
  My flow, my show brought me the dough
  That bought me all my fancy things
  My crib, my cars, my clothes, my jewels
  Look, homie, I done came up and I ain't changed (what? What? Yeah!)
  
  And you should love it way more than you hate it
  Oh, you mad? I thought that you'd be happy I made it (whoo!)
  I'm that cat by the bar toastin' to the good life
  Moved out the hood, now you tryin' to pull me back, right?
  When my joint get to pumpin' in the club, it's on
  I wink my eye at yo' chick, if she smiles, she gone
  If the roof on fire, man, just let it burn
  They talkin' about money, homie, I ain't concerned
  I'ma tell you what Banks told me
  'Cause, go 'head, switch the style up
  And if they hate, then let 'em hate, and watch the money pile up
  Or we can go upside your head with a bottle of bub'
  Come on, they know where we be (whoo!)`,
  `Step by step, heart to heart, left right left
  We all fall down
  
  Step by step, heart to heart, left right left
  We all fall down like toy soldiers
  Bit by bit, torn apart, we never win
  But the battle wages on for toy soldiers
  
  I'm supposed to be the soldier who never blows his composure
  Even though I hold the weight of the whole world on my shoulders
  I ain't never supposed to show it, my crew ain't supposed to know it
  Even if it means goin' toe to toe with a Benzino it don't matter
  I'd never drag them in battles that I can't handle unless I absolutely have to
  I'm supposed to set an example
  I need to be the leader, my crew looks for me to guide 'em
  If some shit ever does pop off, I'm supposed to be beside 'em
  That Ja shit I tried to squash it, it was too late to stop it
  There's a certain line you just don't cross and he crossed it
  I heard him say Hailie's name on a song and I just lost it
  It was crazy, this shit went way beyond some Jay-z and Nas shit
  And even though the battle was won, I feel like we lost it
  I spent so much energy on it, honestly I'm exhausted
  And I'm so caught in it I almost feel I'm the one who caused it
  This ain't what I'm in hip-hop for, it's not why I got in it
  That was never my object for someone to get killed
  Why would I wanna destroy something I help build
  It wasn't my intentions, my intentions were good
  I went through my whole career without ever mentionin'
  And that was just out of respect for not runnin' my mouth
  And talkin' about something that I knew nothing about
  Plus Dre told me stay out, this just wasn't my beef
  So I did, I just fell back, watched and gritted my teeth
  While he's all over T.V. down talkin' a man who literally saved my life
  Like fuck it I understand this is business
  And this shit just isn't none of my business
  But still knowin' this shit could pop off at any minute cause
  
  Step by step, heart to heart, left right left
  We all fall down like toy soldiers
  Bit by bit, torn apart, we never win
  But the battle wages on for toy soldiers
  
  There used to be a time when you could just say a rhyme
  And wouldn't have to worry about one of your people dyin'
  But now it's elevated cause once you put someone's kids in it
  The shit gets escalated, it ain't just words no more is it?
  It's a different ball game, you call names and you ain't just rappin'
  We actually tried to stop the 50 and Ja beef from happenin'
  Me and Dre had sat with him, kicked it and had a chat with him
  And asked him not to start it he wasn't gonna go after him
  Until Ja started yappin' in magazines how we stabbed him
  Fuck it 50 smash him! Mash on him and let him have it
  Meanwhile my attention's pulled in another direction
  Some receptionist at The Source who answers phones at his desk
  Has an erection for me and thinks that I'll be his resurrection
  Tries to blow the dust off his mic and make a new record
  But now he's fucked the game up cause one of the ways I came up
  Was through that publication the same one that made me famous
  Now the owner of it has got a grudge against me for nothin'
  Well fuck it, that motherfucker could get it too, fuck him then
  But I'm so busy being pissed off I don't stop to think
  That we just inherited 50's beef with Murder Inc
  And he's inherited mine which is fine ain't like either of us mind
  We still have soldiers that's on the front line
  That's willing to die for us as soon as we give the orders
  Never to extort us, strictly to show they support us
  We'll maybe shout 'em out in a rap or up in a chorus
  To show them we love 'em back and let 'em know how important it is
  To have Runyan Avenue, soldiers up in our corners
  Their loyalty to us is worth more than any award is
  But I ain't tryna have none of my people hurt and murdered
  It ain't worth it, I can't think of a perfecter way to word it
  Than to just say that I love ya'll too much to see the verdict
  I'll walk away from it all 'fore I let it go any further
  But don't get it twisted, it's not a plea that I'm coppin'
  I'm just willin' to be the bigger man
  If ya'll can quit poppin' off at the jaws, well then I can
  Cause frankly I'm sick of talkin'
  I'm not gonna let someone else's coffin rest on my conscience cause
  
  Step by step, heart to heart, left right left
  We all fall down like toy soldiers
  Bit by bit, torn apart, we never win
  But the battle wages on for toy soldiers`,
  `Just gonna stand there and watch me burn?
  Well, that's alright, because I like the way it hurts
  Just gonna stand there and hear me cry?
  Well, that's alright, because I love the way you lie
  I love the way you lie
  I can't tell you what it really is
  I can only tell you what it feels like
  And right now, there's a steel knife in my windpipe
  I can't breathe, but I still fight while I can fight
  As long as the wrong feels right, it's like I'm in flight
  High off of love, drunk from her hate
  It's like I'm huffing paint and I love her, the more I suffer
  I suffocate and right before I'm about to drown
  She resuscitates me, she fucking hates me
  And I love it, "Wait
  Where you going?" "I'm leaving you"
  "No you ain't, come back"
  We're running right back, here we go again
  It's so insane 'cause when it's going good, it's going great
  I'm Superman, with the wind at his back, she's Lois Lane
  But when it's bad, it's awful
  I feel so ashamed, I snapped, "Who's that dude?"
  I don't even know his name, I laid hands on her
  I'll never stoop so low again, I guess I don't know my own strength
  Just gonna stand there and watch me burn?
  Well, that's alright, because I like the way it hurts
  Just gonna stand there and hear me cry?
  Well, that's alright, because I love the way you lie
  I love the way you lie
  I love the way you lie
  You ever love somebody so much you can barely breathe when you're with 'em?
  You meet, and neither one of you, even know what hit 'em
  Got that warm fuzzy feeling, yeah, them chills, used to get 'em
  Now you're getting fucking sick of looking at 'em
  You swore you've never hit 'em, never do nothing to hurt 'em
  Now you're in each other's face
  Spewing venom in your words when you spit 'em
  You push, pull each other's hair, scratch, claw, bit 'em
  Throw 'em down, pin 'em, so lost in the moments when you're in 'em
  It's the rage that took over, it controls you both
  So they say you're best to go your separate ways
  Guess that they don't know ya 'cause today, that was yesterday
  Yesterday is over, it's a different day
  Sound like broken records playin' over
  But you promised her, next time you'll show restraint
  You don't get another chance, life is no Nintendo game
  But you lied again
  Now you get to watch her leave out the window
  Guess that's why they call it window pane
  Just gonna stand there and watch me burn?
  Well, that's alright, because I like the way it hurts
  Just gonna stand there and hear me cry?
  Well, that's alright, because I love the way you lie
  I love the way you lie
  I love the way you lie
  Now I know we said things, did things that we didn't mean
  Then we fall back into the same patterns
  Same routine, but your temper's just as bad as mine is
  You're the same as me, when it comes to love, you're just as blinded
  Baby, please come back, it wasn't you
  Baby, it was me, maybe our relationship isn't as crazy as it seems
  Maybe that's what happens when a tornado meets a volcano
  All I know is I love you too much to walk away though
  Come inside, pick up your bags off the sidewalk
  Don't you hear sincerity in my voice when I talk?
  Told you this is my fault, look me in the eyeball
  Next time I'm pissed, I'll aim my fist at the drywall
  Next time? There won't be no next time
  I apologize, even though I know it's lies
  I'm tired of the games, I just want her back, I know I'm a liar
  If she ever tries to fucking leave again
  I'm a tie her to the bed and set this house on fire
  Just gonna stand there and watch me burn?
  Well, that's alright, because I like the way it hurts
  Just gonna stand there and hear me cry?
  Well, that's alright, because I love the way you lie
  I love the way you lie
  I love the way you lie`,
  `"How you get so much favor on your side?"
  "Accept Him as your Lord and Savior, " I replied
  Thou shalt love thy neighbor, not divide
  I'ma ride, that's on God
  His light shine the brightest in the dark
  Single mothers know they got my heart
  And all my brothers locked up on the yard
  You can still be anything you wanna be
  Went from one in four to one in three
  Thirteenth amendment, gotta end it, that's on me
  He the new commander and the chief
  That's on Keef, that's on God
  Before the ranch, I had horses in the garage
  When the Forbes cover was just a mirage
  They had me chasin' statues, that's on pride
  Oh my God, Busta said, "That's on Tribe"
  When I thought the Book of Job was a job
  The Devil had my soul, I can't lie
  Life gon' have some lows and some highs
  Before the Grammy's ever gave a nod
  I wore my heart on my sleeve, I couldn't hide
  In '03, they told me not to drive
  I bleached my hair for every time I could've died
  But I survived, that's on God
  I've been tellin' y'all since '05
  The greatest artist restin' or alive
  That's on L.A. Reid, that's on Clive
  That's no Jive, that's on God
  Off the 350s He supplied
  The IRS want they fifty plus our tithe
  Man, that's over half of the pie
  I felt dry, that's on God
  That's why I charge the prices that I charge
  I can't be out here dancin' with the stars
  No, I cannot let my family starve
  I go hard, that's on God
  Okay, okay, okay, okay`,
  `Comp-ton, Comp-ton, Comp-ton, Comp-ton
  Real muthaphuckkin G's
  Real muthaphuckkin G's
  Real muthaphuckkin G's
  Real muthaphuckkin G's
  Hey yo Doctor, here's another proper track
  And it's phat, watch the sniper, time to pay the piper
  And let that real shit provoke
  See you's a wannabe 'loc, and you'll get smoked and I hope
  That your fans understand when you talk about sprayin' me
  The same records that you makin' is payin' me
  Motherfuck Dre, motherfuck Snoop, motherfuck Death Row
  Yo, and here comes my left blow
  Cause I'm the E-A-Z-Y-E and this is the season
  To let the real motherfuckin' G's in
  You're like a kid you found a pup and now you're dapper
  But tell me where the fuck you found an anorexic rapper
  Talkin' bout who you gon' squabble with and who you shoot
  You're only sixty pounds when you're wet and wearin' boots
  (Damn E, they tried to fade you on Dre Day)
  But Dre Day only meant Eazy's payday
  All of a sudden Dr. Dre is the G Thang
  But on his old album cover he was a she-thang
  So nigga please, nigga please, don't step to deez
  Motherfuckin' real G's
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Everyday it's a new rapper, claimin' to be dapper than the Dresta
  Softer than a bitch but portray the role of gangsta
  Ain't broke a law in your life
  Yet every time you rap you yap about the guns and knife
  Just take a good look at the, nigga and you'll capture
  The fact that the bastard, is simply just an actor
  Who mastered the bang and the slang and the mental
  Of niggas in Compton, Watts, and South Central
  Never ever once have you ran with the turf
  But yet in every verse claim you used to do the dirt
  But tell me who's a witness, to your fuckin' work
  So you never had no bid'ness, so save the drama, jerk
  Niggas straight kill me, knowing that they pranksters
  This is going out to you studio gangstas
  See I did dirt, put in work, and many niggas can vouch that
  So since I got stripes, I got the right to rap about that
  But niggas like you, I gotta hate ya
  Cause I'm just tired of suburbia niggas
  Talking about they come from projects
  Knowing you ain't seen the parts of the streets G
  Think you started trying to bang around the time of the peace treaty
  Wearing khakis and mob while you rhyme
  Little fag, tried to sag, but you're flooding at the same time
  And your set don't accept ya
  Scared to kick it with your homies cause you know they don't respect ya
  So nigga please, check nuts before ya step to these
  Motherfuckin real G's
  Well, it's the Knocc Out, definition original baby gangsta
  Approach me like you hard, motherfucker I'mma bank ya
  Shank ya, with my fuckin' shank, if I have to
  Dr. Dre and Snoop Doggy Dogg are fuckin' actors
  Pranksters, studio gangstas, busters
  But this time you're dealin' with some real motherfuckers
  G's, nigga please, don't try to step
  Cause if you do, then a pealed cap is all that would be left
  See young niggas like me will break you off something
  Claiming my city but, Dre, you ain't from Compton
  Niggas like y'all is what I call wannabes
  And ain't shit compared to real motherfuckin G's
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  I never met a O.G. who never did shit wrong
  You tried to diss the Eazy-E, so now nigga it's on
  You and your Doggy Dogg, think that y'all hoggin' shit
  Both of you bitches, can come and suck my Doggy dick
  Beating up a bitch don't make you shit, but then again
  Some niggas think it makes a man
  Damn it's a trip how a nigga could switch so quick
  From wearin' lipstick, to smoking on chronic at picnics
  And now you think you're bigger
  But to me you ain't nothing but a bitch-ass nigga
  That ain't worth a food stamp
  And at Death Row, I hear you're getting treated like boot camp
  Gotta follow your sergeant's directions
  Or get your ass popped with the Smith & Wesson
  Learn a lesson from the Eaze
  Stay in your place and don't step to real motherfuckin G's
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now
  Stop him in his tracks, show him that I am Ruthless
  Yo Dre, what's up
  Boy you should have known by now: Eazy Duz It`,
  `I own a mansion but live in a house
  A king-size bed, but I sleep on the couch
  I'm Mister Bright Side, glass is half-full
  But my tank's half empty, gasket just blew
  
  This always happens
  Thirty minutes from home gotta lay a log cabin, only option I have's McDonald's' bathroom
  In a public stall droppin' a football so every time someone walks in the John I get Maddened
  "Shady, what up?" What? Come on, man, I'm crappin'
  And you're askin' for my goddamn autograph on a napkin?
  Oh, that's odd, I just happened
  To run out of tissue, yeah, hand me that on second thought I'd be glad then
  "Thanks dog. Name's Todd, a big fan" I
  Wiped my ass with it, crumbled it up in a wad threw it back and
  Told 'im, "Todd, you're the shit." When's all of this crap end?
  Can't pump my gas without causin' an accident
  Pump my gas, cut my grass, I can't take out the fuckin' trash
  Without someone passin' through my sub harassin'
  I'd count my blessings but I suck at math
  I'd rather wallow than bask, suffering succotash, but the ant-
  Acid it gives my stomach gas
  When I mix my corn with my fuckin' mashed
  Potatoes, so what hoe kiss my country bumpkin ass
  Missouri southern roots, what the fuck is upper class?
  Call lunch dinner, call dinner supper, Tupperware in the cupboard plastic ware up the ass
  Stuck in the past iPod what the fuck is that?
  B-Boy to the core, mule, I'm a stubborn ass
  
  Maybe that's why I feel so strange
  Got it all, but I still won't change
  Maybe that's why I can't leave Detroit
  It's the motivation that keeps me going
  This is the inspiration I need
  I could never turn my back on a city that made me
  And "life's been good to me so far"
  
  They call me classless I heard that
  I second and third that
  Don't know what the fuck I'd be doin' if it weren't rap
  Probably be a giant turd sack
  But I blew, never turned back
  Turned forty and still sag
  Teenagers act more fuckin' mature Jack
  Fuck you gonna say to me? I'll leave on my own terms ass
  Hole I'm going berserk, my nerves are bad
  But I love the perks my work has
  I get to meet famous people look at her, dag
  Her nylons are ran, her skirt's snagged and I heard she drag-races [burp] swag
  Tuck in my Hanes shirt tag
  You're Danica Patrick (yeah) word skag
  We'd be the perfect match, 'cause you're a vacuum, I'm a dirtbag
  My apologies
  No disrespect to technology
  But what the heck's all of these buttons?
  You expect me to sit here and learn that?
  Fuck I gotta do to hear this new song from Luda
  Be an expert at computers?
  I'd rather be an Encyclopedia Britannica
  Hell with PlayStation, I'm still on my first man on some Zelda
  Nintendo, bitch! Run, jump, punch, stab, and I melt the
  Mozzarella on my spaghetti put it on bread make a sandwich with Welch's
  And belch, they say this spray butter's bad for my health,
  But I think this poor white trash from the trailer
  Jed Clampett, Fred Sanford and welfare, mentality helps to
  Keep me grounded, that's why I never take full advantage of wealth
  I managed to dwell
  Within these parameters
  Still crammin' the shelves full of Hamburger Helper
  I can't even help it, this is the hand I was dealt a
  Creature of habit, feel like I'm trapped in an animal shelter
  With all these pet peeves, God damn it to hell
  I can't stand all these kids with their camera cellphones
  I can't go anywhere, I get so mad I could yell the
  Other day someone got all elaborate
  And stuck a head from a fuckin' dead cat in my mailbox
  Went to Burger King, they spit on my onion rings
  I think my karma's catching up with me
  
  Maybe that's why I feel so strange
  Got it all, but I still won't change
  Maybe that's why I can't leave Detroit
  It's the motivation that keeps me going
  This is the inspiration I need
  I could never turn my back on a city that made me
  And "life's been good to me so far"
  
  Got friends on Facebook all over the world
  Not sure what that means, they tell me it's good
  So, I'm artist of the decade, I even got a plaque
  I'd hang it up but the frame is all cracked
  
  I'm tryin' to be low-key, hopefully nobody notices me
  In produce, hunched over, giant nose bleed
  Ogre style as I mosey over to the frozen aisle, by the frozen yogurt this guy approached me
  Embarrassed, I just did Comerica with Hova the show's over, I'm hidin' in Kroger buyin' groceries
  He just had front-row seats told me to sign his poster then insults me
  "Wow up close didn't know you had crow's feet!"
  I'm at a crossroads, lost, still shopping at Costco's
  Sloppy Joe's, bulk waffles
  Got caught pickin' my nose (aaghh!) look over see these two hot hoes
  Finger still up one of my nostrils
  Right next to 'em, stuck at the light the fuckin' shit's
  Takin' forever to change, it's stuck these bitches are lovin' it
  Rubbin' it in, chucklin'
  Couldn't do nothin' play it off "What you bumpin'?"
  "Trunk Muzik, Yelawolf's better", fuckin' bitch
  They want me to flip at the label, but I won't succumb to it
  The pressure, they want me to follow up with a
  Nother one after Recovery was so highly coveted
  But what good is a fuckin' recovery if I fumble it?
  'Cause I'mma drop the ball if I don't get a grip, hoppin' out shrubbery on you sons of bitches
  Wrong subdivision
  To fuck with, bitch, quit snappin' fuckin' pictures of my kids
  I love my city,
  But you pushed me to the limit. What a pity
  The shit I complain about
  It's like there ain't a cloud in the sky, and it's rainin' out
  Kool-Aid stain on the couch, I'll never get it out
  But, bitch, I got an elevator in my house, ants and a mouse
  I'm livin' the dream
  
  Maybe that's why I feel so strange
  Got it all, but I still won't change
  Maybe that's why I can't leave Detroit
  It's the motivation that keeps me going
  This is the inspiration I need
  I could never turn my back on a city that made me
  And "life's been good to me so far"`,
  `My tea's gone cold, I'm wondering why I got out of bed at all
  The morning rain clouds up my window, and I can't see at all
  And even if I could, it'd all be gray, but your picture on my wall
  It reminds me that it's not so bad, it's not so bad
  
  My tea's gone cold, I'm wondering why I got out of bed at all
  The morning rain clouds up my window, and I can't see at all
  And even if I could, it'd all be gray, but your picture on my wall
  It reminds me that it's not so bad, it's not so bad
  
  Dear Slim, I wrote you, but you still ain't callin
  I left my cell, my pager, and my home phone at the bottom
  I sent two letters back in autumn, you must not-a got 'em
  There probably was a problem at the post office or somethin'
  Sometimes, I scribble addresses too sloppy when I jot 'em
  But anyways, fuck it, what's been up, man, how's your daughter?
  My girlfriend's pregnant too, I'm 'bout to be a father
  If I have a daughter, guess what I'ma call her?
  I'ma name her Bonnie
  I read about your uncle Ronnie too, I'm sorry
  I had a friend kill himself over some bitch who didn't want him
  I know you probably hear this everyday, but I'm your biggest fan
  I even got the underground shit that you did with Skam
  I got a room full of your posters and your pictures, man
  I like the shit you did with Rawkus too, that shit was fat
  Anyways, I hope you get this, man, hit me back, just to chat
  Truly yours, your biggest fan, this is Stan
  
  My tea's gone cold, I'm wondering why I got out of bed at all
  The morning rain clouds up my window, and I can't see at all
  And even if I could, it'd all be gray, but your picture on my wall
  It reminds me that it's not so bad, it's not so bad
  
  Dear Slim, you still ain't called or wrote
  I hope you have the chance
  I ain't mad, I just think it's fucked up you don't answer fans
  If you didn't want to talk to me outside your concert
  You didn't have to, but you could have signed an autograph for Matthew
  That's my little brother, man, he's only six years old
  We waited in the blistering cold for you for four hours and ya just said no
  That's pretty shitty, man, you're like, his fuckin' idol
  He wants to be just like you, man, he likes you more than I do
  I ain't that mad, but I just don't like bein' lied to
  Remember when we met in Denver, you said if I write you, you would write back?
  See, I'm just like you in a way
  I never knew my father neither
  He used to always cheat on my mom and beat her
  I can relate to what you're sayin' in your songs
  So when I have a shitty day, I drift away and put 'em on
  'Cause I don't really got shit else, so that shit helps when I'm depressed
  I even got a tattoo with your name across the chest
  Sometimes, I even cut myself to see how much it bleeds
  It's like adrenaline, the pain is such a sudden rush for me
  See, everything you say is real, and I respect you
  'Cause you tell it
  My girlfriend's jealous, 'cause I talk about you 24/7
  But she don't know you like I know you, Slim, no one does
  She don't know what it was like for people like us growing up
  You've gotta call me, man, I'll be the biggest fan you'll ever lose
  Sincerely yours, Stan
  PS: We should be together too
  
  My tea's gone cold, I'm wondering why I got out of bed at all
  The morning rain clouds up my window, and I can't see at all
  And even if I could, it'd all be gray, but your picture on my wall
  It reminds me that it's not so bad, it's not so bad
  
  Dear Mr. I'm-Too-Good-To-Call-Or-Write-My-Fans
  This'll be the last package I ever send your ass
  It's been six months and still no word, I don't deserve it?
  I know you got my last two letters, I wrote the addresses on 'em perfect
  So this is my cassette I'm sending you, I hope you hear it
  I'm in the car right now, I'm doing ninety on the freeway
  Hey, Slim, I drank a fifth of vodka, ya dare me to drive?
  You know that song by Phil Collins In The Air Of The Night
  About that guy who could have saved that other guy from drowning
  But didn't? Then Phil saw it all, then at his show, he found him?
  That's kinda how this is, you could have rescued me from drowning
  Now it's too late, I'm on a thousand downers now, I'm drowsy
  And all I wanted was a lousy letter or a call
  I hope you know I ripped all of your pictures off the wall
  I love you, Slim, we could have been together, think about it
  You ruined it now, I hope you can't sleep and you dream about it
  And when you dream, I hope you can't sleep and you scream about it
  I hope your conscience eats at you and you can't breathe without me
  See Slim, shut up, bitch, I'm trying to talk
  Hey, Slim, that's my girlfriend screaming in the trunk
  But I didn't slit her throat
  I just tied her up, see, I ain't like you
  'Cause if she suffocates, she'll suffer more and then she'll die too
  Well, gotta go, I'm almost at the bridge now
  Oh, shit, I forgot, how am I supposed to send this shit out?
  
  My tea's gone cold, I'm wondering why I got out of bed at all
  The morning rain clouds up my window, and I can't see at all
  And even if I could, it'd all be gray, but your picture on my wall
  It reminds me that it's not so bad, it's not so bad
  
  Dear Stan, I meant to write you sooner, but I've just been busy
  You said your girlfriend's pregnant now, how far along is she?
  Look, I'm really flattered you would call your daughter that
  And here's an autograph for your brother: I wrote it on your Starter cap
  I'm sorry I didn't see you at the show, I must have missed you
  Don't think I did that shit intentionally, just to diss you
  And what's this shit you said about you like to cut your wrists, too?
  I say that shit just clownin', dawg c'mon, how fucked up is you?
  You got some issues, Stan, I think you need some counselin'
  To help your ass from bouncin' off the walls when you get down some
  And what's this shit about us meant to be together?
  That type of shit'll make me not want us to meet each other
  I really think you and your girlfriend need each other
  Or maybe you just need to treat her better
  I hope you get to read this letter
  I just hope it reaches you in time
  Before you hurt yourself, I think that you'll be doin' just fine
  If you'd relax a little, I'm glad that I inspire you, but, Stan
  Why are you so mad? Try to understand that I do want you as a fan
  I just don't want you to do some crazy shit
  I seen this one shit on the news a couple weeks ago that made me sick
  Some dude was drunk and drove his car over a bridge
  And had his girlfriend in the trunk and she was pregnant with his kid
  And in the car they found a tape, but it didn't say who it was to
  Come to think about it, his name was, it was you
  Damn!`,
  `You are now about to witness the strength of street knowledge
  Straight outta Compton, crazy motherfucker named Ice Cube
  From the gang called Niggaz With Attitudes
  When I'm called off, I got a sawed off
  Squeeze the trigger, and bodies are hauled off
  You too, boy, if ya fuck with me
  The police are gonna have to come and get me
  Off yo' ass, that's how I'm goin' out
  For the punk motherfuckers, that's showin' out
  Niggas start to mumble, they wanna rumble
  Mix 'em and cook 'em in a pot like gumbo
  Goin' off on a motherfucker like that
  With a gat that's pointed at yo' ass
  So give it up smooth
  Ain't no tellin' when I'm down for a jack move
  Here's a murder rap to keep yo' dancin'
  With a crime record like Charles Manson
  AK-47 is the tool
  Don't make me act the motherfuckin' fool
  Me you can go toe to toe, no maybe
  I'm knockin' niggas out tha box daily
  Yo, weekly, monthly and yearly
  Until them dumb motherfuckers see clearly
  That I'm down with the capital C-P-T
  Boy, you can't fuck with me
  So when I'm in your neighborhood, you better duck
  'Cause Ice Cube is crazy as fuck
  As I leave, believe I'm stompin'
  But when I come back, boy, I'm comin' straight outta Compton
  Yo, Ren
  Whassup?
  Tell 'em where you from!
  Straight outta Compton, another crazy ass nigga
  More punks I smoke, yo, my rep gets bigger
  I'm a bad motherfucker and you know this
  But the pussy ass niggas don't show this
  But I don't give a fuck, I'ma make my snaps
  If not from the records, from jackin' the crops
  Just like burglary, the definition is jackin'
  And when illegally armed, it's called 'packin'
  Shoot a motherfucker in a minute
  I find a good piece o' pussy, I go up in it
  So if you're at a show in the front row
  I'ma call you a bitch or dirty-ass ho
  You'll probably get mad like a bitch is supposed to
  But that shows me, slut, you're composed to
  A crazy motherfucker from the street
  Attitude legit 'cause I'm tearin' up shit
  MC Ren controls the automatic
  For any dumb motherfucker that starts static
  Not the right-hand 'cause I'm the hand itself
  Every time I pull a AK off the shelf
  The security is maximum and that's a law
  R-E-N spells Ren but I'm raw
  See, 'cause I'm the motherfuckin' villain
  The definition is clear, you're the witness of a killin'
  That's takin' place without a clue
  And once you're on the scope, your ass is through
  Look, you might take it as a trip
  But a nigga like Ren is on a gangsta tip
  Straight outta Compton
  Eazy is his name, and the boy is comin'
  Straight outta Compton
  Is a brother that'll smother yo' mother
  And make ya sister think I love her
  Dangerous motherfucker raises hell
  And if I ever get caught, I make bail
  See, I don't give a fuck, that's the problem
  I see a motherfuckin' cop, I don't dodge him
  But I'm smart, lay low, creep a while
  And when I see a punk pass, I smile
  To me, it's kinda funny, the attitude showin' a nigga drivin'
  But don't know where the fuck he's going, just rollin'
  Lookin' for the one they call Eazy
  But here's a flash, they never seize me
  Ruthless! Never seen like a shadow in the dark
  Except when I unload, see I'll get over the hesitation
  And hear the scream of the one who got the last penetration
  Give a little gust of wind and I'm jettin'
  But leave a memory no one'll be forgettin'
  So what about the bitch who got shot? Fuck her!
  You think I give a damn about a bitch? I ain't a sucker!
  This is the autobiography of the E, and if you ever fuck with me
  You'll get taken by a stupid dope brother who will smother
  Word to the motherfucker, straight outta Compton
  Damn, that shit was dope!`,
  `I'm friends with the monster that's under my bed
  Get along with the voices inside of my head
  You're tryin' to save me, stop holding your breath
  And you think I'm crazy, yeah, you think I'm crazy (crazy)
  I wanted the fame but not the cover of Newsweek
  Oh well, guess beggars can't be choosey
  Wanted to receive attention for my music
  Wanted to be left alone in public, excuse me
  For wantin' my cake, and eat it too, and wantin' it both ways
  Fame made me a balloon 'cause my ego inflated
  When I blew, see, but it was confusing
  'Cause all I wanted to do's be the Bruce Lee of loose leaf
  Abused ink, used it as a tool when I blew steam (ooh)
  Hit the lottery, ooh-wee
  But with what I gave up to get, it was bittersweet
  It was like winnin' a used mink
  Ironic 'cause I think I'm gettin' so huge I need a shrink
  I'm beginnin' to lose sleep, one sheep, two sheep
  Going coo-coo and kooky as Kool Keith
  But I'm actually weirder than you think, 'cause I'm
  I'm friends with the monster that's under my bed
  Get along with the voices inside of my head
  You're tryin' to save me, stop holdin' your breath
  And you think I'm crazy, yeah, you think I'm crazy
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)
  Now, I ain't much of a poet
  But I know somebody once told me to seize the moment
  And don't squander it
  'Cause you never know when it all could be over tomorrow
  So I keep conjurin'
  Sometimes I wonder where these thoughts spawn from
  Yeah, ponderin'll do you wonders
  No wonder you're losing your mind, the way it wanders
  Yodel-odel-ay-hee-hoo
  I think it went wanderin' off down yonder
  And stumbled onto Jeff VanVonderen
  'Cause I need an interventionist
  To intervene between me and this monster
  And save me from myself and all this conflict
  'Cause the very thing that I love's killing me
  And I can't conquer it
  My OCD is conkin' me in the head, keep knockin'
  Nobody's home, I'm sleepwalkin'
  I'm just relayin' what the voice in my head's sayin'
  Don't shoot the messenger, I'm just friends with the
  I'm friends with the monster that's under my bed
  Get along with the voices inside of my head
  You're tryin' to save me, stop holdin' your breath
  And you think I'm crazy, yeah, you think I'm crazy
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)
  Call me crazy, but I have this vision
  One day that I'll walk amongst you a regular civilian
  But until then, drums get killed and
  I'm comin' straight at MC's, blood gets spilled and
  I'll take it back to the days that I'd get on a Dre track
  Give every kid who got played that pumped-up feelin'
  And shit to say back to the kids who played him
  I ain't here to save the fuckin' children
  But if one kid out of a hundred million
  Who are going through a struggle feels it and relates, that's great
  It's payback, Russell Wilson
  Falling way back in the draft
  Turn nothin' into somethin', still can
  Make that, straw into gold, chump, I will spin
  Rumpelstiltskin in a haystack
  Maybe I need a straight jacket, face facts
  I am nuts for real, but I'm okay with that
  It's nothin', I'm still friends with the
  I'm friends with the monster that's under my bed
  Get along with the voices inside of my head
  You're tryin' to save me, stop holdin' your breath
  And you think I'm crazy, yeah, you think I'm crazy
  I'm friends with the monster that's under my bed
  Get along with the voices inside of my head
  You're tryin' to save me, stop holdin' your breath
  And you think I'm crazy, yeah, you think I'm crazy
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)
  Well, that's nothin' (ooh-ooh-ooh-ooh)
  (Ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh, ooh-ooh-ooh-ooh)`,
  `Street Science, you're on the air
  What do you feel when you hear a record like Tupac's new one?
  I love Tupac's new record,
  Right but don't you feel like that creates
  A tension between East and West?
  He's talking about killing people
  I had sex with your wife and not in those words
  But he's talking about I wanna see you deceased
  No doubt, to live and die in L.A.
  California, what you say about Los Angeles
  Still the only place for me that never rains in the sun
  And everybody got love
  To live and die in L.A., where everyday we try to fatten our pockets
  Us niggaz hustle for the cash so it's hard to knock it
  Everybody got they own thang, currency chasin'
  Worldwide through the hard times, warrior faces
  Shed tears as we bury niggaz close to heart
  What was a friend now a ghost in the dark, cold hearted 'bout it
  Nigga got smoked by a fiend, tryin' to floss on him
  Blind to a broken man's dream, a hard lesson
  Court cases keep me guessin', plea bargain
  Ain't an option now, so I'm stressin', cost me more
  To be free than a life in the pen
  Makin' money off of cuss words, writin' again
  Learn how to think ahead, so I fight with my pen
  Late night down Sunset likin' the scene
  What's the worst they could do to a nigga got me lost in hell
  To live and die in L.A. on bail, my angel sing
  To live and die in L.A., it's the place to be
  You've got to be there to know it, what everybody wanna see
  To live and die in L.A., it's the place to be
  You've got to be there to know it, what everybody wanna see
  It's the, City of Angels and constant danger
  South Central L.A., can't get no stranger
  Full of drama like a soap opera, on the curb
  Watchin' the ghetto bird helicopters, I observe
  So many niggaz gettin' three strikes, tossed in jail
  I swear the pen the right across from hell, I can't cry
  'Cause it's on now, I'm just a nigga on his own now
  Livin' life Thug style, so I can't smile
  Writin' to my peoples when they ask for pictures
  Thinkin' Cali just fun and bitches, hahaha
  Better learn about the dress code, B's and C's
  All them other niggaz copycats, these is G's
  I love Cali like I love woman
  'Cause every nigga in L.A. got a little bit of Thug in him
  We might fight with each other, but I promise you this
  We'll burn this bitch down, get us pissed to live and die in L.A.
  (Let my angel sing)
  To live and die in L.A., it's the place to be
  You've got to be there to know it, what everybody wanna see
  'Cause would it be L.A. without Mexicans?
  Black love brown pride and the sets again
  Pete Wilson tryin' to see us all broke, I'm on some bullshit
  Out for everything they owe, remember K-DAY
  Weekends, Crenshaw, MLK
  Automatics rang free, niggaz lost they way
  Gang signs being showed, nigga love your hood
  But reconize and it's all good, where the weed at?
  Niggaz gettin' shermed out
  Snoop Dogg in this muhfucka perved out, M.O.B.
  Big Suge in the Low-Low, bounce and turn
  Dogg Pound in the Lex, wit a ounce to burn
  Got them Watts niggaz with me, OFTB
  They got some hash took the stash left the rest for me
  Neck bone, Tre, Head Ron, Punchy too
  Big Rock got knocked but this one's for you
  I hit the studio and drop a jewel, hopin' it pay
  Gettin' high watchin' time fly, to live and die in L.A.
  (Let my angel sing)
  To live and die in L.A., it's the place to be
  You've got to be there to know it, what everybody wanna see
  This go out for 92.3 and 106
  All the radio stations that be bumpin' my shit
  Makin' my shit sells katruple quitraple platinum, hehe
  This go out to all the magazines that supported me
  All the real motherfuckers
  All the stores, the mom and pop spots
  A&R people, all y'all motherfuckers
  L.A., California Love part motherfuckin' two
  Without gay ass Dre`,
  `What's the difference between me and you?
  What's the difference between me and you?
  
  Back when Cube was rolling with Lorenzo in a Benzo
  I was banging with a gang of instrumentals
  Got the pens and pencils, got down to business
  But sometimes the business end of this shit can turn your friends against you
  But you was a real nigga, I could sense it in you
  I still remember the window of the car that you went through
  That's fucked up, but I'll never forget the shit we been through
  And I'ma do whatever it takes to convince you
  'Cause you my nigga, Doc, and Eazy, I'm still with you
  Fuck the beef, nigga, I miss you and that's just being real with you
  You see the truth is everybody wanna know
  How close me and Snoop is and who I'm still cool with
  Then I got these fake-ass niggas I first blew with
  Claiming that they non-violent, talking like they—(Do not resist the beat)
  Spit venom in interviews, speaking on reunions
  Move units, then talk shit and we can do this
  Until then, I ain't even speaking your name
  Just keep my name outta your mouth and we can keep it the same, nigga
  It ain't that I'm too big to listen to the rumors
  It's just that I'm too damn big to pay attention to 'em
  That's the difference
  
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  
  Yo, I stay with it, while you try to perpetrate and play with it
  Never knew about the next level 'til Dre did it (Yeah)
  I stay committed while you motherfuckers babysitted
  I smash the critics like a overhand right from Riddick (Yeah)
  Come and get it, shitted on villains by the millions
  I be catching bitches while bitches be catching feelings
  So what the fuck am I supposed to do?
  I pop bottles and hot hollow-points at each and all of you (Come on!)
  A heartless bastard, high and plastered
  My style is like the reaction from too much acid
  Never come down, pass it around if you can't handle it
  Hang Hollywood niggas by they Soul Train laminates
  What's the difference between me and you? (What?)
  About five bank accounts, three ounces, and two vehicles
  Until my death, I'm Bangladesh
  I suggest you hold yo' breath 'til ain't none left
  Yo, that's the difference!
  
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  
  Alright, hold up, hold up!
  Stop the beat a minute, I got something to say, Dre
  I wanna tell you this shit right now while this fucking weed is in me (What the fuck?)
  I don't know if I ever told you this
  But I love you, dog, I got your motherfucking back (Right), just know this shit
  Slim, I don't know if you noticed it
  But I've had your back from day one, nigga, let's blow this bitch
  I mean it dog, you ever need somebody offed: "Whose throat is it?"
  Well, if you ever kill that Kim bitch, I'll show you where the ocean is
  Well, that's cool, and I appreciate the offer
  But if I do decide to really murder my daughter's momma
  I'ma sit her up in the front seat and put sunglasses on her
  And cruise around with her for seven hours through California
  And have her waving at people (Hi!), then drop her off on the corner
  At the police station and drive off honking the horn for her
  Raw dawg, get your arm gnawed off
  Drop the sawed-off and beat you with the piece it was sawed off of
  Fuck blood, I wanna see some lungs coughed up
  Get shot up in the hot tub 'til the bubbles pop up
  In they nose and cough snot up, mucus in hot water
  That's for trying to talk like The Chronic was lost product
  That's for even thinking of having them thoughts thought up
  You better show some respect whenever the Doc's brought up
  So what's the difference between us? We can start at the penis
  Or we can scream, "I just don't give a fuck," and see who means it
  
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  What's the difference between me and you?
  You talk a good one, but you don't do what you supposed to do
  I act on what I feel and never deal with emotions
  I'm used to living big dog style and straight coasting
  
  What's the difference between me and`,
  `God is
  My light in darkness, oh
  God, God is
  He, He is my all and all (and I'll never turn back)
  God is
  Everything that hath breath, praise the Lord
  Worship Christ with the best of your portions
  I know I won't forget all He's done
  He's the strength in this race that I run
  Every time I look up, I see God's faithfulness
  And it shows just how much He is miraculous
  I can't keep it to myself, I can't sit here and be still
  Everybody, I will tell to the whole world, it's Him
  King of Kings, Lord of Lords
  All the things He has in store
  From the rich to the poor
  All are welcome through the door
  You won't ever be the same
  When you call on Jesus' name
  Listen to the words I'm saying
  Jesus saved me, now I'm saying
  And I know, I know God is the force that picked me up
  I know Christ is the fountain that filled my cup
  I know God is alive, yeah
  He has opened up my vision
  Giving me a revelation
  This ain't 'bout a dead religion
  Jesus brought a revolution
  All the captives are forgiven
  Time to break down all the prisons
  Every man, every woman
  There is freedom from addiction
  Jesus, You have my soul
  Sunday Service on a roll
  All my idols, let 'em go
  All the demons, let 'em know
  This a mission, not a show
  This is my eternal soul
  This my kids, this the crib
  This my wife, this my life
  This my God-given right
  Thank you, Jesus, won the fight
  That's what God is
  That's what God is
  That's what God is`,
  `Here's a little somethin' bout a nigga like me
Never shoulda been let out the penitentiary
Ice Cube would like ta say
That I'm a crazy mothafucka from around the way
Since I was a youth, I smoked weed out
Now I'm the mutha fucka that ya read about
Takin' a life or two that's what the hell I do
You don't like how I'm livin well fuck you
This is a gang, and I'm in it
My man Dre'll fuck you up in a minute
With a right left, right left you toothless
And then you say goddamn they ruthless!
Everywhere we go they say (damn)
N W A's fuckin' up tha program
And then you realize we don't care
We don't just say no, we to busy sayin' yeah!
About drinkin'' straight out the eight bottle
Do I look like a mutha fuckin role model?
To a kid lookin' up ta me
Life ain't nothin' but bitches and money
'Cause I'm tha type o' nigga that's built ta last
If ya fuck wit me I'll put a foot in ya ass
See I don't give a fuck 'cause I keep bailin'
Yo, what the fuck are they yellin''
Gangsta, Gangsta! That's what they're yellin'
It's not about a salary, it's all about reality"
Gangsta, Gangsta! That's what they're yellin'
"Hopin you sophisticated motherfuckers hear what I have to say"
When me and my posse stepped in the house
All the punk-ass niggas start breakin' out
'Cause you know, they know whassup
So we started lookin' for the bitches with the big butts
Like her, but she keep cryin'
"I got a boyfriend" Bitch stop lyin'
Dumb-ass hooker ain't nuttin' but a dyke
Suddenly I see, some niggas that I don't like
Walked over to em, and said, "Whassup?"
The first nigga that I saw, hit em in the jaw
Ren started stompin' em, and so did E
By that time got rushed by security
Out the door, but we don't quit
Ren said, "Let's start some shit!"
I got a shotgun, and here's the plot
Takin' niggas out with a flurry of buckshots
Boom boom boom, yeah I was gunnin
And then you look, all you see is niggas runnin'
And fallin' and yellin' and pushin and screamin'
And cussin', I stepped back, and I kept bustin'
And then I realized it's time for me to go
So I stopped, jumped in the vehicle
It's like this, because of that who-ride
N.W.A. is wanted for a homicide
'Cause I'm the type of nigga that's built to last
Fuck wit me, I'll put my foot in your ass
See I don't give a fuck, 'cause I keep bailin'
Yo, what the fuck are they yellin'?
Gangsta, Gangsta! That's what they're yellin'
It's not about a salary, it's all about reality"
Gangsta, Gangsta! That's what they're yellin'
"Hopin' you sophisticated motherfuckers hear what I have to say"
"He'll tell you exactly how he feel, and don't want a fuckin' thing back"
Homies all standin' around, just hangin'
Some dope-dealin', some gang-bangin'
We decide to roll and we deep
See a nigga on Dayton's and we creep
Real slow, and before you know
I had my shotgun pointed in the window
He got scared, and hit the gas
Right then, I knew I has to smoke his ass
He kept rollin', I jumped in the bucket
We couldn't catch him, so I said fuck it
Then we headed right back to the fort
Sweatin' all the bitches in the biker shorts
We didn't get no play, from the ladies
With six niggas in a car are you crazy?
She was scared, and it was showin'
We all said "Fuck you bitch!" and kept goin'
To the hood, and we was fin to
Find somethin' else to get into
Like some pussy, or in fact
A bum rush, but we call it rat pack
On a nigga for nothin' at all
Ice Cube'll go stupid when I'm full of eight ball
I might stumble, but still won't lose
Now I'm dressed in the county blues
'Cause I'm the type of nigga that's built to last
If you Fuck with me, I'll put my foot in your ass
I don't give a fuck, 'cause I keep bailin'
Yo, what the fuck are they yellin'?
Here's a lil gangsta, short in size
A t-shirt and Levi's is his only disguise
Built like a tank yet hard to hit
Ice Cube and Eazy E cold runnin' shit
Well I'm Eazy E the one they're talkin' about
Nigga tried to roll the dice and just crapped out
Police tried to roll, so it's time to go
I creeped away real slow and jumped in the six-fo'
Wit the "Diamond in the back, sun-roof top"
Diggin' the scene with the gangsta lean
'Cause I'm the E, I don't slang or bang
I just smoke motherfuckers like it ain't no thang
And all you bitches, you know I'm talkin' to you
"We want to fuck you Eazy!" I want to fuck you too
'Cause you see, I don't really take no shit
'Cause I'm the type of nigga that's built to last
If you Fuck wit me, I'll put my foot in your ass
I don't give a fuck, 'cause I keep bailin'
Yo, what the fuck are they yellin'?
Gangsta, Gangsta! That's what they're yellin'
It's not about a salary, it's all about reality"
Gangsta, Gangsta! That's what they're yellin'
"Hopin you sophisticated motherfuckers hear what I have to say"
Gangsta, Gangsta! That's what they're yellin'
It's not about a salary, it's all about reality"
Gangsta, Gangsta! That's what they're yellin'
"Hopin you sophisticated motherfuckers hear what I have to say"`
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

      LyricText.textContent = MusicLyrics[randomIndex]

      } else if (radioButtons[1].checked) {

        console.log("HipHop button is checked");

        var audio = document.getElementById("myAudio");

      var randomIndex = Math.floor(Math.random() * songs2.length);
      var randomSong = songs2[randomIndex];
      
      audio.src = randomSong;
      
      audio.load();
      audio.play();

      LyricText.textContent = MusicLyrics[randomIndex + 14]

      }
      console.log("changed random audio")
    
}

function selectSong(x) {
  
  document.getElementById("buttonPlay").className = "bx bx-pause bx-lg"

  LyricText.textContent = MusicLyrics[x-1]

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

function playPause() {

  var playPauseButton = document.getElementById("buttonPlay")
  var myAudio = document.getElementById("myAudio")
  if (myAudio.paused && myAudio.src !== "") {
    myAudio.play()
    playPauseButton.className = "bx bx-pause bx-lg"
  } else if (!myAudio.paused && myAudio.src !== "") {
    myAudio.pause()
    playPauseButton.className = "bx bx-play bx-lg"
  } else {
    playPauseButton.className = "bx bx-play bx-lg"
  }

}

function LyricsOpen() {
  var mainpage = document.getElementById("mainpage");
  var lyricsTab = document.getElementById("lyricsTab");

  if (lyricsTab.style.height === "0%") {
    mainpage.style.height = "0%";
    lyricsTab.style.height = "90%";
  } else {
    mainpage.style.height = "90%";
    lyricsTab.style.height = "0%";
  }
}

function calculateTime(x) {

  let minutes = x / 60
  let fullMinutes = Math.floor(minutes)

  let seconds = minutes - fullMinutes
  let fullSeconds1 = seconds * 60
  let fullSeconds0 = fullSeconds1.toString().split(".")[0]
  let fullSeconds = String(fullSeconds0).padStart(2, "0")
  return(fullMinutes + ":" + fullSeconds)
  
}

function sourceChanged() {

  let timeSlider = document.getElementById("timeSlider")
  let durationP = document.getElementById("songDuration")
  let audio = document.getElementById("myAudio")
  let audioDuration = audio.duration
  let audioSeconds =  audioDuration.toFixed(0)

  durationP.textContent = calculateTime(audioSeconds)
  timeSlider.max = audioSeconds

}

let audio = document.getElementById("myAudio")
let timeSlider = document.getElementById("timeSlider")

audio.addEventListener("timeupdate", function() {

  let timeSlider = document.getElementById("timeSlider")
  let currentTime = audio.currentTime
  let currentTimeP = document.getElementById("currentTime")

  let currentSecond = currentTime.toFixed(0)

  timeSlider.value = currentSecond
  currentTimeP.textContent = calculateTime(currentSecond)

})

timeSlider.addEventListener("input", function() {

  audio.currentTime = timeSlider.value

})
