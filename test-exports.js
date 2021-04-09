const WebUiCore = require('./build/bundle.js');
console.log('Build exports tests:\n'
  + 'typeof WebUiCore: ' + typeof WebUiCore + '\n'
  + 'typeof WebUiCore.config (must be object): ' + typeof WebUiCore.config + '\n'
  + 'typeof WebUiCore.ModalsContainer (must be function): ' + typeof WebUiCore.ModalsContainer + '\n'
);
debugger;
