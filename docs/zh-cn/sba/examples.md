# SBA 主题示例与灵感

> 没思路？以下是经过多届实战检验的主题。

## 适合 2A + 2B（最常见组合）

| 主题 | 系统功能 | 关键表 |
|------|---------|--------|
| **学校图书馆** | 借/还/逾期报告 | Member、Book、Loan、Fine |
| **库存管理** | 入/出库、低库存告警 | Item、Movement、Supplier |
| **餐厅预约** | 桌位、时段、客户视图 | Table、Reservation、Customer |
| **班级功课清单** | 个人任务 + 截止 | User、Task、Subject |
| **个人体重追踪** | 每日日志 + 图表 | User、Log、Goal |
| **小型电商** | 目录 + 购物车 + 订单 | Product、Cart、Order、OrderItem |
| **投票系统** | 候选人 + 投票 + 结果 | Candidate、Voter、Vote |
| **电影评论站** | 评论 + 评分 + 留言 | Movie、User、Review、Comment |
| **运动赛事报名** | 赛事、参赛者、成绩 | Event、Participant、Result |
| **义工时数记录** | 时数申报与审核 | Volunteer、Activity、Hour |

## 适合仅 2A

- 会员卡续期系统
- 医院预约（含冲突检测）
- 多段巴士路线查询票价
- 酒店预订（含季节定价）
- 班主任家长会时段预约

## 适合仅 2B

- 个人作品集 + 后端联系表
- 班级公告板
- 老师博客（学生留言）
- 轻量级问卷
- 校园活动现场投票（AJAX）

## 适合仅 2C

- BFS 解迷宫
- 井字棋（minimax AI）
- 从 CSV 随机出题的小测验
- 传感器阈值告警记录器
- 文件去重（哈希）

## 如何选题

1. **挑你真正在乎的主题**。30 小时投入太长，不可能熬过无聊。
2. **匹配能力**。一个完成度高的小系统优于半成品大系统。
3. **数据来源**。需要真实数据时，能否自造至少 30 条？
4. **跟老师沟通**。他们了解评卷偏好。

## 易撞车的主题

- 「宠物 App」—— 太多了。要差异化（如疫苗提醒）。
- 「音乐库」—— Spotify 已存在。需校园角度。
- 「日历」—— Google 已存在。要展示 Google 没有的功能。

## SBA 测试数据样例

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

跑一下，你的第一个报表就出来了。迭代后再移植到 PHP 应用。

---

➡️ 返回：[SBA 总览](./)
