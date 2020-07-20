#!/bin/sh
# @desc Update version number & build timestamps
# @changed 2020.07.20, 14:41

node util-update-build-time.js

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Version/time: $VERSION / $TIMESTAMP" && \
  echo "Updating package.json" &&
    mv package.json package.json.bak && \
    cat package.json.bak \
      | sed "s/\(\"version\":\) \".*\"/\1 \"$VERSION\"/" \
      | sed "s/\(\"timestamp\":\) \".*\"/\1 \"$TIMESTAMP\"/" \
      | sed "s/\(\"timetag\":\) \".*\"/\1 \"$TIMETAG\"/" \
    > package.json &&
    rm package.json.bak &&
  # echo "Updating build-static/package.json" &&
  #   mv build-static/package.json build-static/package.json.bak && \
  #   cat build-static/package.json.bak \
  #     | sed "s/\(\"version\":\) \".*\"/\1 \"$VERSION\"/" \
  #     | sed "s/\(\"timestamp\":\) \".*\"/\1 \"$TIMESTAMP\"/" \
  #     | sed "s/\(\"timetag\":\) \".*\"/\1 \"$TIMETAG\"/" \
  #   > build-static/package.json &&
  #   rm build-static/package.json.bak &&
  echo "Updating build-static/README.md" &&
    mv build-static/README.md build-static/README.md.bak && \
    cat build-static/README.md.bak \
      | sed "s/^\(-* *Version:\) .*$/\1 $VERSION/" \
      | sed "s/^\(-* *Last changes timestamp:\) .*$/\1 $TIMESTAMP/" \
      | sed "s/^\(-* *Last changes timetag:\) .*$/\1 $TIMETAG/" \
    > build-static/README.md &&
    rm build-static/README.md.bak &&
  echo OK
