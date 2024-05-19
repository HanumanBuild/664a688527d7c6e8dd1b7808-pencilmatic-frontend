import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

// Define the Canvas component
function Canvas({ onSave }) {
    const canvasRef = useRef(null);
    const canvasInstance = useRef(null);

    // Initialize the Fabric.js canvas
    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 5;
        canvas.freeDrawingBrush.color = '#000000';
        canvasInstance.current = canvas;
    }, []);

    // Clear the canvas
    const handleClearCanvas = () => {
        canvasInstance.current.clear();
    };

    // Enable erase mode
    const handleEraseMode = () => {
        canvasInstance.current.isDrawingMode = false;
        canvasInstance.current.on('mouse:down', function (options) {
            if (options.target) {
                canvasInstance.current.remove(options.target);
            }
        });
    };

    // Enable draw mode
    const handleDrawMode = () => {
        canvasInstance.current.isDrawingMode = true;
    };

    // Save the canvas
    const handleSaveCanvas = () => {
        const drawingData = canvasInstance.current.toDataURL();
        onSave(drawingData);
    };

    // Render the component
    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <button onClick={handleDrawMode} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Draw</button>
                <button onClick={handleEraseMode} className="bg-red-500 text-white px-4 py-2 rounded mr-2">Erase</button>
                <button onClick={handleClearCanvas} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Clear</button>
                <button onClick={handleSaveCanvas} className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
            <canvas ref={canvasRef} width={800} height={600} className="border"></canvas>
        </div>
    );
}

// Export the Canvas component
export default Canvas;