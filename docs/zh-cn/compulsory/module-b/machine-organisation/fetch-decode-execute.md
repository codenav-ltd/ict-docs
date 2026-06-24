# 1.2 · The Fetch–Decode–Execute Cycle

> **Goal:** describe every step of the machine cycle and the role of each register and bus.

## The cycle in three sentences

1. **Fetch** the next instruction from memory.
2. **Decode** what it means.
3. **Execute** it.

…and repeat, billions of times per second, until you turn off the computer.

## The detailed dance

Below is the canonical step-by-step. Memorise the **order**, the **register involved**, and the **bus used**.

| # | Step | Register / unit involved | Bus |
|---|------|--------------------------|-----|
| 1 | PC's value is copied to MAR. | PC → MAR | — |
| 2 | The address in MAR is sent to memory. | MAR | Address bus |
| 3 | Memory replies with the instruction at that address; it lands in MDR. | Memory → MDR | Data bus |
| 4 | MDR's content is copied into IR. | MDR → IR | — |
| 5 | PC is incremented to point to the next instruction. | PC = PC + 1 | — |
| 6 | Control Unit decodes the instruction in IR. | CU | — |
| 7 | If operands need fetching, repeat steps 1–4 for each. | — | Address / Data |
| 8 | ALU executes the operation; result placed in ACC or another register. | ALU → ACC | — |
| 9 | Status registers (zero, carry, overflow) are updated. | Status reg | — |
| 10 | If the instruction writes to memory, MAR & MDR are loaded and a write signal goes out. | MAR/MDR | Address / Data / Control |
| 11 | Cycle repeats from step 1. | — | — |

## The three buses

| Bus | Carries | Direction |
|-----|---------|-----------|
| **Address bus** | The address being accessed | CPU → memory (one way) |
| **Data bus** | The actual data | Two-way |
| **Control bus** | Signals like read, write, interrupt | Two-way |

## Worked example · Adding two numbers

Suppose memory contains:

```
Address  Contents
0        LOAD  5      ; load value from address 5 into ACC
1        ADD   6      ; add value from address 6 to ACC
2        STORE 7      ; store ACC into address 7
5        10
6        20
7        ?
```

Cycle by cycle (compressed):

| Cycle | Action |
|-------|--------|
| 1 | Fetch `LOAD 5`. Read 10 from address 5 into ACC. ACC = 10 |
| 2 | Fetch `ADD 6`. Read 20 from address 6, add to ACC. ACC = 30 |
| 3 | Fetch `STORE 7`. Write ACC (30) to address 7. Address 7 now holds 30 |

After three cycles, address 7 holds the sum.

## Why the cycle matters in real life

- Faster clocks → more cycles per second → more work done.
- Wider buses → more data per transfer → fewer cycles needed for large data.
- More registers → fewer memory reads → less time wasted on slow RAM.

## Common misconceptions

- "Each instruction takes one cycle." Modern CPUs pipeline and execute several instructions per cycle, but the conceptual cycle is still the model the HKEAA uses.
- "The data bus only moves one byte." Bus width varies: 8, 16, 32, 64 bits.
- "Memory and CPU are the same chip." On modern chips the L1/L2 cache is on the CPU die, but main RAM is separate.

## Exam-style question

> **Q (5 marks):** Outline the steps of the fetch–decode–execute cycle, identifying the role of the PC, IR, MAR, MDR and the system buses.

**Sample answer:**

1. The **Program Counter (PC)** holds the address of the next instruction.
2. PC's value is copied into the **MAR**, which is placed on the **address bus** to identify the memory location to read.
3. Memory returns the instruction over the **data bus** into the **MDR**.
4. The contents of MDR are copied into the **IR** for decoding.
5. PC is **incremented** to point to the next instruction.
6. The Control Unit **decodes** the instruction in IR.
7. The ALU **executes** the operation; results may go into the ACC or back to memory via MAR / MDR.

The **control bus** carries read/write signals that coordinate every step.

## Key takeaways

- Fetch → Decode → Execute, on repeat.
- Five registers: PC, IR, MAR, MDR, ACC.
- Three buses: address, data, control.
- Speed = clock × instructions-per-cycle, modulated by bus width and memory latency.

➡️ Next: [1.3 Memory Types](./memory-types)
