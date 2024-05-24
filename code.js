var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6aa8514-b027-4599-9d25-5c8b8d9ba5a2","0029d273-f1f5-4434-9e83-675270670ad9","b98f2f0e-74f0-45d0-b8fb-9d4685647956"],"propsByKey":{"a6aa8514-b027-4599-9d25-5c8b8d9ba5a2":{"name":"bunny","sourceUrl":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/v_Ye2VA9vP2sIRl._9tYvQG3dJzmtQ4_/category_animals/bunny2.png"},"0029d273-f1f5-4434-9e83-675270670ad9":{"name":"heart","sourceUrl":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png","frameSize":{"x":387,"y":387},"frameCount":1,"looping":true,"frameDelay":2,"version":"VgMQCofeiOzw_StDS_r3OsffccnggBmt","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":387,"y":387},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VgMQCofeiOzw_StDS_r3OsffccnggBmt/category_icons/heart.png"},"b98f2f0e-74f0-45d0-b8fb-9d4685647956":{"name":"palet","sourceUrl":"assets/api/v1/animation-library/gamelab/KQ_9zKtQQabTBpPbB82lh7.SrBCLDAwh/category_stickers/sticker_36.png","frameSize":{"x":172,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"KQ_9zKtQQabTBpPbB82lh7.SrBCLDAwh","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":172,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KQ_9zKtQQabTBpPbB82lh7.SrBCLDAwh/category_stickers/sticker_36.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerPaddle = createSprite(390, 200, 10,70);
var computerPaddle = createSprite(10, 200, 10,70);
var ball = createSprite(200,200,10,10);

playerPaddle.setAnimation("palet");
playerPaddle.scale = 0.3;
computerPaddle.setAnimation("palet");
computerPaddle.scale = 0.3;
ball.setAnimation("bunny");
ball.scale=0.5;

  ball.velocityX= 2;
  ball.velocityY= 2;

  createEdgeSprites();

function draw() {
  background("pink");
  
  if(keyDown("up")){
    playerPaddle.y =playerPaddle.y-10;
  }
  
  if(keyDown("down")){
    playerPaddle.y =playerPaddle.y+10;
  }
  
  computerPaddle.y = ball.y;
  drawnet();
  
  }
  
  
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  
  playerPaddle.bounceOff(topEdge);
  playerPaddle.bounceOff(bottomEdge);
  
  drawSprites();
}

function drawnet(){
  for (var num = 0; num <= 400; num=num+20) {
    line(200,num,200,num+10);
    stroke("purple");
  }
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
