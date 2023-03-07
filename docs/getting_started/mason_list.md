---
slug: /mason-list
description: Learn how to list the bricks you have installed.
sidebar_position: 4
---

# 📝 Listing all Installed Bricks

## 🚀 Overview

We can list all installed bricks using the `list` (`ls` for short) command.

## 🗂 Local Bricks

```bash
mason list
/me/mason_playground
└── hello 0.1.0+1 -> registry.brickhub.dev
```

:::info
By default the `list` command lists locally installed bricks.
:::

If we change to a directory outside of the current workspace and list installed bricks we will no longer see the previous bricks because they are scoped to that workspace.

```bash
# Change to a directory outside the workspace
cd /me/dart_playground

# List available bricks
mason ls
/me/dart_playground
└── (empty)
```

## 🌎 Global Bricks

We can list globally installed bricks by adding the `--global` (`-g` for short) flag.

```bash
mason ls -g
/me/.mason-cache/global
└── hello 0.1.0+1 -> registry.brickhub.dev
```
