# bogu
A wealthy JavaScript repository with styles, React components and helper functions.

# Library
These parts are part of the library
- src/components
-  ~~src/containers~~ (not working yet)
- src/styles 
- src/utils


When building the library it ends up in three bundles: 'bogu', 'bogu/utils' and 'bogu/styles'. Each can be like
* `import { HeaderTimeline } from 'bogu'`

or
* `import { color } from 'bogu/styles'`

# Release
Remember to build before releases. 

Checklist includes:
* `npm run build`
* `npm run test`
* update package json `<version>`
* `git commit ...`
* `git tag <version>`
* `git push && git push --tags`

`<version>` number is used with npm.

# NPM install
Bogu is installed with npm from github using the following command: 
`npm install --save git+ssh://git@github.com:rutebanken/bogu.git#0.1.3`

Alternatively it can be added to `package.json` like so

`"bogu": "git@github.com:rutebanken/bogu.git#0.1.3"`

It is important to refer to a specific version, in this case version `#0.1.3`