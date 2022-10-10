---
slug: /hooks
description: Learn how to execute custom scripts via hooks.
sidebar_position: 4
---

# Hooks 🪝

`Mason` supports custom script execution via hooks.

The supported hooks are:

- `pre_gen` - executed immediately before the generation step
- `post_gen` - executed immediately after the generation step

Hooks must be defined in the hooks directory at the root of the brick:

```
├── __brick__
├── brick.yaml
└── hooks
    ├── post_gen.dart
    ├── pre_gen.dart
    └── pubspec.yaml
```

The easiest way to get started with hooks is by specifying the `--hooks` flag when creating a new brick:

```bash
mason new example --hooks
```

:::note
Currently `mason` only supports hooks written in Dart.
:::

### Hooks Usage ✨

Every hook must contain a `run` method which accepts a `HookContext` from `package:mason/mason.dart`.

Hooks can be used to manipulate variables, interface with the logger, and more:

**`pre_gen.dart`**

```dart
import 'dart:io';
import 'package:mason/mason.dart';

void run(HookContext context) {
  // Read vars.
  final name = context.vars['name'];

  // Use the `Logger` instance.
  context.logger.info('Hello $name!');

  // Update vars.
  context.vars['current_year'] = DateTime.now().year;
}
```

**`post_gen.dart`**

```dart
import 'dart:io';
import 'package:mason/mason.dart';

Future<void> run(HookContext context) async {
  final progress = context.logger.progress('Installing packages');

  // Run `flutter packages get` after generation.
  await Process.run('flutter', ['packages', 'get']);

  progress.complete();
}
```

:::note
The working directory of the hook is the directory in which the code is generated.
:::

### Disabling Hooks ❌

Hook execution can be disabled using the `--no-hooks` flag:

```bash
# Disable hook script execution
mason make example --name Mason --no-hooks
```
