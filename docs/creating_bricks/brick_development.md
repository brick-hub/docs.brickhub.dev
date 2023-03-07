---
slug: /brick-development
description: Learn about the brick development workflow.
sidebar_position: 4
---

# 🧑‍💻 Brick Development

## 🚀 Overview

In this section, we'll take a look at how to develop a brick locally.

## ⚙️ Installation

Once you have created a new brick locally, you can develop and test the brick by installing it via path. The two main approaches are installing the brick locally using a `mason.yaml` or installing the brick globally.

For this example, suppose you have created a new brick called `example` in a bricks directory:

```
├── bricks
│   └── example
│       ├── CHANGELOG.md
│       ├── LICENSE
│       ├── README.md
│       ├── __brick__
│       └── brick.yaml
```

### Local Installation

We can run `mason init` or manually create a `mason.yaml` to setup a local mason workspace.

```
├── bricks
│   └── example
│       ├── CHANGELOG.md
│       ├── LICENSE
│       ├── README.md
│       ├── __brick__
│       └── brick.yaml
└── mason.yaml
```

Once we have a `mason.yaml`, we can install the `example` brick via path using the `mason add` command:

```bash
mason add example --path bricks/example
```

The `mason.yaml` should look like:

```yaml
bricks:
  example:
    path: bricks/example
```

We can verify that the brick has been successfully added by running `mason ls`:

```bash
mason ls
/Users/me/mason_playground
└── example 0.1.0+1 -> /Users/me/mason_playground/bricks/example
```

### Global Installation

Install the brick globally via path:

```bash
mason add -g example --path bricks/example
```

We can verify that the brick has been successfully added by running `mason ls -g`:

```bash
mason ls -g
/Users/me/.mason-cache/global
└── example 0.1.0+1 -> /Users/me/mason_playground/bricks/example
```

## 📝 Usage

At this point we have successfully installed our local brick and can use it via `mason make`:

```bash
mason make example
```

:::info
There is no need to re-install a local brick after making changes. Once the brick has been installed from a local path via `mason add`, changes to the brick will immediately be reflected when running `mason make <BRICK>`.
:::
