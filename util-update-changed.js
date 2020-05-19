/** @desc Update changed datetag file
 *  @changed 2020.05.19, 19:40
 */

const changedFile = 'changed-tag.txt'

const fs = require('fs')
const dateformat = require('dateformat')

const dateTagFormat = 'yymmdd-HHMM'
const now = new Date()
const changedTag = dateformat(now, dateTagFormat)

// console.log('Changed date:', changedTag)
console.log('Updating build tag file (' + changedFile + ') with ' + changedTag + '...')
fs.writeFileSync(changedFile, changedTag, 'utf8')
console.log('OK')
