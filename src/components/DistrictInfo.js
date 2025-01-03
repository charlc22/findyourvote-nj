import React, { useState } from 'react';

function DistrictInfo({ selectedDistrict, districtData, candidateData }) {
    const [expandedBios, setExpandedBios] = useState({});

    if (!selectedDistrict) {
        return (
            <div className="p-4">
                <p className="text-gray-500">Select a district to view detailed information</p>
            </div>
        );
    }

    const toggleBio = (candidateId) => {
        setExpandedBios(prev => ({
            ...prev,
            [candidateId]: !prev[candidateId]
        }));
    };

    const truncateText = (text, maxLength = 400) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    return (
        <div className="p-4 space-y-6">
            {/* District Information */}
            <div>
                <h2 className="text-xl font-semibold mb-3">District {selectedDistrict}</h2>
                <table className="w-full border-collapse">
                    <tbody>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Population:</td>
                        <td className="py-2">{districtData?.Population?.toLocaleString() || 'N/A'}</td>
                    </tr>
                    <tr className="border-b">
                        <td className="py-2 font-medium">Last Updated:</td>
                        <td className="py-2">
                            {districtData?.Last_Updated
                                ? new Date(districtData.Last_Updated).toLocaleDateString()
                                : 'N/A'}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            {/* Candidates Information */}
            <div>
                <h3 className="text-lg font-semibold mb-3">Current Candidates</h3>
                {candidateData && candidateData.length > 0 ? (
                    <div className="space-y-4">
                        {candidateData.map((candidate) => (
                            <div key={candidate.Candidate_ID} className="border rounded-lg p-4">
                                <div className="flex items-start">
                                    {candidate.Image_URL && (
                                        <img
                                            src={candidate.Image_URL}
                                            alt={candidate.Name}
                                            className="w-24 h-24 object-cover rounded-lg mr-4"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <h4 className="text-lg font-medium">{candidate.Name}</h4>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <span className="text-gray-600">{candidate.Party}</span>
                                            {candidate.Incumbent && (
                                                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                                    Incumbent
                                                </span>
                                            )}
                                        </div>
                                        {candidate.Biography && (
                                            <div className="text-gray-600 text-sm mb-2">
                                                <p>
                                                    {expandedBios[candidate.Candidate_ID]
                                                        ? candidate.Biography
                                                        : truncateText(candidate.Biography)}
                                                </p>
                                                {candidate.Biography.length > 200 && (
                                                    <button
                                                        onClick={() => toggleBio(candidate.Candidate_ID)}
                                                        className="text-blue-600 hover:text-blue-800 mt-1 text-sm font-medium"
                                                    >
                                                        {expandedBios[candidate.Candidate_ID] ? 'Read Less' : 'Read More'}
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                        <div className="space-y-1 text-sm">
                                            {candidate.Website && (
                                                <div>
                                                    <span className="font-medium">Website: </span>
                                                    <a
                                                        href={candidate.Website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        {candidate.Website}
                                                    </a>
                                                </div>
                                            )}
                                            {candidate.Contact_Info && (
                                                <div>
                                                    <span className="font-medium">Contact: </span>
                                                    <span className="whitespace-pre-line">{candidate.Contact_Info}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No candidates found for this district</p>
                )}
            </div>
        </div>
    );
}

export default DistrictInfo;