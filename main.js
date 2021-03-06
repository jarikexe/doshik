	window.addEventListener('load', function() {
	    //contants 
	    var GME_WIDTH = 800;
	    var GAME_HEIGHT = 400;
	    var gameLive = true;
	    var audio = new Audio('audio/gom.mp3');
	    var audioLoos = new Audio('audio/dratuti.mp3');
	    var audioDosh = new Audio('audio/doshik.mp3');
	    //enemies 
	    //current level

	    var level = 1;
	    var doshik = 0;

	    var enemies = [{
	        x: 150,
	        y: 100,
	        speed: -1,
	        w: 55,
	        h: 55
	    }, {
	        x: 300,
	        y: 350,
	        speed: 2,
	        w: 55,
	        h: 55
	    }, {
	        x: 450,
	        y: 100,
	        speed: -3,
	        w: 55,
	        h: 55
	    }, {
	        x: 600,
	        y: 100,
	        speed: 4,
	        w: 55,
	        h: 55
	    }];

	    //player object

	    var player = {
	        x: 20,
	        y: 150,
	        speedX: 2,
	        w: 55,
	        h: 55,
	        name: "",
	        isMoving: false,
	        derection: ''
	    };

	    //goal object

	    var goal = {
	        x: GME_WIDTH - 100,
	        y: 125,
	        w: 100,
	        h: 100
	    };

	    var sprite = {};

	    var movePlayer = function() {
	        player.isMoving = true;
	        player.derection = "right";
	        audio.play();
	    };
	    var movePlayerLeft = function() {
	        player.isMoving = true;
	        audio.play();
	        player.derection = "left";
	    };

	    var stopPlayer = function() {
	        player.isMoving = false;
	        audio.pause();
	    };

	    var updateScore = function(score, login, toDo) {
	        $.ajax({
	            method: 'get',
	            url: 'includes/Add.php',
	            data: {
	                'score': score,
	                'login': login,
	                'toDo': toDo,

	                'ajax': true
	            },
	            success: function(data) {
	                $('#data').text(data);
	            }


	        });
	        updatelist();

	    };

	    var addUser = function() {
	        var playerName = document.getElementById("name").value;
	        if (playerName === '') {
	            alert("Enter player name pleas");
	        } else {
	            gameLive = true;
	            player.name = playerName;

	            nameFill.innerHTML = "";
	            plNamePut.innerHTML = player.name;
	            updateScore(doshik, player.name, "add");
	        }
	    };
	    var innerInfi = function(dosh, lvl, spd) {
	        doshIndication.innerHTML = dosh;
	        speedIndication.innerHTML = spd;
	        lvlIndication.innerHTML = lvl;
	    };
	    var reset = function() {
	        gameLive = true;
	        player.isMoving = false;
	        level = 1;
	        doshik = 0;
	        player.speedX = 2;
	        enemies[0].speed = -1;
	        enemies[1].speed = 2;
	        enemies[2].speed = 3;
	        enemies[3].speed = -4;
	        player.x = 20;
	        console.log(player.x, gameLive);
	        enemies.forEach(function(element, index) {
	            element.y = 100;
	        });
	        $("#nameFill").addClass("bounceOut animated");
	        nameFill.innerHTML = "";
	        innerInfi(doshik, level, player.speedX);

	        step();
	    };

	    var canvas = document.getElementById("myCanvas");
	    var ctx = canvas.getContext("2d");
	    var speedIndication = document.getElementById("speed");
	    var lvlIndication = document.getElementById("lvl");
	    var doshIndication = document.getElementById("dosh");
	    var subm = document.getElementById("subm");
	    var nameFill = document.getElementById("nameFill");
	    var plNamePut = document.getElementById("playerName");




	    //listen player to move

	    canvas.addEventListener("mousedown", movePlayer);
	    canvas.addEventListener("mouseup", stopPlayer);
	    canvas.addEventListener("touchstart", movePlayer);
	    canvas.addEventListener("touchend", stopPlayer);


	    $("body").keydown(function(e) {
	        if (e.keyCode == 39) { // right
	            movePlayer();
	        } else if (e.keyCode == 37) {
	            movePlayerLeft();

	        }
	    });

	    $("body").keyup(function(e) {
	        if (e.keyCode == 39 || e.keyCode == 37) { // left
	            stopPlayer();
	        }
	    });



	    subm.addEventListener("mousedown", addUser);




	    var load = function() {
	        sprite.player = new Image();
	        sprite.player.src = "img/HERO.png";
	        sprite.enamy = new Image();
	        sprite.enamy.src = "img/enemy.png";
	        sprite.chest = new Image();
	        sprite.chest.src = "img/chest.png";
	        sprite.back = new Image();
	        sprite.back.src = "img/floor.jpg";
	    }

	    var updatelist = function() {
	        $(function() {
	            // don't cache ajax or content won't be fresh
	            $.ajaxSetup({
	                cache: false
	            });
	            var ajax_load = "";
	            // load() functions
	            var loadUrl = "includes/ShowUsers.php";
	            $("#data").html(ajax_load).load(loadUrl);
	            // end  
	        });
	    };
	    updatelist();



	    var update = function() {
	        if (player.isMoving) {
	            if (!(player.derection == "left")) {
	                player.x += player.speedX;
	            } else if (player.derection == "left") {
	                player.x -= player.speedX;
	            }
	        }

	        if (checkCollision(player, goal)) {
	            audioDosh.play();
	            var min = 3;
	            var max = 10;
	            $("#nameFill").removeClass();
	            $("#sore").removeClass();

	            $("#sore").addClass("gone2");

	            var randomDosh = Math.floor(Math.random() * (max - min + 1)) + min;
	            nameFill.innerHTML = "<h2 class=\"bounceIn animated centertext\" id= \"dobitoDoshika\">Добыто дошика <span class=\"dob\"> + " + randomDosh + "<span></h2>";
	            window.setTimeout(function() {
	                $("#nameFill").removeClass();
	                $("#nameFill").addClass("flipOutX animated");
	            }, 2000);


	            level++;
	            player.x = 10;
	            player.speedX += .5;
	            doshik = doshik + randomDosh;

	            window.setTimeout(function() {
	                innerInfi(doshik, level, player.speedX);
	                updateScore(doshik, player.name, "update");

	                updatelist();
	            }, 1000);
	            enemies.forEach(function(element, index) {
	                if (element.speed < 0) { element.speed-- } else if (element.speed > 0) { element.speed++ }

	            });

	        }



	        enemies.forEach(function(element, index) {

	            element.y += element.speed;

	            //check borders
	            if (element.y <= -20) {
	                element.y = 0;
	                element.speed *= -1;
	            } else if (element.y >= GAME_HEIGHT - 50) {
	                element.y = GAME_HEIGHT - 50;
	                element.speed *= -1;
	            }

	            if (checkCollision(player, element)) {
	                audioLoos.play();
	                audio.pause();
	                gameLive = false;
	                


	                nameFill.innerHTML = "<h2 class=\"bounceIn animated centertext gameOver\" ><p>дратути)0))</p><p>Game Over</p><p id = \'replay\'>Replay</p></h2>";
	                $("#nameFill").removeClass();

	                $("#nameFill").addClass("bounceIn animated");

	                var replay = document.getElementById("replay");


	                replay.addEventListener("mousedown", reset);
	                replay.addEventListener("touched", reset);
	            };





	        });
	    };


	    var draw = function() {
	        ctx.clearRect(0, 0, GME_WIDTH, GAME_HEIGHT);

	        ctx.drawImage(sprite.back, 0, 0, GME_WIDTH, GAME_HEIGHT);

	        ctx.drawImage(sprite.player, player.x, player.y, player.w + 5, player.h + 5);


	        enemies.forEach(function(element, index) {
	            ctx.drawImage(sprite.enamy, element.x, element.y, element.w + 10, element.h + 10)
	        });

	        ctx.drawImage(sprite.chest, goal.x, goal.y, goal.w, goal.h);


	    };

	    var step = function() {

	        update();
	        draw();
	        if (gameLive) {
	            window.requestAnimationFrame(step);
	        }
	    };

	    var checkCollision = function(rect1, rect2) {
	        var closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
	        var closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);

	        return closeOnHeight && closeOnWidth;
	    }
	    load();
	    step();
	});
