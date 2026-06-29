# 2.2 · 事件驱动程序

> **目标：** 写按事件反应而非自顶向下运行的程序。

## 事件驱动是什么意思

不是顺序流，程序**等事件**（按钮点击、传感器阈值、网络消息）并跑**事件处理器**响应。

```
       loop forever:
           等事件
           派发到处理器
```

浏览器、移动应用、GUI、嵌入式设备都用此风格。

## 浏览器例（JavaScript）

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
| 鼠标 | click、double-click、mousemove、mousedown/up |
| 键盘 | keydown、keyup |
| 触屏 | touchstart、touchmove、touchend |
| 传感器 | 跨阈值、手势检测 |
| 网络 | 消息收到、连接开 / 关 |
| 时间 | 定时器到期 |

## 事件处理器 —— 最佳实践

- 处理器**短** —— 重活推迟。
- 避在处理器里阻塞（UI 冻结）。
- 不再用时分离处理器（防内存泄漏）。

## 对比 · 顺序 vs 事件驱动

| 方面 | 顺序 | 事件驱动 |
|--------|------------|--------------|
| 流 | 自顶向下 | 由事件触发 |
| 适合 | 批处理、脚本 | GUI、IoT、网页应用 |
| 复杂性 | 逻辑简单 | 用户响应更易 |
| 状态管理 | 局部 | 常经共享态，易引 bug |

## 考试式题目

> **题（5 分）：** 描述事件驱动编程如何不同于顺序编程。在智能家居恒温器中各举两个事件与处理器动作。

**参考答案：**

**顺序**编程程序自顶向下跑完即止；开发者控制流。**事件驱动**编程程序在循环里等事件（用户动作、传感器变、网络消息）并把每事件派发给做特定动作的**处理器**。

智能家居恒温器：

1. **温度跨阈值**事件 —— 处理器决定开 / 关加热并更新显示。
2. **用户碰旋钮**事件 —— 处理器读新目标温度、存、给触感 / 视觉反馈。

这两事件独立可随时发生；恒温器固件不需单线性脚本 —— 它在事件循环里等并反应。

## 关键要点

- 事件驱动 = 等 + 反应。
- 在 UI 与 IoT 常见。
- 处理器须保持轻。

➡️ 下一节：[2.3 扩展模块](./modules)
