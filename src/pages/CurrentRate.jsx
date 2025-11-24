import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import axios from "axios";

const CurrentRate = () => {
    const [goldRates, setGoldRates] = useState([]);
    const [silverRates, setSilverRates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    // Get today's date
    const today = new Date().toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    useEffect(() => {
        async function fetchRates() {
            try {
                const [goldRes, silverRes] = await Promise.all([
                    axios.get("https://ssjapi.pythonanywhere.com/web/get-gold-rate/"),
                    axios.get("https://ssjapi.pythonanywhere.com/web/get-silver-rate/"),
                ]);

                setGoldRates(goldRes.data);
                setSilverRates(silverRes.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setErr("Failed to load rates. Try again later.");
                setLoading(false);
            }
        }

        fetchRates();
    }, []);

    if (loading)
        return (
            <div className="p-12 text-center text-gray-600 text-lg">
                Loading live gold & silver rates...
            </div>
        );

    if (err)
        return (
            <div className="p-12 text-center text-red-600 text-lg">{err}</div>
        );

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-gray-800">
            <div className="text-center mb-10">
                <Title text="Current Gold & Silver Rates" />
                <p className="text-gray-600 text-sm mt-2">
                    Updated live from the server
                </p>
            </div>

            {/* Rate Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* GOLD RATES CARD */}
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-yellow-700">
                        Gold Rates
                    </h3>

                    {goldRates.map((g) => (
                        <div key={g.id} className="mb-3">
                            <p className="text-lg font-semibold text-yellow-700">
                                {g.purity}K Gold
                            </p>
                            <p className="text-2xl font-bold text-yellow-600">
                                ₹{parseFloat(g.current_price)} / gram
                            </p>
                        </div>
                    ))}

                    <p className="text-sm text-gray-600 mt-2">As of {today}</p>
                </div>

                {/* SILVER RATE CARD */}
                <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-2 text-gray-700">
                        Silver Rate
                    </h3>

                    {silverRates.map((s) => (
                        <div key={s.id}>
                            <p className="text-2xl font-bold text-gray-800">
                                ₹{parseFloat(s.current_price)} / gram
                            </p>
                        </div>
                    ))}

                    <p className="text-sm text-gray-600 mt-2">As of {today}</p>
                </div>
            </div>

            {/* Optional Note */}
            <p className="text-sm text-center text-gray-500">
                Rates are indicative and auto-updated. Final billing rates may vary slightly.
            </p>
        </div>
    );
};

export default CurrentRate;
