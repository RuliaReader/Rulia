# Rulia Plugin

This project contains some plugin source code for the Rulia.

For more information about the Rulia plugin, please read https://github.com/LancerComet/RuliaReader/issues/58.

## File structure

A plugin consists of these files:

```bash
- my-plugin
  |- index.js      # Plugin source code.
  |- package.json  # Plugin meta information.
  |- icon.jpg      # Icon image.
```

But you will see some plugins are written in TypeScript. It is no matter how you organize your source code, you just have to bundle them into a single `index.js` file.

Just check out example plugins in this repo and see what's going on here. You just need to prepare four functions for every single plugin, very simple.

## Build

For some TypeScript coded plugins in this repo, you have to transpile it into JavaScript, which is pretty easy:

```bash
npm install    # Install dependencies.
npm run build  # Build. Done.
```

When it is finished, there will be a `index.js` under source code folder. This is the file that will be distributed to users.

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
