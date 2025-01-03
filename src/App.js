import React, { useState } from 'react';
import Map from './components/Map/Map';
import DistrictInfo from './components/DistrictInfo';
import ElectionInfo from './components/ElectionInfo';
import Navbar from './components/Navbar';

const API_BASE_URL = 'http://localhost:3001/api';

function App() {
    const [activeView, setActiveView] = useState('house');
    const [selectedDistrictData, setSelectedDistrictData] = useState(null);
    const [selectedDistrictCandidates, setSelectedDistrictCandidates] = useState([]);
    const [selectedDistrictElection, setSelectedDistrictElection] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDistrictData = async (districtNumber) => {
        try {
            const response = await fetch(`${API_BASE_URL}/house/districts/${districtNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch district data');
            }
            const data = await response.json();
            // The election data is now included in the district response
            const { election, ...districtInfo } = data;
            return { districtInfo, election };
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const fetchCandidateData = async (districtNumber) => {
        try {
            const response = await fetch(`${API_BASE_URL}/house/candidates/${districtNumber}`);
            if (!response.ok) {
                throw new Error('Failed to fetch candidate data');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    const handleDistrictSelect = async (districtNumber) => {
        setLoading(true);
        setError(null);

        try {
            // Fetch both district and candidate data
            const { districtInfo, election } = await fetchDistrictData(districtNumber);
            const candidateData = await fetchCandidateData(districtNumber);

            setSelectedDistrictData(districtInfo);
            setSelectedDistrictCandidates(candidateData);
            setSelectedDistrictElection(election);
        } catch (error) {
            setError('Failed to fetch district information. Please try again later.');
            console.error('Error fetching district data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar onDistrictSelect={handleDistrictSelect} />

            <div className="flex p-4">
                {/* Left panel - District and Candidate Info */}
                <div className="w-1/2 p-4 bg-white rounded-lg shadow">
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                            {error}
                        </div>
                    )}
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                        </div>
                    ) : (
                        <DistrictInfo
                            selectedDistrict={selectedDistrictData?.District_Number}
                            districtData={selectedDistrictData}
                            candidateData={selectedDistrictCandidates}
                        />
                    )}
                </div>

                {/* Right panel - Map and Election Info */}
                <div className="w-1/2 p-4 flex flex-col">
                    {/* Toggle buttons */}
                    <div className="flex space-x-4 mb-4">
                        <button
                            onClick={() => setActiveView('house')}
                            className={`px-4 py-2 rounded-lg font-medium shadow transition
                                ${activeView === 'house'
                                ? 'bg-yellow-500 text-white'
                                : 'bg-blue-300 text-white hover:bg-blue-50'}`}
                        >
                            House Districts
                        </button>
                        <button
                            onClick={() => setActiveView('senate')}
                            className={`px-4 py-2 rounded-lg font-medium shadow transition
                                ${activeView === 'senate'
                                ? 'bg-yellow-500 text-white'
                                : 'bg-blue-300 text-white hover:bg-blue-50'}`}
                        >
                            Senate Race
                        </button>
                    </div>

                    {/* Map */}
                    <div className="flex-grow mb-0">
                        <Map
                            activeView={activeView}
                            onDistrictSelect={handleDistrictSelect}
                        />
                    </div>

                    {/* Election Info Panel */}
                    <div className="-mt-24">
                        <ElectionInfo electionData={selectedDistrictElection} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;