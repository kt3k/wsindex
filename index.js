#!/usr/bin/env node

const berber = require('berber')
const { join } = require('path')
const { readFileSync } = require('fs')
const pkg = require('./package')
const through1 = require('through1')
const layout1 = require('layout1')
const rename = require('gulp-rename')
const argv = require('minimist')(process.argv.slice(2))
const isBuild = argv._ && argv._[0] && argv._[0] === 'build'

const NAME = pkg.name
const configName = 'package.json'
const css = readFileSync(join(__dirname, 'tacit.min.css'))

berber.name(NAME)
berber.configName('package')

const defaultConfig = {
  dest: 'build',
  port: 9000
}

berber.loggerTitle('wsindex')

berber.on('config', config => {
  const wsindex = config.wsindex || {}
  const pages = wsindex.pages || []
  const data = {
    pkg,
    projectName: config.name,
    css,
    pages,
    isBuild
  }

  config = Object.assign({}, defaultConfig, wsindex)

  berber
    .asset(configName)
    .pipe(through1.obj(file =>
      Object.assign(file, { data: JSON.parse(file.contents) })))
    .pipe(layout1.nunjucks(join(__dirname, 'layout.njk'), { data }))
    .pipe(rename('index.html'))

  berber.dest(config.dest)
  berber.port(config.port)
})
