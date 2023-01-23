
import './App.css';
import LandingPage from './components/LandingPage';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <LandingPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
