---
slug: /mason-search
description: Learn how to discover community bricks using the `search` command.
sidebar_position: 3
---

# Discovering Bricks 🔎

## Overview 🚀

There are two main ways to discover new bricks available on BrichHub:

1. The [brickhub.dev](https://brickhub.dev)
1. The `search` command via `mason_cli`

## Website Search 🌐

To discover new bricks via the BrickHub website, head over to [https://brickhub.dev/search](https://brickhub.dev/search). Enter a search term in the search bar to narrow your search or leave it blank to search for top bricks.

:::tip
You can also sort results by popularity (number of downloads) or by when they were last updated.
:::

## CLI Search 🧑‍💻

You can also search for bricks from the comfort of your terminal via the `mason_cli`. A full text search is performed and results are sorted by popularity (number of downloads).

To get started, use the `search` command followed by a search term:

```bash
mason search widgetbook
✓ Found 2 bricks. (0.7s)
widgetbook_starter v0.1.0+1
A brick to setup widgetbook for a Flutter app.
https://brickhub.dev/bricks/widgetbook_starter/0.1.0+1
--------------------------------------------------------------------------------
widgetbook_app v0.1.0+1
A brick to simplify the setup of a Widgetbook Flutter app when working with packages and mono-repos.
https://brickhub.dev/bricks/widgetbook_app/0.1.0+1
--------------------------------------------------------------------------------
```
