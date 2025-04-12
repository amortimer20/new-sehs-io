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
        <td class="text-secondary">2<sup>7</sup></td>
        <td class="text-secondary">2<sup>6</sup></td>
        <td class="text-secondary">2<sup>5</sup></td>
        <td class="text-secondary">2<sup>4</sup></td>
        <td colspan="2"></td>
        <td class="text-secondary">2<sup>3</sup></td>
        <td class="text-secondary">2<sup>2</sup></td>
        <td class="text-secondary">2<sup>1</sup></td>
        <td class="text-secondary">2<sup>0</sup></td>
        <td></td>
      </tr>
      <tr class="text-center">
        <td style:color={toggles[7] ? "var(--color-theme)" : "gray"}>128</td>
        <td style:color={toggles[6] ? "var(--color-theme)" : "gray"}>64</td>
        <td style:color={toggles[5] ? "var(--color-theme)" : "gray"}>32</td>
        <td style:color={toggles[4] ? "var(--color-theme)" : "gray"}>16</td>
        <td colspan="2"></td>
        <td style:color={toggles[3] ? "var(--color-theme)" : "gray"}>8</td>
        <td style:color={toggles[2] ? "var(--color-theme)" : "gray"}>4</td>
        <td style:color={toggles[1] ? "var(--color-theme)" : "gray"}>2</td>
        <td style:color={toggles[0] ? "var(--color-theme)" : "gray"}>1</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</section>
