import fs from 'fs'
import { retext } from 'retext'
import { reporter } from 'vfile-reporter'
import retextSentenceSpacing from './example.js'

const buffer = fs.readFileSync('example.md')

retext()
  .use(retextSentenceSpacing)
  .process(buffer)
  .then((file) => {
    console.error(reporter(file))
  })
