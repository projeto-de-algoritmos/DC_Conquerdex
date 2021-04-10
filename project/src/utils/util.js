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
        var j = separa(v, l, r);
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
}