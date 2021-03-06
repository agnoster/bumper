var fs = require('fs')
  , semver = require('semver')

function updatePackage(cb) {
  fs.readFile('package.json', 'utf8', function(err, data) {
    var package

    if (err) return cb(err)

    try {
      package = JSON.parse(data)

      if (!package || !package.version) {
        throw new Error("Bad package.json")
      }
    } catch (err) {
      return cb(err)
    }

    var current = package.version
      , next = semver.inc(current, release)
    
    if (!semver.valid(next)) die("Invalid release type '" + release + "'")

    next = next.replace(/-0$/, '')

    data = data.replace(/("version"\s*:\s*")[^"]+"/, '$1' + next + '"')

    fs.writeFile('package.json', data, 'utf8', function(err) {
      cb(err, next)
    })
  })
}

function die(msg) {
  process.stderr.write(msg + "\n")
  process.exit(1)
}


var release = process.argv[2]

updatePackage(function(err, next) {
  if (err) die("Could not bump version: " + err)

  console.log('v' + next)
})

