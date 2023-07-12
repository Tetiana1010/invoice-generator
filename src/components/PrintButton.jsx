import React from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintButton = ({ contentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });

  return (
    <button 
      onClick={handlePrint} 
      className='"px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 print:hidden'>
        Print Page to PDF
    </button>
  );
};

export default PrintButton;

