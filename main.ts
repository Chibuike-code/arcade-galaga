controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . . 2 2 2 2 2 2 2 2 . 
        . . . . . . . 2 2 2 2 2 2 2 2 . 
        . . . . . . . 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, My_Plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let My_Plane: Sprite = null
effects.starField.startScreenEffect()
My_Plane = sprites.create(img`
    . . . . 8 . . . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 
    4 4 4 4 4 4 4 4 4 4 4 4 2 2 2 2 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . 8 . . . . . . . . . . . 
    `, SpriteKind.Player)
My_Plane.setStayInScreen(true)
info.setLife(3)
controller.moveSprite(My_Plane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . c c c c c 
        . . . . . . . . . c c 7 7 7 6 c 
        . . . . . . . . c c 7 7 7 c c . 
        . . . . . . . . c 6 7 7 c . . . 
        . . . . . . . . c 6 6 6 c . . . 
        . . . . . . . . c 6 6 6 c c . . 
        . . . c c c c c c c 6 6 6 c c . 
        . . c 6 7 7 7 7 6 c c 6 6 6 c . 
        . c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
        c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
        c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
        f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
        f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
        . f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
        . c 1 c f f 1 c 7 6 f 6 6 c c . 
        . c c c c c c c c c c c c . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-50, 0)
    bogey.setPosition(160, randint(0, 120))
})
