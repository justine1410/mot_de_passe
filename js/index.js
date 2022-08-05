let chiffre = document.getElementById("chiffre");
let minuscule = document.getElementById("minuscule");
let majuscule = document.getElementById("majuscule");
let speciaux = document.getElementById("speciaux")
let button = document.getElementById("bouton")


// chiffre.addEventListener('click',()=>{
//     if(chiffre.checked == true){
//         function nombreAleatoire(min,max){
//             return Math.floor(Math.random()*(max - min +1)) + min;
//         }
//         let nombre = nombreAleatoire(1,10);
//         localStorage.setItem('nombres', nombre)
//     }
// })   

// minuscule.addEventListener('click',()=>{
//     if(minuscule.checked == true){
//         const characters = 'abcdefghijklmnopqrstuvwxyz';

//         function minusculeAleatoire(length){
//             let result = ' ';
//             const charactersLength = characters.length;
//             for ( let i = 0; i < length; i++ ) {
//                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             }

//             return result;
//         }

//         let minuscules = minusculeAleatoire(1)
//         localStorage.setItem('minuscule', minuscules)

//     }
// })

// majuscule.addEventListener('click',()=>{
//     if(majuscule.checked == true){
//         const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//         function majusculeAleatoire(length){
//             let result = ' ';
//             const charactersLength = characters.length;
//             for ( let i = 0; i < length; i++ ) {
//                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             }

//             return result;
//         }

//         let majuscules = majusculeAleatoire(1)
//         localStorage.setItem('majuscule', majuscules)

//     }
// })

// speciaux.addEventListener('click',()=>{
//     if(speciaux.checked == true){
//         const characters = '&!@$-()_';

//         function speciauxAleatoire(length){
//             let result = ' ';
//             const charactersLength = characters.length;
//             for ( let i = 0; i < length; i++ ) {
//                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             }

//             return result;
//         }

//         let speciaux = speciauxAleatoire(1)
//         localStorage.setItem('speciaux', speciaux)

//     }
// })

// button.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log(localStorage);
//     let chiffre = localStorage.getItem('nombres');
//     let minuscule = localStorage.getItem('minuscule');
//     let majuscule = localStorage.getItem('majuscule');
//     let speciaux = localStorage.getItem('speciaux');
//     let nombreCaractere = document.querySelector("#nombre-caractere").value 

//     console.log(nombreCaractere);


//     let mdp = document.querySelector('.mdp');


//     if(chiffre && minuscule && majuscule && speciaux){
//         mdp.innerHTML= mdp.innerHTML+`<p>${chiffre + minuscule + majuscule + speciaux} </p>`
//         localStorage.clear()
//     }else if(chiffre ){
//         mdp.innerHTML= mdp.innerHTML+`<p>${chiffre } </p>`
//         localStorage.clear()

//     }else if(minuscule ){
//         mdp.innerHTML= mdp.innerHTML+`<p>${minuscule } </p>`
//         localStorage.clear()

//     }else if(majuscule ){
//         mdp.innerHTML= mdp.innerHTML+`<p>${majuscule } </p>`
//         localStorage.clear()

//     }else if(speciaux ){
//         mdp.innerHTML= mdp.innerHTML+`<p>${speciaux } </p>`
//         localStorage.clear()

//     }
    

// })


button.addEventListener('click',(e)=>{
    e.preventDefault();
    let nombre = " ";
    let minuscules = " ";
    let majuscules = " ";
    let speciauxCaractere = " ";

    let nombreChiffre = document.querySelector('.nombre-chiffre').value;
    let nombreMinuscule = document.querySelector('.nombre-minuscule').value;
    let nombreMajuscule = document.querySelector('.nombre-majuscule').value;
    let nombreCaractere = document.querySelector('.nombre-caractere').value;


    if(chiffre.checked== true){

        const characters = '1234567890';

        function nombreAleatoire(length){
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    nombre = nombreAleatoire(nombreChiffre)
    console.log(nombre);
}else{
        console.log('pas de chiffres');
    }

    if(minuscule.checked == true){
        const characters = 'abcdefghijklmnopqrstuvwxyz';

        function minusculeAleatoire(length){
            let result = '';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }
        minuscules = minusculeAleatoire(nombreMinuscule)
    }else{
        console.log('pas de minuscules');
    }

    if(majuscule.checked == true){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        function majusculeAleatoire(length){
            let result = '';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        majuscules = majusculeAleatoire(nombreMajuscule)
    }else{
        console.log('pas de majuscule');
    }

    if(speciaux.checked == true){
        const characters = '&!@$-()_';

        function speciauxAleatoire(length){
            let result = '';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        speciauxCaractere = speciauxAleatoire(nombreCaractere)
    }else{
        console.log('Pas de speciaux');
    }
    
    let mdp= document.querySelector('.mdp')

    let nouveauMDP = nombre+minuscules+majuscules+speciauxCaractere;

    console.log(nouveauMDP);
    
    let shuffled = nouveauMDP.split('').sort(()=>{return 0.5-Math.random()}).join('');

    console.log(shuffled);
    
    console.table(nombre,minuscules,majuscules,speciauxCaractere);

    if(!chiffre.checked && !minuscule.checked && !majuscule.checked && !speciaux.checked){
        document.querySelector('.error').style.display="initial"

    }else{
        document.querySelector('.error').style.display="none"
        mdp.innerHTML+=`<p>${shuffled}</p>`
    }

})




