#!/bin/sh
# @desc Publish (and make if absent) dist build
# @changed 2020.12.30, 20:07

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
sh ./util-publish-update.sh || exit 1

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Publishing build ($VERSION, $TIMESTAMP)..."

# TODO: Compare actual and previously published versions? (The git is checking for changes itself anyway.)

COMMIT_TEXT="Build v$VERSION, $TIMESTAMP ($TIMETAG)"
cd "$PUBLISH_FOLDER" && \
  echo "Fetch..." && git fetch && \
  echo "Add files..." && git add . -Av && \
  echo "Commit..." && git commit -am "$COMMIT_TEXT" && \
  echo "Create/update tag v$VERSION..." && git tag -f -am "$COMMIT_TEXT" "v$VERSION" && \
  echo "Push..." && git push -f --tags && \
  echo "Done" && cd ..
  # echo "Don't forget to update version for target project dependency (package.json, WebUiCore entry)"

  # ( ( ( git tag | grep -q "v$VERSION" ) && echo "Tag exist: update" && git tag -d "v$VERSION" ) || echo "Tag absent: create" ) &&
  # ( git tag "v$VERSION" || echo "Tag already exists" ) && \

