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
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Canvas onSave={handleSaveDrawing} />
            <div className="mt-4">
                <h2 className="text-2xl mb-4">Saved Drawings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {drawings.map((drawing, index) => (
                        <div key={index} className="border p-4">
                            <img src={drawing.drawingData} alt={`Drawing ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;