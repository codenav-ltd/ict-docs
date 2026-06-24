# Module A · Information Processing

> **Suggested time:** 37 hours · **Position in curriculum:** Foundation module, prerequisite for Elective 2A Databases.

This module teaches you what information really is, how it is represented inside a computer and how to manipulate it with spreadsheets and database tools.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Introduction to Information Processing | 3 |
| b | Data Organisation & Data Control | 4 |
| c | Data Representation | 10 |
| d | Data Manipulation & Analysis | 20 |

---

## a. Introduction to Information Processing (3h)

### Learning outcomes

- Identify and examine the **components of an information system**.
- Distinguish between various **information processes**.
- Tell the difference between **data and information**, and identify text, number, image, audio, video data.
- Define **Information Age** and discuss the importance of **information literacy** in a knowledge-based society.

### Concepts

- **Components of an information system:** purposes, data, processes, technologies, personnel.
- **Information processes:** collection, organisation, analysis, storage, processing, transmission, presentation.
- **Data vs information:** data is raw; information is data given context and meaning.

### Common exam phrasings

- *"State two differences between data and information."*
- *"Identify the input/process/output components in the scenario above."*

---

## b. Data Organisation & Data Control (4h)

### Learning outcomes

- Identify **data, records, fields, files and databases** in the hierarchical organisation of data.
- Explain how records can be **organised, stored and retrieved**.
- State advantages/disadvantages and applications of **direct access** vs **sequential access**.
- Discuss the need for **data control** and describe error-detection methods.

### Key facts

