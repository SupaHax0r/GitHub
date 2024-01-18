mp.onScore(999, function (player2) {
    mp.gameOverPlayerWin(player2)
    game.setGameOverEffect(true, effects.starField)
})
controller.combos.attachCombo("adaabaubulabrab", function () {
	
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    sprite.setPosition(0, 0)
})
function GeneratedTilemap () {
	
}
