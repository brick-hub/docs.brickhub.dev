---
slug: /mason-get
description: Learn how to install your first brick.
sidebar_position: 3
---

# 🧱 Installing Bricks

Now that we have a `mason.yaml`, we can use the `get` command to install all bricks defined in the nearest parent `mason.yaml`.

```bash
mason get
```

Running `mason get` should result in output that looks like:

```bash
mason get
✓ Getting bricks (22ms)
```

:::info
Running `mason get` will generate a `mason-lock.json` which can be tracked in source control when working with versioned bricks (git/hosted).

```
├── .mason
├── mason-lock.json
└── mason.yaml
```

:::

:::info

Bricks are cached for offline use so running `mason get` again will resolve the cached bricks:

```bash
mason get
✓ Getting bricks (10ms)
```

:::

:::tip
Use `mason upgrade` to ignore the lockfile and upgrade to the latest support versions of bricks.
:::
