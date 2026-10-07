---
title: Spectra
summary: Test-time prior adaptation for diffusion-based simulation-based inference, without additional simulation or training.
question: Amortized simulation-based inference models are trained under one prior, but scientific analyses often need revised priors as knowledge accumulates or alternative assumptions are tested. Can a pretrained model be reused under a new prior without retraining?
built: A test-time adaptation method that uses an exact score-transport identity to obtain the adapted score from a frozen diffusion model in closed form for structured prior changes, together with a way to combine posterior components for mixture priors.
result: Across six SBI benchmarks, accurate adaptation under strong prior shifts at low online sampling cost.
kind: [paper, code]
links:
  - label: Paper
    url: https://arxiv.org/abs/2610.08021
  - label: Code
    url: https://github.com/TtoastXin/Spectra
date: 2026-10-06
featured: true
draft: false
---
