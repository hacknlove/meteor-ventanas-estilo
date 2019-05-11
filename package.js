/* global Package */

Package.describe({
  name: 'hacknlove:estilo',
  version: '1.0.0',
  summary: 'less style to use with hacknlove:ventanas',
  git: 'https://github.com/hacknlove/meteor-ventanas',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.8.0.2')
  api.use('ecmascript')
  api.use('less', 'client')

  api.addFiles('./0-normalize.css')
  api.addFiles('./estilo.js', 'client')
})
