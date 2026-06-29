# 1.1 · LAN vs WAN

> **目標：** 按覆蓋、所有權、速度和例子區分 LAN 與 WAN。

## 定義

| 類型 | 全稱 | 覆蓋 |
|------|-----------|----------|
| **LAN** | Local Area Network 局域網 | 單一場地（房間、大樓、校園） |
| **WAN** | Wide Area Network 廣域網 | 多場地 / 城市 / 國家 / 全球 |

## 並排對比

| 特性 | LAN | WAN |
|---------|-----|-----|
| **覆蓋** | < ~1 km | 無限 |
| **擁有者** | 通常一家機構 | 多方；互聯網是 WAN 的 WAN |
| **典型速度** | 1 Gbps – 10 Gbps | 每用户 10 Mbps – 1 Gbps，每跳更慢 |
| **成本** | 低（以太網線、交換器） | 高（專線、城際光纖） |
| **時延** | 亞毫秒 | 數十至數百毫秒 |
| **例子** | 辦公室 LAN、學校電腦室 | 互聯網、銀行分行網 |

## 值得知道的特殊網絡

| 術語 | 覆蓋 | 例子 |
|------|----------|---------|
| **PAN** Personal Area Network | 個人周圍幾米 | 手機 + 藍牙耳機 + 智能表 |
| **MAN** Metropolitan Area Network | 一座城市 | 香港公共 Wi-Fi（早期 Y5ZONE） |
| **VLAN** Virtual LAN | 物理 LAN 的邏輯切分 | 學校用同一批交換器分員工 / 學生網 |
| **VPN** Virtual Private Network | 互聯網上的安全隧道 | 在家辦公並連回辦公室 LAN |

## 聯網環境的常見服務

課程指引明確提到：

- **內部通訊**（電郵、聊天、視訊通話）
- **會議**（Zoom、Teams）
- **資源共享**（文件、列印機、互聯網頻寬）

## 實例 · 典型的香港辦公室

```
                Internet (WAN)
                     │
              ┌──── Router ────┐
              │                │
   Office A (中環 LAN)         Office B (九龍灣 LAN)
   ├─ Switch                   ├─ Switch
   ├─ PCs, printers            ├─ PCs, printers
   └─ Wi-Fi AP                 └─ Wi-Fi AP
```

每個辦公室都是一個 LAN。跨城連接它們就構成 WAN。

## 學生常見錯誤

- 把**互聯網**叫 LAN —— 它是世上最大 WAN。
- 把 Wi-Fi 列為另一種類型 —— Wi-Fi 只是 LAN 的**無線層**。
- 把 **LAN** 與 **Ethernet** 混淆 —— Ethernet 是一種 LAN 技術；並非所有 LAN 都用 Ethernet。

## 考試式題目

> **題（4 分）：** 按覆蓋、所有權、典型傳輸速度比較 LAN 與 WAN。各舉一例。

**參考答案：**

- **LAN**：覆蓋小（通常至一棟樓）；由單一機構擁有與管理；高速（1–10 Gbps）。例：學校電腦室通過以太網與 Wi-Fi 互聯。
- **WAN**：覆蓋大（城市、國家、洲）；通常涉及多機構或 ISP；每用户速度因長距而較低（10 Mbps – 1 Gbps）。例：互聯網。

## 關鍵要點

- LAN = 本地、快、便宜、單機構。
- WAN = 全球、每用户慢、多機構。

➡️ 下一節：[1.2 IPv4 與 IPv6](./ip-addressing)