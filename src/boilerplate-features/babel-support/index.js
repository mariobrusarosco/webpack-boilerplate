import { generateBox } from '../utils'
import asyncAwait from './async-await-support'

console.log(asyncAwait)

class BoilerClass {
  instanceInfo = {
    description: "This text was created inside a Class, without a construction, unsing '@babel/plugin-proposal-class-properties'",
    firstname: 'Walter',
    surname: 'Heisenber',
    lastname: 'White',
  }
}

const obj = new BoilerClass()
const chainingOperatorResult = `${obj?.instanceInfo?.firstname} ${obj?.instanceInfo?.surname} ${obj?.instanceInfo?.lastname}`

const markup = `
	<div class='box babel-features'>
    <h2>Babel (ES new features) Support</h2>
    <p data-test='transform-class-proposal'>${obj.instanceInfo.description}</p>
    <p data-test='optional-chaining-operator-success'>Druglord: ${chainingOperatorResult}</p>
    <p data-test='optional-chaining-operator-success-fallback'>${obj?.instanceInfo?.jesse ? 'this part should be unreachable' : 'no undefined errors here'}</p>
	</div>
`

const test = async function() {
  await generateBox('babel-support', markup)
  console.log('babel box inserted')
}

test()

