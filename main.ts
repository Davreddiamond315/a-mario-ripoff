scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    music.pewPew.playUntilDone()
    music.pewPew.playUntilDone()
    music.pewPew.playUntilDone()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(0, 0), myTiles.tile4)
    music.baDing.playUntilDone()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -300)
    pause(200)
    mySprite.setVelocity(0, 200)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    music.playMelody("C D E F G B G - ", 350)
    music.playMelody("C D E F G C5 A - ", 350)
    music.playMelody("C D E F G C5 C5 C5 ", 350)
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile6, function (sprite, location) {
    music.pewPew.playUntilDone()
    music.pewPew.playUntilDone()
    music.pewPew.playUntilDone()
    game.over(false)
})
let speed = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . . e e e e d d f d d d . . . 
    . . . e d d d e d d d d d d d d 
    . . . d d d d d e e e e e d d d 
    . . . . d d d d d 2 2 2 2 . . . 
    . d d d 8 2 2 2 2 2 2 8 8 d d . 
    1 d d 8 8 2 2 2 2 2 2 8 8 . d 1 
    1 1 . 8 8 2 2 2 2 2 2 8 8 . 1 1 
    . . 8 8 5 8 8 8 8 8 8 5 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 . . . . . . 8 8 . . . 
    . . . f f f . . . . . f f f . . 
    . . . f f f f . . . . f f f f . 
    `, SpriteKind.Player)
mySprite.setPosition(9, 101)
tiles.setTilemap(tiles.createTilemap(hex`100010000909090909090909090909090909090908080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808070808080808080808080708080808080808080808080808020808080808080808080808080803020808080808080807050708080804020808070507080808080808080808020808080808080808080808080808080808080808080808080808080402080208080808080808080808080802020402020808080808080b0a0a0a02020203020202060a040403020101010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 . . . . . . . . . 2 . . 
    . . . . . . . . . . . 2 . . . . 
    . . . . . . . . . . 2 . . . . . 
    . . 2 2 2 . . . . 2 . . 2 2 2 . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . 2 2 . 2 2 . . . . . . . 
    . . . 2 2 2 . 2 2 2 . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen))
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
mySprite.setVelocity(0, 200)
forever(function () {
    if (controller.A.isPressed() == false) {
        mySprite.setVelocity(0, 200)
    }
})
forever(function () {
    music.playMelody("C5 C5 C5 A B C5 D A ", 150)
    music.playMelody("G F E D E F B G ", 150)
    music.playMelody("C5 G B F D C5 E B ", 150)
    music.playMelody("D C F D D C5 C5 E ", 150)
    music.playMelody("C C5 C5 B A G F E ", 150)
    music.playMelody("D C C5 B A G G C5 ", 150)
})
game.onUpdateInterval(100, function () {
    speed += 10
})
