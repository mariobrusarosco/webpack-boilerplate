// CONSTANTS
const { BUSINESS } = APP || global.APP
const { ZAP, VIVA_REAL } = BUSINESS

// Evaluations
import evaluateForZap from './zapEvaluation'
import evaluateForViva from './vivaEvaluation'

const evaluateProperties = properties => {
  const initialAccumulator = { vivaReal: [], zap: [], all: [] }

  return properties.reduce((gradeList, property, i) => {
    const zapEvaluation = evaluateForZap(property)
    const vivaEvaluation = evaluateForViva(property)

    if (zapEvaluation.isEligible) {
      property[ZAP] = true // Set the property as eligible to ZAP
      gradeList[ZAP] = [...gradeList[ZAP], property] // Add to the group with all Zap Properties
      gradeList['all'] = [...gradeList['all'], property] // Add to the group all Properties
    } else if (vivaEvaluation.isEligible) {
      property[VIVA_REAL] = true // Set the property as eligible to VIVA_REAL
      gradeList[VIVA_REAL] = [...gradeList[VIVA_REAL], property] // Add to the group with VIVA_REAL Properties
      gradeList['all'] = [...gradeList['all'], property] // Add to the group all Properties
    }

    return gradeList
  }, initialAccumulator)
}

export default evaluateProperties
