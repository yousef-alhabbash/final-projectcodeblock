// radio set group on 200
radio.setGroup(200)
// function
basic.forever(function () {
    // if light level > 5 send number 1 using radio
    if (input.lightLevel() > 5) {
        radio.sendNumber(1)
    }
    basic.pause(1000)
})
