# 📊 Visual Data Guide

**Master DAX, Excel, and SQL through interactive, step-by-step visual stories.**

### [🔴 Live Demo](https://creator-12-academy.github.io/visual-data-guide/)

## ⚠️ Important Note
**Turn on your sound!** 🔊  
This project uses browser-native **Text-to-Speech** to narrate the logic as it happens. For the best experience, please enable audio permissions in your browser settings.

---

## 🚀 About The Project

[cite_start]**Visual Data Guide** (by [Creator 12 Academy](https://www.linkedin.com/company/109928041) - [Kannan N](https://www.linkedin.com/in/iamnkannan/)) transforms abstract data formulas into interactive animations[cite: 5]. Instead of just reading documentation, you can **watch** how the engine calculates results row-by-row.

**Current Modules:**
* ✅ **DAX Masterclass:** Complete 8-pillar roadmap covering Context Transition, Iterators, and Time Intelligence.
* ✅ **Excel Formulas:** Extensive library of 100+ formulas, from VLOOKUP to Dynamic Arrays.
* 🚧 **SQL:** (Coming Soon) Joins, Window Functions, and Query Logic.
* 🚧 **M Language:** (Coming Soon) Power Query transformations and Data Mashup.

## ✨ Features

* [cite_start]**Visual Execution:** See variables update, rows highlight, and filters apply in real-time[cite: 5].
* [cite_start]**Smart Narration:** Browser-native Text-to-Speech explains *what* is happening[cite: 5].
* [cite_start]**Control the Pace:** Toggle between Slow, Medium, and Fast speeds[cite: 5].
* [cite_start]**Mobile Friendly:** Learn on your phone, tablet, or desktop[cite: 5].
* [cite_start]**Zero-Dependency:** Built with pure HTML, CSS, and Vanilla JavaScript[cite: 5].

---

## 📂 Project Structure

The platform is organized into modular sections. Below is the full file map for the active modules.

### 📊 1. DAX Masterclass (`/DAX`)

This module covers the essential building blocks of Data Analysis Expressions.

```text
DAX ROADMAP
│
├── 01. Aggregation (∑)
│   ├── 01_sum_vs_sumx.html      # SUM vs SUMX (Iterators)
│   ├── 02_average.html          # AVERAGE / AVERAGEA
│   ├── 03_min_max.html          # MIN / MAX
│   ├── 04_count_rows.html       # COUNT / COUNTROWS
│   └── 05_distinctcount.html    # DISTINCTCOUNT
│
├── 02. Filter Context (🔍)
│   ├── 01_calculate.html        # CALCULATE (The King)
│   ├── 02_filter.html           # FILTER
│   ├── 03_all_allexcept.html    # ALL / ALLEXCEPT
│   ├── 04_values_distinct.html  # VALUES vs DISTINCT
│   └── 05_related.html          # RELATED
│
├── 03. Time Intelligence (📅)
│   ├── 01_totalytd.html         # TOTALYTD
│   ├── 02_sameperiodlastyear.html
│   ├── 03_dateadd.html          # DATEADD
│   ├── 04_datesinperiod.html    # DATESINPERIOD
│   ├── 05_parallelperiod.html   # PARALLELPERIOD
│   └── 06_calendar.html         # CALENDAR / AUTO
│
├── 04. Logical (⚖️)
│   ├── 01_if.html               # IF / Nested IF
│   ├── 02_switch.html           # SWITCH
│   ├── 03_logic_gates.html      # AND / OR / NOT
│   └── 04_iferror.html          # IFERROR
│
├── 05. Information (ℹ️)
│   ├── 01_isblank.html          # ISBLANK
│   ├── 02_hasonevalue.html      # HASONEVALUE
│   ├── 03_isfiltered.html       # ISFILTERED
│   ├── 04_iscrossfiltered.html  # ISCROSSFILTERED
│   └── 05_userelationship.html  # USERELATIONSHIP
│
├── 06. Text Functions (Aa)
│   ├── 01_concatenate.html      # CONCATENATE & X
│   ├── 02_substrings.html       # LEFT / RIGHT / MID
│   ├── 03_len.html              # LEN
│   ├── 04_casing.html           # UPPER / LOWER
│   └── 05_search.html           # SEARCH
│
├── 07. Math & Stats (➗)
│   ├── 01_divide.html           # DIVIDE (Safe Division)
│   ├── 02_abs.html              # ABS
│   ├── 03_round.html            # ROUND
│   └── 04_rankx.html            # RANKX
│
└── 08. Table Manipulation (🏗️)
    ├── 01_summarize.html        # SUMMARIZE
    ├── 02_addcolumns.html       # ADDCOLUMNS
    ├── 03_crossjoin.html        # CROSSJOIN
    └── 04_union.html            # UNION



### 📊 2. Excel Masterclass (`/Excel`)

```text
EXCEL FORMULAS ROADMAP
│
├── PART 1: THE FORMULA LIBRARY
│   ├── 01. Lookup & Reference (🔎)
│   │   ├── 01_vlookup.html      # VLOOKUP / HLOOKUP
│   │   ├── 02_xlookup.html      # XLOOKUP
│   │   ├── 03_index_match.html  # INDEX / MATCH
│   │   ├── 04_filter.html       # FILTER
│   │   ├── 05_unique.html       # UNIQUE
│   │   ├── 06_sort.html         # SORT / SORTBY
│   │   ├── 07_offset.html       # OFFSET
│   │   ├── 08_indirect.html     # INDIRECT
│   │   ├── 09_choose.html       # CHOOSE
│   │   └── 10_lookup.html       # LOOKUP (Legacy)
│   │
│   ├── 02. Logical (⚖️)
│   │   ├── 01_if.html           # IF
│   │   ├── 02_ifs.html          # IFS
│   │   ├── 03_and_or.html       # AND / OR / NOT
│   │   ├── 04_xor.html          # XOR
│   │   ├── 05_switch.html       # SWITCH
│   │   ├── 06_iferror.html      # IFERROR
│   │   ├── 07_ifna.html         # IFNA
│   │   └── 08_true.html         # TRUE / FALSE
│   │
│   ├── 03. Math & Trig (∑)
│   │   ├── 01_sum.html          # SUM
│   │   ├── 02_sumif.html        # SUMIF / SUMIFS
│   │   ├── 03_product.html      # PRODUCT
│   │   ├── 04_quotient.html     # QUOTIENT / MOD
│   │   ├── 05_power.html        # POWER / SQRT
│   │   ├── 06_round.html        # ROUND / UP / DOWN
│   │   ├── 07_ceiling.html      # CEILING / FLOOR
│   │   ├── 08_int.html          # INT
│   │   ├── 09_abs.html          # ABS
│   │   └── 10_rand.html         # RAND / BETWEEN
│   │
│   ├── 04. Statistical (📊)
│   │   ├── 01_average.html      # AVERAGE / AVERAGEA
│   │   ├── 02_averageif.html    # AVERAGEIF / S
│   │   ├── 03_count.html        # COUNT / COUNTA
│   │   ├── 04_countblank.html   # COUNTBLANK
│   │   ├── 05_countif.html      # COUNTIF / S
│   │   ├── 06_min_max.html      # MIN / MAX
│   │   ├── 07_large.html        # LARGE / SMALL
│   │   ├── 08_median.html       # MEDIAN / MODE
│   │   ├── 09_stdev.html        # STDEV.P / .S
│   │   └── 10_rank.html         # RANK.EQ / .AVG
│   │
│   ├── 05. Text Functions (Aa)
│   │   ├── 01_trim.html         # TRIM / CLEAN
│   │   ├── 02_left.html         # LEFT / RIGHT
│   │   ├── 03_mid.html          # MID
│   │   ├── 04_len.html          # LEN
│   │   ├── 05_find.html         # FIND / SEARCH
│   │   ├── 06_concat.html       # CONCAT / TEXTJOIN
│   │   ├── 07_substitute.html   # SUBSTITUTE
│   │   ├── 08_replace.html      # REPLACE
│   │   ├── 09_text.html         # TEXT / VALUE
│   │   └── 10_upper.html        # UPPER / LOWER
│   │
│   ├── 06. Date & Time (📅)
│   │   ├── 01_today.html        # TODAY / NOW
│   │   ├── 02_date.html         # DATE / TIME
│   │   ├── 03_parts.html        # YEAR / MONTH
│   │   ├── 04_timeparts.html    # HOUR / MIN / SEC
│   │   ├── 05_datedif.html      # DATEDIF
│   │   ├── 06_eomonth.html      # EOMONTH / EDATE
│   │   ├── 07_workday.html      # WORKDAY / INTL
│   │   ├── 08_network.html      # NETWORKDAYS
│   │   ├── 09_week.html         # WEEKNUM / DAY
│   │   └── 10_text.html         # TEXT (Date Formats)
│   │
│   ├── 07. Financial (💰)
│   │   ├── 01_pmt.html          # PMT (Payments)
│   │   ├── 02_rate.html         # RATE
│   │   ├── 03_npv.html          # NPV (Net Present Value)
│   │   ├── 04_irr.html          # IRR
│   │   ├── 05_fv.html           # FV (Future Value)
│   │   ├── 06_pv.html           # PV (Present Value)
│   │   └── 07_nper.html         # NPER
│   │
│   ├── 08. Information (ℹ️)
│   │   ├── 01_ischecks.html     # ISNUMBER / ISTEXT
│   │   ├── 02_isblank.html      # ISBLANK
│   │   ├── 03_iserror.html      # ISERROR / ISNA
│   │   ├── 04_type.html         # TYPE / CELL
│   │   └── 05_errortype.html    # ERROR.TYPE
│   │
│   ├── 09. Dynamic Arrays (🌊)
│   │   ├── 01_sequence.html     # SEQUENCE
│   │   ├── 02_randarray.html    # RANDARRAY
│   │   ├── 03_transpose.html    # TRANSPOSE
│   │   ├── 04_vstack.html       # VSTACK / HSTACK
│   │   ├── 05_tocol.html        # TOCOL / TOROW
│   │   ├── 06_take.html         # TAKE / DROP
│   │   └── 07_choosecols.html   # CHOOSECOLS
│   │
│   └── 10. Engineering (⚙️)
│       ├── 01_conversions.html  # BIN2DEC / DEC2BIN
│       ├── 02_hex.html          # HEX2DEC
│       └── 03_fact.html         # FACT (Factorial)
│
├── PART 2: SYNTAX & ESSENTIALS (🛠️)
│   ├── 01_ops_math.html         # Math (+ - * / ^)
│   ├── 02_ops_logic.html        # Logical (= > < >=)
│   ├── 03_refs.html             # References ($A$1 vs A1)
│   ├── 04_ops_text.html         # Text Join (&)
│   ├── 05_wildcards.html        # Wildcards (* ?)
│   ├── 06_errors.html           # Errors (#N/A #REF!)
│   ├── 07_ranges.html           # Ranges (: ,)
│   └── 08_tables.html           # Structured Refs ([@Col])
│
└── PART 3: COMBINED FORMULAS (✨)
    ├── Advanced Lookups (🔎)
    │   ├── 01_index_match.html      # INDEX + MATCH
    │   ├── 02_index_match_match.html# INDEX + MATCH + MATCH
    │   ├── 03_vlookup_choose.html   # VLOOKUP + CHOOSE
    │   ├── 04_xlookup_nested.html   # XLOOKUP + XLOOKUP
    │   ├── 05_vlookup_match.html    # VLOOKUP + MATCH
    │   ├── 06_multi_criteria.html   # Multiple Criteria (Array)
    │   ├── 07_lookup_max.html       # Lookup MAX Value
    │   ├── 08_lookup_last.html      # Lookup Last Value
    │   ├── 09_hyperlink.html        # Hyperlink Lookup
    │   ├── 10_image.html            # Image Lookup
    │   ├── 11_case_sensitive.html   # Case Sensitive Lookup
    │   ├── 12_fuzzy.html            # Closest Match (Fuzzy)
    │   ├── 13_wildcard.html         # Wildcard Search (*)
    │   ├── 14_offset_match.html     # OFFSET + MATCH
    │   └── 15_indirect.html         # INDIRECT + VLOOKUP
    │
    ├── Data Cleaning (🧹)
    │   ├── 01_clean.html            # TRIM + CLEAN + PROPER
    │   ├── 02_first_name.html       # Extract First Name
    │   ├── 03_last_name.html        # Extract Last Name
    │   ├── 04_middle.html           # Extract Middle Text
    │   ├── 05_count_words.html      # Count Words
    │   ├── 06_breaks.html           # Remove Line Breaks
    │   ├── 07_numbers.html          # Extract Numbers Only
    │   ├── 08_split_rows.html       # Split Cell to Rows
    │   ├── 09_kpi.html              # Dynamic KPI Sentence
    │   ├── 10_email.html            # Get Username from Email
    │   ├── 11_mask.html             # Mask Data (****)
    │   ├── 12_initials.html         # Generate Initials
    │   ├── 13_reverse.html          # Reverse Text
    │   ├── 14_spaces.html           # Remove Double Spaces
    │   └── 15_url.html              # Parse URL Domain
    │
    ├── Complex Logic (🧠)
    │   ├── 01_sumproduct.html       # SUMPRODUCT Logic
    │   ├── 02_nested_alt.html       # Nested IF Alternatives
    │   ├── 03_weighted.html         # Weighted Averages
    │   ├── 04_offset.html           # Dynamic Sum (OFFSET)
    │   ├── 05_commission.html       # Tiered Commission
    │   ├── 06_ifs.html              # IFS vs Nested IF
    │   ├── 07_switch_true.html      # SWITCH(TRUE)
    │   ├── 08_between.html          # Count Between Dates
    │   ├── 09_highlight.html        # Highlight Odd Rows
    │   ├── 10_3d_sum.html           # 3D Sum (Multi-Sheet)
    │   ├── 11_min_nz.html           # Min Non-Zero
    │   ├── 12_visible.html          # Sum Visible Rows
    │   ├── 13_rank_group.html       # Rank within Group
    │   ├── 14_unique_cond.html      # Count Unique (Cond)
    │   └── 15_top_avg.html          # Average Top 5
    │
    ├── Date & Projects (⏳)
    │   ├── 01_project.html          # Project Due Date
    │   ├── 02_age.html              # Age Calculation
    │   ├── 03_remaining.html        # Days Remaining
    │   ├── 04_fiscal_year.html      # Fiscal Year
    │   ├── 05_fiscal_q.html         # Fiscal Quarter
    │   ├── 06_first_day.html        # First Day Next Month
    │   ├── 07_last_day.html         # Last Day Month
    │   ├── 08_day_name.html         # Get Day Name
    │   ├── 09_week_start.html       # Week Start Date
    │   ├── 10_overlap.html          # Overlapping Dates
    │   ├── 11_time_diff.html        # Time Difference
    │   ├── 12_convert.html          # Convert Text Date
    │   ├── 13_anniversary.html      # Next Anniversary
    │   ├── 14_nearest.html          # Nearest Workday
    │   └── 15_gantt.html            # Gantt Chart Data
    │
    └── Dashboards (✨)
        ├── 01_search.html           # Search Bar
        ├── 02_top10.html            # Top 10 Dynamic
        ├── 03_dropdown.html         # Dependent Dropdown
        ├── 04_duplicates.html       # Extract Duplicates
        ├── 05_compare.html          # Compare Lists
        ├── 06_transpose.html        # Transpose Stack
        ├── 07_calendar.html         # Calendar Gen
        ├── 08_top_bottom.html       # Top N Bottom N
        ├── 09_random.html           # Random Sample
        ├── 10_running.html          # Running Total Array
        ├── 11_split.html            # Split Cols
        ├── 12_unpivot.html          # Unpivot Data
        ├── 13_sheet.html            # Sheet Index
        ├── 14_image.html            # Dynamic Image
        └── 15_lambda.html           # Custom LAMBDA