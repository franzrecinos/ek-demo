import React, { useReducer, useEffect, useState } from 'react'
import axios from 'axios'

// STORE
import { init, reducer } from '../reducers'

// UTIL
import { apiKey } from '../util/constants'

// COMPONENTS
import AddressForm from '../components/AddressForm'
import ResponseDisplay from '../components/ResponseDisplay'

function MainContainer() {
  const [formValues, setFormValues] = useState(null)
  const [{ error, busy, property }, dispatch] = useReducer(reducer, init)

  useEffect(() => {
    if (formValues) {
      const { streetAddress, city, state, zipCode } = formValues
      axios
        .get(
          `https://api.estated.com/property/v3?token=${apiKey}&address=${streetAddress}&city=${city}&state=${state}&zip=${zipCode}`
        )
        .then(response => {
          const { data, status } = response
          if (data.success && status === 200) {
            dispatch({
              type: 'PROPERTY_FETCH_FULFILLED',
              payload: data.properties[0],
            })
          } else if (!data.success) {
            dispatch({
              type: 'PROPERTY_FETCH_REJECTED',
              payload: 'An error occured',
            })
          }
        })
        .catch(err =>
          dispatch({ type: 'PROPERTY_FETCH_REJECTED', payload: err })
        )
    }
  }, [formValues])

  const onSubmit = values => {
    const { streetAddress, city, state, zipCode } = values
    if (streetAddress !== '' && city !== '' && state !== '' && zipCode !== '') {
      dispatch({ type: 'PROPERTY_FETCH' })
      setFormValues(values)
    }
  }
  return (
    <div className="container">
      <AddressForm onSubmit={onSubmit} />
      <ResponseDisplay busy={busy} error={error} property={property} />
    </div>
  )
}

export default MainContainer
