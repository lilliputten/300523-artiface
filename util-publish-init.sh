#!/bin/sh
# @desc Initialize publish syncing repository
# @changed 2020.10.05, 23:57

# NOTE: For uninstall/reinitialize publish submodule, use:
# ```shell
# rm -Rf publish .gitmodules .git/modules/publish
# ```

# Import config variables (expected variable `$DIST_REPO`)...
# DIST_REPO="git@github.com:lilliputten/YouFaceDist.git"
test -f "./util-config.sh" && . "./util-config.sh"
test -f "./util-config-local.sh" && . "./util-config-local.sh"

if [ -d publish ]; then
  echo "Publish folder already exists!"
  echo "Remove it first for re-initializing"
  echo "using 'rm -Rf publish .gitmodules .git/modules/publish' command."
  exit # Successfull exit
  # exit 1 # Exit with error code
  # echo "Uninstalling submodule..." # Alterative behavior
  # rm -Rf publish .gitmodules
fi

echo "Init publish submodule with repo: $DIST_REPO ..."
touch .gitmodules && \
  git submodule add -f "$DIST_REPO" publish && \
  git rm --cached -f publish .gitmodules && \
  echo OK
