import React from 'react'
import './toggable-tabs.styles.scss';
import TabButton from './toggable-tab-elements/tab-button.components';
import TabContent from './toggable-tab-elements/tab-content.components';

export default function ToggableTabs({tabObjects}) {
  return (
    <div className="tab">
      {
        tabObjects.map(tabObject => {
        return <TabButton>{tabObject.name}</TabButton>
        })
      }
      {
        tabObjects.map(tabObject => {
          return <TabContent {...tabObject}/>
        })
      }
		</div>
  )
}


