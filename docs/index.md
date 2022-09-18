---
slug: /
sidebar_position: 1
---

# Overview 🧱☁️

[BrickHub][brickhub_link] is a platform where developers can discover, install, and publish reusable templates called bricks.

BrickHub is built on top of [mason][mason_link], a collection of tools which allow developers to create and consume bricks.

## Getting Started 🚀

:::note
In order to use BrickHub you must have the [Dart SDK][dart_installation_link] and [Mason CLI][mason_cli_link] installed on your machine.
:::

### Installing Mason CLI 🧑‍💻

We recommend installing `mason_cli` from [pub.dev][pub_dev_link]

```bash
# 🎯 Activate from https://pub.dev
dart pub global activate mason_cli
```

Alternatively, `mason_cli` can be installed via [homebrew][homebrew_link]

```bash
# 🍺 Install from https://brew.sh
brew tap felangel/mason
brew install mason
```

### Initializing Mason CLI 📁

Once `mason_cli` is installed, we can use the `mason init` command to initialize `mason` in the current directory. This will generate a `mason.yaml` and allow `mason` to work with bricks scoped locally within the workspace.

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

### Installing Bricks 🧱

Now that we have a `mason.yaml`, we can use the `mason get` command to install all bricks defined in the nearest parent `mason.yaml`.

```bash
mason get
```

:::note
`mason get` will generate a `mason-lock.json` which can be tracked in source control when working with versioned bricks (git/hosted).
:::

### Using a Brick 👷

Once we have installed one or more bricks via `mason get`, we can generate code from those bricks using the `mason make` command. Since we only have one brick installed by default (`hello`), we can run the following command to generate code from the `hello` brick:

```bash
mason make hello
```

Mason will prompt for any variables required by the brick -- in this case the `hello` brick requires a single variable: `name`.

Once we provide a name and hit enter, we should see a `HELLO.md` file generated:

```bash
$ mason make hello
? What is your name? (Dash) Mason
✓ Made brick hello (52ms)
✓ Generated 1 file:
  /me/mason_playground/HELLO.md (new)
```

**`HELLO.md`**

```md
Hello Mason! 👋
```

Congrats! You've successfully installed `mason` and generated code from your first brick 🎉

[brickhub_link]: https://brickhub.dev
[dart_installation_link]: https://dart.dev/get-dart
[homebrew_link]: https://brew.sh
[mason_link]: https://github.com/felangel/mason
[mason_cli_link]: https://github.com/felangel/mason/tree/master/packages/mason_cli
[pub_dev_link]: https://pub.dev
