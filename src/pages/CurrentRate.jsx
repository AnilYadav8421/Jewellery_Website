import React from 'react';
import Title from '../components/Title'; // Reuse your Title component

const CurrentRate = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
            <div className="text-center mb-10">
                <Title text="Current Gold & Silver Rates" />
                <p className="text-gray-600 text-sm mt-2">Updated daily from trusted sources</p>
            </div>

            {/* Rate Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* Gold Rate */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">Gold Rate (24K)</h3>
                    <p className="text-3xl font-bold text-yellow-600 mb-1">₹6,490 / gram</p>
                    <p className="text-sm text-gray-600">As of July 14, 2025</p>
                </div>

                {/* Silver Rate */}
                <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">Silver Rate</h3>
                    <p className="text-3xl font-bold text-gray-700 mb-1">₹84 / gram</p>
                    <p className="text-sm text-gray-600">As of July 14, 2025</p>
                </div>
            </div>

            {/* Optional Note */}
            <p className="text-sm text-center text-gray-500">
                Rates are indicative and sourced from MCX India. Final billing price may vary slightly.
            </p>
        </div>
    );
};

export default CurrentRate;
