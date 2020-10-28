# ARTI WebInterface UI components library

## Build info (auto-generated)

- Version: 0.0.18
- Last changes timestamp: 2020.10.06, 02:18
- Last changes timetag: 201006-0218

## Documents

- README.md (this document)
- CHANGELOG.md
- TODO.md
- README.cosmos.md
- README.form-components.md

## Requirements

Some maintenance commands (`*.sh` scripts or commands in `scripts` section of `package.json`) utilizes specific posix command line commands like next:

- `cp`
- `mv`
- `rm`
- `test`

(...and so on...)

They may be installed on windows via cygin or similar software.

Some scripts (rarely used) used some posix commands what doubles windows cmd commands (with different syntax):

- `date`
- `find`
- `tar`

They postfixed with underscore (`_`; eg, `find_`). You can use symlinks if working under linux/macos etc.

The npm requirements using in final (builded) library code, contained in `dependencies` and `peerDependencies` sections in `package.json` (`devDependencies` using only for build/dev environment).

## Project folders structure

- `!Docs` (optional) -- Some project documentation (other than included in the `README*` files).
- `!Work` (optional) -- Some work materials (what may be useful in future).
- `build` (auto-generated; see `build` npm script) -- Production build.
- `build-dev` (auto-generated; see `build-dev` npm script) -- Development build (debug & tesing only).
- `demo-html` -- Demo html template folder.
- `publish` (auto-initialized with publish submodule; see `publish` and `postinstall-publish-submodule` npm scripts) -- Folder for syncing with 'dist' repository (specified in `util-config*`).
- `src` -- Source files
- `static-build-files` -- Static files added to the build.

## Build & publish cycle

### Debug & develop with dev-server in demo mode:

```shell
npm run -s server
```

Locate browser to default url: [http://localhost:8080/](http://localhost:8080/).)

Specify demo fixture to display in url query or select from main demo page:

- `http://localhost:8080/?fixture=Hello`
- `http://localhost:8080/?fixture=FormButton:defaultWithIcon`

### Increment patch (minor number) version:

```shell
util-increment-version.sh
```

### Update build info (build version, date/time stamp & tag):

```shell
util-update-build-variables.sh
```

### Build default target (usually `build-prod-default`, 'Build production library'):

```shell
npm run -s build
```

### Update & push `publish` repository:

```shell
npm run -s publish
```

NOTE: Target repository specified in npm script `postinstall-publish-submodule`.

TODO: To use external automation scripts? To use crossplatform replacements for posix commands?

## Installation & usage in target project

### Add npm dependency:

From command line:

```shell
npm i -S git+{{DIST_REPO_ADDR}} DistName
```

Or specify directly in `package.json`:

```json
  "dependencies": {
    "DistName": "git+{{DIST_REPO_ADDR}}",
    ...
```

### Update distributive to latest build using:

```shell
npm update -S DistName
```

### Use in js code with imports:

```javascript
import * as DistName from 'DistName' // Import code bundle
import 'DistName/styles.css' // Import styles
const { Hello } = DistName // Destruct specific components
render(<Hello />, document.getElementById('root')) // Minimalistic render sample
```

<!--
 @changed 2020.10.06, 02:32
-->
