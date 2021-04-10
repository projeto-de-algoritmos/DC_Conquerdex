class Util {
    constructor(){}

    qSort(v, l, r, ){
        if(r<=l) return;
        if(v[r] > v[(l+r)/2]){
            [v[r], v[(l+r)/2]] = [v[(l+r)/2], v[r]];
        }
        if(v[(l+r)/2] > v[l]){
            [v[l], v[(l+r)/2]] = [v[(l+r)/2], v[l]];
        }
        if(v[(l+r)/2] > v[r]){
            [v[r], v[(l+r)/2]] = [v[(l+r)/2], v[r]];
        }
        var j = this.separa(v, l, r);
        this.qSort(v, l, j-1);
        this.qSort(v,j+1, r);
    }

    separa(v, l ,r){
        var c = v[r];
        var j = l;
        for(var i=l; i<r; i++){
            if(v[i]<=c){
                [v[i], c] = [c, v[i]];
                j++;
            }
        }
        [v[j], v[r]] = [v[r], v[j]];
        return j;
    }

    getColor(type){
        switch (type){
            case 'grass':
                return '#17A414';
            case 'fire':
                return '#FF0000';
            case 'water':
                return '#3B4CCA';
            case 'electric':
                return '#FF9900';
            case 'poison':
                return '#8F4FE1';
            case 'bug':
                return '#B3BB27';
            case 'dark':
                return '#3E2C1E';
            case 'dragon':
                return '#715CDC';
            case 'fairy':
                return '#F1ABF4';
            case 'flying':
                return '#647BDA';
            case 'normal':
                return '#938E77';
            case 'fighting':
                return '#782F1C';
            case 'ghost':
                return '#5E5DAD';
            case 'ground':
                return '#D2B256';
            case 'ice':
                return '#B0E8FC';
            case 'psychic':
                return '#E94C83';
            case 'rock':
                return '#B8A45B';
            case 'steel':
                return '#AFAFBD';
            default:
                return '#000000';
        }
    }
}


const util = new Util();
Object.freeze(util);
export default util;