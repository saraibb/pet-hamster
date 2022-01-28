input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
