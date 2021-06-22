import React from 'react';
import './tab-content.styles.scss';

function TabContent(props) {
  const {name, component} = props;
  return (
    <div>
      <h3>{name}</h3>
      {component}
    </div>
  )
}

export default TabContent;
