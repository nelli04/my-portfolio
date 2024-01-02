import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import { ThemeProvider } from '@/providers/theme/theme-provider'
import ReactDOM from 'react-dom/client'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
