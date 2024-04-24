import React from 'react'
import ReactDOM from 'react-dom/client'
import TestComponents from './TestComponents'

// Imports the base CSS styling
import './base.css'

// Export Colors
export * from './Colors'

// Export Llane UI components
export * from './AppNavBar'
export * from './Box'
export * from './Button'
export * from './Divider'
export * from './Dropdown'
export * from './FlexContainer'
export * from './Footer'
export * from './GridContainer'
export * from './Header'
export * from './Image'
export * from './Input'
export * from './Icons'
export * from './Input'
export * from './LlaneUi'
export * from './Link'
export * from './Spacer'
export * from './Span'
export * from './TextArea'
export * from './Toggle'
export * from './Typography'
export * from './Wrapper'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TestComponents />
  </React.StrictMode>
);