---
slug: /mason-new
description: Learn how to create your own custom bricks.
sidebar_position: 1
---

# Creating Bricks ✨

In this section, we'll take a look at how to use the `mason new` command to create your own bricks.

## Overview 🚀

The `mason new` command allows us to create a new, custom brick template in the current working directory:

```bash
mason new example
✓ Created new brick: example (74ms)
✓ Generated 5 file(s):
  /me/mason_playground/example/brick.yaml (new)
  /me/mason_playground/example/README.md (new)
  /me/mason_playground/example/CHANGELOG.md (new)
  /me/mason_playground/example/LICENSE (new)
  /me/mason_playground/example/__brick__/HELLO.md (new)
```

## Custom Description ✍️

We can use the `--desc` option to specify a custom brick description when creating a new brick via `mason new`:

```bash
mason new example --desc "My awesome brick"
```

## Custom Output Directory 🗂

Similarly to `mason make`, we can specify a custom output directory when creating a new brick via the `-o` option:

```bash
mason new example -o ./path/to/brick
```
