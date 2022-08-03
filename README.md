# down-to-html

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

A semi-LIVE preview for Markdown to HTML

## How to use

1. Obtain the repository with `git clone` or download it as an archive.
2. Run an `npm install` at the root of the project.
3. Start the watcher with `npm start` or `grunt watch`.

One needs to place *.md* files within the *src* directory next to the *demo.md* file and the output files will be created in *output/src* directory, next to the *demo.html* file.

## One-shot conversion

To perform a one-shot conversion as opposed to a continuous conversion, one can run `grunt` or `grunt build` at the root and find the updated output files in the output directory.

## Not a library

Please note that this is not a library, just a pre-configured project for Markdown to HTML conversion.

It is simply configured using [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) and [grunt-markdown](https://github.com/treasonx/grunt-markdown) plugins for *Grunt*.

I created this project just for fun and so that I would not need to perform the configuration while working on Markdown files and needing to have a glance on the preview in a *semi-LIVE* manner.

> PS: This file was written using *down-to-html*.
