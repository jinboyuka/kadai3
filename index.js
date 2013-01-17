document.write('<p>Hello, World!</p>');


enchant();   //


var picNumber = 0;   //


window.onload = function() {   //
    var game = new Game(320, 480);   //
    
    
    game.preload('http://enchantjs.com/assets/images/chara1.gif');   //
    
    
    game.onload = function() {   //
        var bear = new Sprite(32, 32);   //
        bear.x = 320;
        bear.scaleX = -1;
        bear.rotation = 20;
        bear.image =   //
          game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        bear.frame = 1;   //
        bear.addEventListener(Event.ENTER_FRAME, function() {   //
            picNumber++;   //
            if (picNumber > 23) {   //
                picNumber = 0;
            }
            bear.frame = picNumber;   //
            bear.x -= 2;   //
        });
        
        game.rootScene.addChild(bear);   //
    };
    
    
    game.start();   //
};