| Term | Definition |
|------|------------|
| Field | The smallest unit of meaningful data (e.g. a student's last name) |
| Record | A collection of related fields (one student's full row) |
| File | A collection of related records |
| Database | A structured collection of related files |
| Direct (random) access | Jump straight to a record by address. Fast for individual lookups, used by disks. |
| Sequential access | Read records in order from the start. Cheap on tape; slow for random reads. |

### Error detection vs prevention

| Technique | Purpose |
|-----------|---------|
| **Validation** | Automatic check by software (range, presence, format, check digit) |
| **Verification** | Human check (re-entry, visual check, double-entry) |
| **Parity check** | Bit-level check (odd / even parity) used during transmission and storage |

::: tip Memory hook
"**V**alidation = **V**erified by code, **V**erification = **V**erified by a **V**iewer (human)."
:::

---

## c. Data Representation (10h)

### Learning outcomes

- Distinguish between **analog** and **digital** data.
- Convert integers between **denary, binary and hexadecimal**.
- Perform simple **binary addition and subtraction**; analyse **overflow**.
- Use **two's complement** for negative integers.
- Know how characters are represented (**ASCII, Big-5, GB, Unicode**).
- Know briefly how multimedia elements (**image, audio, video**) are digitised.
- Compare common **file formats** (bmp, png, jpg, wav, mp3, avi, mpeg4, txt, docx, odt, pdf) for the same data.

### Number system cheat sheet

```text
Denary  Binary    Hex
0       0000      0
1       0001      1
2       0010      2
3       0011      3
4       0100      4
5       0101      5
6       0110      6
7       0111      7
8       1000      8
9       1001      9
10      1010      A
11      1011      B
12      1100      C
13      1101      D
14      1110      E
15      1111      F
```

### Two's complement (8-bit example)

To represent **−5** in 8 bits:

1. Write **+5** in binary: `0000 0101`
2. Invert every bit:        `1111 1010`
3. Add 1:                    `1111 1011`

### Character encodings

| Encoding | Size | Used for |
|----------|------|----------|
| ASCII | 7 bits (1 byte in storage) | Basic English |
| Big-5 | 2 bytes | Traditional Chinese |
| GB | 2–4 bytes | Simplified Chinese |
| Unicode (UTF-8) | 1–4 bytes | All scripts; global standard |

> The C&A Guide says you do **not** need to memorise specific codes — but you must understand why a larger character set needs more bits.

### File format comparison example

| File type | Common formats | Compression | When to use |
|-----------|----------------|-------------|-------------|
| Image | bmp, png, jpg | bmp = none, png = lossless, jpg = lossy | jpg for photos, png for icons/screenshots |
| Audio | wav, mp3 | wav = none, mp3 = lossy | mp3 for streaming/distribution |
| Video | avi, mpeg4 | avi varies, mpeg4 = lossy | mpeg4 for web |
| Document | txt, docx, odt, pdf | varies | pdf for archival, txt for plain text |

---

## d. Data Manipulation & Analysis (20h)

This is the biggest sub-topic and the most heavily examined. It splits into spreadsheet skills and database skills.

### Spreadsheet skills

- **Cell references** in formulas: relative (`A1`), absolute (`$A$1`), mixed (`$A1`, `A$1`)
- **Functions:** SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, COUNTIF, IF, IFS, VLOOKUP, HLOOKUP, INDEX, MATCH, ROUND, INT, MOD, ABS
- **Mathematical, logical and relational operators**
- Filtering, searching, sorting with **single or multiple criteria**
- **Multiple worksheets** — referencing dynamically across sheets
- **Pivot tables and pivot charts** for aggregation (sum, sub-total, average)
- **What-if scenarios** — Goal Seek, Scenario Manager, Data Tables

### Database skills with a DBMS

- Apply concepts of data organisation to create and maintain a **simple database**.
- Create and use a **form** for data entry.
- Practise data extraction and manipulation by **querying** a database and creating **reports**.
- Trace and interpret simple **SQL statements** (you don't need to write complex SQL yet — that comes in Paper 2A).

::: tip Stop installing MySQL just to read a SELECT
For Module A you only need to recognise what a `SELECT … FROM … WHERE` does. Spin up the **[SQL Books online editor](https://sqlbooks.codenav.dev)**, paste the example, click run — and you have your trace. No XAMPP, no version mismatches.
:::

### SQL commands provided in Paper 1 Section B

The HKEAA prints a reference sheet on the exam paper:

```
Constants: FALSE, TRUE
Operators: + − * / > < = >= <= <> AND OR NOT
Functions: AVG, COUNT, MAX, MIN, SUM, INT, ABS
Keywords:  ALTER, AS, BETWEEN, BY, CREATE, DELETE,
           DISTINCT, DROP, FROM, GROUP, HAVING, IN,
           INDEX, INSERT, INTO, IS, LIKE, NULL, ON,
           ORDER, SELECT, SET, TABLE, UNION, UPDATE,
           VALUES, WHERE
```

You should be comfortable reading any combination of the above.

### Worked example · Spreadsheet

> **Q:** A worksheet stores monthly sales for 12 months in `B2:B13`. Write a formula in `C2` that shows "Above" if the value in `B2` is greater than the yearly average, otherwise "Below".

```text
=IF(B2 > AVERAGE($B$2:$B$13), "Above", "Below")
```

Note the use of `$` to absolute-anchor the range when the formula is copied down.

### Worked example · SQL trace

```sql
SELECT name, score
FROM   students
WHERE  class = 'F4A'
ORDER  BY score DESC;
```

Expected behaviour: return every student in class F4A, showing only `name` and `score`, sorted highest score first.

---

## Common mistakes

- Confusing **validation** and **verification** (memorise the V hook above).
- Writing binary addition without checking for **overflow** when the answer goes beyond *n* bits.
- Forgetting that **Big-5** is for Traditional Chinese, **GB** for Simplified.
- Writing `=AVERAGE(B2:B13)` without absolute references when the formula must be copied.

## Past-paper hotspots

- Section A MC: number-base conversions, validation/verification, file format selection.
- Section B short: explain pivot tables vs simple sorting; trace a SQL query.
- Section B structured: design validation rules for a given scenario (membership form, etc.).

---

➡️ Next: [Module B · Computer System Fundamentals](./module-b-computer-system)
