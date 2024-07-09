import React from 'react'

function Alerts(prop) {
    const capitalize=(word)=> {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        
    }
  return (
    prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(prop.alert.type)}</strong>:{prop.alert.message}
    
        </div>
  )
}

export default Alerts
