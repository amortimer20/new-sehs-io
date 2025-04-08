<script lang="ts">
  let toggles = $state(Array<boolean>(8).fill(false));
  let bits = $derived(toggles.map<number>((t) => (t ? 1 : 0)));
  let decValue = $derived(
    bits.reduce((sum, bit, index) => sum + bit * 2 ** index, 0),
  );
</script>

<section>
  <table class="table">
    <tbody>
      <tr class="text-center">
        <td>
          <div>{bits[7]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[7]}
          />
        </td>
        <td>
          <div>{bits[6]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[6]}
          />
        </td>
        <td>
          <div>{bits[5]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[5]}
          />
        </td>
        <td>
          <div>{bits[4]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[4]}
          />
        </td>
        <td colspan="2"></td>
        <td>
          <div>{bits[3]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[3]}
          />
        </td>
        <td>
          <div>{bits[2]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[2]}
          />
        </td>
        <td>
          <div>{bits[1]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[1]}
          />
        </td>
        <td>
          <div>{bits[0]}</div>
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={toggles[0]}
          />
        </td>
        <td class="align-top" style:min-width="6.25rem">
          = {decValue}<sub>DEC</sub>
        </td>
      </tr>
      <tr class="text-center">
        <td>2<sup>7</sup></td>
        <td>2<sup>6</sup></td>
        <td>2<sup>5</sup></td>
        <td>2<sup>4</sup></td>
        <td colspan="2"></td>
        <td>2<sup>3</sup></td>
        <td>2<sup>2</sup></td>
        <td>2<sup>1</sup></td>
        <td>2<sup>0</sup></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</section>
