import { FunctionComponent, useState } from 'react'
import OcCheckoutBilling from './OcCheckoutBilling'
import OcCheckoutPayment from './OcCheckoutPayment'
import OcCheckoutReview from './OcCheckoutReview'
import OcCheckoutShipping from './OcCheckoutShipping'
import OcCheckoutSummary from './OcCheckoutSummary'

export interface OcCheckoutStepProps {
  onNext: () => void
  onPrev: () => void
}

const OcCheckout: FunctionComponent<{ onSubmitted: any }> = ({ onSubmitted }) => {
  const [step, setStep] = useState(0)

  const handlePrevClick = () => {
    setStep((s) => s - 1)
  }

  const handleNextClick = () => {
    setStep((s) => s + 1)
  }

  return (
    <div>
      {step === 0 && <OcCheckoutShipping onPrev={handlePrevClick} onNext={handleNextClick} />}
      {step === 1 && <OcCheckoutBilling onPrev={handlePrevClick} onNext={handleNextClick} />}
      {step === 2 && <OcCheckoutPayment onPrev={handlePrevClick} onNext={handleNextClick} />}
      {step === 3 && (
        <OcCheckoutReview
          onPrev={handlePrevClick}
          onNext={handleNextClick}
          onOrderSubmitted={onSubmitted}
        />
      )}
    </div>
  )
}

export default OcCheckout
