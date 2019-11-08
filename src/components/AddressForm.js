import React from 'react'
import { useFormik } from 'formik'

// `UTIL`
import { states } from '../util/constants'

function AddressForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    // validate,
    onSubmit: values => onSubmit(values),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="field">
        <label className="label">Street Address:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Street Address"
            id="streetAddress"
            onChange={formik.handleChange}
            value={formik.values.streetAddress}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">City:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="City"
            id="city"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">State:</label>
        <div className="control">
          <div className="select">
            <select
              id="state"
              onChange={formik.handleChange}
              value={formik.values.state}
            >
              {states.map(state => (
                <option key={state.value} value={state.value}>
                  {state.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Zip Code:</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Zip Code"
            onChange={formik.handleChange}
            id="zipCode"
            value={formik.values.zipCode}
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddressForm
