# ARTI WebInterface library

## Install

```shell
npm i -S git+https://github.com/lilliputten/{PRJNAME}.git
```

## Build & publish cycle

Increment patch version:

```shell
util-increment-version.sh
```

Update build info (build version, date/time stamp & tag):

```shell
util-update-build-props.sh
```

Build default target (usually `build-prod-default`, 'Build production library'):

```shell
npm run -s build
```

Update & push `publish` repository:

```shell
npm run -s publish
```

Run cosmos components indpector:

```
npm run -s cosmos
```

Open comsos server url in browser: [http://localhost:5000](http://localhost:5000)

## Cosmos links

- [react-cosmos/react-cosmos: A dev environment for building scalable, high-quality user interfaces](https://github.com/react-cosmos/react-cosmos#getting-started)
- [react-cosmos/docs at master · react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos/tree/master/docs)
- [Тестирование компонентов React / Блог компании RUVDS.com / Хабр](https://habr.com/ru/company/ruvds/blog/345236/)

## Configuration

`config.schema.json` is a scheme for `cosmos.config.json` -- cosmos project configuration file.

See documentation:

- [react-cosmos/docs at master · react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos/tree/master/docs#config)

## Examples

- [React Cosmos Live Demo](https://reactcosmos.org/live-demo/)

See `react-cosmos-master/website/src` -- live-demo source.

<!--
 @changed 2020.07.20, 14:38
-->
