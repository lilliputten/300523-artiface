#!/bin/sh
# @desc Update version number (read from build-version.txt and write to all package.json files)
# @changed 2020.05.26, 17:25

TIME=`cat build-time.txt`
VERSION=`cat build-version.txt`

echo "Version/time: $VERSION / $TIME" && \
  echo "Updating package.json" &&
    mv package.json package.json.bak && \
    cat package.json.bak \
      | sed "s/\(\"version\":\) \".*\"/\1 \"$VERSION\"/" \
      | sed "s/\(\"changed\":\) \".*\"/\1 \"$TIME\"/" \
    > package.json &&
    rm package.json.bak &&
  echo "Updating publish-static/package.json" &&
    mv publish-static/package.json publish-static/package.json.bak && \
    cat publish-static/package.json.bak \
      | sed "s/\(\"version\":\) \".*\"/\1 \"$VERSION\"/" \
      | sed "s/\(\"changed\":\) \".*\"/\1 \"$TIME\"/" \
    > publish-static/package.json &&
    rm publish-static/package.json.bak &&
  echo OK
