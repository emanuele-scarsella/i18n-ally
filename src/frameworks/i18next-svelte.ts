import I18nextFramework from './i18next'
import { LanguageId } from '~/utils'

class SvelteI18nextFramework extends I18nextFramework {
  id = 'svelte-i18next'
  display = 'Svelte I18next'

  detection = {
    packageJSON: {
      any: [
        'svelte-i18next',
      ],
      none: [
        'react-i18next',
      ],
    },
  }

  languageIds: LanguageId[] = [
    'javascript',
    'typescript',
    'javascriptreact',
    'typescriptreact',
    'ejs',
    'svelte',
  ]

  // for visualize the regex, you can use https://regexper.com/
  usageMatchRegex = [
    '(?:\\$i18n|(?:get)\\(\\s*i18n\\s*\\))\\s*\\.t\\(\\s*[\'"`]({key})[\'"`]',
    '(?:i18next|i18n|req)\\.t\\(\\s*[\'"`]({key})[\'"`]',
  ]
}

export default SvelteI18nextFramework
