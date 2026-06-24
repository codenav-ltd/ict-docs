# 2.2 · Sequential vs Direct Access

> **Goal:** explain the difference, list pros and cons, and pick the right method for a scenario.

## What "access method" means

When data is stored, there are two fundamentally different ways to **read** a specific record:

| Access method | Strategy | Analogy |
|---------------|----------|---------|
| **Sequential access** | Read records in order, starting from the beginning | Listening to a song on cassette tape — fast-forward through the others first |
| **Direct (random) access** | Jump straight to the record using an index/address | Selecting a track on Spotify — click and it plays instantly |

## Sequential access

### How it works

Records are stored **one after another in a fixed order** (usually sorted by a key like student ID). To find record N, the system reads records 1, 2, … N.

### Devices best suited to sequential access

- **Magnetic tape** — moving the tape head is slow, so reading in order is the only realistic option.
- **Optical disks** when streaming sequential data (rare today).
- **Streaming log files**.

### Pros and cons

| Pros | Cons |
|------|------|
| Simple, cheap storage | Slow to find a specific record |
| Efficient when **processing every record** in order (e.g. monthly payroll) | Inefficient for random lookups |
| Good for **backup** because tapes are cheap per GB | Adding a new record requires re-writing the whole file (in strict sequential layout) |

### Typical use cases

- **Backups** — write once, restore in order if needed.
- **Batch processing** — overnight payroll, monthly billing.
- **Log files** — append-only, read in order during debugging.

## Direct (random) access

### How it works

Each record is at a specific **address** (a disk block, a hash position, or pointed to by an index). To find record N, the system computes the address and reads it directly — no scanning required.

### Devices best suited to direct access

- **Hard disk drives (HDD)** — read/write head seeks to a track and sector.
- **Solid-state drives (SSD)** — even faster, no moving parts.
- **RAM** — basically all random access.
- **Flash memory**, **optical disks**.

### Pros and cons

| Pros | Cons |
|------|------|
| Fast lookup of any single record | More expensive per GB (especially SSDs) |
| Easy to insert/update individual records | Requires more complex software (indexes, hash tables) |
| Supports interactive applications (web apps, games) | If keys collide, performance suffers |

### Typical use cases

- **Online banking** — instant balance check.
- **Database queries** — `SELECT … WHERE id = 1001`.
- **Operating system files** — locate any file by path immediately.

## Side-by-side comparison

| Aspect | Sequential | Direct |
|--------|-----------|--------|
| Order of reading | First to last | Any order |
| Time to find a specific record | O(N) | O(1) on average |
| Time to read **all** records | O(N) — efficient | O(N) — fine but no advantage |
| Storage hardware | Tape, sequential files | Disk, SSD, RAM |
| Update cost | Re-write whole file (often) | Update in place |
| Cost per GB (typical) | Low (tape) | Higher (SSD) |
| Insert/delete | Hard | Easy |
| Suitable for | Backup, batch jobs | Real-time / interactive |

## Choosing between the two

Ask three questions:

1. **Do I need to access individual records quickly?** → Direct.
2. **Do I process every record every time?** → Sequential is fine and cheaper.
3. **Do I need cheap, archival storage?** → Tape (sequential) wins.

Many real systems use **both**:

- A bank stores transactions on **disk** (direct) for daily use.
- A nightly job copies transactions to **tape** (sequential) for off-site backup.

## Real-life example · Salary system

> A 10,000-employee company runs payroll once a month and lets each employee check their pay slip online instantly.

| Activity | Access method | Reason |
|----------|---------------|--------|
| Monthly payroll | Sequential | Process every employee in order — efficient |
| Employee check pay slip | Direct | Need that specific employee's record now |
| Archive last year's records | Sequential (tape) | Cold storage, rarely needed |

The same data is **organised differently** for different needs.

## Common misconceptions

- **"Sequential is always slower."** False — it is the fastest way to read *every* record in order.
- **"Direct access means random data."** No — random *access*, not random data. The data itself is structured.
- **"Modern systems only use direct access."** False — tape backups are still standard in enterprises.

## Practice activity

For each scenario, choose **sequential** or **direct** and justify:

1. A government tax office processing 7 million tax returns in one batch overnight.
2. An MTR gate looking up your Octopus card balance.
3. A school printing 1,200 report cards once per term.
4. A flight booking system checking seat availability in real time.
5. A surveillance camera DVR storing 30 days of footage and only watched after an incident.

::: details Answers
1. Sequential — batch processing of every record.
2. Direct — must look up one card now.
3. Sequential — every student processed once.
4. Direct — single seat query.
5. Sequential write, mostly sequential read; could be either for review.
:::

## Exam-style question

> **Q (4 marks):** State two advantages of direct access compared with sequential access, and one situation where sequential access is more suitable.

**Sample answer:**

Advantages of direct (any 2):

- Faster to retrieve a specific record (O(1) vs O(N)).
- Suitable for interactive applications (e.g. ATM, online booking).
- Records can be inserted or updated in place without rewriting the whole file.

Situation where sequential is better:

- A monthly payroll job that reads every employee record in order — sequential access on cheap tape is fast and cost-effective for that workload.

## Key takeaways

- Two access methods: **sequential** and **direct**.
- Sequential = read in order; direct = jump anywhere.
- Match the method to the workload. Real systems often use both.

➡️ Next: [2.3 Validation, Verification & Parity](./data-control)
