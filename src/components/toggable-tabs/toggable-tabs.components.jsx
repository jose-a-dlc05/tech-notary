import React from 'react'
import './toggable-tabs.styles.scss';

export default function ToggableTabs() {
  return (
    <div className="tab">
					<button className="tab-btn">Markdown</button>
					<button className="tab-btn">Preview</button>
					<button className="tab-btn">Publish</button>
				</div>
  )
}
