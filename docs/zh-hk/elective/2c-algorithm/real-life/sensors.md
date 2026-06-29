# 2.1 · 傳感器與執行器

> **目標：** 描述傳感器收集什麼、執行器做什麼；讓程序與物理世界互動。

## 傳感器是什麼

**傳感器**把**物理量**（光、温、動、聲）轉成**電訊號**，微控制器可讀。

| 傳感器 | 測 | 例用 |
|--------|----------|-------------|
| 光 (LDR) | 亮度 | 街燈自動開 |
| 温度 | 熱 | 智能恆温器 |
| 加速度計 | 動 / 傾 | 手機屏幕翻轉 |
| 陀螺儀 | 轉動 | 無人機穩定 |
| 磁力計 | 磁場 | 指南針 |
| 麥克風 | 聲 | 語音助理 |
| 超聲 | 距 | 倒車感測 |
| GPS | 位置 | 地圖 |
| 心率 | 脈搏 | 健身穿戴 |

## 常見平台

- **micro:bit** —— BBC 教育板，新手友好。
- **Arduino** —— 生態廣；C/C++ 編程。
- **Raspberry Pi** —— 完整 Linux 電腦；Python 簡單。
- **ESP32 / ESP8266** —— 帶 Wi-Fi 的微控制器。

## 在 micro:bit 上讀傳感器

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

## 控制執行器

| 執行器 | 動作 |
|----------|--------|
| LED | 開關、亮度 |
| 蜂鳴器 | 嗶 |
| 舵機 | 轉到角度 |
| 直流電機 | 驅動輪 |
| 步進電機 | 精確轉動 |
| 顯示器 | 顯示文字或圖像 |

```python
from microbit import pin0, display
pin0.write_digital(1)   # 開連着的 LED
display.show("OK")
```

## Sense → think → act 模式

```
讀傳感器 → 決策 → 驅動執行器
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

- 學校 STEM 課用 micro:bit 與 Arduino。
- 科學園與數碼港辦 maker 空間。
- 智慧城市倡議（智慧燈柱）用環境傳感器。

## 學生常見錯誤

- 採樣太快 → 耗電。
- 視模擬讀數為精確（有噪音）。
- 忘正確給傳感器供電。

## 考試式題目

> **題（5 分）：** 描述程序如何用光傳感器在房間變暗時開 LED。畫偽程式碼。

**參考答案：**

程序週期**讀光傳感器**、對比**閾值**、相應**驅動 LED**。

```text
LOOP forever
    light ← 讀光傳感器
    IF light < THRESHOLD THEN
        開 LED
    ELSE
        關 LED
    END IF
    WAIT 100 ms
END LOOP
```

閾值要按房間調 —— 太高則 LED 一直開，太低則永不開。少採樣（如每秒一次）能延長電池壽命。

## 關鍵要點

- 傳感器捕物理世界；執行器改它。
- Sense → think → act 模式。
- 程序在迴圈裏採樣並反應。

➡️ 下一節：[2.2 事件驅動程序](./event-driven)