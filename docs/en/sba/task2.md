# SBA Task 2 · Testing & Evaluation (15 marks)

> Show that your system actually works and that you can critique it.

## Mark breakdown (typical)

| Area | Marks |
|------|-------|
| Test plan & test cases | 5 |
| Evidence of testing | 5 |
| Evaluation & reflection | 5 |

## Test plan template

| # | Test type | Input | Expected output | Actual output | Pass/Fail | Action taken |
|---|-----------|-------|------------------|----------------|-----------|--------------|
| 1 | Normal | Borrow book #B-001 by member #M-101 on 2026-01-15 | Loan record created, due in 14 days | Loan record created, due 2026-01-29 | Pass | — |
| 2 | Boundary | Borrow a book that has 1 copy left | Loan created, copies=0 | Loan created, copies=0 | Pass | — |
| 3 | Erroneous | Borrow a book that has 0 copies | Error message, no loan | Loan created (BUG) | Fail | Add check in PHP |
| 4 | Erroneous | Member ID does not exist | Friendly error | PHP warning shown | Fail | Add foreign key + validation |

You need at least:

- 1 normal case per feature
- 1 boundary case per feature
- 1 erroneous case per validated input

## Documentation tips

- **Use screenshots** for both input and output.
- Caption each screenshot ("**Figure 4.2** — Adding a duplicate ISBN produces error toast").
- For bugs found, show **before** (bug present), **fix** (code diff), **after** (bug gone).

## Sample evaluation outline

```
1. What worked well
   1.1 Core features delivered on time
   1.2 Database design handled edge cases
2. What did not work
   2.1 Search by title was case-sensitive — fixed in v0.3
   2.2 Mobile layout broke below 360px — known issue
3. User feedback
   3.1 5 classmates and the librarian tested
   3.2 Top requests: barcode scanner, email reminders
4. If I started over
   4.1 Use a framework like Laravel
   4.2 Write automated tests from day one
   4.3 Plan for accessibility from the start
5. What I learned
   5.1 PDO prepared statements
   5.2 Foreign key cascade behaviour
   5.3 Project planning and time budgeting
```

## Presentation ideas (legitimate ways to earn marks)

- **PowerPoint** version of the report for variety.
- **Demo video** with voice-over walking through key scenarios.
- **Flowchart** of testing strategy.
- **Tables** instead of long paragraphs whenever possible.
- **Colour-coded** Pass/Fail markers for skimmability.

## Common pitfalls

- Tests only cover "happy path" — markers want **boundary and error cases**.
- "All tests passed" with no evidence — provide screenshots.
- Evaluation that is too positive — markers want **honest reflection**.
- No mention of who tested it — get classmates to use it.

::: tip Reproducible SQL tests
Maintain a `seed.sql` file in your project that re-creates a known test dataset. Run it inside **[SQL Books](https://sqlbooks.codenav.dev)** to confirm reports return the expected numbers. Attach screenshots of the queries and results as testing evidence in your report.
:::

➡️ Continue: [Topic examples](./examples)
