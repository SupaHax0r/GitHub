namespace SpriteKind {
    export const Camera = SpriteKind.create()
    export const greeting = SpriteKind.create()
}
function Check_if_out_of_screen (end: Sprite) {
    while (index <= Playa_List.length) {
        xdist = Camera_screen.x - end.y
        ydist = Camera_screen.x - end.y
        dist = Math.sqrt(xdist - (2 + (ydist - 2)))
        if (dist > 45) {
            sprites.destroy(Playa_List[index], effects.trail, 500)
        } else {
        	
        }
        index += 1
    }
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    sprites.destroy(textsprite, effects.warmRadial, 5000)
    scroller.scrollBackgroundWithSpeed(0, 0)
    scene.setBackgroundImage(img`
        8fffffffffffffffffffffffff88fffff88ffff8998889999999989988888989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffffff8fffff88ff9f88889889999999989998888898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fffff889ff9988888988999989998999888889899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffffff8fff8f8f99ff998888898899988999899988888989999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffff8fff8f8fff998998888889889998899989998898898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffffff8fff8f8fffff98888888888888999889998899889888899999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffff8ffff88ffffff99888889988888999988999889988988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff88fff8ffff8ff889988888998898988998899988998899888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffffffff8fff8f8ff8ff8888988888899889988899889998899989988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffffff8ffffff888888ff88888888888889988998889988999889998999888999999999989999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff8ffffff88888fff888888888888889999999888998899988999899988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff8ffffff88888ff88888888888888888898899988899889998899989999889998999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff88f888888f888888888888888888889889998889988999889998989988999999999999899999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffff8ffff88f8888888888888888888888888888988899888998889988999988999899999999899998999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffff8ffff88888888888888888888888889888888998889988899888998899998889989999999998999969999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffff888f88888888888888888888888988888899888999889988899888999888899999999999989999999999999999999999999999999999999999999999999999999999999999999999
        fffffffffffffff888f888888888888888888888888898888889988899988998889988899998888999999999999899999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffff8fff8888888888888888888888888889888888998889998889988998889999988889999989999998999999999999999999999999999999999999999999999999999999999999999999
        fffffff8fffff8fff88888888888888888888888888888988888899888999888998899888999999889999998999999989999999999999999999999999999999999999999999999999999999999999999
        ffffff8fffff8fff88f888888888888888888888888888898888889988899988899888998899999999999999989999999899999999999999999999999999999999999999999999999999999999999999
        ffffffff8f88fff88ff888888888888888888888888888889888888999889998889988899888999999899999999899999998999989999999999999999999999999999999999999999999999999999999
        fffffff8888ff888ff8888888888888888888888888888888988888899999999888999899988899999988999999998899999999998899999999999999999999999999999999999999999999999999999
        ff8fff888ffff8fff88888888888888888888888888888888888888889999999988999999999888999998899999999988889999999988999999999999999999999999999999999999999999999999999
        fffff888ffff8ff8888888888888888888888888888888888888888889999989998889999988988899999988899999999998899999999999999999999999999999999999999999999999999999999999
        ffff88fffff8ff88888888888888888888888888888888888888888889999888999888999988889999999999888999999998988999999999999999999999999999999999999999999999999999999999
        fff88fff88fff888888888888888888888888888888888888888888888988988899998889999888899999999999889999999998889999999999999999999999999999999999999999999999999999999
        f8888ff88ffff888888888888888888888888888888888888888888888898899888998888999998889999888999998899999999988889899999999999999999999999999899999999999999999999999
        88fff888ffff8888888888888888888888888888888888888888888888889888988898888889999988899988889999988888999999988888999999999899999999999999999999999999999999999999
        8fff88ffff888888888888888888888888888888888888888888888888888988899888988888999998888999888889999888888999999988888898999999888999999999999999999999999999999999
        ff888ffff8888888888888888888888888888888888888888888888888888899888988898888899999988889999888899999888889999999888888899999999998889999999999999999999999999999
        f888ffff88888888888888888888888888888888888888888888888889988888888898888988888999999888899998888899999888899999999888888889999999999988888999999999999888888888
        88ffff8888888888888888888888888888888888888888888888888888998888888889988898888999999998888999998888999999888899999998889999988888999999999899999999998888888888
        8ffff88888888888888888888888888888888888888888888888888888899888888988898899988889999999988988999998889999999988999999999999999999999999999999999999999999999999
        8fff888888888888888888888888888888888888888888888888888888888988888888888999999888999999999988889999998889999999989999989999999999999999999999999999999999999999
        ff88888888888888888888888888888888888888888888888888888888888898888888988999999998889999999999888899999998899999999999999999999999988888889999999999999999999999
        f888888888888888888888888888888888888888888888888888888888888889988888899998899999888899999999998888899999998899999999999999899999999988888888888888888888889999
        6888888888888888888888888888888888888888888888888888888888888888898888888898888999998888999999999998888999999998899999999999999999999999999988888888888888888888
        6888888888888888888888888888888888888888888888888888888888888888888888888888988889999988888899999999988888999999998899999999999999999999999999999999999999999999
        6688888888888888888888888888888888888888888888888888888888888888888888888888899888889999998888999999999988888999999998899999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888888889999888899999988888999988999988888999999999999999999999999999899999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888889888888898998888899999988889988889999988999999999999999999999999999999999999999999999999
        66f8888888888888888888888888888888888888888888888888888888888888888888888998888888889998888999999989999888889999999999999888999999998888888888889999999888888899
        66f8888888888888888888888888888888888888888888888888888888888888888888888889988888888999888888999999999999888899999999999988888999999999998899999999888889999999
        66ff888888888888888888888888888888888888888888888888888888888888888888888888899888888889988888889999999999998888899999999999888888899999999999988889888889999999
        66fff88888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888899998889999988888999989999998999999999999999998888888999999999
        666ff88888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888889998888888999988899888889999999999888999999999999888888888889
        666fff8888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888899999899888888999999998888889999999999998888889999999888888888
        666fff6888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888889888999988998889999998888889999999998888888888888888999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888999998888888999999888888999999999998888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888889999999888888888999888899888888888888889999999999
        666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998899998888888889999989999999999999999999999
        666ff6666f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999988889999999999999888888888888fff
        666fff66fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888fff668
        6666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888fff666666
        66666fffffff888888888f888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888fffff6666866
        66666fffffff888888f8f6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888899998888888888888888888888888888888888fff886666666
        666666ffff8666888ffff66f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff866666666
        666666ffff8666888ffff666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888899999996ff66666866
        666666fff68666888ffff666f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888ff8f666666666
        666666ff668666f888fff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888fffff666666668
        6666666f6666666f8866f666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8666666668
        66666666666866fff86666668ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        6666cc666668fffff86666666ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
        696ccccc6668fff8ff6666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff8888ffff86666666666
        96cccccc66688fff6f866666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8ffff88fff866666666666
        96ccccbb66668ff66ff66666668f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff8ffff666666666666
        96ccccbb66668ff666f8666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff6fffffffff6666666666666
        96ccccbb66668ff666f8666666ff8ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666fffffff66666666666666
        99ccccbbc6666ff6666f666666fff8fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666ffffff866666666666666
        99ccccbbb6666ff6666f8666666ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886888888886668fff66666644466666666
        69ccccbbb6666ff666668666666fff6ff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888886666ffff66666444449444466
        666cccbbb66666f666668f66666ff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888ff888888fff888666888888666fff6666666444444444446
        6666cccbb66cccc66666ff666666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888888f6fff888ffff8886668888ff666f666666666442224444446
        666ccccbb6ccccbb6666f6f88666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888886666f888ffffff88666688fff6666666666666442224444446
        66cccccbbcccccbb666666686666f666ff888888888888888888888888888888888888888888888888888888888888888888888888888f666ff888ff88ffff6666f8fff6666666666644442222224466
        6cccbbcbbbbbcccc6666f666666666666ff8888888888888888888888888888888888888888888888888888888888888888888888888f6666f888fff8888ff6666fffff6666666666644222424226666
        6cccbbbbbbbbcccc6668556666666f666ff8888888888888888888888888888888888888888888888888888888888888888888888888f666ff88fff88888886666fff666666666666444244444466666
        6cccbbccbbbccccc66685566666cccf666ff888888888888888888888888888888888888888888888888888888888888888888888888f666ff8fff888888886666886666666666666444244444466666
        6cccccccccccccc66665566666ccccc666fffff886888888888888888888888888888888888888888888888888888888888888888888f666ff8ffff888fff66666866f66666666666644444444466666
        8cccccccccccccc6666566666ccccbbc666fffff666888888888888888888888888888888888888888888888888888888888888ffff6f666f8fffffff8ff666666866f8ff666cbbb666c4b4444466668
        66ccccccccccccc6665566666ccccbbb666fffff6668888f88888888888888888888888888888888888888888888888888888f6666666666fffff8fffff666666666f666666bbbbbc66cbb4444c66668
        666cccccccccccc6665566666cccccbc6666fff866688ffff88888888888888888888888888888888888888888888888888886666666ff666fff6668f66666666666666666bbbcbcc66cbbcccccbc666
        6666ccccccccccc66655666666ccccbb6666ffff66688ffff888888888888888888888888888888888888888888888888888f666666fff666f666668666666666666666686bbbccccc66bbccc5bbbc66
        6666cccccccccc666655666666cccbbb666cccff6668ff68ff888888888888888888888888888888888888888888fffffffff666666ff666f6666666666666666666666666bbccccccccbbccc55bbcc6
        666ccccccccc44446655666666cccbbb6cccccc66668f666ff8888888ff88888888888888888888888888fff88888888888f6666666ff6666666666666f666666666666666cbccccccccccccb55cccc6
        666cccccccc64444444566666cccccbbbbbbbccc6666f666ff8588ff6666888888888ffffffff888888888888fffffffffff6666666f6666666666666668666666666666666cccccccccccccb556ccc6
        666ccccccc64444444445666ccbcccbbbbbbbcccf666f666f6658ff66666f88fff888888888888888888888fffffffffffff6666666f66666666666666666666666666666666ccccccccccccb556cc68
        666ccccccc6644442444446ccbbbcccbbbbbccbb86666666f665ff866666fffffff88888888ffff88ff8888f88888ff88886666666666666666666666866688666699666666666ccccccccccc556cc55
        666ccccccc6644222444444cccbbccccccccccbb666666666655f886666ffffffffffff888888888888ffffff8888888888666656666cccc6666666666668666666996666556666cccccccccc556c556
        666ccccccc64442244244444ccccccccccccccbb666666666655f8f6666fffffffff888888888888888888888888888888866655666cccbbc6666666666666666669996665566666ccccccccc5566556
        666ccccccc64444444244444cccccccccccccccc666666666655f88f6668ffffff8888ffffffffffffffff888888888888ff6655566ccbbbc66ccc66666666666669999995666666cccccccc55665566
        666ccccccc6444444444444ccccccccccccccccc666666666556f88ff666ff88fffffffffffffffffffffff8fffffffffff66655566cccbbc6ccbbcc6666666666699999556666666ccccccc55665566
        666ccccccc64444444422466666cccccccccccccc6666666655666866666ff88ffffffffff88f8888ff8888888ff888ff6666665666cccccbbccbbcc6666666666699999556666666866cccc55c66668
        666ccccccc66444444424566666cccccccccccccc6666666656666666666ff8888ffff555f88f8ffff888888fffffff6666666656666ccccbbcccccc6666666666669999556666666866cccc55c66668
        666cccccc666666444445566666cccccccccccccc66666665566666666666f88666fff5558888888888888888fffff66666666656666cccccccccccc6666666666666696556666666666cccc55c66666
        666ccccccc66666644445566666cccccccccccccc666666655666666666cc6866666ff65f88888fffffffffffffff666666666655666cccccccccccc6666666666666666656666666666cccc55c66666
        666ccccccc66666665565566666cccccccccccccc6666666566666666ccccc866666ff65ffffffffffff888888ff66666666666556666cccccccccc6666666666666666665566666666cccccc5666666
        66cccccccc66666665566666666ccccccc666cc666666666566666666cccbbc6666f66655ffffffffffff8888ff6666666666665666666ccccccccc66ff666666666666665566666666ccccc65566666
        66cccccccc666666665566666666cccccbb666666666666666666666ccccbbbb668f6665568888ffff888fffff666666655666655666666ccccccc66666666666666666666576666666ccccc65566666
        666cccccc6666666665566666666cccccbb666666666666666666666ccccccbb66ff6665566888ffffffffff66666666655666669666996cbbcccc66666422444666666666556666666ccccc55666666
        666cccccc6666666666566666666cccccbb6666666666666666ccccc6ccccccccc6f6665566fffffff8888866666666665566655999999cbbbcccc66644422444466666666556666666cccc655666666
        666cccccc6666666666556666666cccccbbb666665566666666cccbbcccccccccbc666655666888888ffff66666ffffff5566655999999ccbbccc666224222444466666666656666666cccc655666666
        666cccccc66666666665566666666cccccb666666656666666ccccbbccccccccbbbc6665566fffffffffff666ffffffff5566669959996ccccccc644224422444466666666656666666ccccc56666666
        66cccccccc6666666666566666666cccccbb66666655696666ccccbbcccccccccbcc6665566fffffffffff6fffffffff6656666655666cbbbcccc444444424224466666666655666666cccc556666666
        66ccccccc66666666666556666666cccccbb66666655966666cccccbbbccccccccc66665566fffffffffffffffffffff666665665566ccbbbccc6444444224444466666666655666666cccc556666666
        66cccccccc6666666666556666666ccccccb666666559666666ccccbbbccccccccc6666556ff8ffffffffffffffffff6666655665566ccbbcc666444444494444466666666655666666cccc556666666
        666ccccccc6666666666559666666cccccccc66666655444466cccccbccccccc66666665566ffffffffffffffff88866666655665666cbbbccc66644422444444468666666656666996cccc556666666
        666ccccccc6666666666559666666cccccccc666666544444444ccccccccccccf8666666666fffffffffffffffffff66666666666666cbbbccc66664444449444666668666666666999cccc556666bcc
        666ccccccc6666666666556966666ccccccccc666665444442444cccccccccc6f6666666666fffffffffffff88fffff6666666666666cbbcccc6666444444ccccc66686666666666cccccbb556666bbc
        66ccccccc66666666666556666666cccccccccc666654444224444cccccccbbcff666666666ffffffffffffffffffff6666666666666cccccc6666664444cbbbbbc66666666666ccccbbbbbb56b666cc
        66ccccccc66666666666566666666ccccccccccc66665442424444cccccccbbc68666666666fffffffff888888f8ff866666666666666cccc6666666644cbbbbbbcccc6666666cccbbbbbcbb66c666cc
        66ccccccc66666666666566666666ccccccbbbccc6665542422244cccccccbbc66666666666688888ff8888fffffff6666666666666666cccc666666666bbbbcbcccccc666666cccbbbbbccc666c66cc
        66ccccccc66666666665566666666ccccccbbbbcc6666444442244466ccccccc666665666666ffffffffffffffffff666666666666666cccccc6666666bbbccccccccccc66666ccccccccccc666c66cc
        66ccccccc66666666665566666ccccccccccbbbbb6664444444424446cccccbb666665666666fffffffffffffffff6666666666666666cccccc666666bbbbcccccccccccc66666ccccccccccc66666cc
        66ccccccc666666666655666ccccccccccccccbbb6664444444424446cccccbbb666656686666ffffffffffffffff666666666666666cccccccc66666bbbcccccccccccccc66666ccccccccccc6666cc
        66cccccccccccc666665566cccccccccccccccccb666b444444444446cccccbbb6666566f6666f66ffffff88888866666666666666666cccccccc666cbbccccccccccccccc66666cccccccccccc666cc
        66ccccccccccccc6666566ccccccccccccccccccc66ccb444444444666ccccbbb66655666666666666ffffffffff66666666666666666ccccccccccccccccccccccccccccc66666ccccccccccccc66cc
        66ccccccccccccc66665cccccccccccccccccccc666cccc6444444ccc6cccccbb6666566666666f6666fffffffff66666666666666666cccccccccccccccccccccccccccccc666cccccccccccccc66cc
        6cccccccccccccc66666ccccccccccccccccccc6666cccc6644bccccccccccccc8666666666666f66666ffffffff666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccc8
        6cccccccccccccc66666ccccccccccccccccccc666ccccc6666ccccccccccccccf666666666666ff6666ffffffff6666666666666666666ccccccccccccccc6cccccccccccccccccccccccccccccccc8
        `)
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
    tiles.placeOnTile(Camera_screen, tiles.getTileLocation(9, 253))
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
    Camera_screen.setVelocity(0, 30)
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
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 45, 45)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 45, 45)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), 45, 45)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), 45, 45)
    GeneratedTilemap()
})
function GeneratedTilemap () {
    current_position = tiles.locationOfSprite(Camera_screen)
    while (tiles.locationXY(current_position, tiles.XY.row) > 0) {
        for (let index2 = 0; index2 < 4; index2++) {
            current_position = tiles.locationInDirection(current_position, CollisionDirection.Top)
        }
        if (Math.percentChance(50)) {
            movingdirection = CollisionDirection.Left
        } else {
            movingdirection = CollisionDirection.Right
        }
        for (let index2 = 0; index2 < randint(3, 12); index2++) {
            if (tiles.locationXY(current_position, tiles.XY.column) > 0 && tiles.locationXY(current_position, tiles.XY.column) < tiles.tilemapColumns() - 4) {
                current_position = tiles.locationInDirection(current_position, movingdirection)
            } else if (0 < 0) {
                current_position = tiles.locationInDirection(current_position, CollisionDirection.Right)
            } else {
                current_position = tiles.locationInDirection(current_position, CollisionDirection.Left)
            }
        }
        for (let index2 = 0; index2 < 3; index2++) {
            tiles.setTileAt(current_position, sprites.dungeon.stairWest)
            tiles.setWallAt(current_position, true)
            current_position = tiles.locationInDirection(current_position, CollisionDirection.Right)
        }
        for (let index2 = 0; index2 < 3; index2++) {
            current_position = tiles.locationInDirection(current_position, CollisionDirection.Left)
        }
    }
}
let current_position: tiles.Location = null
let dist = 0
let ydist = 0
let Camera_screen: Sprite = null
let xdist = 0
let Playa_List: Sprite[] = []
let index = 0
let textsprite: Sprite = null
let movingdirection : number = null
music.play(music.stringPlayable("F G F D F D C D ", 175), music.PlaybackMode.LoopingInBackground)
scroller.scrollBackgroundWithSpeed(-27, 0)
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
textsprite = sprites.create(img`
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
    `, SpriteKind.greeting)
textsprite.sayText("フォール・シュミレーターへようこそ", 2000, false)
forever(function () {
    if (controller.menu.isPressed()) {
        Check_if_out_of_screen(Camera_screen)
    }
})
