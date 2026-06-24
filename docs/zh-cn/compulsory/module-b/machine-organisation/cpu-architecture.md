# 1.1 · CPU Architecture

> **Goal:** name the major parts of a CPU, explain what each does, and reason about CPU performance.

## What the CPU does

The **Central Processing Unit (CPU)** is the brain of the computer. Its single job is to **execute instructions** — billions of them per second.

## Major parts

```
            ┌──────────────── CPU ──────────────────┐
            │                                       │
 ┌────┐     │   ┌─────────────┐   ┌──────────┐     │
 │ ⏤ │ ──▶ │   │ Control Unit │ ─▶│ Registers│     │
 └────┘     │   └─────┬────────┘   └────▲─────┘     │
            │         │                 │           │
            │   ┌─────▼────────┐  ┌─────┴──────┐    │
            │   │     ALU      │  │ Cache (L1) │    │
            │   └──────────────┘  └────────────┘    │
            └───────────▲──────────────────▲────────┘
                        │  System buses    │
                        ▼                  ▼
                  ┌──────────┐      ┌──────────┐
                  │  RAM     │      │ I/O dev  │
                  └──────────┘      └──────────┘
```

| Part | Role |
|------|------|
| **Control Unit (CU)** | Fetches and decodes instructions; sends control signals to other parts |
| **Arithmetic Logic Unit (ALU)** | Performs arithmetic (+ − × ÷) and logic (AND OR NOT, comparisons) |
| **Registers** | Tiny, ultra-fast storage **inside** the CPU for the current instruction and its operands |
| **Cache** | Small, fast memory close to the CPU for recently-used data |
| **Buses** | Wires that carry data, addresses and control signals between parts |

## Key registers you should recognise

| Register | Stands for | Holds |
|----------|------------|-------|
| **PC** | Program Counter | Address of the next instruction |
| **IR** | Instruction Register | The instruction currently being decoded |
| **MAR** | Memory Address Register | Address that the CPU is about to read/write |
| **MDR** | Memory Data Register | Data being transferred to/from memory |
| **ACC** | Accumulator | Working value during arithmetic |

::: tip In the exam
You may be given a labelled CPU diagram and asked which register stores what. Memorise PC, IR, MAR, MDR, ACC at minimum.
:::

## How CPU speed is measured

- **Clock frequency** in **GHz** (10⁹ cycles per second). 3 GHz = 3 billion ticks per second.
- One clock cycle ≈ **0.33 ns** at 3 GHz.
- Modern CPUs do multiple operations per cycle (pipelining, superscalar).

Time units to know:

| Unit | Time |
|------|------|
| 1 ms (millisecond) | 10⁻³ s |
| 1 μs (microsecond) | 10⁻⁶ s |
| 1 ns (nanosecond) | 10⁻⁹ s |
| 1 ps (picosecond) | 10⁻¹² s |

## CPU vs GPU

The C&A Guide names **two kinds of processing unit** explicitly:

| Unit | Strength | Used for |
|------|----------|----------|
| **CPU** | Fast at sequential, complex logic | OS, browsers, anything general purpose |
| **GPU** | Fast at parallel simple maths | Graphics rendering, AI training, scientific compute |

A modern laptop has both: the CPU runs your OS while the GPU draws the screen.

## What affects performance

- **Clock speed** — more ticks per second.
- **Number of cores** — multiple CPUs on one chip can do parallel work.
- **Cache size** — more on-chip cache reduces slow RAM access.
- **Word length** — wider buses (32-bit, 64-bit) move more data per cycle.
- **Pipelining / branch prediction** — advanced tricks not in syllabus.

## Exam-style question

> **Q (4 marks):** Describe the function of the Control Unit, ALU, registers, and explain how cache memory improves CPU performance.

**Sample answer:**

- **Control Unit (CU):** decodes instructions and sends control signals to direct other components; coordinates the fetch–decode–execute cycle.
- **ALU:** carries out arithmetic and logical operations on data supplied by the registers.
- **Registers:** very small, very fast storage inside the CPU used to hold the instruction being decoded, the operands, and intermediate results.
- **Cache:** sits between CPU and main memory; stores recently used data and instructions so the CPU can fetch them in nanoseconds instead of waiting for slower RAM. This reduces average memory access time and increases overall throughput.

## Key takeaways

- CPU = CU + ALU + Registers (+ cache on modern chips).
- Common registers: PC, IR, MAR, MDR, ACC.
- Performance grows with clock speed, cores, cache, word length.
- CPU is general purpose; GPU specialises in parallel maths.

➡️ Next: [1.2 Fetch–Decode–Execute](./fetch-decode-execute)
