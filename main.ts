let distance2 = sonar.ping(
DigitalPin.P0,
DigitalPin.P0,
PingUnit.MicroSeconds
)
if (distance2 < 10) {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
} else if (0 < 15) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
} else if (0 < 20) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
} else if (0 < 25) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
} else if (0 < 30) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
} else {
    basic.showLeds(`
        # # # . #
        . . # . #
        # # # # #
        # . # . .
        # . # # #
        `)
}
