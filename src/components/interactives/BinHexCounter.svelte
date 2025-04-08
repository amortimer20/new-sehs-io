<script lang="ts">
  let decValue = $state(0);
  let binValue = $derived(decValue.toString(2));
  let hexValue = $derived(decValue.toString(16).toUpperCase());
  let valueIsZero = $derived(decValue === 0);
</script>

<section>
  <label for="dec-value" class="form-label">Decimal:</label>
  <input
    id="dec-value"
    class="form-control form-control-lg text-cyber-primary"
    bind:value={decValue}
    readonly
  />
  <label for="bin-value" class="form-label">Binary:</label>
  <input
    id="bin-value"
    class="form-control form-control-lg text-light"
    bind:value={binValue}
    readonly
  />
  <label for="hex-value" class="form-label">Hex:</label>
  <input
    id="hex-value"
    class="form-control form-control-lg text-danger"
    bind:value={hexValue}
    readonly
  />
  <div class="my-3 text-center">
    <button
      class="btn btn-outline-primary d-inline-block m-2"
      onclick={() => {
        decValue--;
      }}
      disabled={valueIsZero}>Decrement -</button
    >
    <button
      class="btn btn-outline-primary d-inline-block m-2"
      onclick={() => {
        decValue++;
      }}>Increment +</button
    >
  </div>
</section>
