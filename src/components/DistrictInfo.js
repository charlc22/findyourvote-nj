import React from 'react';

function DistrictInfo({ selectedDistrict, districtData, candidateData, electionData }) {
    if (!selectedDistrict) {
        return (
            <div className="p-4">
                <p className="text-gray-500">Select a district to view detailed information</p>
            </div>
        );
    }

    return (
        <div className="p-4 space-y-6">
            {/* District Information */}
            <div>
                <h2 className="text-xl font-semibold mb-3">District {selectedDistrict}</h2>
                <table className="w-full border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Population:</td>
                        <td className="py-2">{districtData?.population || 'N/A'}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Last Updated:</td>
                        <td className="py-2">{districtData?.last_updated || 'N/A'}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Candidates Information */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Current Candidates</h3>
                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-gray-50">
                        <th className="py-2 px-3 text-left">Name</th>
                        <th className="py-2 px-3 text-left">Party</th>
                        <th className="py-2 px-3 text-left">Incumbent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {candidateData?.map((candidate) => (
                        <tr key={candidate.candidate_id} className="border-b">
                            <td className="py-2 px-3">{candidate.name}</td>
                            <td className="py-2 px-3">{candidate.party}</td>
                            <td className="py-2 px-3">
                                {candidate.incumbent ? 'Yes' : 'No'}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Election Information */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Election Details</h3>
                <table className="w-full border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Next Election:</td>
                        <td className="py-2">{electionData?.election_date || 'N/A'}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Registration Deadline:</td>
                        <td className="py-2">{electionData?.registration_deadline || 'N/A'}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Early Voting:</td>
                        <td className="py-2">
                            {electionData?.early_voting_start && electionData?.early_voting_end
                                ? `${electionData.early_voting_start} - ${electionData.early_voting_end}`
                                : 'N/A'}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DistrictInfo;