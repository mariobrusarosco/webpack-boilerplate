import { BoilerClass } from './class-support'

const obj = new BoilerClass()
const chainingResult = `${obj?.instanceInfo?.firstname} ${obj?.instanceInfo?.surname} ${obj?.instanceInfo?.lastname}`

const markup = `
  <h3>Optional Chaining Operatpr</h3>
  <p data-test='optional-chaining-operator-success'>Druglord: ${chainingResult}</p>
  <p data-test='optional-chaining-operator-success-fallback'>${obj?.instanceInfo?.jesse ? 'this part should be unreachable' : 'no undefined errors here'}</p>
`

export default markup
