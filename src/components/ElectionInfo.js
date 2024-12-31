import React from 'react';

function ElectionInfo({ electionData }) {
    if (!electionData) {
        return (
            <div className="p-4">
                <p className="text-gray-500">Select a district to view election information</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-semibold mb-3">Election Details</h3>
            <table className="w-full border-collapse">
                <tbody>
                <tr className="border-b">
                    <td className="py-2 font-medium">Election Date:</td>
                    <td className="py-2">
                        {electionData?.Election_Date
                            ? new Date(electionData.Election_Date).toLocaleDateString()
                            : 'N/A'}
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="py-2 font-medium">Registration Deadline:</td>
                    <td className="py-2">
                        {electionData?.Registration_Deadline
                            ? new Date(electionData.Registration_Deadline).toLocaleDateString()
                            : 'N/A'}
                    </td>
                </tr>
                <tr className="border-b">
                    <td className="py-2 font-medium">Early Voting Period:</td>
                    <td className="py-2">
                        {electionData?.Early_Voting_Start && electionData?.Early_Voting_End
                            ? `${new Date(electionData.Early_Voting_Start).toLocaleDateString()} - 
                                   ${new Date(electionData.Early_Voting_End).toLocaleDateString()}`
                            : 'N/A'}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ElectionInfo;