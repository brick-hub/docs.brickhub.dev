---
slug: /mason-make
description: Learn how to generate code from an installed brick.
sidebar_position: 5
---

# Using Bricks 👷

In this section, we'll take a look at how to use the `make` command to generate code from an existing brick.

## Overview 🚀

As we saw in the [overview](/), we can run the `mason make` command followed by the name of an installed brick to generate code from that brick:

```bash
mason make hello
? What is your name? (Dash) Mason
✓ Made brick hello (52ms)
✓ Generated 1 file:
  /me/mason_playground/HELLO.md (new)
```

## Command-line Args 🧑‍💻

By default, if a brick requires variables `mason` will prompt for those variables as seen in the snippet above. If we know in advance what variables a brick requires, we can provide variables to `mason` as command-line arguments:

```bash
mason make hello --name Mason
✓ Made brick hello (52ms)
✓ Generated 1 file:
  /me/mason_playground/HELLO.md (new)
```

Notice how in the above example, `mason` did not prompt for the name since it was already provided as an argument.

:::note
In cases where there are multiple variables, it's possible to supply any number of variables directly as command-line args and `mason` will prompt for any missing variables automatically.
:::

## Config File 📝

In some cases, it may be inconvenient to have to provide variables manually or via command-line args (especially for templates that require many variables). In these cases, we can provide variables via a configuration file. For example, if we create a file called `config.json` with the following contents:

```json
{
  "name": "Mason"
}
```

We can then pass the config file to `mason make` via the `-c` option:

```bash
mason make hello -c config.json
✓ Made brick hello (52ms)
✓ Generated 1 file:
  /me/mason_playground/HELLO.md (new)
```

:::note
The configuration file can have any name and can live anywhere on your local file system.
:::

## Custom Output Directory 🗂

By default `mason make` will generate the output in the current working directory but a custom output directory can be specified via the `-o` option:

```bash
mason make hello --name Mason -o ./out
✓ Made brick hello (52ms)
✓ Generated 1 file:
  /me/mason_playground/out/HELLO.md (new)
```

:::note
`mason` will automatically create any missing directories for you if you specify an output directory which doesn't already exist.
:::

## File Conflict Resolution ❗️

A conflict can occur when `mason` attempts to generate a file which already exists and the contents of the existing file differ from the contents of the generated file.

```bash
mason make hello --name Dash
conflict /me/mason_playground/HELLO.md
Overwrite HELLO.md? (Yyna) y
✓ Made brick hello (32.5s)
✓ Generated 1 file:
  /me/mason_playground/HELLO.md (new)
```

**`HELLO.md`**

```diff
- Hello Mason! 👋
+ Hello Dash! 👋
```

By default, `mason make` will prompt on each file conflict and will allow users to specify how the conflict should be resolved via the following options:

```
y - yes, overwrite (default)
Y - yes, overwrite this and all others
n - no, do not overwrite
a - append to existing file
```

## Conflict Resolution Strategy ✅

A custom file conflict resolution strategy can be specified via the `--on-conflict` option:

```bash
# Always prompt when there is a file conflict (default)
mason make hello --name Mason --on-conflict prompt

# Always overwrite when there is a file conflict
mason make hello --name Mason --on-conflict overwrite

# Always skip when there is a file conflict
mason make hello --name Mason --on-conflict skip

# Always append when there is a file conflict
mason make hello --name Mason --on-conflict append
```

## Detecting Changes 🕵️

In some cases, it may be useful to detect whether running `mason make` for a given brick produces a diff. For example, you may want to add a step in a continuous integration workflow which runs `mason make` for a given brick to ensure developers ran a codegen step prior to opening a pull request. The `--set-exit-if-changed` flag will exit with an error code if any files were changed after running `mason make`:

```bash
# 🚨 Exit with error if any files were changed
mason make hello --name Dash --set-exit-if-changed
```
