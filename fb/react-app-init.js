window.onload = function () {
  FBInstant.initializeAsync().then(function () {
    function loadScript() {
      return new Promise(function (resolve, reject) {
        var s;
        s = document.createElement('script');
        s.src = "./app.js";
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
      });
    }
    loadScript().then(res => console.log(res)).then(res => FBInstant.startGameAsync()).catch(err => console.log(err));
  }).catch(err => {
    console.log(err)
  });

  var connectedPlayers = FBInstant.player.getConnectedPlayersAsync()
    .then(function(players) {
      console.log(players.map(function(player) {
        return {
          id: player.getID(),
          name: player.getName(),
        }
      }));
    });
};
