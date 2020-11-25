namespace SpriteKind {
    export const pl8 = SpriteKind.create()
    export const jely = SpriteKind.create()
}
function level () {
    scene.setTileMap(img`
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        ..............5..55555........
        ..............5...............
        ..............5........555...5
        .............55..........5555.
        .............5................
        .............5................
        .............555..............
        .............5..5.............
        ............5....5............
        ............5....55...........
        ...........5......5...........
        ...........5......55..........
        ..........5........55.........
        .........55.........55........
        ........55....................
        .......55....................5
        ......55...........55555555555
        .....55.55....................
        .....5...55...................
        ....55....................8...
        ...5..........................
        222222222222222222222222222222
        222222222222222222222222222222
        `)
    for (let value of scene.getTilesByType(8)) {
        scene.setTile(8, img`
            . . . . d d d d d . . . . . . . 
            . d d d 5 5 5 5 5 d d d . . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d . . . 
            d 5 5 5 5 5 5 5 5 5 5 5 d d . . 
            . d d d 5 5 5 5 5 d d d d d . . 
            . d 5 d d d d d d 5 d d d d . . 
            . d 5 d 5 5 5 d 5 5 d 5 d . . . 
            . d 5 d 5 5 5 d 5 5 d 5 d . . . 
            . d 5 d d 5 5 d 5 d 5 5 d . . . 
            . d 5 5 d 5 5 d 5 d 5 5 d . . . 
            . . d 5 d 5 d d 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . d 5 d 5 d 5 5 d 5 d . . . . 
            . . . d d d d d d d d . . . . . 
            `, false)
    }
    for (let value of scene.getTilesByType(2)) {
        scene.setTile(2, img`
            e e e b b b b e e e e e e e e e 
            e e e b b b b b b b b e e e e e 
            b e e e e e e e e b b b b b b b 
            e b b b b b b b e e e b b e e e 
            e e e e e e e e e b e e e e e e 
            e e e e e e e e e e b b b b b b 
            e e e e e b e e e e e e e e e e 
            e e e e e b b b b e e e e e e e 
            e e e e e e e e e b b e e e e e 
            e e e e e e e e e e e e b b b b 
            e b b e e e e e e e e e e e e e 
            e e b b e e e e e e e e e e e e 
            e e e b b b b e e e e e e e e e 
            e e e e e e e b b b b b e e e b 
            e e e e e e e e e e e e e e e e 
            e e e e e e e e e e e e e e e e 
            `, true)
    }
    for (let value of scene.getTilesByType(5)) {
        scene.setTile(5, img`
            e f b e e b f e b e e b e e f b 
            e f b e e b f e b e b b e f e b 
            e f b e b b f e e b b e e f b e 
            e e f e b e f e e b b e f e b e 
            e e f e b e f e e b e e f e b e 
            e e f e b e f e e b e f f e b f 
            e e f e b e f e b b e f e e b f 
            e e f b e e f e b e b f e e b f 
            e e f b e e f b b e b f e e b f 
            e e f b e e f b e e f b e e b f 
            e e f b e e f b e e f b e e f e 
            e e f b e e f b e e f b e e f e 
            e b f b b e f e e f f e b e f e 
            e b f e b f b e e f e e b e f e 
            b b f e b f b e e f e e b f b e 
            b e f e e f b e e f e e b f b e 
            `, true)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -450)
    pause(200)
    mySprite.setVelocity(0, 400)
})
function llleeevvveeelll () {
	
}
function lleevveell () {
	
}
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f . . f f . . . . . f f . . 
    . . . f . . . f . . . f . . . . 
    . e e e e e e e e e f e e . . . 
    e e e e e e e e e f f e e f e . 
    f f f f f f f f f e f e e e e . 
    e e e e e e e e e f f e e f e . 
    . e e e e e e e e e f e e . . . 
    . . . f . . . f . . . f . . . . 
    . f f . . f f . . . . . f f . . 
    `, SpriteKind.Player)
level()
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundColor(9)
mySprite.setPosition(18, 91)
scene.cameraFollowSprite(mySprite)
let tile_list = 0
forever(function () {
    if (controller.A.isPressed()) {
        mySprite.setVelocity(0, 350)
    }
})
