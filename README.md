# ARTI WebInterface UI components library

## Build info (auto-generated)

- Version: 0.2.14
- Last changes timestamp: 2021.03.17, 16:31
- Last changes timetag: 210317-1631

## Documents

- [README.md](README.md) (this document)
- [CHANGELOG.md](CHANGELOG.md)
- [TODO.md](TODO.md)
- [README.cosmos.md](README.cosmos.md)
- [README.form-components.md](README.form-components.md)

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
- `publish` (auto-initialized with publish submodule; see `publish` and `postinstall-publish-submodule` npm scripts) -- Folder for syncing with 'dist' branch/repository (specified in `util-config*`).
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

To specify custom demo root entrypoint use:

```
npm run -s server -- --env.DEMO_MODULE=demo-201005-popper
```

-- in this example module `src/demo-201005-popper.jsx` will be used.

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

Specify directly in `package.json`:

```json
  "dependencies": {
    "DistName": "{{DIST_REPO_LINK}}",
    ...
```

For example:

```json
    "WebUiCore": "http://192.168.10.206/lilliputten/WebUiCore/-/archive/dist.0.2.2/WebUiCore-dist.0.2.2.tar.gz",
```

### Update distributive to latest build using:

```shell
npm update -S DistName
```

### Use in js code with imports (for example):

```javascript
import WebUiCoreRoot, {
  ModalsContainer,
  utils as WebUiCoreUtils,
} from 'WebUiCore';
import webUiCoreCssMappings from 'WebUiCore/styles.css';
WebUiCoreUtils.configure.setConfigOptions({ useCssModules: true, cssMappings: webUiCoreCssMappings });
const App = () => (
  <WebUiCoreRoot autoModalsContainer={false}>
    <div className="App">
      <PageLayout />
      <ModalsContainer />
    </div>
  </WebUiCoreRoot>
);
render(<App />, document.getElementById('root'));
```

<!--
 @changed 2021.01.17, 19:59
-->
