---
slug: /mason-remove
description: Learn how to uninstall bricks from various sources.
sidebar_position: 4
---

# 🗑 Removing Bricks

## 🚀 Overview

Installed bricks can be uninstalled via the `remove` command.

## 🗂 Local

We can uninstall a brick in a local workspace by running `mason remove` followed by the brick name:

```bash
mason remove example
✓ Removed example (22ms)
```

The above command will uninstall the `example` brick in the current workspace.

## 🌎 Global

We can uninstall a global brick by adding the `--global` (`-g` for short) flag:

```bash
mason remove -g widget
✓ Removed widget (21ms)
```
