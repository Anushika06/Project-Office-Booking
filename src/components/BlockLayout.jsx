import React from 'react';
import Available from './Available'
import NotAvailable from './NotAvailable'
import Waiting from './Waiting'

function BlockLayout() {
  return (
    <div className="min-h-screen bg-[#0b0b1f] text-white px-10 py-8">
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-10 items-center">
        <Legend color="bg-green-500" label="Available" />
        <Legend color="bg-yellow-400" label="Will be available soon" />
        <Legend color="bg-gray-500" label="NotAvailable" />
      </div>

      <div className="grid grid-rows-12 gap-10">
        {/* Block B */}
        <div className="col-span-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">BLOCK B</h2>
          <div className="flex flex-wrap gap-4">
            <Available room="15" members="03" />
            <Waiting room="14" members="04" />
            <Available room="13" members="02" />
            <NotAvailable room="12" members="02" />
            <Available room="11" members="06" style={{ minHeight: '320px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`w-4 h-4 rounded-full ${color}`} />
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default BlockLayout;
