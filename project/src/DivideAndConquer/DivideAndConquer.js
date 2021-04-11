class DivideAndConquer {
  qSort(pokemonArray, l, r) {
    if (r <= l) return;
    if (pokemonArray[r] > pokemonArray[(l + r) / 2]) {
      [pokemonArray[r], pokemonArray[(l + r) / 2]] = [
        pokemonArray[(l + r) / 2],
        pokemonArray[r],
      ];
    }
    if (pokemonArray[(l + r) / 2] > pokemonArray[l]) {
      [pokemonArray[l], pokemonArray[(l + r) / 2]] = [
        pokemonArray[(l + r) / 2],
        pokemonArray[l],
      ];
    }
    if (pokemonArray[(l + r) / 2] > pokemonArray[r]) {
      [pokemonArray[r], pokemonArray[(l + r) / 2]] = [
        pokemonArray[(l + r) / 2],
        pokemonArray[r],
      ];
    }
    var j = this.divide(pokemonArray, l, r);
    this.qSort(pokemonArray, l, j - 1);
    this.qSort(pokemonArray, j + 1, r);
  }

  divide(pokemonArray, l, r) {
    var c = pokemonArray[r];
    var j = l;
    for (var i = l; i < r; i++) {
      if (pokemonArray[i] <= c) {
        [pokemonArray[i], c] = [c, pokemonArray[i]];
        j++;
      }
    }
    [pokemonArray[j], pokemonArray[r]] = [pokemonArray[r], pokemonArray[j]];
    return j;
  }
}

export default new DivideAndConquer();