# 2.1 · Sensors & Devices

> **Goal:** describe how programs read sensors and control simple actuators.

## What a sensor does

A sensor converts a **physical quantity** (light, temperature, motion, sound) into an **electrical signal** that a microcontroller can read.

| Sensor | Measures | Example use |
|--------|----------|-------------|
| Light (LDR) | Brightness | Auto-on street lamps |
| Temperature | Heat | Smart thermostat |
| Accelerometer | Motion / tilt | Phone screen rotation |
| Gyroscope | Rotation | Drone stabilisation |
| Magnetometer | Magnetic field | Compass |
| Microphone | Sound | Voice assistants |
| Ultrasonic | Distance | Reverse-park sensors |
| GPS | Location | Maps |
| Heart-rate | Pulse | Fitness wearables |

## Common platforms

- **micro:bit** — BBC's educational board, beginner-friendly.
- **Arduino** — Wide ecosystem; C/C++ programming.
- **Raspberry Pi** — Full Linux computer; Python easy.
- **ESP32 / ESP8266** — Wi-Fi-enabled microcontrollers.

## Reading a sensor on a micro:bit

```python
# micro:bit (MicroPython)
from microbit import display, accelerometer, button_a
import time

while True:
    if button_a.was_pressed():
        x = accelerometer.get_x()    # -1024 to +1024
        display.scroll(str(x))
    time.sleep(0.1)
```

## Controlling an actuator

| Actuator | Action |
|----------|--------|
| LED | Light on/off, brightness |
| Buzzer | Beep |
| Servo motor | Rotate to angle |
| DC motor | Drive a wheel |
| Stepper motor | Precise rotation |
| Display | Show text or images |

```python
from microbit import pin0, display
pin0.write_digital(1)   # turn on connected LED
display.show("OK")
```

## Sense → think → act pattern

```
read sensor → make decision → drive actuator
```

```python
from microbit import display, accelerometer
import time

while True:
    tilt = accelerometer.get_x()
    if tilt > 200:
        display.show(">")
    elif tilt < -200:
        display.show("<")
    else:
        display.show("o")
    time.sleep(0.1)
```

## Hong Kong context

- Schools use micro:bit and Arduino in STEM lessons.
- HKSTP and Cyberport run maker spaces.
- Smart city initiatives (smart lampposts) use environmental sensors.

## Common student mistakes

- Sampling too fast → wastes battery.
- Treating analog readings as exact (they have noise).
- Forgetting to power the sensor correctly.

## Exam-style question

> **Q (5 marks):** Describe how a program can use a light sensor to switch on an LED when the room becomes dark. Sketch the pseudocode.

**Sample answer:**

The program **reads the light sensor** periodically, compares the reading to a **threshold**, and **drives the LED** accordingly.

```text
LOOP forever
    light ← read light sensor
    IF light < THRESHOLD THEN
        turn LED ON
    ELSE
        turn LED OFF
    END IF
    WAIT 100 ms
END LOOP
```

The threshold should be tuned to the room — too high and the LED stays on all the time, too low and it never comes on. Battery life can be extended by sampling less often (e.g. every second).

## Key takeaways

- Sensors capture the physical world; actuators change it.
- Sense → think → act pattern.
- Programs run in loops, sampling and reacting.

➡️ Next: [2.2 Event-driven Programs](./event-driven)
