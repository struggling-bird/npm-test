let {execSync} = require('child_process')

let tag = 'latest'
let origin = 'master'
let version = 'patch'
process.argv.forEach(item => {
  if (/=/.test(item)) {
    let key = item.split('=')[0]
    let value = item.split('=')[1]
    switch (key) {
      case 'tag':
        tag = value
        break
      case 'origin':
        origin = value
        break
      case 'version':
        version = value
        break
    }
  }
})
let commands = [
  'git add -A',
  'git commit -m "update"',
  `npm version ${version}`,
  `git push origin ${origin}`,
  `npm publish --tag ${tag}`,
  'cnpm sync npm-dyq-test'
]
commands.forEach(command => {
  console.log(execSync(command).toString())
})
