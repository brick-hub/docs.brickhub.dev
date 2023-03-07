---
slug: /mason-publish
description: Learn how to publish your bricks on BrickHub.
sidebar_position: 2
---

# ☁️ Publishing a Brick

## 🚀 Overview

Publishing bricks on BrickHub makes them available for use by anyone.

Publishing a brick is free and available to anyone with an account on [https://brickhub.dev](https://brickhub.dev).

:::info
Anyone can use bricks published on BrickHub but a verified account is required in order to publish bricks on BrickHub.
:::

## ✍️ Signing Up

Please follow these steps in order to create an account on BrickHub:

1. 🙋 Request access at [https://brickhub.dev](https://brickhub.dev)
1. 📬 Receive email invite
1. ✍️ Sign up at [https://brickhub.dev/signup](https://brickhub.dev/signup)
1. 📧 Verify email

## 🔐 Logging In

Once you have signed up and verified your account, you can login via the `login` command:

```bash
mason login
email: me@email.com
password: ******
✓ Logged into brickhub.dev (0.5s)
You are now logged in as <me@email.com>
```

## 📦 Publishing

Once you are logged into an account, you can publish bricks via the `publish` command:

```bash
mason publish --directory ./my_brick
Do you want to publish my_brick 0.1.0+1? (y/N) y
✓ Bundled my_brick (0.1s)
✓ Published my_brick to brickhub.dev (0.1s)
```

:::info
If the `--directory` option is not specified, the current directory will be used by default.
:::

## 🚪 Logging Out

If you wish to log out of your account, you can do so via the `logout` command.

```bash
mason logout
✓ Logged out of brickhub.dev (3ms)
```
