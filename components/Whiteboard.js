import { useRef, useEffect, useState } from "react";

export default function Whiteboard() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const setCanvasSize = () => {
      const pixelRatio = window.devicePixelRatio || 1;
      canvas.width = Math.min(window.innerWidth * 0.9, 600) * pixelRatio;
      canvas.height = Math.min(window.innerHeight * 0.5, 400) * pixelRatio;
      canvas.style.width = `${Math.min(window.innerWidth * 0.9, 600)}px`;
      canvas.style.height = `${Math.min(window.innerHeight * 0.5, 400)}px`;
      context.scale(pixelRatio, pixelRatio);
      context.lineWidth = 2;
      context.lineCap = "round";
      context.strokeStyle = "#0077b5";
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = getEventCoordinates(e);
    setLastPosition({ x: offsetX, y: offsetY });
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const { offsetX, offsetY } = getEventCoordinates(e);

    context.beginPath();
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(offsetX, offsetY);
    context.stroke();

    setLastPosition({ x: offsetX, y: offsetY });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const getEventCoordinates = (e) => {
    if (e.nativeEvent.touches) {
      const touch = e.nativeEvent.touches[0];
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top,
      };
    }
    return {
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid #ddd",
          backgroundColor: "#fff",
          cursor: "crosshair",
          borderRadius: "5px",
          width: "100%",
          height: "auto",
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      ></canvas>
      <button
        onClick={clearCanvas}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#0077b5",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005582")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#0077b5")}
      >
        Clear Canvas
      </button>
    </div>
  );
}