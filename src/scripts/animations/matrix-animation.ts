export function matrixAnimation(canvasId: string) {
  const FONT_SIZE = 16;
  const FONT_STYLE = FONT_SIZE + "px jetbrains";
  const BACKGROUND_COLOR = "rgb(5, 0, 20)";
  const FADE_COLOR = "rgba(5, 0, 20, 0.1)";
  const CHARS = "0123456789ABCDEF";
  const canvas = document.querySelector<HTMLCanvasElement>(`#${canvasId}`);
  let textColor = localStorage.getItem("colorTheme") ?? "rgb(27, 212, 215)";

  if (!canvas?.getContext) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let columns = canvas.width / FONT_SIZE;
  let coords: number[] = [];

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

    // Fade each frame
    ctx.fillStyle = FADE_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = localStorage.getItem("color-theme") ?? "rgb(27, 212, 215)";

    for (let i = 0; i < coords.length; i++) {
      const text = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(text, i * FONT_SIZE, coords[i] * FONT_SIZE);

      // Clear faded column cells
      ctx.fillStyle = "rgb(5, 0, 20)";
      ctx.fillRect(i * FONT_SIZE, coords[i] * FONT_SIZE + -FONT_SIZE * 24, FONT_SIZE, FONT_SIZE);
      ctx.fillStyle = localStorage.getItem("color-theme") ?? "rgb(27, 212, 215)";

      // Reset Y coordinate if exceeds bottom
      if (coords[i] * FONT_SIZE > canvas.height && Math.random() > 0.95) {
        coords[i] = 0;
      }

      coords[i]++;
    }
  };

  setInterval(draw, 50);
};