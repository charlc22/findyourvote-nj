import React, { useState } from 'react';
import Map from './components/Map/Map';
import DistrictInfo from './components/DistrictInfo';

function App() {
    const [activeView, setActiveView] = useState('house');
    const [selectedDistrictData, setSelectedDistrictData] = useState(null);
    const [selectedDistrictCandidates, setSelectedDistrictCandidates] = useState([]);
    const [selectedDistrictElection, setSelectedDistrictElection] = useState(null);

    // Placeholder fetch functions (replace with actual API calls later)
    const fetchDistrictData = async (districtNumber) => {
        // Placeholder data
        return {
            district_number: districtNumber,
            population: 750000,
            last_updated: '2024-01-01'
        };
    };

    const fetchCandidateData = async (districtNumber) => {
        // Placeholder data
        return [
            {
                candidate_id: 1,
                name: 'John Doe',
                party: 'Democratic',
                incumbent: true
            },
            {
                candidate_id: 2,
                name: 'Jane Smith',
                party: 'Republican',
                incumbent: false
            }
        ];
    };

    const fetchElectionData = async (districtNumber) => {
        // Placeholder data
        return {
            election_date: '2024-11-05',
            registration_deadline: '2024-10-15',
            early_voting_start: '2024-10-20',
            early_voting_end: '2024-11-04'
        };
    };

    // Function to fetch district data when a district is selected
    const handleDistrictSelect = async (districtNumber) => {
        try {
            const districtData = await fetchDistrictData(districtNumber);
            const candidateData = await fetchCandidateData(districtNumber);
            const electionData = await fetchElectionData(districtNumber);

            setSelectedDistrictData(districtData);
            setSelectedDistrictCandidates(candidateData);
            setSelectedDistrictElection(electionData);
        } catch (error) {
            console.error('Error fetching district data:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Your existing nav code */}
            <nav className="bg-blue-600 p-4 shadow-lg">
                {/* ... */}
            </nav>

            {/* Main Content */}
            <div className="flex p-4">
                {/* Left side content */}
                <div className="w-1/2 p-4 bg-white rounded-lg shadow">
                    <DistrictInfo
                        selectedDistrict={selectedDistrictData?.district_number}
                        districtData={selectedDistrictData}
                        candidateData={selectedDistrictCandidates}
                        electionData={selectedDistrictElection}
                    />
                </div>

                {/* Right side - Toggle buttons and map */}
                <div className="w-1/2 p-4">
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
                    <Map
                        activeView={activeView}
                        onDistrictSelect={handleDistrictSelect}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;