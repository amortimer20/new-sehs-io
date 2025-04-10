export function matrixAnimation(canvasId: string) {
  const FONT_SIZE = 16;
  const FONT_STYLE = FONT_SIZE + "px jetbrains";
  const BACKGROUND_COLOR = "rgb(5, 0, 20)";
  const FADE_COLOR = "rgba(5, 0, 20, 0.1)";
  const CHARS = "0123456789ABCDEF";
  const canvas = document.querySelector<HTMLCanvasElement>(`#${canvasId}`);
  let textColor = sessionStorage.getItem("textColor") ?? "rgba(0, 255, 0, 0.7)";

  if (!canvas?.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let columns = canvas.width / FONT_SIZE;
  let coords: number[] = [];

  document.addEventListener("keydown", (ev) => {
    const colorMap: Record<string, string> = {
      "1": "rgba(27, 212, 215, 0.7)",
      "2": "rgba(254, 1, 85, 0.7)",
      "3": "rgba(0, 0, 255, 1)",
      "4": "rgba(255, 210, 40, 0.7)",
      "5": "rgba(255, 255, 255, 0.7)",
      "6": "rgba(220, 0, 220, 0.7)",
      "7": "rgba(255, 100, 0, 0.7)",
      "8": "rgba(255, 255, 0, 0.7)",
      "9": "rgba(128, 128, 128, 0.7)",
      "0": "rgba(0, 255, 0, 0.7)"
    };

    if (ev.altKey && colorMap[ev.key]) {
      textColor = colorMap[ev.key];
    }

    sessionStorage.setItem("textColor", textColor);
  });

  const initWindow = (canvas: HTMLCanvasElement) => {
    canvas.width = canvas.parentElement?.clientWidth ?? canvas.width;
    canvas.height = canvas.parentElement?.clientHeight ?? canvas.height;
    columns = canvas.width / FONT_SIZE;
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = FONT_STYLE;

    for (let x = 0; x < columns; x++) {
      coords[x] = Math.trunc(canvas.height);
    }
  };

  initWindow(canvas);

  const draw = () => {
    // Reinitialize window if canvas size changes
    if (canvas.width !== canvas.parentElement?.clientWidth) {
      initWindow(canvas);
    }

    // Clear
    ctx.fillStyle = FADE_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = textColor;

    for (let i = 0; i < coords.length; i++) {
      const text = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(text, i * FONT_SIZE, coords[i] * FONT_SIZE);

      // Reset Y coordinate if exceeds bottom
      if (coords[i] * FONT_SIZE > canvas.height && Math.random() > 0.95) {
        coords[i] = 0;
      }

      coords[i]++;
    }
  };

  setInterval(draw, 50);
};