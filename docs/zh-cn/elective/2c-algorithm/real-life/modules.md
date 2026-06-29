# 2.3 · 扩展模块 / 库

> **目标：** 用库与硬件谈话而不写底层驱动。

## 为何用库

多数硬件附驱动与库，暴露**高层 Python API**。你导入库、调函数，库处理底层寄存器读写。

例：温度传感器数据表里有几十字节要配。库的 `read_temperature()` 把这些都藏掉。

## 常见库类别

| 域 | 例 |
|--------|----------|
| 硬件 GPIO | `RPi.GPIO`、`gpiozero` |
| 传感器 | `Adafruit_BME280`、`DHT11` 库 |
| 机器人 | `picamera2`、电机驱动 SDK |
| 网络 | `requests`、`socket` |
| Web | `flask`、`django` |
| 数据 | `pandas`、`numpy` |
| AI | `tensorflow`、`pytorch`、`scikit-learn` |

HKEAA 期望认识 —— 不需背 API。

## 简单 Raspberry Pi LED 例

```python
from gpiozero import LED
from time import sleep

led = LED(17)             # GPIO 引脚 17

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

`gpiozero` 隐藏 PWM、电压、电流、寄存器地址。你按 `on/off` 思考。

## 装库

```bash
pip install gpiozero
pip install requests
```

micro:bit 上，刷 MicroPython 时 `microbit` 模组预装。

## 读文档

多数库在网站发布参考文档。技能：

1. 找**入门**页。
2. 找**代码示范** —— 复制改。
3. 用 **API 参考**当字典。
4. 看 **examples** 仓库做非平凡用例。

## 组合库 · IoT 温度计

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

10 行程序读传感器并每分钟上传云 —— 全靠三个库（`adafruit_dht`、`board`、`requests`）。

## 伦理 / 质量关切

- 信库吗？查下载 / 星 / 社区。
- 安全？锁版本、监漏洞。
- 许可证？MIT/Apache 行；GPL 加条件。

## 考试式题目

> **题（5 分）：** 描述用扩展编程模组 / 库如何简化写与传感器交互的程序。各举一例。

**参考答案：**

扩展模组（库）提供预写高层函数，抽掉读 / 写硬件寄存器、管时序、处理错误的底层细节。程序员可调一个函数如 `sensor.read_temperature()` 而不必写几十行直接与芯片谈话。

**例**：Raspberry Pi 上，`Adafruit_DHT` 库暴露 `read_retry(sensor, pin)` 函数从 DHT22 传感器返当前湿度与温度。没库则程序员要处理 DHT22 用的精确微秒脉冲时序协议，易错且与项目教育目的无关。

用库还减 bug、加速开发、让代码更易读。

## 关键要点

- 库藏底层细节。
- Pip / 包管理器装它们。
- 读文档、抄例子。

## 第 2 章 & 选修 2C 总结

你现在能建传感器感知、事件驱动程序并用库。最终自测：

- 实现冒泡、插入、选择排序。
- 实现线性与二分查找。
- 建栈、队列、链表。
- 走 sense → think → act 循环。
- 区分事件驱动与顺序编程。

➡️ 回到：[选修概览](../../)
