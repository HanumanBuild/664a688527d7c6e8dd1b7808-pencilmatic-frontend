import React, { useEffect, useState } from 'react';
import Canvas from '../components/Canvas';
import { saveDrawing, getDrawings } from '../services/api';

function Dashboard() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        const fetchDrawings = async () => {
            try {
                const response = await getDrawings();
                setDrawings(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDrawings();
    }, []);

    const handleSaveDrawing = async (drawingData) => {
        try {
            await saveDrawing(drawingData);
            const response = await getDrawings();
            setDrawings(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <Canvas onSave={handleSaveDrawing} />
            <div className="mt-4 w-full max-w-4xl">
                <h2 className="text-2xl mb-4 text-center">Saved Drawings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drawings.map((drawing, index) => (
                        <div key={index} className="border p-4 bg-white rounded shadow-md">
                            <img src={drawing.drawingData} alt={`Drawing ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;