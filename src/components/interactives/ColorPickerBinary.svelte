<script lang="ts">
  import { mapRange } from "../../scripts/utilities";

  let { bitDepth }: { bitDepth: "8" | "16" | "24" } = $props();
  const depthMap = { "8": [3, 3, 2], "16": [5, 6, 5], "24": [8, 8, 8] };
  const maxRVal = 2 ** depthMap[bitDepth][0] - 1;
  const maxGVal = 2 ** depthMap[bitDepth][1] - 1;
  const maxBVal = 2 ** depthMap[bitDepth][2] - 1;
  let r = $state(0);
  let g = $state(0);
  let b = $state(0);
  let rBin = $derived(r.toString(2).padStart(depthMap[bitDepth][0], "0"));
  let gBin = $derived(g.toString(2).padStart(depthMap[bitDepth][1], "0"));
  let bBin = $derived(b.toString(2).padStart(depthMap[bitDepth][2], "0"));
  let rDec = $derived(mapRange(r, 0, maxRVal, 0, 255));
  let gDec = $derived(mapRange(g, 0, maxGVal, 0, 255));
  let bDec = $derived(mapRange(b, 0, maxBVal, 0, 255));
</script>

<section>
  <div class="row">
    <div class="col-sm-12 col-md-6 my-auto">
      <label for="r" class="form-label">Red: {rBin}</label>
      <input
        id="r"
        type="range"
        class="form-range"
        min="0"
        max={maxRVal}
        step="1"
        bind:value={r}
      />
      <label for="g" class="form-label">Green: {gBin}</label>
      <input
        id="g"
        type="range"
        class="form-range"
        min="0"
        max={maxGVal}
        step="1"
        bind:value={g}
      />
      <label class="form-label" for="blue">Blue: {bBin}</label>
      <input
        id="b"
        type="range"
        class="form-range"
        min="0"
        max={maxBVal}
        step="1"
        bind:value={b}
      />
    </div>
    <div class="col-sm-12 col-md-6">
      <div
        class="mt-3"
        style:height="14rem"
        style:border="3px solid black"
        style:border-radius="5px"
        style:background-color={`rgb(${rDec}, ${gDec}, ${bDec})`}
      ></div>
      <p>
        <span style:color="#F00">{rBin}</span><span style:color="#0F0"
          >{gBin}</span
        ><span style:color="#00F">{bBin}</span>
      </p>
    </div>
  </div>
</section>
