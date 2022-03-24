senzor = 0
Learn = 0
input.pin_is_pressed(TouchPin.P2)
def on_logo_event_pressed():
    if Learn == 1:
        Learn = 0
    radio.send_value("Learn", 1)
    if Learn == 0:
        radio.set_group(4)
        Learn = 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)       

def on_received_value(name, value):
    if name == "Learn":
        radio.set_group(4) 
radio.on_received_value(on_received_value)

def main():
    while senzor == 1:
        music.play_tone(Note.C, music.beat())
        music.play_tone(Note.A, music.beat())

            
basic.forever(main)
