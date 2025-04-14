export function initializeTheme() {
  let darkTheme = document.querySelector<HTMLBodyElement>(
    '[data-bs-theme="dark"]',
  );
  if (!darkTheme) return;

  let cssVars = [
    "color-theme",
    "color-theme-rgb",
    "color-theme-lighten",
    "color-theme-darken",
  ];

  for (const cssVar of cssVars) {
    let sessionVal = localStorage.getItem(cssVar);
    let defaultVar = getComputedStyle(darkTheme).getPropertyValue(
      `--${cssVar}`,
    );

    darkTheme.style.setProperty(`--${cssVar}`, sessionVal ?? defaultVar);
  }
};