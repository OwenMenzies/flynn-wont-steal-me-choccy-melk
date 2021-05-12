input.onButtonPressed(Button.A, function () {
    if (Password_doer_or_not == true) {
        if (Password == 4) {
            Password += 1
        } else if (Password == 8) {
            Password += 1
        } else if (Password == 9) {
            Password += 1
        } else if (Password == 10) {
            Password += 1
        } else if (Password == 11) {
            Password += 1
        } else if (Password == 12) {
            Password += 1
        } else if (Password == 13) {
            Password += 1
        } else if (Password == 15) {
            Password += 1
        } else if (Password == 19) {
            Password += 1
        } else if (Password == 24) {
            Password += 1
        } else if (Password == 26) {
            Password += 1
        } else if (Password == 28) {
            Password += 1
        } else if (Password == 29) {
            Password += 1
        } else if (Password == 32) {
            Password += 1
        } else if (Password == 34) {
            Password += 1
        } else if (Password == 35) {
            Password += 1
        } else if (Password == 37) {
            Password += 1
        } else if (Password == 42) {
            Password += 1
        } else if (Password == 44) {
            Password += 1
        } else if (Password == 47) {
            Password += 1
        } else if (Password == 50) {
            Password += 1
        } else {
            Password += 1
            wrong_passcode = Password
        }
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (wrong_passcode > 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        time_wastinator = Password % 5
        if (time_wastinator == 1) {
            display_password = Password - 1
            basic.showNumber(display_password)
        }
        if (Password >= 50) {
            if (wrong_passcode >= 1) {
                Password_doer_or_not = false
                password_incorect = true
                Password = 0
                wrong_passcode = 0
                radio.sendString("CHOCCO MELK")
                basic.pause(1000)
                radio.sendString("FLA SEI")
                for (let index = 0; index < 15; index++) {
                    music.playMelody("C5 B C5 C5 B B C5 B ", 1000)
                }
                password_incorect = false
            } else if (wrong_passcode == 0) {
                Password_doer_or_not = false
                password_correct = true
                Password = 1
                radio.sendString("CHOCCO MELK")
                basic.pause(1000)
                radio.sendString("GIB ME DE MELK")
                for (let index = 0; index < 2; index++) {
                    music.playMelody("E G D A F B A C5 ", 200)
                }
                password_correct = false
            }
        }
    } else if (Password_doer_or_not == false) {
        basic.showString("A+B enter code ")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Password_doer_or_not == true) {
        Password_doer_or_not = false
        basic.showString("code stop")
    } else if (Password_doer_or_not == false) {
        Password_doer_or_not = true
        basic.showString("Code?")
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "lel") {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    if (Password_doer_or_not == true) {
        if (Password == 1) {
            Password += 1
        } else if (Password == 2) {
            Password += 1
        } else if (Password == 3) {
            Password += 1
        } else if (Password == 5) {
            Password += 1
        } else if (Password == 6) {
            Password += 1
        } else if (Password == 7) {
            Password += 1
        } else if (Password == 11) {
            Password += 1
        } else if (Password == 14) {
            Password += 1
        } else if (Password == 16) {
            Password += 1
        } else if (Password == 17) {
            Password += 1
        } else if (Password == 18) {
            Password += 1
        } else if (Password == 20) {
            Password += 1
        } else if (Password == 21) {
            Password += 1
        } else if (Password == 22) {
            Password += 1
        } else if (Password == 23) {
            Password += 1
        } else if (Password == 25) {
            Password += 1
        } else if (Password == 27) {
            Password += 1
        } else if (Password == 30) {
            Password += 1
        } else if (Password == 31) {
            Password += 1
        } else if (Password == 33) {
            Password += 1
        } else if (Password == 36) {
            Password += 1
        } else if (Password == 38) {
            Password += 1
        } else if (Password == 39) {
            Password += 1
        } else if (Password == 40) {
            Password += 1
        } else if (Password == 41) {
            Password += 1
        } else if (Password == 43) {
            Password += 1
        } else if (Password == 45) {
            Password += 1
        } else if (Password == 46) {
            Password += 1
        } else if (Password == 48) {
            Password += 1
        } else if (Password == 49) {
            Password += 1
        } else {
            Password += 1
            wrong_passcode += 1
        }
        if (wrong_passcode > 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        time_wastinator = Password % 5
        if (time_wastinator == 0) {
            display_password = Password - 1
            basic.showNumber(display_password)
        }
        if (Password >= 50) {
            if (wrong_passcode >= 1) {
                Password_doer_or_not = false
                password_incorect = true
                Password = 1
                wrong_passcode = 0
                radio.sendString("CHOCCO MELK")
                basic.pause(1000)
                radio.sendString("FLA SEI")
                for (let index = 0; index < 15; index++) {
                    music.playMelody("C5 B C5 C5 B B C5 B ", 1000)
                }
                password_incorect = false
            } else if (wrong_passcode == 0) {
                Password_doer_or_not = false
                password_correct = true
                Password = 0
                radio.sendString("CHOCCO MELK")
                basic.pause(1000)
                radio.sendString("GIB ME DE MELK")
                for (let index = 0; index < 2; index++) {
                    music.playMelody("E G D A F B A C5 ", 200)
                }
                password_correct = false
            }
        }
    } else if (Password_doer_or_not == false) {
        basic.showString("three attempts ")
    }
})
let password_correct = false
let password_incorect = false
let display_password = 0
let time_wastinator = 0
let wrong_passcode = 0
let Password = 0
let Password_doer_or_not = false
radio.setGroup(1.7976931348623157e+308)
Password_doer_or_not = false
Password = 1
music.setVolume(127)
wrong_passcode = 0
basic.forever(function () {
    while (Password_doer_or_not == true) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(233, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
    }
})
