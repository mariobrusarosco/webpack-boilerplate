// Vendor
import { pipe } from 'ramda'

// CONSTANTS
const { BUSINESS } = APP
const { WALTER, JESSE } = BUSINESS

// Evaluations
import evaluateForWalter from './walterEvaluation'
// import evaluateForJesse from './jesseEvaluation'

const evaluateItems = items => {
  return [items[0]]
  // Using reduce
  // const initialAccumulator = { [WALTER]: [], [JESSE]: [], all: [] }

  // return items.reduce((gradeList, item, i) => {
  //   const walterEvaluation = evaluateForWalter(item)
  //   const jesseEvaluation = evaluateForJesse(item)

  //   // if (walterEvaluation.isValid) {
  //   //   item[WALTER] = true
  //   gradeList[WALTER] = [...gradeList[ZAP], item]
  // }
  // if (jesseEvaluation.isValid) {
  //   item[JESSE] = true
  //   gradeList[JESSE] = [...gradeList[JESSE], item]
  // }

  // gradeList['all'] = [...gradeList['all'], item]

  //   return [...gradeList, evaluatedItem ]
  // }, initialAccumulator)

  // Using ForEach
  // const walter = []
  // const jesse = []

  // items.forEach(item => {
  //   const evaluatedItem = evaluate(item)

  //   if(evaluatedItem.isWalter) {
  //     walter = [...walter, item]
  //   }

  //   if(evaluateItem.isJesse) {
  //     jesse = [...jesse, item]
  //   }
  // })

  // return { walter, jesse }
}

export default evaluateItems
