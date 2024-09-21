// Botão A: Inicia/Pausa o timer
input.onButtonPressed(Button.A, function () {
    if (_function == 3) {
        running = !(running)
    }
})
// Contador de passos
input.onGesture(Gesture.Shake, function () {
    if (_function != 3) {
        steps += 1
    }
})
// Alterador de funções
input.onButtonPressed(Button.AB, function () {
    _function = _function < 3 ? _function + 1 : 1
})
// Botão B: Reseta o timer
input.onButtonPressed(Button.B, function () {
    if (_function == 3) {
        running = false
        minutes = 0
        seconds = 0
    }
})
let seconds = 0
let minutes = 0
let steps = 0
let running = false
let _function = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . # . #
    `)
basic.pause(100)
basic.clearScreen()
basic.pause(100)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
// Atualização contínua do timer
loops.everyInterval(1000, function () {
    if (running) {
        seconds += 1
        if (seconds == 60) {
            seconds = 0
            minutes += 1
        }
    }
})
// Exibição das funcionalidades
basic.forever(function () {
    basic.clearScreen()
    if (_function == 1) {
        basic.showString("" + (input.temperature()))
    } else if (_function == 2) {
        basic.showNumber(steps)
    } else if (_function == 3) {
        basic.showString("" + (`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`))
    }
    basic.pause(500)
})
