import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Navbar = ({ onDistrictSelect }) => {
    const [zipCode, setZipCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchResults, setSearchResults] = useState(null);

    const handleZipCodeSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSearchResults(null);

        try {
            const response = await fetch('https://data.nj.gov/resource/enjb-xzdc.json?$limit=1000');
            if (!response.ok) {
                throw new Error('Failed to fetch district data');
            }

            const data = await response.json();
            const paddedZip = zipCode.padStart(5, '0');

            // Find all matches for the zip code
            const matches = data.filter(entry =>
                entry.zip_code === paddedZip || entry.zip_code === zipCode
            );

            if (matches.length > 0) {
                // Get unique districts (in case of duplicates)
                const uniqueDistricts = [...new Set(matches.map(match => match.congressional_district))];

                if (uniqueDistricts.length === 1) {
                    // If only one district, select it automatically
                    onDistrictSelect(uniqueDistricts[0]);
                    setZipCode('');
                } else {
                    // If multiple districts, show selection options
                    setSearchResults(uniqueDistricts);
                }
            } else {
                setError('No district found for this zip code');
            }
        } catch (error) {
            setError('Error searching for district. Please try again.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDistrictSelect = (district) => {
        onDistrictSelect(district);
        setSearchResults(null);
        setZipCode('');
    };

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left side - Logo/Website Name */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold">Find Your Vote NJ</span>
                    </div>

                    {/* Middle - Navigation Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition">
                            Home
                        </button>
                        <button className="px-4 py-2 rounded-md text-base font-semibold hover:bg-blue-700 transition">
                            About
                        </button>
                    </div>

                    {/* Right side - Zip Code Search */}
                    <div className="flex items-center">
                        <form onSubmit={handleZipCodeSearch} className="flex items-center">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your zip code to find your district"
                                    className="pl-3 pr-10 py-2 rounded-lg text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value.slice(0, 5))}
                                    pattern="[0-9]{5}"
                                    maxLength="5"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    disabled={loading}
                                >
                                    <Search size={20} />
                                </button>
                            </div>
                        </form>

                        {/* Search feedback area */}
                        <div className="ml-2">
                            {loading && (
                                <span className="text-white">Searching...</span>
                            )}
                            {error && (
                                <span className="text-red-200">{error}</span>
                            )}
                            {searchResults && searchResults.length > 1 && (
                                <div className="absolute mt-2 bg-white text-gray-800 rounded-lg shadow-lg p-2 z-50">
                                    <p className="text-sm mb-2">This zip code spans multiple districts:</p>
                                    <div className="flex flex-col space-y-1">
                                        {searchResults.map((district) => (
                                            <button
                                                key={district}
                                                onClick={() => handleDistrictSelect(district)}
                                                className="text-left px-3 py-2 hover:bg-blue-50 rounded transition"
                                            >
                                                District {district}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;