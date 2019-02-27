import { generateBox } from '../utils'
import { markup as classMarkup } from './class-support'
import optionalChaningOperatorMarkup from './optional-chaining-operator'
import { markup as asyncAwaitMarkup, attachAsyncAwait } from './async-await-support'

(async () => {
  await generateBox('babel-support',
    `
    <div class='box babel-features'>
      <h2>Babel (ES new features) Support</h2>
      ${classMarkup}
      ${asyncAwaitMarkup}
      ${optionalChaningOperatorMarkup}
    </div>
  `)

  attachAsyncAwait()
})()
