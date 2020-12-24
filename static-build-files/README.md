# ARTI WebInterface components library distributive

__TODO:__ Create end-user (app-developer) how-to & manual reference notes.

## Build info

- Version: 0.1.7
- Last changes timestamp: 2020.12.24, 21:26
- Last changes timetag: 201224-2126

## Usage

Library can be added in `dependencies` section of `package.json` file as:

```json
  "DistName": "git+{{DIST_REPO_ADDR}}"
```

or via npm:

```shell
npm i -S git+{{DIST_REPO_ADDR}} DistName
```

To update to actual library package version use command:
```shell
npm update -S DistName
```

### Usage in js code with imports:

```javascript
import * as DistName from 'DistName' // Import code bundle
import 'DistName/styles.css' // Import styles
const { Hello } = DistName // Destruct specific components
render(<Hello />, document.getElementById('root')) // Minimalistic render sample
```

<!--
 @changed 2020.10.06, 02:16
-->
