// SimulationSettings.tsx
import * as React from "react";

const SimulationSettings = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md w-full max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-700">Simulation Configuration</h2>

      {/* Resource Schedule */}
      <div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">Resource Schedule</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm">Shift Name</label>
            <input type="text" className="input" placeholder="Default" />
          </div>
          <div>
            <label className="block text-sm">From</label>
            <input type="time" className="input" />
          </div>
          <div>
            <label className="block text-sm">To</label>
            <input type="time" className="input" />
          </div>
        </div>
      </div>

      {/* Task Configuration */}
      <div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">Task Settings</h3>
        <div className="space-y-3">
          <div>
            <label className="block text-sm">Task Name</label>
            <input type="text" className="input" placeholder="Choose recipe" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm">Distribution</label>
              <select className="input">
                <option>Fixed</option>
                <option>Normal</option>
              </select>
            </div>
            <div>
              <label className="block text-sm">Time Unit</label>
              <select className="input">
                <option>Seconds</option>
                <option>Minutes</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm">Fixed Cost</label>
              <input type="number" className="input" />
            </div>
            <div>
              <label className="block text-sm">Cost Threshold</label>
              <input type="number" className="input" />
            </div>
            <div>
              <label className="block text-sm">Duration Threshold</label>
              <input type="number" className="input" />
            </div>
            <div>
              <label className="block text-sm">Time Unit</label>
              <select className="input">
                <option>Seconds</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" id="generateLog" />
        <label htmlFor="generateLog" className="text-sm">Generate MXML log</label>
      </div>

      <button className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-800 transition">
        Start Simulation
      </button>
    </div>
  );
};

export default SimulationSettings;
