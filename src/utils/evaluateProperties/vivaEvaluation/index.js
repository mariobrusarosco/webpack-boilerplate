// Vendors
import { pathOr } from 'ramda'

// Helpers and Utils
import getPricingInfos from '../../getPricingInfos'
import isEligible from '../isElegible'

// Utils and Helpers
import parsePropertyData from '../../parsePropertyData'

export const vivaEvaluator = property => {
  const parsedProperty = parsePropertyData(property)

  const { businessType, rentalTotalPrice, price, monthlyCondoFee } = getPricingInfos(
    parsedProperty
  )

  const lat = pathOr(false, ['address', 'geoLocation', 'location', 'lat'], parsedProperty)
  const lon = pathOr(false, ['address', 'geoLocation', 'location', 'lon'], parsedProperty)

  // Coordinates Evaluation
  const hasValidCoordinates = !!lat && !!lon

  // Sale Evaluation
  const isSaleOperation = businessType === 'sale'
  const validSaleValue = price <= 700000
  const eligibleForSale = isEligible([isSaleOperation, validSaleValue])

  // Rental Evaluation and Condo Evaluation
  const isRentalOperation = businessType === 'rental'
  const validRentalValue = rentalTotalPrice <= 4000
  const validMonthlyCondoFee = !!monthlyCondoFee
  const percentageOfRental = (monthlyCondoFee / rentalTotalPrice) * 100
  const monthlyCondoFeeRule = validMonthlyCondoFee && percentageOfRental < 30

  const eligibleForRental = isEligible([
    isRentalOperation,
    validRentalValue,
    validMonthlyCondoFee,
    monthlyCondoFeeRule
  ])

  // Mandatory Evaluation
  const mandatoryConditions = isEligible([
    eligibleForRental || eligibleForSale,
    hasValidCoordinates
    // parsedProperty.validBoundingBox
  ])

  return {
    isRentalOperation,
    validRentalValue,
    validMonthlyCondoFee,
    monthlyCondoFeeRule,
    eligibleForRental,
    isSaleOperation,
    validSaleValue,
    eligibleForSale,
    isEligible: mandatoryConditions
  }
}

export default vivaEvaluator
