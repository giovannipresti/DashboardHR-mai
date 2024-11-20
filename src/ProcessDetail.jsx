// ProcessDetail.jsx
import React, { useState } from "react";
import { Card } from "./UI";
import { Settings } from "lucide-react";
import DetailModal from "./DetailModal";

const ProcessDetail = ({ process }) => {
  const [showModal, setShowModal] = useState(false);
  const calculateTotalFTE = (subProcesses) => {
    return subProcesses.reduce((acc, curr) => acc + curr.fte, 0);
  };

  return (
    <>
      <Card className="shadow-lg mb-6">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                {process.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium">{process.name}</h3>
                <p className="text-sm text-gray-600">{process.calculation}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <span className="text-sm text-gray-600">Current:</span>
                <span className="ml-2 font-medium">{process.current} FTE</span>
              </div>
              <div className="text-right">
                <span className="text-sm text-gray-600">Required:</span>
                <span className="ml-2 font-medium">{process.required} FTE</span>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="ml-4 p-2 text-gray-400 hover:text-gray-600"
                title="View dimensioning details"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                      Activity
                    </th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">
                      Annual Hours
                    </th>
                    <th className="px-4 py-2 text-right text-sm font-medium text-gray-600">
                      FTE
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {process.subProcesses.map((sub, idx) => (
                    <tr key={idx} className="border-t">
                      <td className="px-4 py-2 text-sm text-gray-900">
                        {sub.name}
                      </td>
                      <td className="px-4 py-2 text-sm text-right text-gray-600">
                        {sub.hours}
                      </td>
                      <td className="px-4 py-2 text-sm text-right font-medium">
                        {sub.fte.toFixed(2)}
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-600">
                        {sub.notes}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 font-medium">Total Required</td>
                    <td className="px-4 py-2 text-right font-medium">
                      {process.subProcesses.reduce(
                        (acc, curr) => acc + curr.hours,
                        0
                      )}
                    </td>
                    <td className="px-4 py-2 text-right font-medium">
                      {calculateTotalFTE(process.subProcesses).toFixed(2)}
                    </td>
                    <td className="px-4 py-2"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <DetailModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        process={process}
      />
    </>
  );
};

export default ProcessDetail;
