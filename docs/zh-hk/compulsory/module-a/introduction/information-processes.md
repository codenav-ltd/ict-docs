# 1.3 · Information Processes

> **Goal:** list and explain the seven information processes, and identify each one in any scenario.

## The seven information processes

The C&A Guide names these explicitly. Memorise them in this order — they roughly follow the lifecycle of data:

| # | Process | One-line meaning |
|---|---------|------------------|
| 1 | **Collection** | Capture raw data from a source |
| 2 | **Organisation** | Arrange data for storage and retrieval |
| 3 | **Analysis** | Look for patterns, anomalies, summaries |
| 4 | **Storage** | Save data and information for later |
| 5 | **Processing** | Transform data (calculation, sorting, filtering, formatting) |
| 6 | **Transmission** | Move data from one place to another |
| 7 | **Presentation** | Display the result to the user |

::: tip Memory hook
**"C-O-A-S-P-T-P"** — *"Cats Often Ask Silly Pigeons To Pose"* (or invent your own — the act of inventing the mnemonic helps you remember it).
:::

## Walk-through · Online ticket purchase

Let's trace the seven processes through buying a movie ticket on a website.

| # | Process | What happens |
|---|---------|--------------|
| 1 | Collection | You enter your name, payment details and chosen seats. |
| 2 | Organisation | The site stores your booking in a `bookings` table keyed by booking ID. |
| 3 | Analysis | The system checks whether your chosen seats are still available; counts how many tickets you bought to apply discounts. |
| 4 | Storage | The booking is written to the database and cached for quick lookup. |
| 5 | Processing | The site calculates the total price, applies taxes, generates a QR code for entry. |
| 6 | Transmission | The QR code and confirmation email travel over the Internet to your phone. |
| 7 | Presentation | The cinema's barcode scanner displays "Welcome — Hall 5, Row F, Seat 12" to you. |

## Computerised vs non-computerised examples

The seven processes apply equally to **paper-and-pen** systems. Compare:

| Process | Computer example | Manual example |
|---------|------------------|----------------|
| Collection | Online form | Paper questionnaire |
| Organisation | DB table | Filing cabinet by surname |
| Analysis | SQL `GROUP BY` | Counting tally marks |
| Storage | Hard disk | Filing cabinet, vault |
| Processing | Spreadsheet formula | Pocket calculator |
| Transmission | Email | Posted letter |
| Presentation | Dashboard chart | Printed report |

This is why the syllabus is **technology-neutral**. An exam question may show you a manual workflow and ask you to identify the processes.

## Subtle distinctions you must get right

### Analysis vs Processing

- **Analysis** discovers something *new* (a pattern, a summary, a prediction).
- **Processing** transforms what is already there (formatting, sorting, calculating one value).

Calculating the average of 100 marks is **processing**. Noticing that *girls scored higher than boys this year* is **analysis**.

### Organisation vs Storage

- **Organisation** is about *structure* — into what categories, in what order, indexed by which key.
- **Storage** is about *persistence* — write it to a disk, a tape, a cloud bucket.

You can organise without storing (sorting RAM) and you can store without organising (dumping unsorted text to disk).

### Transmission vs Presentation

- **Transmission** moves data between machines or locations.
- **Presentation** displays data to a human in a useful format.

The bytes travelling from a server to your browser are *transmission*. The rendered web page on your screen is *presentation*.

## Two common Paper 1 question patterns

### Pattern 1 · Identify the process

> An automated weather station records temperature every 30 seconds, packages each reading with a timestamp, and uploads the package to a cloud service. Identify the information process most directly involved in each highlighted action.

| Action | Process |
|--------|---------|
| Records temperature | Collection |
| Packages with timestamp | Organisation |
| Uploads to cloud | Transmission |

### Pattern 2 · List the processes for a scenario

> Describe the information processes involved when a parent uses the school's online portal to view their child's exam results.

Expected outline:

1. The school collects raw marks from teachers.
2. Marks are organised by student ID and subject.
3. The system processes (calculates totals, averages, grades).
4. Results are stored in the school database.
5. When the parent logs in, the system analyses (compares to class average if shown).
6. Data is transmitted over the Internet to the parent's browser.
7. The browser presents the marks in a styled table.

## Practice activity

Map the seven processes to this scenario:

> Hong Kong Observatory's smart traffic system uses cameras to count vehicles, calculates congestion in real time, sends alerts to drivers, and stores historical data for monthly reports.

::: details Suggested mapping
| Process | Action |
|---------|--------|
| Collection | Cameras count vehicles |
| Organisation | Tagged by location, time, road segment |
| Analysis | Detects congestion patterns |
| Storage | Saved to historical database |
| Processing | Calculates congestion index per minute |
| Transmission | Pushes alerts to drivers' phones |
| Presentation | App map shows colour-coded roads |
:::

## Common pitfalls

- **Listing only 3 or 4 processes** when the question awards 5+ marks.
- **Mixing Organisation with Storage** — write them as two distinct processes.
- **Skipping Presentation** because "the system doesn't have a UI" — even a CSV download is presentation.
- **Confusing Analysis with Processing** — see the distinction above.

## Key takeaways

- **Seven** processes: Collection, Organisation, Analysis, Storage, Processing, Transmission, Presentation.
- They apply to manual and computerised systems alike.
- The HKEAA loves asking you to identify processes from short scenarios.

➡️ Next: [1.4 The Information Age & Literacy](./information-age)
