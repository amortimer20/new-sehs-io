<script lang="ts">
  import { onMount } from "svelte";

  let darkTheme: HTMLBodyElement | null;
  let themeStyles: CSSStyleDeclaration;

  function setColorTheme(color: string) {
    if (!darkTheme) return;

    let colorMap: Record<string, string> = {
      "color-theme": `--${color}`,
      "color-theme-rgb": `--${color}-rgb`,
      "color-theme-lighten": `--${color}-lighten`,
      "color-theme-darken": `--${color}-darken`,
    };

    for (const [themeProp, mappedVar] of Object.entries(colorMap)) {
      let mappedVarStyle = themeStyles.getPropertyValue(mappedVar);
      darkTheme.style.setProperty(`--${themeProp}`, mappedVarStyle);
      sessionStorage.setItem(themeProp, mappedVarStyle);
    }
  }

  onMount(() => {
    darkTheme = document.querySelector<HTMLBodyElement>(
      '[data-bs-theme="dark"]',
    );

    if (darkTheme) {
      themeStyles = getComputedStyle(darkTheme);
    }
  });
</script>

<!-- svelte-ignore a11y_invalid_attribute -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div class="dropdown">
  <button
    class="btn btn-sm btn-outline-primary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-expanded="false"
  >
    Theme
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("cyber-primary");
      }}
    >
      <a href="#" style="color: var(--cyber-primary);"
        ><i class="bi bi-square-fill"></i> Primary</a
      >
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("cyber-red");
      }}
    >
      <a href="#" style="color: var(--cyber-red);"
        ><i class="bi bi-square-fill"></i> Red</a
      >
    </li>
    <li
      class="dropdown-item"
      onclick={() => {
        setColorTheme("cyber-green");
      }}
    >
      <a href="#" style="color: var(--cyber-green);"
        ><i class="bi bi-square-fill"></i> Green</a
      >
    </li>
    <li
    class="dropdown-item"
    onclick={() => {
      setColorTheme("cyber-blue");
    }}
  >
    <a href="#" style="color: var(--cyber-blue);"
      ><i class="bi bi-square-fill"></i> Blue</a
    >
  </li>
  <li
    class="dropdown-item"
    onclick={() => {
      setColorTheme("cyber-purple");
    }}
  >
    <a href="#" style="color: var(--cyber-purple);"
      ><i class="bi bi-square-fill"></i> Purple</a
    >
  </li>
  <li
    class="dropdown-item"
    onclick={() => {
      setColorTheme("cyber-gold");
    }}
  >
    <a href="#" style="color: var(--cyber-gold);"
      ><i class="bi bi-square-fill"></i> Gold</a
    >
  </li>
  <li
    class="dropdown-item"
    onclick={() => {
      setColorTheme("cyber-orange");
    }}
  >
    <a href="#" style="color: var(--cyber-orange);"
      ><i class="bi bi-square-fill"></i> Orange</a
    >
  </li>
  <li
    class="dropdown-item"
    onclick={() => {
      setColorTheme("cyber-yellow");
    }}
  >
    <a href="#" style="color: var(--cyber-yellow);"
      ><i class="bi bi-square-fill"></i> Yellow</a
    >
  </li>
  </ul>
</div>
