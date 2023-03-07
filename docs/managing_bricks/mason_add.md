---
slug: /mason-add
description: Learn how to install bricks from various sources.
sidebar_position: 4
---

# 🛒 Adding Bricks

## 🚀 Overview

Once you have found a brick that you'd like to use, you can install it via the `add` command. The `add` command allows developers to add brick templates locally or globally on their machines from either a local path, git url, or registry. By default `mason add` will add the brick locally but bricks can be added globally by providing the `--global` (`-g` for short) flag.

:::info
Installing bricks in a local workspace is recommended when the bricks are specific to a project/workspace.

Installing bricks globally is recommended when the bricks are generic and will be used across multiple projects/workspaces.
:::

### 📁 Path

A brick can be installed via path using the `--path` option.

:::info
The `--path` must point to directory containing the `brick.yaml`.
:::

The following command will install a brick named `example` located in the `./example` directory:

🗂 **Local**

```bash
mason add example --path ./example
```

Running the above command will automatically install the `example` brick in the current workspace and update the `mason.yaml`:

```yaml
bricks:
  example:
    path: ./example
```

🌎 **Global**

```bash
mason add -g example --path ./example
```

### 🧑‍💻 Git

A brick can be installed via a git url using the `--git-url` option.

:::info
The `--git-path` is optional and allows us to specify a path relative to the root of the repository if the brick isn't located in the root. By default the root of the repository is used.

The `--git-ref` is also optional and allows us to specify a reference (tag, commit hash, or branch name). By default the default branch is used .
:::

The following command will install a brick named `widget` located at [https://github.com/felangel/mason](https://github.com/felangel/mason):

🗂 **Local**

```bash
mason add widget
  --git-url https://github.com/felangel/mason
  --git-path bricks/widget
  --git-ref 1f9ffefa02045f9729addf205a176d263cd5de0b
```

Running the above command will automatically install the `widget` brick in the current workspace and update the `mason.yaml`:

```yaml
bricks:
  widget:
    git:
      url: 'https://github.com/felangel/mason'
      path: 'bricks/widget'
```

🌎 **Global**

```bash
mason add -g widget
  --git-url https://github.com/felangel/mason
  --git-path bricks/widget
  --git-ref 1f9ffefa02045f9729addf205a176d263cd5de0b
```

### ☁️ Registry

By default when using the `add` command, bricks are installed from the BrickHub registry.

The following command will install the latest version of the `amplify_starter` brick from the BrickHub registry:

🗂 **Local**

```bash
mason add amplify_starter
```

Running the above command will automatically resolve the latest version, install the `amplify_starter` brick in the current workspace, and update the `mason.yaml`:

```yaml
bricks:
  amplify_starter: ^0.2.2
```

🌎 **Global**

```bash
mason add -g amplify_starter
```
