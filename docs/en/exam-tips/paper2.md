# Paper 2 Strategy

> 1 hour 30 minutes · 25% of subject mark · **Answer two electives only**.

## Time allocation

| Section | Suggested time |
|---------|----------------|
| Read the paper, identify your two electives | 5 min |
| Elective 1 | 40 min |
| Elective 2 | 40 min |
| Review | 5 min |

> The single biggest time waste: starting on your weaker elective first. **Start with the elective you feel stronger in** — it builds confidence and banks marks.

## Per-elective strategy

### Paper 2A · Databases

- **Reference sheet:** know exactly which page it's on. Don't memorise SQL keywords — use the sheet.
- **Order of writing SQL:**
  1. `FROM` and `JOIN` (which tables are involved?)
  2. `WHERE` (filter rows)
  3. `GROUP BY` (if aggregating)
  4. `HAVING` (filter groups)
  5. `SELECT` (output columns + aggregates)
  6. `ORDER BY`
  7. `LIMIT`
- **Always alias tables** when joining (e.g. `Student s INNER JOIN Score sc`).
- **Sketch the ER diagram** on the side before doing a design question.
- **Use `;`** at the end of each statement. Markers tolerate missing it, but it shows polish.

### Paper 2B · Web Application Development

- **Separate client-side and server-side concerns** clearly in your code.
- **Never trust user input.** Validate on the client *and* the server.
- **Use prepared statements** when showing PHP database code.
- For HTML, **include `<!DOCTYPE html>`** and `<meta charset="UTF-8">`.
- For CSS questions, demonstrate one selector, one property, and one value at minimum.

### Paper 2C · Algorithm & Programming

- **Pseudocode preferred** unless the question says "write a Python program".
- **Comment** key sections of complex code.
- **Trace** your algorithm with one sample input before declaring it correct.
- Be ready to **compare** algorithms on time complexity (O notation is good to know even if not required).

## How marks are awarded

Markers use a **mark scheme** with explicit "points to award":

- **One concept = one mark**, usually.
- **Method marks** for showing working (e.g. correct JOIN structure) even if the final answer has a typo.
- **Bonus marks** for clarity (comments, indentation, sensible names).

> When in doubt, write **more structured, clearer** content — not necessarily more content.

## Reading the question — checklist

1. Underline the **command verb** (Write, Explain, Identify…).
2. Underline the **data context** (which table? which language?).
3. Note the **mark allocation**.
4. Identify **constraints** ("using JOIN", "without sub-query", "only one loop").

## Common errors specific to Paper 2

- **2A:** Writing `WHERE COUNT(*) > 5` instead of `HAVING COUNT(*) > 5`.
- **2A:** Confusing `<>` (not equal) and `!=` (Python style).
- **2B:** Using `localStorage` when the question asks for cookies.
- **2B:** Demonstrating MySQL queries without `PDO::prepare()` → vulnerable to SQL injection.
- **2C:** Off-by-one in `for i in range(n)` vs `for i in range(1, n+1)`.

➡️ Next: [Common mistakes catalogue](./mistakes)
