<script lang="ts">
  const toHex = (val: number) =>
    val.toString(16).toUpperCase().padStart(2, "0");
  let r = $state(0);
  let g = $state(0);
  let b = $state(0);
  let hex = $derived(toHex(r) + toHex(g) + toHex(b));
</script>

<section>
  <div class="row">
    <div class="col-sm-12 col-md-6 my-auto">
      <label class="form-label">Red: {r}</label>
      <input
        type="range"
        class="form-range"
        min="0"
        max="255"
        step="1"
        bind:value={r}
      />
      <label class="form-label">Green: {g}</label>
      <input
        type="range"
        class="form-range"
        min="0"
        max="255"
        step="1"
        bind:value={g}
      />
      <label class="form-label" for="blue">Blue: {b}</label>
      <input
        type="range"
        class="form-range"
        min="0"
        max="255"
        step="1"
        bind:value={b}
      />
      <p>Hex: #{hex}</p>
    </div>
    <div class="col-sm-12 col-md-6">
      <div
        class="mt-3"
        style:height="14rem"
        style:border="3px solid black"
        style:border-radius="5px"
        style:background-color={`#${hex}`}
      ></div>
    </div>
  </div>
</section>
