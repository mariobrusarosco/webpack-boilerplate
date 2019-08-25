// Zap Evaluator
import zapEvaluator from '../index'

// Fixture
import { rentalZap, saleZap } from './fixtures/scenarios/success'

describe('Evaluation of a Property as Eligible for [ZAP]', () => {
  describe('[RENTAL]', () => {
    const rentalForZap = zapEvaluator(rentalZap)

    it('[IS RENTAL OPERATION]', () => {
      expect(rentalForZap.isRentalOperation).toBeTruthy()
    })

    it('[HAS VALID RENTAL VALUE]', () => {
      expect(rentalForZap.validRentalValue).toBeTruthy()
    })

    it('[IS ELIGIBLE FOR RENTAL]', () => {
      expect(rentalForZap.eligibleForRental).toBeTruthy()
    })

    it('[IS ELIGIBLE]', () => {
      expect(rentalForZap.isEligible).toBeTruthy()
    })
  })

  describe('[SALE]', () => {
    const saleForZap = zapEvaluator(saleZap)

    it('[IS SALE OPERATION]', () => {
      expect(saleForZap.isSaleOperation).toBeTruthy()
    })

    it('[HAS VALID SALE VALUE]', () => {
      expect(saleForZap.validSaleValue).toBeTruthy()
    })

    it('[HAS USABLE AREA]', () => {
      expect(saleForZap.hasUsableAreas).toBeTruthy()
    })

    it('[SALE ZAP RULE]', () => {
      expect(saleForZap.zapUsableAreasRule).toBeTruthy()
    })

    it('[IS ELIGIBLE FOR SALE]', () => {
      expect(saleForZap.eligibleForSale).toBeTruthy()
    })

    it('[IS ELIGIBLE]', () => {
      expect(saleForZap.isEligible).toBeTruthy()
    })
  })
})
