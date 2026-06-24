# 4.1 · Designing Test Data

> **Goal:** design test cases that catch real bugs.

## Three categories of test data

| Category | Purpose | Example (valid age 0–150) |
|----------|---------|---------------------------|
| **Normal** | Typical valid input | 17, 25, 60 |
| **Boundary** | Edges of valid range | 0, 150 |
| **Erroneous (invalid)** | Outside valid range or wrong type | -1, 151, "abc", empty |

Cover **all three** for each input field. Most bugs hide at boundaries.

## Worked example · Discount eligibility

> Rule: a member is eligible for a discount if their age is ≥ 60 **OR** they have spent more than $1000.

### Test cases

| # | Type | age | spent | Expected |
|---|------|-----|-------|----------|
| 1 | Normal | 17 | 200 | False |
| 2 | Normal | 65 | 200 | True |
| 3 | Normal | 17 | 1500 | True |
| 4 | Boundary | 60 | 0 | True |
| 5 | Boundary | 59 | 0 | False |
| 6 | Boundary | 0 | 1000 | False (strictly > 1000) |
| 7 | Boundary | 0 | 1001 | True |
| 8 | Erroneous | -5 | 200 | Reject input |
| 9 | Erroneous | 60 | -100 | Reject input |

Notice how boundaries (60 vs 59, 1000 vs 1001) reveal the exact threshold.

## Test plan template

| # | Input | Expected output | Actual output | Pass/Fail | Notes |
|---|-------|------------------|----------------|-----------|-------|
| 1 | … | … | … | ✓ / ✗ | |

Keep test plans in your SBA report.

## Test driven mindset

Even without formal frameworks, get into the habit of:

1. **Write the test first** ("if I add a function `is_palindrome`, this should return True/False on these inputs").
2. Implement.
3. Run the tests.
4. Refactor.

## Common student mistakes

- Only testing **happy paths** (normal inputs that obviously work).
- Skipping **boundary** values.
- Failing to test **invalid** inputs.
- Manually testing without writing test data down.

## Exam-style question

> **Q (4 marks):** A program accepts a percentage mark (0–100). Suggest **three test cases** for boundary testing and **two test cases** for erroneous input.

**Sample answer:**

Boundary cases:

1. `0` — lowest valid mark.
2. `100` — highest valid mark.
3. `50` — exact pass mark (boundary of conditional logic).

Erroneous cases:

1. `-5` — below valid range.
2. `"abc"` — wrong data type (text instead of number).

## Key takeaways

- Three categories: normal, boundary, erroneous.
- Boundaries hide the most bugs.
- Document test cases.

➡️ Next: [4.2 Types of Errors](./error-types)
