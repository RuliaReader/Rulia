/* eslint-disable @typescript-eslint/no-var-requires */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const ARCHIVE_FILE_NAME = 'bilibili-manga.zip'

main().catch(error => {
  console.error(`Error in main function: ${error}`)
})

function deleteFolderRecursive (directory) {
  if (fs.existsSync(directory)) {
    for (const entry of fs.readdirSync(directory)) {
      const curPath = path.join(directory, entry)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    }
    fs.rmdirSync(directory)
  }
}

async function main () {
  // Step 1: Execute tsc
  try {
    execSync('tsc')
    console.log('tsc build completed.')
  } catch (error) {
    console.error(`Error during tsc: ${error}`)
    return
  }

  // Step 2: Copy files
  const filesToCopy = [
    ['src/icon.jpg', 'dist/icon.jpg'],
    ['src/package.json', 'dist/package.json'],
    ['README.md', 'dist/README.md']
  ]
  for (const [src, dist] of filesToCopy) {
    fs.copyFileSync(src, dist)
  }
  console.log('Files copied.')

  // Step 3: Zip files
  const output = fs.createWriteStream(`dist/${ARCHIVE_FILE_NAME}`)
  const archive = archiver('zip', {
    zlib: { level: 9 }
  })

  archive.on('error', (err) => {
    throw err
  })

  const archiveCompletion = new Promise((resolve, reject) => {
    output.on('close', resolve)
    output.on('error', reject)
  })

  archive.pipe(output)

  const filesToZip = ['icon.jpg', 'package.json', 'README.md', 'index.js']
  filesToZip.forEach(file => {
    archive.append(fs.createReadStream(`dist/${file}`), { name: file })
  })

  await archive.finalize()

  await archiveCompletion
  console.log('Files zipped.')

  // Step 4: Delete all files in dist except package.zip
  const filesInDist = fs.readdirSync('dist')
  filesInDist.forEach(filename => {
    const filePath = path.resolve('dist', filename)
    if (filename !== ARCHIVE_FILE_NAME) {
      if (fs.lstatSync(filePath).isDirectory()) {
        deleteFolderRecursive(filePath)
      } else {
        fs.unlinkSync(filePath)
      }
    }
  })
  console.log('Other files in dist deleted.')
}
