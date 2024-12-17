import Prism from 'prismjs'

import 'prismjs/components/prism-typescript'

import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

Prism.hooks.add('before-highlight', (env) => {
  if (env.code) {
    env.code = env.code.replace(/^\s+/gm, '')
  }
})
Prism.plugins.NormalizeWhitespace.setDefaults({
  'break-lines': 80,
})

export default defineNuxtPlugin(() => {
  return {
    provide: {
      prism: Prism,
    },
  }
})
