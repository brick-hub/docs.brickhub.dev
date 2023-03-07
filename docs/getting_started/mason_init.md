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
# https://github.com/felangel/mason
bricks:
  # Sample Brick
  # Run `mason make hello` to try it out.
  hello: any
  # Bricks can also be imported via git url.
  # Uncomment the following lines to import
  # a brick from a remote git url.
  # widget:
  #   git:
  #     url: https://github.com/felangel/mason.git
  #     path: bricks/widget
```
