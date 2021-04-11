class Util {
  getColor(type) {
    switch (type) {
      case "grass":
        return "#17A414";
      case "fire":
        return "#FF0000";
      case "water":
        return "#3B4CCA";
      case "electric":
        return "#FF9900";
      case "poison":
        return "#8F4FE1";
      case "bug":
        return "#B3BB27";
      case "dark":
        return "#3E2C1E";
      case "dragon":
        return "#715CDC";
      case "fairy":
        return "#F1ABF4";
      case "flying":
        return "#647BDA";
      case "normal":
        return "#938E77";
      case "fighting":
        return "#782F1C";
      case "ghost":
        return "#5E5DAD";
      case "ground":
        return "#D2B256";
      case "ice":
        return "#B0E8FC";
      case "psychic":
        return "#E94C83";
      case "rock":
        return "#B8A45B";
      case "steel":
        return "#AFAFBD";
      default:
        return "#000000";
    }
  }
}

const util = new Util();
Object.freeze(util);
export default util;
