# 2.2 · Event-driven Programs

> **Goal:** write programs that react to events rather than running top-to-bottom.

## What event-driven means

Instead of a sequential flow, the program **waits for events** (button clicks, sensor thresholds, network messages) and runs **event handlers** in response.

```
       loop forever:
           wait for an event
           dispatch to handler
```

The browser, mobile apps, GUIs and embedded devices all use this style.

## Browser example (JavaScript)

```javascript
document.getElementById("save").addEventListener("click", () => {
    console.log("Saved!");
});
window.addEventListener("resize", () => {
    console.log("Window resized");
});
```

## Micro:bit example

```python
from microbit import button_a, button_b, display

while True:
    if button_a.was_pressed():
        display.show("A")
    if button_b.was_pressed():
        display.show("B")
```

## Typical events

| Source | Events |
|--------|--------|
| Mouse | click, double-click, mousemove, mousedown/up |
| Keyboard | keydown, keyup |
| Touch | touchstart, touchmove, touchend |
| Sensors | threshold crossed, gesture detected |
| Network | message received, connection opened/closed |
| Time | timer expired |

## Event handlers — best practices

- Keep handlers **short** — defer heavy work.
- Avoid blocking calls inside a handler (the UI freezes).
- Detach handlers when no longer needed (memory leaks).

## Comparison · sequential vs event-driven

| Aspect | Sequential | Event-driven |
|--------|------------|--------------|
| Flow | Top to bottom | Triggered by events |
| Suitable for | Batch jobs, scripts | GUIs, IoT, web apps |
| Complexity | Simpler logic | Easier user responsiveness |
| State management | Local | Often via shared state, easy to introduce bugs |

## Exam-style question

> **Q (5 marks):** Describe how event-driven programming differs from sequential programming. Give two examples of events and the handlers' actions in a smart-home thermostat.

**Sample answer:**

In **sequential** programming, the program runs top to bottom and ends; the developer controls the flow. In **event-driven** programming, the program waits in a loop for events (user actions, sensor changes, network messages) and dispatches each event to a **handler** that performs a specific action.

For a smart-home thermostat:

1. **Temperature crosses threshold** event — handler decides whether to switch the heater on/off and updates the display.
2. **User touches dial** event — handler reads the new target temperature, stores it, and gives haptic / visual feedback.

These two events are independent and may occur at any time; the thermostat firmware doesn't need a single linear script — it sits in an event loop and reacts.

## Key takeaways

- Event-driven = wait + react.
- Common in UIs and IoT.
- Handlers must stay light.

➡️ Next: [2.3 Extended Modules](./modules)
