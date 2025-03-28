export function shuffle(array: any[]): void {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    if (i != j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}