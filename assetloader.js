var AM = new AssetManager();

AM.queueDownload("./img/Trump.png");
AM.queueDownload("./img/gunman.png");
AM.queueDownload("./img/bluehairedgirl.png");
AM.queueDownload("./img/MAGABackground.png");
AM.queueDownload("./img/flags/spritesheet.png");
AM.queueDownload("./img/CrookedHillary.png");
AM.queueDownload("./img/LyinTed.png");
AM.queueDownload("./img/Canada.PNG");
AM.queueDownload("./img/ivanka.PNG");
AM.queueDownload("./img/reporter.png");
AM.queueDownload("./img/cartel.png");
AM.queueDownload("./img/assassin.png");
AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    canvas.focus();
    //2d context 
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.scoreBoard = document.getElementById("score");
    gameEngine.scoreMessage = document.getElementById("message");
    gameEngine.scoreType = document.getElementById("score_type");
    createFlags();
    gameEngine.activeVoteCoins = [];
    gameEngine.activeVoteCoins.push(createVoteCoin(gameEngine));
    gameEngine.activeVoteCoins.push(createVoteCoin(gameEngine));
    gameEngine.activeVoteCoins.push(createVoteCoin(gameEngine));
    gameEngine.activeVoteCoins.push(createVoteCoin(gameEngine));
    gameEngine.init(ctx);
    gameEngine.start();
    gameEngine.addEntity(new Background(gameEngine));
    gameEngine.addEntity(new TrumpWalker(gameEngine, AM.getAsset("./img/Trump.png")));
    gameEngine.addEntity(new IvankaWalker(gameEngine, AM.getAsset("./img/ivanka.PNG"), 32, 50, 3, 100, 200, 0.1, 4, 100));
	gameEngine.addEntity(new Bullet(gameEngine, AM.getAsset("./img/Canada.PNG")))
	gameEngine.addEntity(new ReporterWalker(gameEngine, AM.getAsset("./img/reporter.png"), 175, 150, 11, 500, 100, 0.5, 100, 120));
	gameEngine.addEntity(new CartelWalker(gameEngine, AM.getAsset("./img/cartel.png"), 75, 190, 4, 500, 400, 0.5, 100, 80));
	gameEngine.addEntity(new AssassinWalker(gameEngine, AM.getAsset("./img/assassin.png"), 33, 48, 4, 100,  400, 0.1, 4, 100));

})
var FLAGS = AM.getAsset("./img/flags/spritesheet.png");
