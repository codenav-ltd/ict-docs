# 1.1 · LAN vs WAN

> **目标：** 按覆盖、所有权、速度和例子区分 LAN 与 WAN。

## 定义

| 类型 | 全称 | 覆盖 |
|------|-----------|----------|
| **LAN** | Local Area Network 局域网 | 单一场地（房间、大楼、校园） |
| **WAN** | Wide Area Network 广域网 | 多场地 / 城市 / 国家 / 全球 |

## 并排对比

| 特性 | LAN | WAN |
|---------|-----|-----|
| **覆盖** | < ~1 km | 无限 |
| **拥有者** | 通常一家机构 | 多方；互联网是 WAN 的 WAN |
| **典型速度** | 1 Gbps – 10 Gbps | 每用户 10 Mbps – 1 Gbps，每跳更慢 |
| **成本** | 低（以太网线、交换机） | 高（专线、城际光纤） |
| **时延** | 亚毫秒 | 数十至数百毫秒 |
| **例子** | 办公室 LAN、学校电脑室 | 互联网、银行分行网 |

## 值得知道的特殊网络

| 术语 | 覆盖 | 例子 |
|------|----------|---------|
| **PAN** Personal Area Network | 个人周围几米 | 手机 + 蓝牙耳机 + 智能表 |
| **MAN** Metropolitan Area Network | 一座城市 | 香港公共 Wi-Fi（早期 Y5ZONE） |
| **VLAN** Virtual LAN | 物理 LAN 的逻辑切分 | 学校用同一批交换机分员工 / 学生网 |
| **VPN** Virtual Private Network | 互联网上的安全隧道 | 在家办公并连回办公室 LAN |

## 联网环境的常见服务

课程指引明确提到：

- **内部通讯**（电邮、聊天、视讯通话）
- **会议**（Zoom、Teams）
- **资源共享**（文件、打印机、互联网带宽）

## 实例 · 典型的香港办公室

```
                Internet (WAN)
                     │
              ┌──── Router ────┐
              │                │
   Office A (中环 LAN)         Office B (九龙湾 LAN)
   ├─ Switch                   ├─ Switch
   ├─ PCs, printers            ├─ PCs, printers
   └─ Wi-Fi AP                 └─ Wi-Fi AP
```

每个办公室都是一个 LAN。跨城连接它们就构成 WAN。

## 学生常见错误

- 把**互联网**叫 LAN —— 它是世上最大 WAN。
- 把 Wi-Fi 列为另一种类型 —— Wi-Fi 只是 LAN 的**无线层**。
- 把 **LAN** 与 **Ethernet** 混淆 —— Ethernet 是一种 LAN 技术；并非所有 LAN 都用 Ethernet。

## 考试式题目

> **题（4 分）：** 按覆盖、所有权、典型传输速度比较 LAN 与 WAN。各举一例。

**参考答案：**

- **LAN**：覆盖小（通常至一栋楼）；由单一机构拥有与管理；高速（1–10 Gbps）。例：学校电脑室通过以太网与 Wi-Fi 互联。
- **WAN**：覆盖大（城市、国家、洲）；通常涉及多机构或 ISP；每用户速度因长距而较低（10 Mbps – 1 Gbps）。例：互联网。

## 关键要点

- LAN = 本地、快、便宜、单机构。
- WAN = 全球、每用户慢、多机构。

➡️ 下一节：[1.2 IPv4 与 IPv6](./ip-addressing)
