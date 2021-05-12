def on_button_pressed_a():
    global Password, wrong_passcode
    if Password_doer_or_not == True:
        if Password == 4:
            Password += 1
        elif Password == 8:
            Password += 1
        elif Password == 9:
            Password += 1
        elif Password == 10:
            Password += 1
        elif Password == 11:
            Password += 1
        elif Password == 12:
            Password += 1
        elif Password == 13:
            Password += 1
        elif Password == 15:
            Password += 1
        elif Password == 19:
            Password += 1
        elif Password == 24:
            Password += 1
        elif Password == 26:
            Password += 1
        elif Password == 28:
            Password += 1
        elif Password == 29:
            Password += 1
        elif Password == 32:
            Password += 1
        elif Password == 34:
            Password += 1
        elif Password == 35:
            Password += 1
        elif Password == 37:
            Password += 1
        elif Password == 42:
            Password += 1
        elif Password == 44:
            Password += 1
        elif Password == 47:
            Password += 1
        elif Password == 50:
            Password += 1
        else:
            Password += 1
            wrong_passcode = Password
        if Password == 50:
            if wrong_passcode >= 1:
                radio.send_number(0)
                for index in range(20):
                    music.play_melody("C5 - C5 - C5 - C5 - ", 2000)
            elif wrong_passcode == 0:
                radio.send_number(1)
                for index2 in range(2):
                    music.play_melody("E G D A F B A C5 ", 200)
    elif Password_doer_or_not == False:
        basic.show_string("Press A+B to start entering code ")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Password_doer_or_not
    if Password_doer_or_not == True:
        Password_doer_or_not = False
        basic.show_string("password entering stopped, press A or B for instructions ")
    elif Password_doer_or_not == False:
        Password_doer_or_not = True
        basic.show_string("Enter password")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Password, wrong_passcode
    if Password_doer_or_not == True:
        if Password == 1:
            Password += 1
        elif Password == 2:
            Password += 1
        elif Password == 3:
            Password += 1
        elif Password == 5:
            Password += 1
        elif Password == 6:
            Password += 1
        elif Password == 7:
            Password += 1
        elif Password == 11:
            Password += 1
        elif Password == 14:
            Password += 1
        elif Password == 16:
            Password += 1
        elif Password == 17:
            Password += 1
        elif Password == 18:
            Password += 1
        elif Password == 20:
            Password += 1
        elif Password == 21:
            Password += 1
        elif Password == 22:
            Password += 1
        elif Password == 23:
            Password += 1
        elif Password == 25:
            Password += 1
        elif Password == 27:
            Password += 1
        elif Password == 30:
            Password += 1
        elif Password == 31:
            Password += 1
        elif Password == 33:
            Password += 1
        elif Password == 36:
            Password += 1
        elif Password == 38:
            Password += 1
        elif Password == 39:
            Password += 1
        elif Password == 40:
            Password += 1
        elif Password == 41:
            Password += 1
        elif Password == 43:
            Password += 1
        elif Password == 45:
            Password += 1
        elif Password == 46:
            Password += 1
        elif Password == 48:
            Password += 1
        elif Password == 49:
            Password += 1
        else:
            Password += 1
            wrong_passcode = Password
    elif Password_doer_or_not == False:
        basic.show_string("You have three attempts to get the password until another person will come in and stop you from stealing my chocy milk ")
input.on_button_pressed(Button.B, on_button_pressed_b)

wrong_passcode = 0
Password = 0
Password_doer_or_not = False
radio.set_group(1.7976931348623157e+308)
Password_doer_or_not = False
Password = 1
music.set_volume(127)