---
slug: /installing
description: Learn how to install the Mason CLI.
sidebar_position: 1
---

# 🧑‍💻 Installing Mason CLI

:::info
In order to install [Mason CLI][mason_cli_link] you must have the [Dart SDK][dart_installation_link] installed on your machine.
:::

## 🎯 Pub.dev (recommended)

We recommend installing `mason_cli` from [pub.dev][pub_dev_link]

```bash
# 🎯 Activate from https://pub.dev
dart pub global activate mason_cli
```

:::note

To install a specific version of `mason_cli` from pub, use the following command:

```bash
dart pub global activate mason_cli <VERSION>
```

:::

## 🍺 Homebrew

Alternatively, `mason_cli` can be installed via [homebrew][homebrew_link]

```bash
# 🍺 Install from https://brew.sh
brew tap felangel/mason
brew install mason
```

:::note

To install a specific version of `mason_cli` from homebrew, use the following command:

```bash
brew tap-new felangel/mason
brew extract --version <VERSION> mason felangel/mason
brew install felangel/mason/mason@<VERSION>
```

:::

## 📚 Summary

Once you have successfully installed the `mason_cli` you can verify your setup by running the `mason` command in your terminal. If `mason_cli` was installed correctly, you should see something similar to the following output:

```bash
🧱  mason • lay the foundation!
Usage: mason <command> [arguments]
Global options:
-h, --help       Print this usage information.
    --version    Print the current version.
Available commands: ...
```

[dart_installation_link]: https://dart.dev/get-dart
[homebrew_link]: https://brew.sh
[mason_cli_link]: https://github.com/felangel/mason/tree/master/packages/mason_cli
[pub_dev_link]: https://pub.dev
