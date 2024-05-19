import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current);
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 5;
        canvas.freeDrawingBrush.color = '#000000';
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={800} height={600} className="border"></canvas>
        </div>
    );
}

export default Canvas;