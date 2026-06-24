# 2.3 · Modes of Operation

> **Goal:** distinguish batch, real-time, parallel, distributed and virtualisation modes — with real-life examples.

## The five modes on the syllabus

| Mode | Definition | Example |
|------|-----------|---------|
| **Batch processing** | Jobs accumulated, then run together without user interaction | Monthly payroll, nightly bank settlement |
| **Real-time processing** | Immediate response required | Flight control, online banking, ATM, online stock trading |
| **Parallel processing** | Multiple processors work on parts of one task simultaneously | Scientific simulation, weather modelling, AI training |
| **Distributed processing** | Work spread across networked computers | Cloud services, BitTorrent, Bitcoin mining |
| **Virtualisation** | One physical machine hosts multiple virtual machines (VMs) | Cloud server farms, dev/test sandboxes, VirtualBox |

## When to use each

### Batch processing

- Jobs that **don't need immediate feedback**.
- Can run in off-peak hours.
- Maximises hardware utilisation overnight.

> **Examples:** monthly utility billing, end-of-day bank reconciliation, generating weekly sales reports.

### Real-time processing

- **Strict deadlines** — late = wrong.
- Hard real-time (life-critical) vs Soft real-time (annoyance if late).
- Specialised OS (FreeRTOS, VxWorks) for hard cases.

> **Examples:** anti-lock brakes in a car, air-traffic control, MTR signalling, ATM withdrawal.

### Parallel processing

- One large task split among **many CPUs/cores** of the **same machine**.
- Needs algorithms that can be parallelised.

> **Examples:** rendering a movie frame, training a neural network, simulating climate.

### Distributed processing

- Work spread across **many networked machines**.
- Resilient to single machine failure.

> **Examples:** Google Search (thousands of servers), Folding@Home, blockchain.

### Virtualisation

- One physical server runs **multiple OS instances** simultaneously, each in its own VM.
- Used heavily in **cloud computing** for efficient resource use.

> **Examples:** AWS EC2 instances, Docker containers, classroom VirtualBox.

## Comparison table

| Mode | Latency | Throughput | Resource usage |
|------|---------|-----------|-----------------|
| Batch | High (hours) | High | Off-peak optimisation |
| Real-time | Very low (ms) | Lower | Reserved resources |
| Parallel | Lower than sequential | Very high | All cores busy |
| Distributed | Variable | Very high | Many machines |
| Virtualisation | Slight overhead | High | One machine, many tenants |

## Common student mistakes

- Saying **parallel** and **distributed** are the same — both involve "many", but parallel = same machine, distributed = many machines.
- Treating real-time as "fast" — it really means **deadline-bound**.
- Calling **virtualisation** a kind of cloud computing — virtualisation is the **technology**; cloud is the **business model** that uses it.

## Exam-style question

> **Q (5 marks):** Compare batch processing and real-time processing in terms of how jobs are submitted, response time, and one example of a Hong Kong system that uses each.

**Sample answer:**

- **Job submission**: in batch processing, jobs are queued and submitted together without user interaction (e.g. uploaded overnight); in real-time, each job is submitted individually and triggered by a user action or event.
- **Response time**: batch jobs may take hours and produce results when finished; real-time jobs must respond within strict deadlines (milliseconds to seconds).
- **HK examples**:
  - **Batch**: Inland Revenue Department's annual tax-return assessment, processed in nightly batches.
  - **Real-time**: HSBC Personal Internet Banking — every transfer must complete within seconds of the user's click.

## Key takeaways

- 5 modes: **batch, real-time, parallel, distributed, virtualisation**.
- Pick by **response time, scale, and machine count**.

## Module B wrap-up

You now have a solid working knowledge of how a computer is built and managed. Self-test:

- Could you label a CPU diagram with PC, IR, MAR, MDR, ALU, CU?
- Could you compute a sound file's size given sample rate, bit depth and channels?
- Could you recommend the right operating mode for "school payroll" vs "ATM"?

➡️ Next module: [Module C · Internet & its Applications](../../module-c/)
