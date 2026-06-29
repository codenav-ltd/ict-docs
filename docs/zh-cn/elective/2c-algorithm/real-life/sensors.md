# 2.1 · 传感器与执行器

> **目标：** 描述传感器收集什么、执行器做什么；让程序与物理世界互动。

## 传感器是什么

**传感器**把**物理量**（光、温、动、声）转成**电信号**，微控制器可读。

| 传感器 | 测 | 例用 |
|--------|----------|-------------|
| 光 (LDR) | 亮度 | 街灯自动开 |
| 温度 | 热 | 智能恒温器 |
| 加速度计 | 动 / 倾 | 手机屏幕翻转 |
| 陀螺仪 | 转动 | 无人机稳定 |
| 磁力计 | 磁场 | 指南针 |
| 麦克风 | 声 | 语音助理 |
| 超声 | 距 | 倒车感测 |
| GPS | 位置 | 地图 |
| 心率 | 脉搏 | 健身穿戴 |

## 常见平台

- **micro:bit** —— BBC 教育板，新手友好。
- **Arduino** —— 生态广；C/C++ 编程。
- **Raspberry Pi** —— 完整 Linux 电脑；Python 简单。
- **ESP32 / ESP8266** —— 带 Wi-Fi 的微控制器。

## 在 micro:bit 上读传感器

```python
# micro:bit (MicroPython)
from microbit import display, accelerometer, button_a
import time

while True:
    if button_a.was_pressed():
        x = accelerometer.get_x()    # -1024 至 +1024
        display.scroll(str(x))
    time.sleep(0.1)
```

## 控制执行器

| 执行器 | 动作 |
|----------|--------|
| LED | 开关、亮度 |
| 蜂鸣器 | 哔 |
| 舵机 | 转到角度 |
| 直流电机 | 驱动轮 |
| 步进电机 | 精确转动 |
| 显示器 | 显示文字或图像 |

```python
from microbit import pin0, display
pin0.write_digital(1)   # 开连着的 LED
display.show("OK")
```

## Sense → think → act 模式

```
读传感器 → 决策 → 驱动执行器
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

## 香港情境

- 学校 STEM 课用 micro:bit 与 Arduino。
- 科学园与数码港办 maker 空间。
- 智慧城市倡议（智慧灯柱）用环境传感器。

## 学生常见错误

- 采样太快 → 耗电。
- 视模拟读数为精确（有噪音）。
- 忘正确给传感器供电。

## 考试式题目

> **题（5 分）：** 描述程序如何用光传感器在房间变暗时开 LED。画伪代码。

**参考答案：**

程序周期**读光传感器**、对比**阈值**、相应**驱动 LED**。

```text
LOOP forever
    light ← 读光传感器
    IF light < THRESHOLD THEN
        开 LED
    ELSE
        关 LED
    END IF
    WAIT 100 ms
END LOOP
```

阈值要按房间调 —— 太高则 LED 一直开，太低则永不开。少采样（如每秒一次）能延长电池寿命。

## 关键要点

- 传感器捕物理世界；执行器改它。
- Sense → think → act 模式。
- 程序在循环里采样并反应。

➡️ 下一节：[2.2 事件驱动程序](./event-driven)
