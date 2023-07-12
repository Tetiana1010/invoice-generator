import './App.css';
import { useRef } from 'react';
import UploadLogo from './components/UploadLogo';
import DataContainer from './components/DataContainer';
import SenderForm from './components/SenderForm';
import ReceiverForm from './components/ReceiverForm';
import NewItemForm from './components/NewItemForm';
import PrintButton from './components/PrintButton';

function App() {
  const contentRef = useRef();
  return (
    <main className='grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-8 p-3 sm:p-10 justify-between print:p-0 overflow-y-hidden' ref={contentRef}>
      <h1 className='flex text-4xl col-span-full'>Invoice</h1>
        <UploadLogo />
        <DataContainer />
        <SenderForm />
        <ReceiverForm />
        <NewItemForm />
        <PrintButton contentRef={contentRef}/>
    </main>
  );
}

export default App;
