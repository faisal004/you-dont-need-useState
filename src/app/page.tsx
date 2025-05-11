"use client"
import { useState } from "react";
import CardsWithStateInput from "./_components/state";
import CardsWithRefInput from "./_components/ref";

export default function Home() {
  const [activeTab, setActiveTab] = useState('useState');
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4 border-b">
        <button 
          className={`px-4 py-2 mr-2 ${activeTab === 'useState' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('useState')}
        >
          useState Example
        </button>
        <button 
          className={`px-4 py-2 ${activeTab === 'useRef' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('useRef')}
        >
          useRef Example
        </button>
      </div>
      
      {activeTab === 'useState' ? <CardsWithStateInput /> : <CardsWithRefInput />}
    </div>
  );
}
