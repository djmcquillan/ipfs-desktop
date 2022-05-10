const os = require('os')
const path = require('path')
const fs = require('fs-extra')
const packageJson = require('../../package.json')

module.exports = Object.freeze({
  IS_MAC: os.platform() === 'darwin',
  IS_WIN: os.platform() === 'win32',
  IS_APPIMAGE: typeof process.env.APPIMAGE !== 'undefined',
  VERSION: packageJson.version,
  ELECTRON_VERSION: process.versions.electron,
  GO_IPFS_VERSION: packageJson.dependencies['go-ipfs'],
  COUNTLY_KEY: process.env.NODE_ENV === 'development'
    ? '6b00e04fa5370b1ce361d2f24a09c74254eee382'
    : '47fbb3db3426d2ae32b3b65fe40c564063d8b55d',
  IPFS_LOGO_URI: 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(__dirname, '../../assets/icons/ipfs.svg')).toString('base64')
})
