---
title: The Rite Aid Bankruptcy
ticker: RAD
exchange: OTC
sector: Distressed — Retail Pharmacy
date: 2026-03-30
description: A case study on failed reorganization. Two Chapter 11 filings, 63 years of history, and what happens when scale, legal exposure, and strategic drift converge at once.
---

## Why study bankruptcy cases?

Studying companies that failed is one of the most efficient ways to understand what makes a business succeed. A profitable, well-run company often obscures the mechanics underneath — pricing power, capital allocation, and competitive moats appear obvious in hindsight. A company in distress tears everything apart: you learn which revenue streams were real, how much debt a business can actually carry, where management's blind spots were, and which costs were truly unavoidable.

The second reason is asset class focus. High-yield (HY) bonds — debt issued by below-investment-grade companies — require a fundamentally different analytical frame than equities:

- **Equities** bet on upside: the question is *how much* the company can grow
- **HY bonds** bet on the downside: the question is whether the company can *survive long enough to repay you*

Buying HY bonds is an act of calibrated risk-taking with explicit downside analysis. Understanding bankruptcy mechanics — the priority waterfall, DIP financing, the fulcrum security, creditor rights — is table stakes for anyone analyzing high-yield credit seriously. The cases where those mechanics actually played out are the best classroom available.

## Why did Rite Aid go bankrupt?

Three forces converged simultaneously. Any one alone was survivable. Together, they were not.

### 1. Market erosion

The U.S. retail pharmacy business was already structurally challenged before Rite Aid filed. Amazon's entry into pharmacy — culminating in the $753M PillPack acquisition in 2018 — accelerated a secular shift toward mail-order and digital. Prescription drug delivery eroded foot traffic, which had historically subsidized low pharmacy margins.

Pharmacy reimbursement rates — what pharmacy benefit managers (PBMs) pay per prescription — faced persistent compression industry-wide. For CVS and Walgreens, scale and purchasing power partially offset this. For Rite Aid, operating at sub-1% EBIT margins with $4B in debt, there was no buffer.

### 2. Strategic failures

In 2015, Walgreens announced plans to acquire all of Rite Aid for $9.4B. The FTC blocked the full merger — a combined entity would have controlled ~46% of U.S. pharmacy locations. What followed was the strategic mistake that made bankruptcy structurally inevitable.

In 2017, Rite Aid sold **1,932 of its best-performing stores** to Walgreens for **$4.375B in cash**. Walgreens cherry-picked the highest-volume locations in dense urban markets. Rite Aid retained ~2,600 stores disproportionately weighted toward underperformers — while still carrying the full corporate overhead.

While CVS acquired Aetna (2018, $70B) and Oak Street Health (2023, $10.6B), and Walgreens bought VillageMD, Rite Aid made no meaningful pivot into healthcare services. The company remained almost entirely dependent on a pharmacy business with deteriorating margins, declining foot traffic, and no adjacent revenue stream to absorb shocks.

### 3. Opioids and Medicare fraud

By the time Rite Aid filed in October 2023, it faced **1,600+ opioid-related lawsuits** — from states, municipalities, tribes, and hospitals — without having reached a pre-bankruptcy settlement the way CVS (~$5B) and Walgreens (~$5B) had.

The legal basis was the **"corresponding responsibility"** doctrine under the Controlled Substances Act: pharmacists are legally required to refuse prescriptions with obvious red flags (high-volume prescribers, dangerous drug combinations, patients traveling far out of area). Rite Aid pharmacists filled hundreds of thousands of unlawful opioid prescriptions between 2014 and 2019 — and critically, **deleted internal notes flagging suspicious prescribers** to protect those relationships. That suppression of evidence converted a negligence case into intentional misconduct.

The DOJ filed suit under the **False Claims Act** — which carries treble damages — because Rite Aid billed Medicare and Medicaid for those unlawfully dispensed prescriptions. Settlement: $7.5M cash + $401.8M allowed unsecured claim in the bankruptcy. CVS and Walgreens absorbed comparable opioid costs from a position of financial strength. Rite Aid, carrying $3.3B in long-term debt against ~$135M in cash, could not.

### The financial evidence

The margin divergence was visible long before the filing. Rite Aid never operated above 0.6% EBIT margin in any year shown — running at near-zero profitability with $4B in leverage. CVS maintained 4–5% margins across a $300B+ revenue base, giving it the capacity to absorb billions in legal costs and continue investing. Walgreens was also deteriorating sharply (and later filed its own Chapter 11 in 2024), but from a much larger and more diversified base.

<div style="margin: 2rem 0 2.5rem;">
  <p style="font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">EBIT Margin & Revenue Growth — FY2021 to FY2023</p>
  <iframe
    src="/charts/rite-aid-peer-comparison.html"
    style="width:100%;height:540px;border:1px solid var(--border);border-radius:10px;background:var(--bg-secondary);display:block;"
    title="Rite Aid vs. CVS vs. Walgreens Peer Comparison"
    loading="lazy"
    scrolling="no"
  ></iframe>
  <a href="/charts/rite-aid-peer-comparison.html" target="_blank" rel="noopener" style="display:block;text-align:right;font-size:0.8rem;color:var(--text-muted);margin-top:0.5rem;">Open full screen ↗</a>
