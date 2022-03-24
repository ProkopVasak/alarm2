let senzor = 0
let Learn = 0
input.pinIsPressed(TouchPin.P2)
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    let Learn: number;
    if (Learn == 1) {
        Learn = 0
    }
    
    radio.sendValue("Learn", 1)
    if (Learn == 0) {
        radio.setGroup(4)
        Learn = 1
    }
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (name == "Learn") {
        radio.setGroup(4)
    }
    
})
basic.forever(function main() {
    while (senzor == 1) {
        music.playTone(Note.C, music.beat())
        music.playTone(Note.A, music.beat())
    }
})
