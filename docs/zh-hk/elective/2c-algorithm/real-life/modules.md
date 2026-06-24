# 2.3 · Extended Modules / Libraries

> **Goal:** use libraries to talk to hardware without writing low-level drivers.

## Why use a library

Most hardware comes with drivers and libraries that expose a **high-level Python API**. You import the library, call functions, and the library handles the low-level register reads and writes.

Example: a temperature sensor's datasheet has dozens of bytes to configure. The library's `read_temperature()` hides all of that.

## Common library categories

| Domain | Examples |
|--------|----------|
| Hardware GPIO | `RPi.GPIO`, `gpiozero` |
| Sensors | `Adafruit_BME280`, `DHT11` libraries |
| Robotics | `picamera2`, motor-driver SDKs |
| Networking | `requests`, `socket` |
| Web | `flask`, `django` |
| Data | `pandas`, `numpy` |
| AI | `tensorflow`, `pytorch`, `scikit-learn` |

The HKEAA expects awareness — you don't need to memorise APIs.

## A simple Raspberry Pi LED example

```python
from gpiozero import LED
from time import sleep

led = LED(17)             # GPIO pin 17

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

`gpiozero` hides PWM, voltage, current, register addresses. You think in `on/off`.

## Installing libraries

```bash
pip install gpiozero
pip install requests
```

For micro:bit, the `microbit` module is preinstalled when you flash MicroPython.

## Reading documentation

Most libraries publish reference docs on a website. Skills:

1. Find the **getting-started** page.
2. Look for **code samples** — copy and adapt.
3. Use the **API reference** as a dictionary.
4. Check **examples** repository for non-trivial use.

## Combining libraries · IoT thermometer

```python
from time import sleep
import board, adafruit_dht
import requests

dht = adafruit_dht.DHT22(board.D4)
URL = "https://example.com/api/temperature"

while True:
    try:
        t = dht.temperature
        h = dht.humidity
        requests.post(URL, json={"t": t, "h": h})
    except Exception:
        pass
    sleep(60)
```

This 10-line program reads a sensor and uploads to the cloud every minute — possible only because of three libraries (`adafruit_dht`, `board`, `requests`).

## Ethical / quality concerns

- Trust the library? Check downloads / stars / community.
- Security? Pin versions, monitor for vulnerabilities.
- Licence? MIT/Apache fine; GPL imposes conditions.

## Exam-style question

> **Q (5 marks):** Describe how using an extended programming module / library simplifies writing programs that interact with sensors. Give one example.

**Sample answer:**

Extended modules (libraries) provide pre-written high-level functions that abstract away the low-level details of reading or writing to hardware registers, managing timings, and handling errors. The programmer can call a single function such as `sensor.read_temperature()` instead of writing dozens of lines that talk to the chip directly.

**Example**: on a Raspberry Pi, the `Adafruit_DHT` library exposes a `read_retry(sensor, pin)` function that returns the current humidity and temperature from a DHT22 sensor. Without the library, the programmer would need to handle the precise microsecond pulse-timing protocol the DHT22 uses, which is error-prone and unrelated to the educational purpose of the project.

Using libraries also reduces bugs, speeds up development, and makes code easier to read.

## Key takeaways

- Libraries hide low-level details.
- Pip / package managers install them.
- Read the docs, copy examples.

## Chapter 2 wrap-up & Elective 2C wrap-up

You can now build sensor-aware, event-driven programs and use libraries. Final self-test:

- Implement bubble, insertion, selection sort.
- Implement linear and binary search.
- Build stack, queue, linked list.
- Walk through a sense → think → act loop.
- Distinguish event-driven from sequential programming.

➡️ Back to: [Electives overview](../../)
