let a = 0
input.onGesture(Gesture.Shake, function () {
    a = randint(1, 2)
    if (a == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (a == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
