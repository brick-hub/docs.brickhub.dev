---
slug: /mason-new
description: Learn how to create your own custom bricks.
sidebar_position: 1
---

# ✨ Creating Bricks

In this section, we'll take a look at how to use the `mason new` command to create your own bricks.

## 🚀 Overview

The `mason new` command allows us to create a new, custom brick template in the current working directory:

```bash
mason new example
✓ Generated 5 file(s). (34ms)
  created example/brick.yaml
  created example/README.md
  created example/CHANGELOG.md
  created example/LICENSE
  created example/__brick__/HELLO.md
```

## ✍️ Custom Description

We can use the `--desc` option to specify a custom brick description when creating a new brick via `mason new`:

```bash
mason new example --desc "My awesome brick"
```

## 🗂 Custom Output Directory

Similarly to `mason make`, we can specify a custom output directory when creating a new brick via the `-o` option:

```bash
mason new example -o ./path/to/brick
```
