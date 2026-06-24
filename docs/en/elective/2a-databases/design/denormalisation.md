# 3.4 · Denormalisation

> **Goal:** know when to **break** normal forms intentionally, and accept the trade-offs.

## What denormalisation is

The deliberate introduction of redundancy into a normalised schema to **speed up reads** or **simplify queries** — typically by storing aggregated values, denormalised lookups, or summaries.

## Why you might denormalise

| Reason | Example |
|--------|---------|
| **Performance** | Daily report needs an expensive JOIN; store the result hourly |
| **Reporting** | OLAP / data warehouse layers favour wide tables for analytics |
| **Reduced complexity** | Frontend queries become simpler |
| **Caching** | Avoid recomputing expensive aggregates |

## The cost

| Trade-off | Detail |
|-----------|--------|
| **Update anomalies** | The denormalised copy can drift from the source |
| **Storage** | Duplicated data wastes disk |
| **Maintenance** | Need triggers / scheduled jobs to keep copies fresh |

## Examples of denormalisation

### Example 1 · Storing a snapshot of customer name on an order

Normalised:

```
Order(order_id, customer_id, …)
Customer(customer_id, name)
```

To produce an order receipt, JOIN the two tables. If the customer renames themselves, all past receipts now show the new name.

Denormalised:

```
Order(order_id, customer_id, customer_name_at_order_time, …)
```

Pros: receipts always show the **original** name. Cons: duplicated data — if the customer corrects a typo, past orders still show the typo.

### Example 2 · Pre-computed daily totals

Normalised: compute `SUM(sale_amount)` from a million-row Sales table every time a report runs.

Denormalised: nightly job populates `DailyTotals(date, total_sales)`. Reports query this small table instantly.

### Example 3 · Materialised view (advanced)

A **materialised view** is a denormalised cache stored physically; refreshed on schedule.

## Procedure for denormalisation (do it deliberately)

1. **Profile** the slow query. Confirm normalisation is the bottleneck.
2. **Choose** the smallest denormalisation that helps.
3. **Document** the redundancy clearly.
4. **Add a refresh strategy** (trigger, job, application code).
5. **Monitor** for drift.

## Common student mistakes

- Denormalising before normalising — leads to messy schemas without understanding the trade-off.
- Forgetting to keep the cached copy in sync.
- Over-denormalisation — duplicating everything for tiny gains.

## Exam-style question

> **Q (5 marks):** A school report system runs a JOIN of `Student`, `Class`, and 12 months of `Score` records every time a teacher views a class summary. The query has become slow.
>
> (a) Suggest a denormalisation approach.
> (b) Discuss one risk of your approach and one mitigation.

**Sample answer:**

(a) Create a denormalised summary table:

```sql
CREATE TABLE ClassSummary (
  class_id     VARCHAR(10),
  month        VARCHAR(7),       -- '2026-06'
  subject      VARCHAR(30),
  avg_score    DECIMAL(5,2),
  PRIMARY KEY (class_id, month, subject)
);
```

A nightly job populates this table by pre-aggregating from `Student` and `Score`. The teacher's "class summary" view now hits one small, indexed table.

(b) **Risk**: the summary can become **stale** if scores are updated after the nightly refresh — teachers see yesterday's numbers, not today's.

**Mitigation**: trigger an immediate update of the summary when a score is changed, or run the refresh job more frequently (e.g. hourly during exam season).

## Key takeaways

- Denormalisation trades disk + complexity for speed.
- Always justify with profiling.
- Plan the refresh strategy upfront.

➡️ Next: [3.5 ER → Tables](./er-to-tables)
