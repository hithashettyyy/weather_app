
import './App.css'
import Inputs from './Components/Inputs'
import TimeAndLocation from './Components/TimeAndLocation'
import TempAndDetails from './Components/TempAndDetails'
import Forecast from './Components/Forecast'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'


function App() {

  const queryClient = new QueryClient()
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <Inputs />
        <TimeAndLocation />
        <TempAndDetails />
        <Forecast />
      </div>
    </QueryClientProvider>
  )
}

export default App
