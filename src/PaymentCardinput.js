import React from 'react'
import MaskedInput from 'react-text-mask'

const PaymentCardInput = () => {
    return (
        <MaskedInput
            mask={[ /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, /\d/,]}
            className="form-control"
            placeholder="Enter the card number"
            guide={false}
            id="my-input-id2"
            onBlur={() => { }}
            onChange={() => { }}
        />
    )
}
export default PaymentCardInput