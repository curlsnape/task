import { Provider } from 'react-redux';
import { store } from './store';
import TableComponent from './components/TableComponent';
import DataForm from './components/DataForm';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Advanced Table Component</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <DataForm />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TableComponent />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;