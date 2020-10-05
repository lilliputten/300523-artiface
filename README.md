# ARTI WebInterface UI components library

## Build info (auto-generated)

- Version: 0.0.17
- Last changes timestamp: 2020.10.06, 00:47
- Last changes timetag: 201006-0047

## Requirements

Some maintenance commands (`*.sh` scripts or commands in `scripts` section of `package.json`) utilizes specific posix command line commands like next:

- cp
- mv
- rm
- test

(...and so on...)

They may be installed on windows via cygin or similar software.

Some scripts (rarely used) used some posix commands what doubles windows cmd commands (with different syntax):

- date
- find
- tar

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

## Installation & usage

```shell
npm i -S git+{{REPO_ADDR}}
```

## Build & publish cycle

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

After publishing you need to update requirements in target projects using command:

```shell
npm update -S DistName
```

Update command suitable if you using npm requirement string like:

```json
  "dependencies": {
    "DistName": "git+{{DIST_REPO_ADDR}}",
    ...
```

(And finally use optional `npm install` command for install new/updated requirements.)

### Using in js code with imports:

```javascript
import * as DistName from 'DistName' // Import code bundle
import 'DistName/styles.css' // Import styles
const { Hello } = DistName // Destruct specific components
render(<Hello />, document.getElementById('root')) // Minimalistic render sample
```

### Run cosmos components indpector:

```
npm run -s cosmos
```

### Open comsos server url in browser:

Use link [http://localhost:5000](http://localhost:5000)

## Using React Cosmos

- [react-cosmos/react-cosmos: A dev environment for building scalable, high-quality user interfaces](https://github.com/react-cosmos/react-cosmos#getting-started)
- [react-cosmos/docs at master · react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos/tree/master/docs)
- [Тестирование компонентов React / Блог компании RUVDS.com / Хабр](https://habr.com/ru/company/ruvds/blog/345236/)

### Configuration

`config.schema.json` is a scheme for `cosmos.config.json` -- cosmos project configuration file.

See documentation:

- [react-cosmos/docs at master · react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos/tree/master/docs#config)

### Examples

- [React Cosmos Live Demo](https://reactcosmos.org/live-demo/)

See `react-cosmos-master/website/src` -- live-demo source.

<!--
 @changed 2020.10.06, 00:47
-->
