# 2.2 · 事件驅動程序

> **目標：** 寫按事件反應而非自頂向下執行的程序。

## 事件驅動是什麼意思

不是順序流，程序**等事件**（按鈕點擊、傳感器閾值、網絡消息）並跑**事件處理器**響應。

```
       loop forever:
           等事件
           派發到處理器
```

瀏覽器、移動應用、GUI、嵌入式設備都用此風格。

## 瀏覽器例（JavaScript）

```javascript
document.getElementById("save").addEventListener("click", () => {
    console.log("Saved!");
});
window.addEventListener("resize", () => {
    console.log("Window resized");
});
```

## micro:bit 例

```python
from microbit import button_a, button_b, display

while True:
    if button_a.was_pressed():
        display.show("A")
    if button_b.was_pressed():
        display.show("B")
```

## 典型事件

| 源 | 事件 |
|--------|--------|
| 鼠標 | click、double-click、mousemove、mousedown/up |
| 鍵盤 | keydown、keyup |
| 觸屏 | touchstart、touchmove、touchend |
| 傳感器 | 跨閾值、手勢檢測 |
| 網絡 | 消息收到、連接開 / 關 |
| 時間 | 定時器到期 |

## 事件處理器 —— 最佳實踐

- 處理器**短** —— 重活推遲。
- 避在處理器裏阻塞（UI 凍結）。
- 不再用時分離處理器（防記憶體泄漏）。

## 對比 · 順序 vs 事件驅動

| 方面 | 順序 | 事件驅動 |
|--------|------------|--------------|
| 流 | 自頂向下 | 由事件觸發 |
| 適合 | 批處理、腳本 | GUI、IoT、網頁應用 |
| 複雜性 | 邏輯簡單 | 用户響應更易 |
| 狀態管理 | 局部 | 常經共享態，易引 bug |

## 考試式題目

> **題（5 分）：** 描述事件驅動編程如何不同於順序編程。在智能家居恆温器中各舉兩個事件與處理器動作。

**參考答案：**

**順序**編程程序自頂向下跑完即止；開發者控制流。**事件驅動**編程程序在迴圈裏等事件（用户動作、傳感器變、網絡消息）並把每事件派發給做特定動作的**處理器**。

智能家居恆温器：

1. **温度跨閾值**事件 —— 處理器決定開 / 關加熱並更新顯示。
2. **用户碰旋鈕**事件 —— 處理器讀新目標温度、存、給觸感 / 視覺反饋。

這兩事件獨立可隨時發生；恆温器固件不需單線性腳本 —— 它在事件迴圈裏等並反應。

## 關鍵要點

- 事件驅動 = 等 + 反應。
- 在 UI 與 IoT 常見。
- 處理器須保持輕。

➡️ 下一節：[2.3 擴展模組](./modules)