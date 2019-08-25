// Zap Evaluator
import vivaEvaluator from '../index'

// Fixture
import { rentalViva, saleViva } from './fixtures/scenarios/success'

describe('Evaluation of a Property as Eligible for [VIVA]', () => {
  describe('[RENTAL]', () => {
    const rentalForViva = vivaEvaluator(rentalViva)

    it('[IS RENTAL OPERATION]', () => {
      expect(rentalForViva.isRentalOperation).toBeTruthy()
    })

    it('[HAS VALID RENTAL VALUE]', () => {
      expect(rentalForViva.validRentalValue).toBeTruthy()
    })

    it('[VALID MONTHLY CONDOO FEE ]', () => {
      expect(rentalForViva.validMonthlyCondoFee).toBeTruthy()
    })

    it('[MONTHLY CONDO FEE RULE]', () => {
      expect(rentalForViva.monthlyCondoFeeRule).toBeTruthy()
    })

    it('[IS ELIGIBLE FOR RENTAL]', () => {
      expect(rentalForViva.eligibleForRental).toBeTruthy()
    })

    it('[IS ELIGIBLE]', () => {
      expect(rentalForViva.isEligible).toBeTruthy()
    })
  })

  describe('[SALE]', () => {
    const saleForViva = vivaEvaluator(saleViva)

    it('[IS SALE OPERATION]', () => {
      expect(saleForViva.isSaleOperation).toBeTruthy()
    })

    it('[HAS VALID SALE VALUE]', () => {
      expect(saleForViva.validSaleValue).toBeTruthy()
    })

    it('[IS ELIGIBLE FOR SALE]', () => {
      expect(saleForViva.eligibleForSale).toBeTruthy()
    })

    it('[IS ELIGIBLE]', () => {
      expect(saleForViva.isEligible).toBeTruthy()
    })
  })
})
