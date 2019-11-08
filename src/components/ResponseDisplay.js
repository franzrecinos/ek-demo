import React from 'react'

function ResponseDisplay({ busy, error, property }) {
  if (busy) {
    return <pre>Loading...</pre>
  }
  return (
    <div className="box">
      <pre>
        {!error && property ? (
          <code>{JSON.stringify(property, null, 2)}</code>
        ) : (
          error
        )}
      </pre>
    </div>
  )
}

export default ResponseDisplay
