class DivideAndConquer {
  constructor() {
    this.pokemons = [];
  }

  setPokemonArray(pokemons) {
    this.pokemons = pokemons;
  }

  async sortPokemon(l, r, setPokemon, orderType) {
    await this.qSort(l, r, orderType);
    return this.pokemons;
  }

  compare(poke1, poke2, compareParam) {
    if (compareParam === "name") {
      if (poke1.name > poke2.name) return 1;
      else if (poke2.name > poke1.name) return -1;
    } else if (compareParam === "id") {
      if (poke1.id > poke2.id) return 1;
      else if (poke2.id > poke1.id) return -1;
    } else if (compareParam === "types") {
      if (poke1.types[0].type.name > poke2.types[0].type.name) return 1;
      else if (poke2.types[0].type.name > poke1.types[0].type.name) return -1;
    }
    return 0;
  }

  async qSort(l, r, orderType) {
    if (r <= l) {
      return this.pokemons;
    }
    if (
      this.compare(
        this.pokemons[r],
        this.pokemons[Math.floor((l + r) / 2)],
        orderType === 1
      )
    ) {
      [this.pokemons[r], this.pokemons[Math.floor((l + r) / 2)]] = [
        this.pokemons[Math.floor((l + r) / 2)],
        this.pokemons[r],
      ];
    }
    if (
      this.compare(
        this.pokemons[Math.floor((l + r) / 2)],
        this.pokemons[l],
        orderType === 1
      )
    ) {
      [this.pokemons[l], this.pokemons[Math.floor((l + r) / 2)]] = [
        this.pokemons[Math.floor((l + r) / 2)],
        this.pokemons[l],
      ];
    }
    if (
      this.compare(
        this.pokemons[Math.floor((l + r) / 2)],
        this.pokemons[r],
        orderType === 1
      )
    ) {
      [this.pokemons[r], this.pokemons[Math.floor((l + r) / 2)]] = [
        this.pokemons[Math.floor((l + r) / 2)],
        this.pokemons[r],
      ];
    }
    var j = this.divide(l, r, orderType);
    this.qSort(l, j - 1, orderType);
    this.qSort(j + 1, r, orderType);
  }

  divide(l, r, orderType) {
    var c = this.pokemons[r];
    var j = l;
    for (var i = l; i < r; i++) {
      if (this.compare(this.pokemons[i], c, orderType) === -1) {
        [this.pokemons[i], this.pokemons[j]] = [
          this.pokemons[j],
          this.pokemons[i],
        ];
        j++;
      }
    }
    [this.pokemons[j], this.pokemons[r]] = [this.pokemons[r], this.pokemons[j]];
    return j;
  }
}

export default DivideAndConquer;
