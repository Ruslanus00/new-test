let a = 0
let b = 0
let c = 0
let d = 0
let Z = 0
let x = 0
let v = 0
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    for (let index = 0; index < 1000000; index++) {
        a = randint(1, 3)
        if (a == 2) {
            led.plot(2, 3)
        }
        if (led.point(2, 3)) {
            if (a == 1) {
                led.plot(1, 3)
            }
            if (a == 3) {
                led.plot(3, 3)
            }
        }
        basic.pause(100)
        b = randint(1, 2)
        if (led.point(1, 3)) {
            if (b == 1) {
                led.plot(0, 3)
            }
        }
        if (led.point(3, 3)) {
            if (b == 2) {
                led.plot(4, 3)
            }
        }
        if (led.point(2, 3)) {
            if (led.point(1, 3) || led.point(3, 3)) {
                led.plot(2, 2)
            }
        }
        basic.pause(100)
        c = randint(1, 2)
        if (led.point(2, 2)) {
            if (led.point(1, 3)) {
                if (c == 1) {
                    led.plot(1, 2)
                }
            }
            if (led.point(3, 3)) {
                if (c == 2) {
                    led.plot(3, 2)
                }
            }
        }
        if (led.point(2, 2)) {
            if (led.point(1, 2) || led.point(3, 2)) {
                led.plot(2, 1)
            }
        }
        basic.pause(100)
        d = randint(1, 2)
        if (d == 1) {
            if (led.point(1, 2)) {
                led.plot(1, 1)
            }
        }
        if (d == 2) {
            if (led.point(3, 2)) {
                led.plot(3, 1)
            }
        }
        if (led.point(2, 1)) {
            if (led.point(1, 1) || led.point(3, 1)) {
                led.plot(2, 0)
            }
        }
        basic.pause(200)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        if (led.point(2, 1)) {
            led.unplot(2, 0)
        }
        Z = randint(1, 2)
        if (led.point(2, 1)) {
            if (Z == 1) {
                led.unplot(1, 1)
            }
            if (Z == 2) {
                led.unplot(3, 1)
            }
        }
        led.unplot(2, 1)
        basic.pause(200)
        x = randint(1, 2)
        if (led.point(2, 2)) {
            if (x == 1) {
                led.unplot(1, 2)
            }
            if (x == 2) {
                led.unplot(3, 2)
            }
        }
        led.unplot(2, 2)
        basic.pause(100)
        v = randint(1, 2)
        if (led.point(2, 3)) {
            if (led.point(1, 3) && led.point(3, 3)) {
                if (v == 1) {
                    led.plot(4, 3)
                }
                if (v == 2) {
                    led.unplot(0, 3)
                }
            }
        }
    }
})