</div>

| | Rite Aid | CVS Health | Walgreens |
|---|---|---|---|
| **FY2021 Revenue** | $24.0B | $290.9B | $132.5B |
| **FY2022 Revenue** | $24.6B | $321.6B | $132.7B |
| **FY2023 Revenue** | $24.1B | $356.6B | $139.1B |
| **FY2021 EBIT Margin** | 0.55% | 4.87% | 2.95% |
| **FY2022 EBIT Margin** | 0.44% | 4.89% | 2.31% |
| **FY2023 EBIT Margin** | 0.04% | 3.95% | 0.93% |
| **FY2023 Total Assets** | $7.5B | $249.7B | $96.6B |

*Source: S&P Capital IQ. Fiscal year-ends: Rite Aid (Feb/Mar), CVS (Dec), Walgreens (Aug).*

## The Chapter 11 waterfall: who got what?

Chapter 11 reorganization follows a strict priority rule — secured creditors are paid first, unsecured creditors next, equity last. In practice, the central question is: *where does the enterprise value of the reorganized company run out?* That break point determines the **fulcrum security** — the tranche that stops receiving cash and instead gets converted into equity of the new company.

In Rite Aid's case, the enterprise value at plan confirmation landed inside the **senior secured 2L notes** ($1.17B face value). Everything above them in the stack — the ABL revolver and FILO term loan ($2.62B, rolled into the DIP) — was fully covered and repaid in cash. Everything below — $1.3B+ in general unsecured claims — received a sliver of equity via a creditor trust with minimal practical recovery.

**Pre-petition → DIP → Exit:**
The ABL revolver ($2.22B) and FILO term loan ($400M) were outstanding before the filing. When Rite Aid filed in October 2023, Bank of America led a $3.45B DIP facility that "rolled up" these existing claims into super-priority DIP status, plus added $200M of new money. At emergence, the DIP was repaid through a $2.5B exit ABL facility — the same lender group, just restructured under a healthier balance sheet.

**The 2L noteholders (the fulcrum):**
Holders of the $320M (7.5% due 2025) and $850M (8.0% due 2026) senior secured notes were the fulcrum. They received **90% of the equity in New Rite Aid, LLC** plus take-back notes — becoming the new owners. Distressed investors who had purchased these notes at a discount (secondary market prices had fallen sharply ahead of the filing) stood to capture the upside of the reorganized equity. JPMorgan Chase and Sixth Street emerged as the largest shareholders post-confirmation, at ~18% and ~17% respectively.

**General unsecured creditors (GUCs):**
All unsecured claims — the $188M in unsecured notes, $401.8M DOJ/FCA settlement, McKesson's unsecured claim (~$725M balance sheet charge), and trade vendors — were pooled into a GUC class. They received **10% of NewCo equity** via a trust, shared pro-rata across the entire pool. With ~$1.3B+ in total GUC claims splitting 10% of a modestly valued reorganized equity, cash recovery was negligible. The reason senior noteholders gave them anything: buying the GUC vote was cheaper than litigating a contested cramdown.

<div style="margin: 2rem 0 2.5rem;">
  <p style="font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">Pre-Petition Capital Structure & Recovery by Class</p>
  <iframe
    src="/charts/rite-aid-waterfall.html"
    style="width:100%;height:580px;border:1px solid var(--border);border-radius:10px;background:var(--bg-secondary);display:block;"
    title="Rite Aid Chapter 11 Waterfall"
    loading="lazy"
    scrolling="no"
  ></iframe>
  <a href="/charts/rite-aid-waterfall.html" target="_blank" rel="noopener" style="display:block;text-align:right;font-size:0.8rem;color:var(--text-muted);margin-top:0.5rem;">Open full screen ↗</a>
</div>

| Creditor Class | Claim | Treatment | Recovery |
|---|---|---|---|
| ABL Revolver | $2,220M | Rolled into DIP → exit ABL | 100% cash |
| FILO Term Loan | $400M | Rolled into DIP → exit ABL | 100% cash |
| **Sr. 2L Notes ← Fulcrum** | **$1,170M** | **90% NewCo equity + take-back debt** | **~100% in equity** |
| Unsecured Notes | $188M | GUC Equity Trust (10% of NewCo) | ~2% est. |
| GUC (DOJ, McKesson, trade) | ~$1,300M est. | GUC Equity Trust (10% of NewCo) | ~2% est. |
| Pre-Petition Equity | — | Canceled at confirmation | 0% |

*GUC claims and equity trust recovery are estimates. Est. enterprise value at confirmation (~$3.2B) is approximate and not publicly disclosed. Source: court filings, Kroll Restructuring, S&P Capital IQ.*
