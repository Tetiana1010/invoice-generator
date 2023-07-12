import { useState, useEffect } from 'react';
import { PhotoIcon, TrashIcon } from '@heroicons/react/24/solid';

export default function Logo() {
  const [selectedLogo, setSelectedLogo] = useState();
  const [previewURL, setPreviewURL] = useState('');

  useEffect(() => {
    const storedLogo = localStorage.getItem('uploadedLogo');
    if (storedLogo) {
        setPreviewURL(storedLogo);
    }
  }, []);

  const handleLogoChange = (event) => {
    const logo = event.target.files[0];
    setSelectedLogo(logo);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
      localStorage.setItem('uploadedLogo', reader.result);
    };
    reader.readAsDataURL(logo);
  }

  function handleLogoRemove() {
    setSelectedLogo('');
    localStorage.removeItem('uploadedLogo');
  }

  return (
    <form className='col-span-3 flex w-full'>
      <div className="flex rounded-lg border border-dashed border-white hover:border-gray-900/25 p-6">
        {previewURL ? (
          <div className="flex justify-start gap-4">
            <img src={previewURL} alt="logo" width="100px" height="auto" />
            <button onClick={handleLogoRemove} className='print:hidden'>
              <TrashIcon className="mx-auto h-8 w-8 text-red-300" aria-hidden="true" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center text-center print:hidden">
            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="logo-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 hover:text-green-500"
              >
                <span>Upload a logo</span>
                <input
                  id="logo-upload"
                  name="logo-upload"
                  type="file"
                  className="sr-only"
                  accept="image/png, image/jpeg"
                  onChange={handleLogoChange}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG</p>
          </div>
        )}
      </div>
    </form>
  );
}
