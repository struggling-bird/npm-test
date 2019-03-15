let fs = require('fs')
let path = require('path')
let publish = async function () {
  let data = await fs.promises.readFile(path.resolve(__dirname, './package.json'))
  data = JSON.parse(data.toString())
  const version = data.version
  console.log(version, process.execArgv, process.argv)
}

publish()
