import spanish from './es.json'
import english from './en.json'

export const getI18N = (currentLocale) => {
  if (currentLocale === 'es') return spanish
  else return english
}