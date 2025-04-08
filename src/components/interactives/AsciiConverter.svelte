<script lang="ts">
  let asciiText = $state("");

  let binaryText = $derived.by(() => {
    let output = "";

    for (const char of asciiText) {
      output += char.charCodeAt(0).toString(2).padStart(8, "0") + " ";
    }

    return output;
  });
</script>

<section>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <label for="ascii">ASCII:</label>
      <textarea
        id="ascii"
        class="form-control"
        placeholder="Type your message here"
        rows="5"
        bind:value={asciiText}
      ></textarea>
    </div>
    <div class="col-sm-12 col-md-6">
      <label for="binary">Binary:</label>
      <textarea
        id="binary"
        class="form-control"
        readonly
        rows="5"
        bind:value={binaryText}
      ></textarea>
    </div>
  </div>
</section>

<style>
  textarea {
    resize: none;
  }
</style>
