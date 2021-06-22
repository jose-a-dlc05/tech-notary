import React from 'react'
import './tab-button.styles.scss'

function TabButton(props) {
  const {children} = props;
  return(
    <button className="tab-btn">{children}</button>
  )
}

export default TabButton;
