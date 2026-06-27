import { useMemo, useState, useEffect, useCallback } from "react";
import { cn } from "../lib/utils";
import { useTheme } from "../context/ThemeContext";

const CELL_SIZE = 56;

const BackgroundRippleEffect = () => {
  const [clickedCell, setClickedCell] = useState(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0 });
  const [hoveredCell, setHoveredCell] = useState({ row: -1, col: -1 });

  useEffect(() => {
    const updateSize = () => {
      const cols = Math.ceil(window.innerWidth / CELL_SIZE) + 1;
      const rows = Math.ceil(window.innerHeight / CELL_SIZE) + 1;
      setGridSize({ rows, cols });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Track which cell the cursor is over
  useEffect(() => {
    const handleMouseMove = (e) => {
      const col = Math.floor(e.clientX / CELL_SIZE);
      const row = Math.floor(e.clientY / CELL_SIZE);
      setHoveredCell({ row, col });
    };
    const handleMouseLeave = () => {
      setHoveredCell({ row: -1, col: -1 });
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Click anywhere triggers ripple
  const handleDocumentClick = useCallback(
    (e) => {
      if (gridSize.cols === 0) return;
      const col = Math.floor(e.clientX / CELL_SIZE);
      const row = Math.floor(e.clientY / CELL_SIZE);
      setClickedCell({ row, col });
      setRippleKey((k) => k + 1);
    },
    [gridSize]
  );

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, [handleDocumentClick]);

  if (gridSize.rows === 0) return null;

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <DivGrid
        key={`grid-${rippleKey}`}
        rows={gridSize.rows}
        cols={gridSize.cols}
        clickedCell={clickedCell}
        hoveredCell={hoveredCell}
      />
    </div>
  );
};

const DivGrid = ({ rows, cols, clickedCell = null, hoveredCell }) => {
  const { isDark } = useTheme();

  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols]
  );

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
    gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
    maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)",
    WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)",
  };

  const cellBg = isDark ? "#1E2130" : "#F3F4F6";
  const borderDefault = isDark ? "#252836" : "#E5E7EB";
  const borderHover = isDark ? "#3A3F50" : "#C5C9D2";
  const rippleTint = isDark ? "#2A3048" : "#E8ECF2"; // subtle tint for the ripple wave

  return (
    <div style={gridStyle}>
      {cells.map((idx) => {
        const rowIdx = Math.floor(idx / cols);
        const colIdx = idx % cols;

        const distance = clickedCell
          ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
          : 0;
        const delay = clickedCell ? Math.max(0, distance * 55) : 0;
        const duration = 200 + distance * 80;
        const isHovered = hoveredCell.row === rowIdx && hoveredCell.col === colIdx;
        const isRippling = Boolean(clickedCell);

        return (
          <div
            key={idx}
            className={cn(
              "border-[0.5px] transition-[border-color,opacity] duration-200",
              isRippling && "animate-cell-ripple"
            )}
            style={{
              backgroundColor: "var(--cell-bg)",
              borderColor: isHovered ? borderHover : borderDefault,
              opacity: isHovered ? (isDark ? 0.8 : 0.95) : isDark ? 0.55 : 0.65,
              "--cell-bg": cellBg,
              ...(isRippling
                ? {
                    "--delay": `${delay}ms`,
                    "--duration": `${duration}ms`,
                    "--ripple-bg": rippleTint,
                  }
                : {}),
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundRippleEffect;
