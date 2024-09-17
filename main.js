
let contraseña="amdg";
let original= contraseña.split("");
function decifrarContraseña() {
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let encontrada = [];
    let contador=0;
    for(let i=0;i<4;i++){
        for(let j=0;j<27;j++){
            if(original[i]==abc[j]){
                encontrada.push(abc[j])
                contador+=1;
                break
            }
            contador+=1;
        }
    };
    return {encontrada, contador};
}

console.log(decifrarContraseña());
