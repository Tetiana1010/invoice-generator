import './App.css';
import UploadLogo from './components/UploadLogo';
import DataContainer from './components/DataContainer';
import AddItem from './components/AddItem';

function App() {
  return (

      <main className='p-5 flex flex-col gap-4'>
        <h1 className='text-4xl'>Invoice</h1>
        <div className='flex items-center justify-between'>
          <UploadLogo />
          <DataContainer />
        </div>
        <AddItem />
      </main>
  );
}

export default App;
