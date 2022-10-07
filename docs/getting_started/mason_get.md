---
slug: /mason-get
sidebar_position: 3
---

# Installing Bricks 🧱

Now that we have a `mason.yaml`, we can use the `mason get` command to install all bricks defined in the nearest parent `mason.yaml`.

```bash
mason get
```

:::note
`mason get` will generate a `mason-lock.json` which can be tracked in source control when working with versioned bricks (git/hosted).
:::
