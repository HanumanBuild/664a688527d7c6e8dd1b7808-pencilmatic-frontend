import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function Canvas({ onSave }) {
    const canvasRef = useRef(null);
    const canvasInstance = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 5;
        canvas.freeDrawingBrush.color = '#000000';
        canvasInstance.current = canvas;
    }, []);

    const handleClearCanvas = () => {
        canvasInstance.current.clear();
    };

    const handleEraseMode = () => {
        canvasInstance.current.isDrawingMode = false;
        canvasInstance.current.on('mouse:down', function (options) {
            if (options.target) {
                canvasInstance.current.remove(options.target);
            }
        });
    };

    const handleDrawMode = () => {
        canvasInstance.current.isDrawingMode = true;
    };

    const handleSaveCanvas = () => {
        const drawingData = canvasInstance.current.toDataURL();
        onSave(drawingData);
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mb-4 flex flex-wrap justify-center">
                <button onClick={handleDrawMode} className="bg-blue-500 text-white px-4 py-2 rounded mr-2 mb-2">Draw</button>
                <button onClick={handleEraseMode} className="bg-red-500 text-white px-4 py-2 rounded mr-2 mb-2">Erase</button>
                <button onClick={handleClearCanvas} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 mb-2">Clear</button>
                <button onClick={handleSaveCanvas} className="bg-green-500 text-white px-4 py-2 rounded mb-2">Save</button>
            </div>
            <canvas ref={canvasRef} width={800} height={600} className="border w-full max-w-4xl"></canvas>
        </div>
    );
}

export default Canvas;