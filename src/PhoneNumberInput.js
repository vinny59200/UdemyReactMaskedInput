import React from 'react'
import MaskedInput from 'react-text-mask'

const PhoneNumberInput = () => {
    return (
        <MaskedInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            className="form-control"
            placeholder="Enter a phone number"
            guide={false}
            id="my-input-id"
            onBlur={() => { }}
            onChange={() => { }}
        />
    )
}
export default PhoneNumberInput