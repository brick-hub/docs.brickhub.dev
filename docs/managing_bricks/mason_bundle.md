---
slug: /mason-bundle
description: Learn how to create and work with brick bundles.
sidebar_position: 5
---

# 📦 Bundling Bricks

In this section, we'll take a look at how to create and work with bundled versions of existing bricks.

## 🚀 Overview

Bundles are convenient for cases where you want to include your brick as part of another app or upload the bundle for later use.

There are currently two types of bundles:

- **`Universal`** - a platform-agnostic bundle primarily used when publishing to BrickHub
- **`Dart`** - a Dart specific bundle which can be used to programmatically generate code from a brick in other Dart applications

We can go to/from a bundle using the `mason bundle` and `mason unbundle` command respectively.

## 🧶 Bundle Usage

To generate a bundle:

```bash
# Create a universal bundle from a local brick.
mason bundle ./path/to/brick -o ./path/to/destination

# Create a dart bundle from a local brick.
mason bundle ./path/to/brick -t dart -o ./path/to/destination

# Create a universal bundle from a git brick.
mason bundle --source git https://github.com/:org/:repo -o ./path/to/destination

# Create a dart bundle from a git brick.
mason bundle --source git https://github.com/:org/:repo -t dart -o ./path/to/destination

# Create a universal bundle from a hosted brick.
mason bundle --source hosted <BRICK_NAME> -o ./path/to/destination

# Create a dart bundle from a hosted brick.
mason bundle --source hosted <BRICK_NAME> -t dart -o ./path/to/destination
```

## 🪡 Unbundle Usage

You can use mason to generate a brick from an existing bundle. Unbundling is useful in cases where you want to make changes to an existing bundle because you can first unbundle, make the changes to the template, and generate a new bundle.

To generate a brick template from an existing bundle:

```bash
# Universal Bundle
mason unbundle ./path/to/bundle -o ./path/to/destination/

# Dart Bundle
mason unbundle ./path/to/bundle -t dart -o ./path/to/destination/
```

## 🎯 Using Dart Bundles

Dart bundles can be included and imported from within Dart applications in order to programmatically generate code.

```dart
import 'package:mason/mason.dart';

import './path/to/my/bundle.dart';

Future<void> main() async {
  // Create a MasonGenerator from the existing bundle.
  final generator = MasonGenerator.fromBundle(myBundle);

  // Generate code based on the bundled brick.
  await generator.generate(...);
}
```
