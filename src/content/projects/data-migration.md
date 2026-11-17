---
title: Splitting a live service in two
summary: A legacy service had grown into two jobs. I separated it into two domains and moved production data across without losing a row.
year: 2025
stack: [Oracle, PL/SQL, SQL]
status: case study
order: 1
stat: 0 rows lost
draft: true
---

<!--
This is the most impressive thing you have, so it gets a full write-up.
Keep client details generic: no internal names, data, or screenshots of real records.
Fill in each section, then set `draft: false` above to publish it.
-->

## The problem

What was the service doing, and why did it need to become two? Who was affected if it went wrong?

## Constraints

Live data, no downtime window, solo developer, budget. List what made this hard.

## The plan

How you mapped old tables to new ones, how you tested the transform before running it for real, and how you could roll back.

## What happened

How the cutover went. How you verified nothing was lost (row counts, spot checks, reconciliation queries).

## What I'd do differently

One or two honest notes. This section is what makes it read like a senior wrote it.
