//fonction pure car elle ne change pas t
function ajouterNombrePure(t, n){
    return [...t, n];
}

let t1=[1, 2, 3];
let t2=ajouterNombrePure(t1, 4);
console.log(t2);

function ajouterNombreImpure(t, n){
    t.push(n);
}

console.log("t1=", t1);
ajouterNombreImpure(t1, 4);
console.log("Après appel à ajouterNombreImpure");
console.log("t1=", t1);

let ville="casa";
let villeMaj=ville.toUpperCase();
console.log(ville);//casa
console.log(villeMaj);//CASA