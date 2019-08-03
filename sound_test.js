var player = require('play-sound')(opts = {});

// access the node child_process in case you need to kill it on demand
var audio = player.play('IntroMusic.wav', function (err) {
  if (err && !err.killed) throw err;
});

audio.kill();
