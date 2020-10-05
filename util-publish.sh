#!/bin/sh
# @desc Publish (and make if absent) dist build
# @changed 2020.10.05, 23:57

if [ ! -d publish ]; then
  echo "No publish folder. Probably submodule was not initialized. Use script 'util-publish-init.sh'."
  exit 1
fi

# Make build if absent
test -d build || npm run -s build

TIMESTAMP=`cat build-timestamp.txt`
TIMETAG=`cat build-timetag.txt`
VERSION=`cat build-version.txt`

echo "Publishing build ($VERSION, $TIMESTAMP)..."

# TODO: Compare actual and previously published versions? (The git is checking for changes itself anyway.)

cd publish && \
  git pull && \
  rm -Rf * &&
  cp -Rfu ../build/* . &&
  git add . -Av && \
  git commit -am "Build v.$VERSION, $TIMESTAMP ($TIMETAG)" &&
  git push &&
  cd .. && \
  echo OK
