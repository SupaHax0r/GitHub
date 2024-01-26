namespace SpriteKind {
    export const platformer = SpriteKind.create()
    export const Camera = SpriteKind.create()
}
function Check_if_out_of_screen (end: Sprite) {
    for (let index = 0; index <= Playa_List.length; index++) {
        xdist = 0
        ydist = 0
        dist = 0
        if (true) {
        	
        } else {
        	
        }
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.setCurrentTilemap(tilemap`level1`)
    Camera_screen = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Camera)
    scene.cameraFollowSprite(Camera_screen)
    Camera_screen.setVelocity(0, 30)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(randint(2, 10), 253))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(randint(2, 10), 253))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        . . . . . f f 4 4 f f . . . . . 
        . . . . f 5 4 5 5 4 5 f . . . . 
        . . . f e 4 5 5 5 5 4 e f . . . 
        . . f b 3 e 4 4 4 4 e 3 b f . . 
        . . f 3 3 3 3 3 3 3 3 3 3 f . . 
        . f 3 3 e b 3 e e 3 b e 3 3 f . 
        . f 3 3 f f e e e e f f 3 3 f . 
        . f b b f b f e e f b f b b f . 
        . f b b e 1 f 4 4 f 1 e b b f . 
        f f b b f 4 4 4 4 4 4 f b b f f 
        f b b f f f e e e e f f f b b f 
        . f e e f b d d d d b f e e f . 
        . . e 4 c d d d d d d c 4 e . . 
        . . e f b d b d b d b b f e . . 
        . . . f f 1 d 1 d 1 d f f . . . 
        . . . . . f f b b f f . . . . . 
        `, SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(randint(2, 10), 253))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `, SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(randint(2, 10), 253))
    Playa_List = [
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four))
    ]
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e f 2 f f f 2 f 2 e f . . . 
            . f f f 2 2 e e f 2 f f f . . . 
            . f e e f 2 e e f f 2 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 2 2 2 2 2 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        500,
        true
        )
    } else {
    	
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 6 5 5 2 6 f . . . . 
            . . . . f 6 6 1 6 6 6 6 f . . . 
            . . . . f 6 1 6 6 6 6 6 f . . . 
            . . . . f 1 6 6 6 d f d f . . . 
            . . . f f 6 6 6 6 d f d f . . . 
            . . f 6 f 6 6 6 d d 3 d f . . . 
            . . . f f 6 f f d d d f . . . . 
            . . f 6 6 6 f 3 5 f f . . . . . 
            . . . f f f f f 3 3 5 f . . . . 
            . . . . . . f d f 3 3 f . . . . 
            . . . . . . f d f 3 f . . . . . 
            . . . . . f d f 3 5 3 f . . . . 
            . . . . . . f f 3 3 f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 6 5 5 2 6 f . . . . . 
            . . . f 6 6 1 6 6 6 6 f . . . . 
            . . . f 6 1 6 6 6 6 6 f . . . . 
            . . . f 1 6 6 6 d f d f . . . . 
            . . f f 6 6 6 6 d f d f . . . . 
            . f 6 f 6 6 6 d d 3 d f . . . . 
            . . f f 6 f f d d d f . . . . . 
            . f 6 6 f f 3 3 f f . . . . . . 
            . . f f f f d d d d f . . . . . 
            . . . . f 3 f d d d f . . . . . 
            . . . f 3 5 d f f f . . . . . . 
            . . . . f f 3 3 f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 6 5 5 2 6 f . . . . . 
            . . . f 6 6 1 6 6 6 6 f . . . . 
            . . . f 6 1 6 6 6 6 6 f . . . . 
            . . . f 1 6 6 6 d f d f . . . . 
            . . f f 6 6 6 6 d f d f . . . . 
            . f 6 f 6 6 6 d d 3 d f . . . . 
            . . f f 6 f f d d d f . . . . . 
            . f 6 6 f f 3 3 f f . . . . . . 
            . . f f f d d 3 3 5 f . . . . . 
            . . . f d d f 3 3 3 f . . . . . 
            . . . . f f f 5 3 f . . . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . f f f f f . . . . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 6 2 5 5 6 f . . . . . 
            . . . f 6 6 6 6 1 6 6 f . . . . 
            . . . f 6 6 6 6 6 1 6 f . . . . 
            . . . f d f d 6 6 6 1 f . . . . 
            . . . f d f d 6 6 6 6 f f . . . 
            . . . f d 3 d d 6 6 6 f 6 f . . 
            . . . . f d d d f f 6 f f . . . 
            . . . . . f f 5 3 f 6 6 6 f . . 
            . . . . f 5 3 3 f f f f f . . . 
            . . . . f 3 3 f d f . . . . . . 
            . . . . . f 3 f d f . . . . . . 
            . . . . f 3 5 3 f d f . . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 6 2 5 5 6 f . . . . 
            . . . . f 6 6 6 6 1 6 6 f . . . 
            . . . . f 6 6 6 6 6 1 6 f . . . 
            . . . . f d f d 6 6 6 1 f . . . 
            . . . . f d f d 6 6 6 6 f f . . 
            . . . . f d 3 d d 6 6 6 f 6 f . 
            . . . . . f d d d f f 6 f f . . 
            . . . . . . f f 3 3 f f 6 6 f . 
            . . . . . f d d d d f f f f . . 
            . . . . . f d d d f 3 f . . . . 
            . . . . . . f f f d 5 3 f . . . 
            . . . . . f f f 3 3 f f . . . . 
            . . . . . f f f f f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . 5 . . . . . . 
            . . . . . . f 5 5 5 f . . . . . 
            . . . . . f 6 2 5 5 6 f . . . . 
            . . . . f 6 6 6 6 1 6 6 f . . . 
            . . . . f 6 6 6 6 6 1 6 f . . . 
            . . . . f d f d 6 6 6 1 f . . . 
            . . . . f d f d 6 6 6 6 f f . . 
            . . . . f d 3 d d 6 6 6 f 6 f . 
            . . . . . f d d d f f 6 f f . . 
            . . . . . . f f 3 3 f f 6 6 f . 
            . . . . . f 5 3 3 d d f f f . . 
            . . . . . f 3 3 3 f d d f . . . 
            . . . . . . f 3 5 f f f . . . . 
            . . . . . f 3 3 3 3 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f 6 6 6 6 6 6 f . . . . 
            . . . f 6 1 1 1 6 1 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . f f 6 6 6 6 6 6 6 6 f f . . 
            . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
            . . f f f 3 f f f f 3 f f f . . 
            . . . f d 5 3 3 3 3 5 d f . . . 
            . . f d d f 3 3 3 3 f d d f . . 
            . . . f f f 5 3 3 5 f f f . . . 
            . . . . f 3 3 5 5 3 3 f . . . . 
            . . . . f 3 3 3 3 3 3 f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f 6 6 6 6 6 6 f . . . . 
            . . . f 6 1 1 1 6 1 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . f f 6 6 6 6 6 6 6 6 f f . . 
            . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
            . . f f f 3 f f f f 5 f f f . . 
            . . . f d f 3 3 3 3 d d f . . . 
            . . . . f 3 5 3 3 f d d f . . . 
            . . . . f 3 3 5 5 3 f f . . . . 
            . . . . f f 3 3 f f . . . . . . 
            . . . . . . f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . f 6 6 6 6 6 6 f . . . . 
            . . . f 6 1 1 1 6 1 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . . f 6 6 6 6 6 6 6 6 f . . . 
            . . f f 6 6 6 6 6 6 6 6 f f . . 
            . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
            . . f f f 5 f f f f 3 f f f . . 
            . . . f d d 3 3 3 3 f d f . . . 
            . . . f d d f 3 3 5 3 f . . . . 
            . . . . f f 3 5 5 3 3 f . . . . 
            . . . . . . f f 3 3 f f . . . . 
            . . . . . . . . f f . . . . . . 
            `],
        500,
        true
        )
    } else {
    	
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . . f b b b b f b f e e e 3 f . 
            . . f b b b b e 1 f 4 4 e f . . 
            . f f b b b b f 4 4 4 4 f . . . 
            . f b b b b f f f e e e f . . . 
            . . f b b f 4 4 e d d d f . . . 
            . . . f f e 4 4 e d d d f . . . 
            . . . . f b e e b d b d b f . . 
            . . . . f f d 1 d 1 d 1 f f . . 
            . . . . . . f f b b f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f 4 4 f . . . 
            . . . . f f b f 5 4 5 5 4 f . . 
            . . . f b 3 3 e 4 5 5 5 5 f . . 
            . . f b 3 3 3 3 e 4 4 4 e f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f 3 3 3 3 e b 3 e e 3 3 f . 
            . . f 3 3 3 3 f f e e e 3 3 f . 
            . f f b b b b f b f e e e f . . 
            . f b b b b b e 1 f 4 4 e . . . 
            . f b b b b b f 4 4 4 4 f . . . 
            . . f b b b 4 4 e d d d f . . . 
            . . . f f f 4 4 e d d d f . . . 
            . . . f b b e e b b d d d f . . 
            . . . . f b d d 1 d 1 d b f . . 
            . . . . . f f f b b f f f . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . f 3 e e e f b f b b b b f . . 
            . . f e 4 4 f 1 e b b b b f . . 
            . . . f 4 4 4 4 f b b b b f f . 
            . . . f e e e f f f b b b b f . 
            . . . f d d d e 4 4 f b b f . . 
            . . . f d d d e 4 4 e f f . . . 
            . . f b d b d b e e b f . . . . 
            . . f f 1 d 1 d 1 d f f . . . . 
            . . . . f f b b f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . . f e e e f b f b b b b f f . 
            . . . e 4 4 f 1 e b b b b b f . 
            . . . f 4 4 4 4 f b b b b b f . 
            . . . f d d d e 4 4 b b b f . . 
            . . . f d d d e 4 4 f f f . . . 
            . . f d d d b b e e b b f . . . 
            . . f b d 1 d 1 d d b f . . . . 
            . . . f f f b b f f f . . . . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b c f 
            f b b b b b b b b b b b b b b f 
            . f c c b b b b b b b b c c f . 
            . . e 4 c f f f f f f c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b f . 
            f b b b b b b b b b b b b c f . 
            f f b b b b b b b b b b c f . . 
            . f c c c f f f f f f f e c . . 
            . . . f b b d b d d e 4 4 e . . 
            . . . f f 1 1 d 1 d e e f . . . 
            . . . . . f b b f f f . . . . . 
            `,img`
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 3 3 3 3 3 3 3 3 3 3 f . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            f c b b b b b b b b b b b b c f 
            f b b b b b b b b b b b b b b f 
            . f c c b b b b b b b b c c f . 
            . . e 4 c f f f f f f c 4 e . . 
            . . e f b d b d b d b b f e . . 
            . . . f f 1 d 1 d 1 d f f . . . 
            . . . . . f f b b f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f 4 4 f f . . . . . 
            . . . . f 5 4 5 5 4 5 f . . . . 
            . . . f e 3 3 3 3 3 3 e f . . . 
            . . f b 3 3 3 3 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f b 3 3 3 3 3 3 3 3 3 3 b f . 
            . f b b 3 3 3 3 3 3 3 3 b b f . 
            . f b b b b b b b b b b b b f . 
            . f b b b b b b b b b b b b c f 
            . f c b b b b b b b b b b b b f 
            . . f c b b b b b b b b b b f f 
            . . c e f f f f f f f c c c f . 
            . . e 4 4 e d d b d b b f . . . 
            . . . f e e d 1 d 1 1 f f . . . 
            . . . . . f f f b b f . . . . . 
            `],
        500,
        true
        )
    } else {
    	
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Right)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . f f e e e d d d d f . . 
            . . . f d d e e d d d d d d c . 
            . . . c d b e e d f d d f d c . 
            f f . c d b e e d f d d f d d c 
            f e f . c f e e d d d d e e d c 
            f e f . . f e e e d c d d d d c 
            f e f . . f f e e e d c c c f . 
            f e f . f e e e e f f f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f e e e e f e e f e f f . . 
            . . f e e e f f f e e f f e f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f b e e e e e f f . . . . 
            . . f f d d c e e f f e f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Left)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        500,
        true
        )
    } else if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.Up)) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e f f e e e f . . 
            f f . f e e e e e f f f f f . . 
            f e . f e e f f e e f b d f . . 
            f e . f e e e f f e f d d f f . 
            f e f f e f b b e f f f f f f . 
            f f f f e b d d e e e f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e e d d d d d f . . . 
            . . . f f e d f f d d f f f . . 
            . . f d d e d d d d e e d d c . 
            . f f f d e d d c d d d d c c . 
            f d b f d e d d d c c c c d c . 
            f d d f f e e d d d d d d c . . 
            f f f e f f e e d d d d c . . . 
            . . f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . f f f f f . . . . . 
            . . . . . f e e e e e f . . . . 
            . . . . f e d d d d d d f . . . 
            . . . f f d f f d d f f d f . . 
            . . f d e d d d d e e d d d c . 
            . . f f e d d c d d d d c d c . 
            f f f f e d d d c c c c d d c . 
            f d b f f e d d d d d d d c . . 
            f d d f f f e e d d d d c . . . 
            f f f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f f f f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `],
        500,
        true
        )
    } else {
    	
    }
})
function GeneratedTilemap () {
	
}
let Camera_screen: Sprite = null
let dist = 0
let ydist = 0
let xdist = 0
let Playa_List: Sprite[] = []
music.play(music.stringPlayable("E D F A F C5 A E ", 175), music.PlaybackMode.LoopingInBackground)
scroller.scrollBackgroundWithSpeed(-27, 0, scroller.BackgroundLayer.Layer0)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888228888888888888888888888888888888888888822888888888888888888888888888888888888882288888888888888888888888888888888888888228888888888888888
    8888888888888888888888828888888888888888888888888888888888888882888888888888888888888888888888888888888288888888888888888888888888888888888888828888888888888888
    8888888888888888888882222888888888888888888888888888888888888222288888888888888888888888888888888888822228888888888888888888888888888888888882222888888888888888
    8888888888888888888822222888888888888888888888888888888888882222288888888888888888888888888888888888222228888888888888888888888888888888888822222888888888888888
    8888888888888888888222222288888888888888888888888888888888822222228888888888888888888888888888888882222222888888888888888888888888888888888222222288888888888888
    8888888888888888888222228288888888888888888888888888888888822222828888888888888888888888888888888882222282888888888888888888888888888888888222228288888888888888
    888888888888b888888822228888888888888888888888888888b888888822228888888888888888888888888888b888888822228888888888888888888888888888b888888822228888888888888888
    888888888888b888888222222288888888888888888888888888b888888222222288888888888888888888888888b888888222222288888888888888888888888888b888888222222288888888888888
    888888888888b888882222222288888888888888888888888888b888882222222288888888888888888888888888b888882222222288888888888888888888888888b888882222222288888888888888
    888888888888b888822222222222888888888888888888888888b888822222222222888888888888888888888888b888822222222222888888888888888888888888b888822222222222888888888888
    882288888888b882822222222222228888b88888882288888888b882822222222222228888b88888882288888888b882822222222222228888b88888882288888888b882822222222222228888b88888
    822222888888b882222222222222228888b88888822222888888b882222222222222228888b88888822222888888b882222222222222228888b88888822222888888b882222222222222228888b88888
    222222228888b888222222222222228888b88888222222228888b888222222222222228888b88888222222228888b888222222222222228888b88888222222228888b888222222222222228888b88888
    2222222228888b88882222222222228888b888882222222228888b88882222222222228888b888882222222228888b88882222222222228888b888882222222228888b88882222222222228888b88888
    d2222222288888b888822222225555558bb8888582222222288888b888822222225555558bb8888582222222288888b888822222225555558bb8888582222222288888b888822222225555558bb88885
    d22222222288888bb2222222555555555b888858822222222288888bb2222222555555555b888858822222222288888bb2222222555555555b888858822222222288888bb2222222555555555b888858
    2222222288888888bb22222222552555bb8888882222222288888888bb22222222552555bb8888882222222288888888bb22222222552555bb8888882222222288888888bb22222222552555bb888888
    222222222888888222b222222252225bb5888882222222222888888222b222222252225bb5888882222222222888888222b222222252225bb5888882222222222888888222b222222252225bb5888882
    2222b2288888822222222222222222bb888888222222b2288888822222222222222222bb888888222222b2288888822222222222222222bb888888222222b2288888822222222222222222bb88888822
    2222b222288888222222222222222bb8888888222222b222288888222222222222222bb8888888222222b222288888222222222222222bb8888888222222b222288888222222222222222bb888888822
    2222b22b228888882222555552222228888888222222b22b228888882222555552222228888888222222b22b228888882222555552222228888888222222b22b22888888222255555222222888888822
    2222b22b228888835555555555222222222888222222b22b228888855555555555222222222888222222b22b228888855555555555222222222888222222b22b22888885555555555522222222288822
    2222b2b2228888555555555552255522222888222222b2b2228888555555555552255522222888222222b2b2228888555555555552255522222888222222b2b222888855555555555225552222288822
    2222bbb2552833355555555555555552228888822222bbb2552855555555555555555552228888822222bbb2552855555555555555555552228888822222bbb255285555555555555555555222888882
    2222bb25522255555555555555555555228888222222bb25522255555555555555555555228888222222bb25522255555555555555555555228888222222bb2552225555555555555555555522888822
    222bb22222555555555555555555522222222222222bb22222555555555555555555522222222222222bb22222555555555555555555522222222222222bb22222555555555555555555522222222222
    22bb222255555555555555552bb222222222b22222bb222255555555555555552bb222222222b22222bb222255555555555555552bb222222222b22222bb222255555555555555552bb222222222b222
    22b2222522225555552555552bb222552222b22222b2222522225555552555552bb222552222b22222b2222522225555552555552bb222552222b22222b2222522225555552555552bb222552222b222
    22b2b22222255525522555222bb222b55222b22222b2b22222255525522555222bb222b55222b22222b2b22222255525522555222bb222b55222b22222b2b22222255525522555222bb222b55222b222
    2bb2b22222252225222225222bb222b22222b2222bb2b22222252225222225222bb222b22222b2222bb2b22222252225222225222bb222b22222b2222bb2b22222252225222225222bb222b22222b222
    2bbbb22222222522255222222bb222b222222b222bbbb22222222522255222222bb222b222222b222bbbb22222222522255222222bb222b222222b222bbbb22222222522255222222bb222b222222b22
    2bbb222222225522552222222bb222b222222b222bbb222222225522552222222bb222b222222b222bbb222222225522552222222bb222b222222b222bbb222222225522552222222bb222b222222b22
    2b222222222252222222b2222bb22b2222222bbb2b222222222252222222b2222bb22b2222222bbb2b222222222252222222b2222bb22b2222222bbb2b222222222252222222b2222bb22b2222222bbb
    bb222222222222222222b2222bbb2b222222222bbb222222222222222222b2222bbb2b222222222bbb222222222222222222b2222bbb2b222222222bbb222222222222222222b2222bbb2b222222222b
    2b222222222222222222b2222bbbb222222222222b222222222222222222b2222bbbb222222222222b222222222222222222b2222bbbb222222222222b222222222222222222b2222bbbb22222222222
    2b222222222222222222b2222bbbb222555222222b222222222222222222b2222bbbb222555222222b222222222222222222b2222bbbb222555222222b222222222222222222b2222bbbb22255522222
    2b555225552222222222b2222bbb2225552222222b555225552222222222b2222bbb2225552222222b555225552222222222b2222bbb2225552222222b555225552222222222b2222bbb222555222222
    55555522555222222222b2222bbb22555225555555555522555222222222b2222bbb22555225555555555522555222222222b2222bbb22555225555555555522555222222222b2222bbb225552255555
    55552222b55522222222b2222bbb22222555555555552222b55522222222b2222bbb22222555555555552222b55522222222b2222bbb22222555555555552222b55522222222b2222bbb222225555555
    55555552b22222222b22b2222bbb22225555555555555552b22222222b22b2222bbb22225555555555555552b22222222b22b2222bbb22225555555555555552b22222222b22b2222bbb222255555555
    55555555552222222b22b2222bbbb2555525555555555555552222222b22b2222bbbb2555525555555555555552222222b22b2222bbbb2555525555555555555552222222b22b2222bbbb25555255555
    55555255552222222b22b2222bbb5555b522552555555255552222222b22b2222bbb5555b522552555555255552222222b22b2222bbb5555b522552555555255552222222b22b2222bbb5555b5225525
    2555222bb5bb22222b22b2222bbbb555b22552222555222bb5bb22222b22b2222bbbb555b22552222555222bb5bb22222b22b2222bbbb555b22552222555222bb5bb22222b22b2222bbbb555b2255222
    22b5222bb5b222222bb2bb222bbbb222bb22222222b5222bb5b222222bb2bb222bbbb222bb22222222b5222bb5b222222bb2bb222bbbb222bb22222222b5222bb5b222222bb2bb222bbbb222bb222222
    22b2222bbbb2222222bbbb222bbbb222bb22222222b2222bbbb2222222bbbb222bbbb222bb22222222b2222bbbb2222222bbbb222bbbb222bb22222222b2222bbbb2222222bbbb222bbbb222bb222222
    22b2222bb2222222222bbb222bbbb222bb22222222b2222bb2222222222bbb222bbbb222bb22222222b2222bb2222222222bbb222bbbb222bb22222222b2222bb2222222222bbb222bbbb222bb222222
    22b2222bb22222222222bbb22bbbb222bb22222222b2222bb22222222222bbb22bbbb222bb22222222b2222bb22222222222bbb22bbbb222bb22222222b2222bb22222222222bbb22bbbb222bb222222
    222b222bb22222222222bbb22bbbb222bb222222222b222bb22222222222bbb22bbbb222bb222222222b222bb22222222222bbb22bbbb222bb222222222b222bb22222222222bbb22bbbb222bb222222
    222bb2bbb2222552555225b22bbbb222bb22b222222bb2bbb2222552555225b22bbbb222bb22b222222bb2bbb2222552555225b22bbbb222bb22b222222bb2bbb2222552555225b22bbbb222bb22b222
    222bbbbbb2225555555555552bbbbb22bb22b222222bbbbbb2225555555555552bbbbb22bb22b222222bbbbbb2225555555555552bbbbb22bb22b222222bbbbbb2225555555555552bbbbb22bb22b222
    2222bbbbb225555555555555bbbbbb2bb22bb2222222bbbbb225555555555555bbbbbb2bb22bb2222222bbbbb225555555555555bbbbbb2bb22bb2222222bbbbb225555555555555bbbbbb2bb22bb222
    22222bbbb222555555555525bbbbbb2bb22b222222222bbbb222555555555525bbbbbb2bb22b222222222bbbb222555555555525bbbbbb2bb22b222222222bbbb222555555555525bbbbbb2bb22b2222
    22222bbb2255225555552522bbbbbb2bb2b2222222222bbb2255225555552522bbbbbb2bb2b2222222222bbb2255225555552522bbbbbb2bb2b2222222222bbb2245225555552522bbbbbb2bb2b22222
    22222bbb2222255225522522bbbbbb2bbb22222222222bbb2222255225522522bbbbbb2bbb22222222222bbb2222255225522522bbbbbb2bbb22222222222bbb2222255225522522bbbbbb2bbb222222
    22222bbb222b2522222222222bbbbbbb2222222222222bbb222b2522222222222bbbbbbb2222222222222bbb222b2522222222222bbbbbbb2222222222222bbb222b2522222222222bbbbbbb22222222
    22222bbb222b2222222222222bbbbbbb2222222222222bbb222b2222222222222bbbbbbb2222222222222bbb222b2222222222222bbbbbbb2222222222222bbb222b2222222222222bbbbbbb22222222
    22222bbb222b2b22222222222bbbbbbb2222222222222bbb222b2b22222222222bbbbbbb2222222222222bbb222b2b22222222222bbbbbbb2222222222222bbb222b2b22222222222bbbbbbb22222222
    22222bbb222b2b22222222222bbbbbb22222222222222bbb222b2b22222222222bbbbbb22222222222222bbb222b2b22222222222bbbbbb22222222222222bbb222b2b22222222222bbbbbb222222222
    22222bbb222b2b22222222222bbbbb222222222222222bbb222b2b22222222222bbbbb222222222222222bbb222b2b22222222222bbbbb222222222222222bbb222b2b22222222222bbbbb2222222222
    22222bb2222bbb22222222222bbbbb222222222222222bb2222bbb22222222222bbbbb222222222222222bb2222bbb22222222222bbbbb222222222222222bb2222bbb22222222222bbbbb2222222222
    22222bb222bbb222222222222bbbbb222222222222222bb222bbb222222222222bbbbb222222222222222bb222bbb222222222222bbbbb222222222222222bb222bbb222222222222bbbbb2222222222
    2222bbb222b22222222288222bbbbb28222222222222bbb222b22222222288222bbbbb28222222222222bbb222b22222222288222bbbbb28222222222222bbb222b22222222288222bbbbb2822222222
    2222bbb222b2222222222882bbbbbb22882222822222bbb222b2222222222882bbbbbb22882222822222bbb222b2222222222882bbbbbb22882222822222bbb222b2222222222882bbbbbb2288222282
    2222bbb2bbb2222222222222bbbbbbb2282228822222bbb2bbb2222222222222bbbbbbb2282228822222bbb2bbb2222222222222bbbbbbb2282228822222bbb2bbb2222222222222bbbbbbb228222882
    8822bbbbbb22222222822222bbbbbbb2222228228822bbbbbb22222222822222bbbbbbb2222228228822bbbbbb22222222822222bbbbbbb2222228228822bbbbbb22222222822222bbbbbbb222222822
    8882bbbbb228822228822228bbbbbbb8222222222882bbbbb228822228822228bbbbbbb8222222222882bbbbb228822228822228bbbbbbb8222222222882bbbbb228822228822228bbbbbbb822222222
    8888bbbbb222882288228288bbbbbbb8222822222888bbbbb222882288228288bbbbbbb8222822222888bbbbb222882288228288bbbbbbb8222822222888bbbbb222882288228288bbbbbbb822282222
    8888bbb22222222282288888bbbbbbb8828822822888bbb22222222282288888bbbbbbb8828822822888bbb22222222282288888bbbbbbb8828822822888bbb22222222282288888bbbbbbb882882282
    8888bbb82222222222288888bbbbbbb8888228888888bbb82222222222288888bbbbbbb8888228888888bbb82222222222288888bbbbbbb8888228888888bbb82222222222288888bbbbbbb888822888
    8888bbb82228228882288888bbbbbbb8888888888888bbb82228228882288888bbbbbbb8888888888888bbb82228228882288888bbbbbbb8888888888888bbb82228228882288888bbbbbbb888888888
    8888bbb82288828888288888bbbbbbb8888888888888bbb82288828888288888bbbbbbb8888888888888bbb82288828888288888bbbbbbb8888888888888bbb82288828888288888bbbbbbb888888888
    8888bbb88888888888888888bbbbbbb8888888888888bbb88888888888888888bbbbbbb8888888888888bbb88888888888888888bbbbbbb8888888888888bbb88888888888888888bbbbbbb888888888
    8888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb888888888
    8888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb8888888888888bbb38888888888888888bbbbbbb888888888
    8888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb888888888
    8888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb888888888
    8888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb8888888888888bbbb8888888888888888bbbbbbb888888888
    8888bbbb3888888888888888bbbbbbb8888888888888bbbb3888888888888888bbbbbbb8888888888888bbbb3888888888888888bbbbbbb8888888888888bbbb3888888888888888bbbbbbb888888888
    8888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb888888888
    8888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb8888888888888bbbbb888888888888888bbbbbbb888888888
    8888bbbbb388888888888883bbbbbbb3888888888888bbbbb388888888888883bbbbbbb3888888888888bbbbb388888888888883bbbbbbb3888888888888bbbbb388888888888883bbbbbbb388888888
    8888bbbbb38888888888888bbbbbbbb3888888888888bbbbb38888888888888bbbbbbbb3888888888888bbbbb38888888888888bbbbbbbb3888888888888bbbbb38888888888888bbbbbbbb388888888
    8883bbbbbb8888888888888bbbbbbbbb888888888883bbbbbb8888888888888bbbbbbbbb888888888883bbbbbb8888888888888bbbbbbbbb888888888883bbbbbb8888888888888bbbbbbbbb88888888
    8883bbbbbb8888888888883bbbbbbbbb888888888883bbbbbb8888888888883bbbbbbbbb888888888883bbbbbb8888888888883bbbbbbbbb888888888883bbbbbb8888888888883bbbbbbbbb88888888
    113bbbbbbb388888888888bbbbbbbb1111111111113bbbbbbb388888888888bbbbbbbb1111111111113bbbbbbb388888888888bbbbbbbb1111111111113bbbbbbb388888888888bbbbbbbb1111111111
    11111111bbb88888888833bbb11111111111111111111111bbb88888888833bbb11111111111111111111111bbb88888888833bbb11111111111111111111111bbb88888888833bbb111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
