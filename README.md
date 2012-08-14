# bumper [![build status](https://secure.travis-ci.org/agnoster/bumper.png?branch=master)](http://travis-ci.org/agnoster/bumper)

Simple release management for npm packages with git

## WARNING: NOT USABLE YET

## Install

    $ npm install -g bumper

## Use

    $ bumper minor
    mypackage 0.3.2 -> 0.4.0
    update package.json
    git add package.json
    git commit -m "Bump version to v0.4.0"
    git tag -a -m "Release v0.4.0" v0.4.0
    git push origin
    npm publish

## MIT License

Copyright 2011 Isaac Wolkerstorfer.
All rights reserved.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

