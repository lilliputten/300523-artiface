#!/bin/sh
# @desc Update publish folder to debug project location (DEBUG_LOCATION)
# @since 2020.12.08, 20:50
# @changed 2020.12.08, 20:50

DEBUG_LOCATION='../WebUi/node_modules/WebUiCore/'

# Import config variables (expected variables `$DIST_REPO` and `$PUBLISH_FOLDER`)...
# DIST_REPO="git@github.com:lilliputten/WebUiCoreDist.git"
# PUBLISH_FOLDER="publish"
test -f "./util-config.sh" && . "./util-config.sh"
test -f "./util-config-local.sh" && . "./util-config-local.sh"

if [ ! -d "$PUBLISH_FOLDER" ]; then
  echo "No publish folder. Probably submodule was not initialized. Use script 'util-publish-init.sh'."
  exit 1
fi

# Make build if absent
test -d build || npm run -s build || exit 1

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Updating publish folder ($VERSION, $TIMESTAMP)..." && \
  cp -vRfu build/* $DEBUG_LOCATION &&
  cd .. && \
  echo OK
