// Zap Evaluator
import zapEvaluator from '../index'

// Fixture
import { invalidRentalZap, invalidSaleZap } from './fixtures/scenarios/failure'

describe('Evaluation of a Property as not Eligible for [ZAP]', () => {
  describe('[RENTAL]', () => {
    const invalidRentalForZap = zapEvaluator(invalidRentalZap)

    it('[MUST FAIL CAUSE IS NOT A RENTAL OPERATION]', () => {
      expect(invalidRentalForZap.isRentalOperation).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS HAS NOT VALID RENTAL VALUE]', () => {
      expect(invalidRentalForZap.validRentalValue).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS NOT IS ELIGIBLE FOR RENTAL]', () => {
      expect(invalidRentalForZap.eligibleForRental).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS NOT IS ELIGIBLE]', () => {
      expect(invalidRentalForZap.isEligible).not.toBeTruthy()
    })
  })

  describe('[SALE]', () => {
    const saleForZap = zapEvaluator(invalidSaleZap)

    it('[MUST FAIL CAUSE IS NOT A SALE OPERATION]]', () => {
      expect(saleForZap.isSaleOperation).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS HAS NOT VALID SALE VALUE]', () => {
      expect(saleForZap.validSaleValue).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS HAS NOT AN USABLE AREA]', () => {
      expect(saleForZap.hasUsableAreas).not.toBeTruthy()
    })

    it('[MUST FAIL CAUSE IS DOES NOT FILL A SALE ZAP RULE]', () => {
      expect(saleForZap.zapUsableAreasRule).not.toBeTruthy()
    })

    it('[IS ELIGIBLE FOR SALE]', () => {
      expect(saleForZap.eligibleForSale).not.toBeTruthy()
    })

    it('[IS ELIGIBLE]', () => {
      expect(saleForZap.isEligible).not.toBeTruthy()
    })
  })
})
