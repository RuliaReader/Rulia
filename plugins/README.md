# Rulia Plugin

This directory contains some plugin source code for Rulia.

For more information about Rulia plugin, please read https://github.com/LancerComet/RuliaReader/issues/58.

## File structure

A plugin consists of these files:

```bash
- my-plugin
  |- index.js      # Plugin source code.
  |- package.json  # Plugin meta information.
  |- icon.jpg      # Icon image.
  |- README.md     # A markdown file that is used to be a help document.
```

But you will see some plugins are written in TypeScript. It is no matter how you organize your source code, just bundle them into a single `index.js` file.

Check out source code in this repo and see what's going on here. You just need to prepare four functions for every single plugin, very simple.

> The cover file can be a jpg/jpeg/jfif/png/webp/gif file.

## Build

For some TypeScript coded plugins in this repo, you have to transpile TypeScript into JavaScript, which is pretty easy:

```bash
npm install    # Install dependencies.
npm run build  # Build. Done.
```

When finished, there will be a `index.js` under source code folder. This is the file that we need to distribute to users.

## Packing

Just pack these files into a zip:

```bash
my-plugin.zip
  |- index.js      # JS file not the TS.
  |- package.json  # Plugin meta information.
  |- icon.jpg      # Icon image.
```

Then distribute this zip to users. Done.

## Typings

You may see there is a file named `rulia.d.ts`, which defines `window.Rulia` object. With this file, code editors can give you hints when you use Rulia APIs.
