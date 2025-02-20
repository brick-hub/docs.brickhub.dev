---
slug: /brick-structure
description: Learn about the structure of a brick.
sidebar_position: 2
---

# 🧱 Structure of a Brick

## 🚀 Overview

If we take a closer look at the example brick we just generated, it should look like:

```
├── CHANGELOG.md
├── LICENSE
├── README.md
├── __brick__
└── brick.yaml
```

The `CHANGELOG`, `LICENSE`, and `README` are all standard files found across many projects so we won't focus on them. The two important entities are the `__brick__` directory and the `brick.yaml` file.

## `brick.yaml`

The `brick.yaml` file is a manifest which contains metadata for the current brick. The newly generated `brick.yaml` should look something like:

```yaml
name: example
description: A new brick created with the Mason CLI.

# The following defines the brick repository url.
# Uncomment and update the following line before publishing the brick.
# repository: https://github.com/my_org/my_repo

# The following defines the version and build number for your brick.
# A version number is three numbers separated by dots, like 1.2.34
# followed by an optional build number (separated by a +).
version: 0.1.0+1

# The following defines the environment for the current brick.
# It includes the version of mason that the brick requires.
environment:
  mason: ^0.1.0

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
    description: Your name
    default: Dash
    prompt: What is your name?
```

### Variable Types

Variables defined in your `brick.yaml` can be one of the following types:

| Type      | Description                            | Example                                                                                                                             |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `string`  | A primitive string                     | `"Dash"` ([sample](https://github.com/felangel/mason/blob/master/bricks/app_icon/brick.yaml))                                       |
| `number`  | A primitive number                     | `42` ([sample](https://github.com/felangel/mason/blob/master/bricks/bio/brick.yaml))                                                |
| `boolean` | A primitive boolean                    | `true`/`false` ([sample](https://github.com/felangel/mason/blob/master/bricks/bio/brick.yaml))                                      |
| `enum`    | An enumeration (single choice)         | `["red", "green", "blue"]` -> `"red"` ([sample](https://github.com/felangel/mason/blob/master/bricks/favorite_color/brick.yaml))    |
| `array`   | An array of strings (multiple choices) | `["red", "green", "blue"]` -> `["red", "blue"]` ([sample](https://github.com/felangel/mason/blob/master/bricks/flavors/brick.yaml)) |
| `list`    | A dynamic list of strings (open ended) | `["c++", "dart", "python"]` ([sample](https://github.com/felangel/mason/blob/master/bricks/favorite_languages/brick.yaml))          |

## `__brick__`

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
