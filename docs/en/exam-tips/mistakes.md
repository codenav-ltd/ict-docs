# Common Mistakes Catalogue

> The mistakes below come up year after year. Make a flashcard for each — it's the highest-yield revision you can do.

## Module A · Information Processing

- Confusing **validation** (by software) with **verification** (by human).
- Adding binary numbers without checking for **overflow** at the leftmost bit.
- Mixing up **Big-5** (Traditional Chinese) and **GB** (Simplified Chinese).
- Forgetting that `1 KB = 1024 bytes` in the IT context, not 1000.
- Calling a pivot table the same as a chart — it's a table that aggregates.

## Module B · Computer System

- Saying **RAM is non-volatile** (it is volatile).
- Saying **ROM is volatile** (it is non-volatile).
- Treating **firmware** and **OS** as the same thing.
- Listing **Windows** as application software (it is system software).
- Forgetting that **virtualisation** is a mode of operation, not just VirtualBox.

## Module C · Internet

- Calling **the Internet** a LAN.
- Mixing **switch** and **router** (switch = within a LAN, router = between networks).
- Believing **HTTPS guarantees safety** (it secures transmission, not the site itself).
- Saying **viruses** cause DDoS (more accurately: botnets, which may involve worms or trojans).
- Forgetting that **WPA2** is the password-based wireless protocol, **WPA3** the newer.

## Module D · Programming

- Using `=` instead of `==` in pseudocode conditions.
- Writing nested loops in the Compulsory Part (nested loop is **Elective 2C**, not Module D).
- Producing a trace table that **skips an iteration**.
- Forgetting to **initialise** a counter before a loop.
- Treating `int` and `string` versions of the same number as interchangeable (`"5" + 3` is an error in Python).

## Module E · Social Implications

- Calling all free software "open source" — freeware ≠ open source.
- Believing buying a copy transfers copyright.
- Treating AR and VR as the same.
- Writing one-sided ethics answers (markers reward balanced view).
- Forgetting to **name a specific group** affected by the digital divide.

## Elective 2A · Databases

- `WHERE` on aggregates instead of `HAVING`.
- `Cartesian product` from missing `ON` clause.
- `JOIN` direction wrong (LEFT vs RIGHT).
- Designing M:N without an associative table.
- Using **reserved words** as identifiers (e.g. `ORDER`, `DATE`).

## Elective 2B · Web Application

- Believing client-side validation is enough for security.
- Storing passwords in plaintext.
- Using `GET` for actions that change state.
- Concatenating SQL strings (no prepared statement).
- Confusing **session** with **cookie**.

## Elective 2C · Algorithm

- Modifying an array while iterating.
- Off-by-one (`range(n)` vs `range(1, n+1)`).
- Returning the wrong type (e.g. returning index when value asked).
- Forgetting that binary search requires sorted input.
- Not closing files (forgetting `with open(...)`).

## SBA

- Scope too large; nothing finished well.
- Tests cover only happy path.
- Evaluation is too positive — no honest reflection.
- Missing backup of working files.
- Late submission.

## How to use this list

1. Print it as a 1-page cheat sheet.
2. After each mock exam, **add 3 mistakes** of your own.
3. **Review weekly** in S6.

➡️ Next: [Programming pitfalls](./programming)
