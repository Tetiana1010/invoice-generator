import './App.css';
import UploadLogo from './components/UploadLogo';
import DataContainer from './components/DataContainer';
import SenderForm from './components/SenderForm';
import ReceiverForm from './components/ReceiverForm';
import NewItemForm from './components/NewItemForm';

function App() {
  return (

      <main className='p-5 print:p-0 flex flex-col gap-4'>
        <h1 className='text-4xl'>Invoice</h1>
        <div className='flex items-center justify-between'>
          <UploadLogo />
          <DataContainer />
        </div>
        <div className='grid grid-flow-col grid-cols-2'>
          <SenderForm />
          <ReceiverForm />
        </div>
        <NewItemForm />
      </main>
  );
}

export default App;
