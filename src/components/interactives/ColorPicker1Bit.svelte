<script lang="ts">
  let g = $state(0);
</script>

<section>
  <div class="row">
    <div class="col-sm-12 col-md-6 my-auto">
      <label for="g" class="form-label">Green: {g}</label>
      <input
        id="g"
        type="range"
        class="form-range"
        min="0"
        max="1"
        bind:value={g}
      />
    </div>
    <div class="col-sm-12 col-md-6">
      <div
        class="mt-3"
        style:height="14rem"
        style:border="3px solid black"
        style:border-radius="5px"
        style:background-color={`#0${g === 1 ? "F" : "0"}0`}
      ></div>
      <p style:color="#0F0">{g}</p>
    </div>
  </div>
</section>
