---
slug: /mason-init
description: Learn how to initialize mason in your current workspace.
sidebar_position: 2
---

# 📁 Initializing Mason CLI

Once `mason_cli` is installed, we can use the `init` command to initialize `mason` in the current directory. This will generate a `mason.yaml` and allow `mason` to work with bricks scoped locally within the workspace.

:::note
By default, `mason` will always use the nearest parent `mason.yaml`.
:::

```bash
mason init
```

Once we run, `mason init`, we should have a `mason.yaml` that looks something like:

```yaml
# Register bricks which can be consumed via the Mason CLI.
# Run "mason get" to install all registered bricks.
# To learn more, visit https://docs.brickhub.dev.
bricks:
  # Bricks can be imported via version constraint from a registry.
  # Uncomment the following line to import the "hello" brick from BrickHub.
  # hello: 0.1.0+1
  # Bricks can also be imported via remote git url.
  # Uncomment the following lines to import the "widget" brick from git.
  # widget:
  #   git:
  #     url: https://github.com/felangel/mason.git
  #     path: bricks/widget
```
