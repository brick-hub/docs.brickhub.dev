---
slug: /brick-syntax
description: Learn about the brick template syntax.
sidebar_position: 3
---

# Brick Syntax 🥸

## Overview 🚀

Write your brick template in the `__brick__` directory using [mustache templates](https://mustache.github.io/).

`__brick__/example.md`

```md
# Hello {{name}}!
```

:::info
Refer to the [mustache manual](https://mustache.github.io/mustache.5.html) for detailed usage information.
:::

:::note
The `__brick__` directory can contain multiple files and subdirectories.
:::

:::tip
Use `{{{variable}}}` instead of `{{variable}}` when you want the value of `variable` to be unescaped.
:::

## Conditionals 🚦

It's possible to conditionally render parts of your template based on boolean variable values.

For example, if we have a `__brick__/pubspec.yaml` file with the following contents:

```
{{^publish}}
publish_to: none
{{/publish}}
dependencies:
  flutter:
    sdk: flutter
  {{#useGoogleFonts}}
  google_fonts: latest
  {{/useGoogleFonts}}
```

If we generate a `pubspec.yaml` from the template with the following variables:

```json
{
  "publish": false,
  "useGoogleFonts": true
}
```

The generated output will look like:

```yaml
publish_to: none
dependencies:
  flutter:
    sdk: flutter
  google_fonts: latest
```

## Loops 🔁

We can also have loops in templates in response to array variable values.

For example, if we have a `__brick__/README.md` file with the following contents:

```
{{#platforms}}
{{.}}
{{/platforms}}
```

If we generate a `README.md` from the template with the following variables:

```json
{
  "platforms": ["iOS", "Android", "Web"]
}
```

The generated output will look like:

```md
iOS

Android

Web
```

## Lambdas ✨

Mason supports functions that manipulate the rendered output called lambdas.

For example, if we have a `__brick__/{{name.snakeCase()}}.md` file with the following contents:

```
import 'package:flutter/widgets.dart';

class {{name.pascalCase()}} extends StatelessWidget {
  const {{name.pascalCase()}}({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox();
  }
}
```

If we generate a file from the template with the following variables:

```json
{
  "name": "mason widget"
}
```

The generated output will be a file named `mason_widget.dart` with the following contents:

```dart
import 'package:flutter/widgets.dart';

class MasonWidget extends StatelessWidget {
  const MasonWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const SizedBox();
  }
}
```

### Built-in Lambdas

Mason supports a handful of built-in lambdas that can help with customizing generated code:

| Name           | Example             | Shorthand Syntax              | Full Syntax                                      |
| -------------- | ------------------- | ----------------------------- | ------------------------------------------------ |
| `camelCase`    | `helloWorld`        | `{{variable.camelCase()}}`    | `{{#camelCase}}{{variable}}{{/camelCase}}`       |
| `constantCase` | `HELLO_WORLD`       | `{{variable.constantCase()}}` | `{{#constantCase}}{{variable}}{{/constantCase}}` |
| `dotCase`      | `hello.world`       | `{{variable.dotCase()}}`      | `{{#dotCase}}{{variable}}{{/dotCase}}`           |
| `headerCase`   | `Hello-World`       | `{{variable.headerCase()}}`   | `{{#headerCase}}{{variable}}{{/headerCase}}`     |
| `lowerCase`    | `hello world`       | `{{variable.lowerCase()}}`    | `{{#lowerCase}}{{variable}}{{/lowerCase}}`       |
| `mustacheCase` | `{{ Hello World }}` | `{{variable.mustacheCase()}}` | `{{#mustacheCase}}{{variable}}{{/mustacheCase}}` |
| `pascalCase`   | `HelloWorld`        | `{{variable.pascalCase()}}`   | `{{#pascalCase}}{{variable}}{{/pascalCase}}`     |
| `paramCase`    | `hello-world`       | `{{variable.paramCase()}}`    | `{{#paramCase}}{{variable}}{{/paramCase}}`       |
| `pathCase`     | `hello/world`       | `{{variable.pathCase()}}`     | `{{#pathCase}}{{variable}}{{/pathCase}}`         |
| `sentenceCase` | `Hello world`       | `{{variable.sentenceCase()}}` | `{{#sentenceCase}}{{variable}}{{/sentenceCase}}` |
| `snakeCase`    | `hello_world`       | `{{variable.snakeCase()}}`    | `{{#snakeCase}}{{variable}}{{/snakeCase}}`       |
| `titleCase`    | `Hello World`       | `{{variable.titleCase()}}`    | `{{#titleCase}}{{variable}}{{/titleCase}}`       |
| `upperCase`    | `HELLO WORLD`       | `{{variable.upperCase()}}`    | `{{#upperCase}}{{variable}}{{/upperCase}}`       |

_Example Usage_

Given the following example brick:

```
__brick__
  ├── {{name.snakeCase()}}.md
  └── {{name.pascalCase()}}.java
```

`brick.yaml`:

```yaml
name: example
description: An example brick.
version: 0.1.0+1
vars:
  name:
    type: string
    description: Your name
    default: Dash
    prompt: What is your name?
```

We can generate code via:

```sh
mason make example --name my-name
```

The output will be:

```
├── my_name.md
└── MyName.java
```

:::note
Lambdas can be applied to file names as well as file contents.
:::

## Partials 📄

It is possible to have templates nested within other templates. For example, given the follow `__brick__` structure:

```
├── HELLO.md
├── {{~ footer.md }}
└── {{~ header.md }}
```

The `{{~ header.md }}` and `{{~ footer.md }}` are partials (partial brick templates). Partials will not be generated but can be included as part of an existing template.

For example given the contents of `{{~ header.md }}` and `{{~ footer.md }}` respectively

```md
# 🧱 {{name}}
```

```md
_made with 💖 by mason_
```

we can include the partials as part of a template via `{{> header.md }}` and `{{> footer.md }}`.

In this example, given `HELLO.md`:

```md
{{> header.md }}

Hello {{name}}!

{{> footer.md }}
```

We can use `mason make hello --name Mason` to generate `HELLO.md`:

```md
# 🧱 Mason

Hello Mason!

_made with 💖 by mason_
```

❗ **Note: Partials can contain variables just like regular templates**

## File Resolution 🗃

It is possible to resolve files based on path input variables using the `{{% %}}` tag.

For example, given the following `brick.yaml`:

```yaml
name: app_icon
description: Create an app icon file from a URL
version: 0.1.0+1
vars:
  url:
    type: string
    description: The app icon URL.
    prompt: Enter your app icon URL.
```

And the following brick template:

`__brick__/{{% url %}}`

Running `mason make app_icon --url path/to/icon.png` will generate `icon.png` with the contents of `path/to/icon.png` where the `path/to/icon.png` can be either a local or remote path. Check out the [app icon example brick](https://github.com/felangel/mason/tree/master/bricks/app_icon) to try it out.
