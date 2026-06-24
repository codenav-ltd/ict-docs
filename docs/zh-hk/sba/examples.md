# SBA 主題例子與靈感

> 沒思路？以下是經過多屆實戰檢驗的主題。

## 適合 2A + 2B（最常見組合）

| 主題 | 系統功能 | 關鍵表 |
|------|---------|--------|
| **學校圖書館** | 借/還/逾期報告 | Member、Book、Loan、Fine |
| **庫存管理** | 入/出庫、低庫存告警 | Item、Movement、Supplier |
| **餐廳預約** | 桌位、時段、客户視圖 | Table、Reservation、Customer |
| **班級功課清單** | 個人任務 + 截止 | User、Task、Subject |
| **個人體重追蹤** | 每日日誌 + 圖表 | User、Log、Goal |
| **小型電商** | 目錄 + 購物車 + 訂單 | Product、Cart、Order、OrderItem |
| **投票系統** | 候選人 + 投票 + 結果 | Candidate、Voter、Vote |
| **電影評論站** | 評論 + 評分 + 留言 | Movie、User、Review、Comment |
| **運動賽事報名** | 賽事、參賽者、成績 | Event、Participant、Result |
| **義工時數記錄** | 時數申報與審核 | Volunteer、Activity、Hour |

## 適合僅 2A

- 會員卡續期系統
- 醫院預約（含衝突檢測）
- 多段巴士路線查詢票價
- 酒店預訂（含季節定價）
- 班主任家長會時段預約

## 適合僅 2B

- 個人作品集 + 後端聯繫表
- 班級公告板
- 老師博客（學生留言）
- 輕量級問卷
- 校園活動現場投票（AJAX）

## 適合僅 2C

- BFS 解迷宮
- 井字棋（minimax AI）
- 從 CSV 隨機出題的小測驗
- 傳感器閾值告警記錄器
- 文件去重（雜湊）

## 如何選題

1. **挑你真正在乎的主題**。30 小時投入太長，不可能熬過無聊。
2. **匹配能力**。一個完成度高的小系統優於半成品大系統。
3. **資料來源**。需要真實資料時，能否自造至少 30 條？
4. **跟老師溝通**。他們瞭解評卷偏好。

## 易撞車的主題

- 「寵物 App」—— 太多了。要差異化（如疫苗提醒）。
- 「音樂庫」—— Spotify 已存在。需校園角度。
- 「日曆」—— Google 已存在。要展示 Google 沒有的功能。

## SBA 測試資料樣例

直接粘到 [SQL Books](https://sqlbooks.codenav.dev)：

```sql
CREATE TABLE Member (
  member_id INTEGER PRIMARY KEY,
  name      VARCHAR(50),
  joined_on DATE
);

INSERT INTO Member VALUES
  (1, 'Alice', '2025-09-01'),
  (2, 'Bob',   '2025-09-15'),
  (3, 'Carol', '2025-10-03');

CREATE TABLE Activity (
  act_id    INTEGER PRIMARY KEY,
  member_id INTEGER,
  topic     VARCHAR(50),
  hours     DECIMAL(4,1),
  on_date   DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id)
);

INSERT INTO Activity VALUES
  (101, 1, 'Tutoring', 2.0, '2025-10-05'),
  (102, 2, 'Cleanup',  3.5, '2025-10-08'),
  (103, 1, 'Library',  1.5, '2025-10-09'),
  (104, 3, 'Tutoring', 2.0, '2025-10-12');

SELECT m.name, COALESCE(SUM(a.hours), 0) AS total_hours
FROM   Member m LEFT OUTER JOIN Activity a ON m.member_id = a.member_id
GROUP  BY m.member_id, m.name
ORDER  BY total_hours DESC;
```

跑一下，你的第一個報表就出來了。迭代後再移植到 PHP 應用。

---

➡️ 返回：[SBA 總覽](./)
