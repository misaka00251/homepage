---
id: freezeperiodpolicy
title: Freeze Period Policy
description: This document outlines openRuyi's monthly release cycle, defining the rules and acceptable changes during the transition and freeze phases.
slug: /policy/release-policies/freeze-period-policy
---

# openRuyi Freeze Period Policy

As a rolling-release distribution, openRuyi publishes a new image at the end of each month. This monthly release cycle allows new users to experience the latest changes simply by downloading the newest image, avoiding the inconvenience of starting from a single outdated image and then performing a large-scale system upgrade.

Each month, we divide the openRuyi freeze process into two phases. We describe these two phases in more detail below:

|                                 | Transition                | Freeze                   |
| ------------------------------- | ----------------------------- | ---------------------------- |
| Time                            | First two weeks of each month | Last two weeks of each month |
| Acceptable changes              | Broadly accepted<br />        | Small, targeted fixes        |
| Changes affecting the toolchain | ✅                             | ❌                            |
| Adding/Removing packages        | ✅                             | ❌                            |

## Transition Period

The transition period generally covers the first two weeks of each month. During this phase, we accept changes as usual, including toolchain updates, bug fixes, and additions, removals, or updates for packages.

If you are planning a large-scale or disruptive change, please assess its feasibility as early as possible to determine whether you can realistically complete the work before the freeze period begins. For example, your change may require collaboration with others, but they may not necessarily have the time or capacity to participate in the work.

## Freeze Period

The freeze period generally covers the last two weeks of each month. During this phase, we focus on polishing the month-end image. As a result, we usually do not accept new changes, especially in the following areas:

* **Toolchain packages:** Issues in these packages usually take a significant amount of time to resolve. In addition to fixing the bug itself, developers must also identify the affected packages and rebuild them.

* **Large-scale or disruptive changes:** During this phase, we avoid any large, disruptive, or high-regression-risk changes. For example, upgrading a library may introduce ABI changes and expose bugs, which could block unrelated fixes from proceeding.

That said, we allow targeted fixes for critical bugs. In this context, a “targeted fix” refers to the minimal change necessary to address a specific bug. We do not recommend the following practices when making targeted fixes:

* Upgrading to a new upstream release

* Moving files between different packages

* Changing dependency relationships between packages

* Making changes that may affect other packages

* Refactoring or cleaning up code while fixing the bug

* Adding, removing, or renaming packages
