let {exec} = require('child_process')

let tag = 'latest'
let origin = 'master'
process.argv.forEach(item => {
  if (/^tag=/.test(item)) {
    item = item.replace(/\s/g, '') // 去除空格
    tag = item.replace(/^tag=/, '')
  } else if (/^origin=/) {
    origin = item.replace(/^origin=/, '')
  }
})
let runCommand = async function (command) {
  return new Promise((resolve, reject) => {
    const ls = exec(command, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
    ls.stdout.on('data', (data) => {
      console.log(data);
    });
  })
}
let commands = [
  'git add -A',
  `git push origin ${origin}`,
  `npm publish --tag ${tag}`,
  'cnpm sync npm-dyq-test'
]
Promise.all(commands.map(command => {
  return runCommand(command)
})).then(() => {
  console.log('>>>>>>>>>>>>over')
})
