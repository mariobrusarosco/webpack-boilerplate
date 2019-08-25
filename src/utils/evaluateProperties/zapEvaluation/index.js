// Vendors
import { pathOr } from 'ramda'

// Helpers and Utils
import getPricingInfos from '../../getPricingInfos'
import isEligible from '../isElegible'

// Utils and Helpers
import parsePropertyData from '../../parsePropertyData'

const zapEvaluator = property => {
  const parsedProperty = parsePropertyData(property)

  const { businessType, rentalTotalPrice, price } = getPricingInfos(parsedProperty)

  const lat = pathOr(false, ['address', 'geoLocation', 'location', 'lat'], parsedProperty)
  const lon = pathOr(false, ['address', 'geoLocation', 'location', 'lon'], parsedProperty)

  const usableAreas = pathOr(0, ['usableAreas'], parsedProperty)

  // Coordinates Evaluation
  const hasValidCoordinates = !!lat && !!lon

  // UsableAreas Evaluation
  const hasUsableAreas = usableAreas > 0
  const priceBySquareMeter = usableAreas ? Math.round(price / usableAreas) : false
  const zapUsableAreasRule = usableAreas && priceBySquareMeter > 3500

  // Sale Evaluation
  const isSaleOperation = businessType === 'sale'
  const validSaleValue = price >= 600000
  const eligibleForSale = isEligible([
    isSaleOperation,
    validSaleValue,
    zapUsableAreasRule
  ])

  // Rental Evaluation
  const isRentalOperation = businessType === 'rental'
  const validRentalValue = rentalTotalPrice >= 3500
  const eligibleForRental = isEligible([isRentalOperation, validRentalValue])

  // Mandatory Evaluation
  const mandatoryConditions = isEligible([
    eligibleForRental || eligibleForSale,
    hasValidCoordinates
    // parsedProperty.validBoundingBox
  ])

  return {
    isRentalOperation,
    validRentalValue,
    eligibleForRental,
    isSaleOperation,
    validSaleValue,
    hasUsableAreas,
    zapUsableAreasRule,
    eligibleForSale,
    hasValidCoordinates,
    isEligible: mandatoryConditions
  }
}

export default zapEvaluator
