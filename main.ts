namespace SpriteKind {
    export const Blaster = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Blaster, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 4 4 4 4 4 4 4 4 2 
2 4 5 5 5 5 5 5 4 2 
2 4 5 5 5 5 5 5 4 2 
2 4 4 4 4 4 4 4 4 2 
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
`, mySprite, 50, 0)
    projectile2.setKind(SpriteKind.Blaster)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 8 8 8 8 8 8 . . . . . . . . . 
5 4 4 4 4 4 4 4 . . . . . . . . 
. 4 4 4 4 4 4 4 5 5 5 5 5 5 . . 
. 2 5 2 2 4 4 4 2 4 4 2 4 5 2 2 
. 5 5 5 2 4 4 4 2 4 4 4 2 5 2 2 
. 2 5 2 2 4 4 4 5 5 5 5 5 5 . . 
. 4 4 4 4 4 4 4 . . . . . . . . 
5 4 4 4 4 4 4 4 . . . . . . . . 
. 8 8 8 8 8 8 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c c c c 
. . . . . . . . . . . c . . . . 
. . . . . . . . 7 7 7 7 7 7 7 7 
. . . . . . . . b b 7 7 7 7 b b 
. b b b b b b b b b b b b b b b 
. b b b c b c c c c c c c b b b 
b b b b c c c b b b b b c c c b 
. b b b b b b b b b b b b b b b 
. . . . . . . . b b b 7 7 7 b b 
. . . . . . . . 7 7 7 7 7 7 b b 
. . . . . . . . . . . c . . . . 
. . . . . . . . . . . c c c c c 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -100, Math.randomRange(-100, 100))
    projectile.setKind(SpriteKind.Enemy)
})
