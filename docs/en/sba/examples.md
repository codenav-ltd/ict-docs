# SBA Topic Examples & Inspiration

> Stuck for a topic? Here are battle-tested SBA themes grouped by elective combination.

## For 2A + 2B (most common combo)

| Topic | What you build | Key tables |
|-------|----------------|-----------|
| **School library** | Loan / return / overdue reports | Member, Book, Loan, Fine |
| **Inventory manager** | Stock in/out, low-stock alerts | Item, Movement, Supplier |
| **Restaurant reservation** | Tables, time slots, customer view | Table, Reservation, Customer |
| **Class homework checklist** | Per-student task list with deadlines | User, Task, Subject |
| **Personal weight tracker** | Daily logs with charts | User, Log, Goal |
| **Mini e-shop** | Catalogue + cart + order | Product, Cart, Order, OrderItem |
| **Voting system** | Candidate, vote, results | Candidate, Voter, Vote |
| **Movie review site** | Reviews + ratings + comments | Movie, User, Review, Comment |
| **Sports event registration** | Events, participants, results | Event, Participant, Result |
| **Volunteer hours log** | Recording and approving hours | Volunteer, Activity, Hour |

## For 2A only (database-focused)

- Membership card system with renewal cycles
- Hospital appointment scheduler with conflict detection
- Bus route + fare lookup with multi-leg journeys
- Hotel booking with seasonal pricing rules
- Class teacher's parent-meeting slot booking

## For 2B only (web-focused)

- Static personal portfolio with a backend contact form
- Bulletin board for class announcements
- Mini blog where teacher posts and students comment
- Lightweight survey tool with public sharing link
- Live poll for school events using AJAX

## For 2C only (algorithm-focused)

- Maze solver using BFS
- Tic-tac-toe with minimax AI
- Quiz game that randomises questions from a CSV
- Sensor data logger that detects threshold breaches
- File de-duplication tool that hashes files

## How to choose

1. **Pick something you actually care about.** 30 hours of work is too long for a topic you find boring.
2. **Match your skill level.** A small system done well scores better than a large system half-broken.
3. **Ensure data exists.** If the topic needs realistic data, can you generate at least 30 rows yourself?
4. **Talk to your teacher.** They know what the moderation panel rewards.

## Topic clichés to avoid (or differentiate well)

- "Pet care app" — done to death. Make yours unique (e.g. focus on vaccination reminders).
- "Music library" — Spotify exists. Add a clear classroom angle.
- "Calendar" — overlaps with Google Calendar. Show a feature Google doesn't have.

## Sample database for SBA brainstorming

Below is a tiny dataset you can paste into [SQL Books](https://sqlbooks.codenav.dev) right now to test query ideas:

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
  act_id   INTEGER PRIMARY KEY,
  member_id INTEGER,
  topic    VARCHAR(50),
  hours    DECIMAL(4,1),
  on_date  DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id)
);

INSERT INTO Activity VALUES
  (101, 1, 'Tutoring', 2.0, '2025-10-05'),
  (102, 2, 'Cleanup',  3.5, '2025-10-08'),
  (103, 1, 'Library',  1.5, '2025-10-09'),
  (104, 3, 'Tutoring', 2.0, '2025-10-12');

-- Report: total hours per member
SELECT m.name, COALESCE(SUM(a.hours), 0) AS total_hours
FROM   Member m LEFT OUTER JOIN Activity a ON m.member_id = a.member_id
GROUP  BY m.member_id, m.name
ORDER  BY total_hours DESC;
```

Run that in SQL Books to see your first report come alive. Iterate, then port to your PHP app.

---

➡️ Back to: [SBA Overview](./)
