import { createRoot } from 'react-dom/client'
import App from './App'
import Root from 'Root'

import 'index.css'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Root>
    <App />
  </Root>
)
