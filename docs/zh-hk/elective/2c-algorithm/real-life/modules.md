# 2.3 · 擴展模組 / 庫

> **目標：** 用庫與硬件談話而不寫底層驅動。

## 為何用庫

多數硬件附驅動與庫，暴露**高層 Python API**。你導入庫、調函式，庫處理底層寄存器讀寫。

例：温度傳感器資料表裏有幾十位元組要配。庫的 `read_temperature()` 把這些都藏掉。

## 常見庫類別

| 域 | 例 |
|--------|----------|
| 硬件 GPIO | `RPi.GPIO`、`gpiozero` |
| 傳感器 | `Adafruit_BME280`、`DHT11` 庫 |
| 機器人 | `picamera2`、電機驅動 SDK |
| 網絡 | `requests`、`socket` |
| Web | `flask`、`django` |
| 資料 | `pandas`、`numpy` |
| AI | `tensorflow`、`pytorch`、`scikit-learn` |

HKEAA 期望認識 —— 不需背 API。

## 簡單 Raspberry Pi LED 例

```python
from gpiozero import LED
from time import sleep

led = LED(17)             # GPIO 引腳 17

while True:
    led.on()
    sleep(1)
    led.off()
    sleep(1)
```

`gpiozero` 隱藏 PWM、電壓、電流、寄存器地址。你按 `on/off` 思考。

## 裝庫

```bash
pip install gpiozero
pip install requests
```

micro:bit 上，刷 MicroPython 時 `microbit` 模組預裝。

## 讀文件

多數庫在網站發佈參考文件。技能：

1. 找**入門**頁。
2. 找**代碼示範** —— 複製改。
3. 用 **API 參考**當字典。
4. 看 **examples** 倉庫做非平凡用例。

## 組合庫 · IoT 温度計

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

10 行程序讀傳感器並每分鐘上載雲 —— 全靠三個庫（`adafruit_dht`、`board`、`requests`）。

## 倫理 / 質量關切

- 信庫嗎？查下載 / 星 / 社區。
- 安全？鎖版本、監漏洞。
- 許可證？MIT/Apache 行；GPL 加條件。

## 考試式題目

> **題（5 分）：** 描述用擴展編程模組 / 庫如何簡化寫與傳感器交互的程序。各舉一例。

**參考答案：**

擴展模組（庫）提供預寫高層函式，抽掉讀 / 寫硬件寄存器、管時序、處理錯誤的底層細節。程序員可調一個函式如 `sensor.read_temperature()` 而不必寫幾十行直接與芯片談話。

**例**：Raspberry Pi 上，`Adafruit_DHT` 庫暴露 `read_retry(sensor, pin)` 函式從 DHT22 傳感器返當前濕度與温度。沒庫則程序員要處理 DHT22 用的精確微秒脈衝時序協定，易錯且與項目教育目的無關。

用庫還減 bug、加速開發、讓代碼更易讀。

## 關鍵要點

- 庫藏底層細節。
- Pip / 包管理器裝它們。
- 讀文件、抄例子。

## 第 2 章 & 選修 2C 總結

你現在能建傳感器感知、事件驅動程序並用庫。最終自測：

- 實現冒泡、插入、選擇排序。
- 實現線性與二分查找。
- 建棧、隊列、鏈表。
- 走 sense → think → act 迴圈。
- 區分事件驅動與順序編程。

➡️ 回到：[選修概覽](../../)