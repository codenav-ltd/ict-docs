# 2.2 · Flowcharts

> **Goal:** read and draw flowcharts using the standard symbols.

## Standard symbols

| Symbol | Shape | Use |
|--------|-------|-----|
| **Terminator** | Rounded rectangle / oval | Start, End |
| **Process** | Rectangle | An action (assignment, computation) |
| **Input / Output** | Parallelogram | Reading from / writing to the user |
| **Decision** | Diamond | A yes/no question |
| **Flow line** | Arrow | Direction of execution |
| **Connector** | Small circle | Continues elsewhere (avoid line crossings) |
| **Subroutine call** | Rectangle with double vertical bars | Call to another subroutine |

## Example · BMI category flowchart

```
            ┌────────────┐
            │  Start     │
            └────┬───────┘
                 │
            ┌────▼────────────┐
            │ Input weight, h │
            └────┬────────────┘
                 │
            ┌────▼─────────┐
            │ bmi ← w/h²   │
            └────┬─────────┘
                 │
              ◇──┴──◇  YES   ┌──────────────┐
              ◇bmi<18.5◇──▶  │Output "Under"│
              ◇──┬──◇         └────┬─────────┘
                 │ NO               │
              ◇──┴──◇  YES   ┌──────────────┐
              ◇bmi<24◇──▶    │Output "Norm" │
              ◇──┬──◇         └────┬─────────┘
                 │ NO               │
              ┌──┴──────────────┐   │
              │Output "Over/Obese"│ │
              └────┬─────────────┘ │
                   └──────┬────────┘
                          ▼
                     ┌────────┐
                     │   End  │
                     └────────┘
```

(The HKEAA reproduces flowcharts in their nicer printed form — but the symbol set is identical.)

## Rules of good flowcharts

- **One entry, one exit** per process.
- **Flow lines** should not cross (use connectors).
- **Decision diamonds** must have exactly one YES and one NO branch.
- Keep nesting under 3 levels — if deeper, decompose into sub-flowcharts.

## When to use a flowchart vs pseudocode

| Use flowcharts when | Use pseudocode when |
|---------------------|---------------------|
| Audience prefers visual | Audience can read code-style |
| Showing branching logic | Showing detailed step sequence |
| SBA design documents | Coding implementation notes |

## Exam-style question

> **Q (5 marks):** Draw a flowchart that reads a student's mark and outputs "Pass" if ≥ 50 and "Fail" otherwise.

**Sample answer (text representation):**

1. Start.
2. Input mark.
3. Decision: mark ≥ 50?
   - YES → Output "Pass" → End.
   - NO → Output "Fail" → End.

In the exam draw the actual shapes — terminator, parallelogram for input, diamond for decision, parallelograms for outputs, terminators for End.

## Key takeaways

- Five symbols cover almost everything.
- One entry / one exit; no crossing lines.
- Pair flowcharts with pseudocode for clarity.

➡️ Next: [2.3 Data Types & Structures](./data-types)
