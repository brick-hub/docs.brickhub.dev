---
slug: /mason-new
sidebar_position: 3
---

# Creating Bricks ✨🧱

In this section, we'll take a look at how to use the `mason new` command to create your own bricks.

## Overview 🚀

The `mason new` command allows us to create a new, custom brick template in the current working directory:

```bash
$ mason new example
✓ Created new brick: example (74ms)
✓ Generated 5 file(s):
  /me/mason_playground/example/brick.yaml (new)
  /me/mason_playground/example/README.md (new)
  /me/mason_playground/example/CHANGELOG.md (new)
  /me/mason_playground/example/LICENSE (new)
  /me/mason_playground/example/__brick__/HELLO.md (new)
```

## Anatomy of a Brick 🧱

If we take a closer look at the example brick we just generated, it should look like:

```
.
├── CHANGELOG.md
├── LICENSE
├── README.md
├── __brick__
└── brick.yaml
```

The `CHANGELOG`, `LICENSE`, and `README` are all standard files found across many projects so we won't focus on them. The two important entities are the `__brick__` directory and the `brick.yaml` file.

### `brick.yaml`

The `brick.yaml` file is a manifest which contains metadata for the current brick. The newly generated `brick.yaml` should look something like:

```yaml
name: example
description: An example brick

# The following defines the version and build number for your brick.
# A version number is three numbers separated by dots, like 1.2.34
# followed by an optional build number (separated by a +).
version: 0.1.0+1

# The following defines the environment for the current brick.
# It includes the version of mason that the brick requires.
environment:
  mason: '>=0.1.0-dev <0.1.0'

# Variables specify dynamic values that your brick depends on.
# Zero or more variables can be specified for a given brick.
# Each variable has:
#  * a type (string, number, boolean, enum, or array)
#  * an optional short description
#  * an optional default value
#  * an optional list of default values (array only)
#  * an optional prompt phrase used when asking for the variable
#  * a list of values (enums only)
vars:
  name:
    type: string
    description: Your name.
    default: Dash
    prompt: What is your name?
```

### `__brick__`

The `__brick__` directory contains the template for your brick. Any files, directories within the `__brick__` will be generated when the brick is used via `mason make`.

In the example brick, our `__brick__` directory contains a single file called `HELLO.md` with the following content:

```md
# Hello {{name}}!
```

:::note
Templates currently support [mustache](https://mustache.github.io/) but support for additional templating specifications is on the roadmap.
:::

:::tip
Refer to the [mustache specification](https://mustache.github.io/mustache.5.html) for more information about `mustache` and its capabilities.
:::

## Custom Description ✍️

We can use the `--desc` option to specify a custom brick description when creating a new brick via `mason new`:

```bash
$ mason new example --desc "My awesome brick"
```

## Custom Output Directory 🗂

Similarly to `mason make`, we can specify a custom output directory when creating a new brick via the `-o` option:

```bash
$ mason new example -o ./path/to/brick
```

## Hooks 🪝

```bash
mason new example --hooks
```