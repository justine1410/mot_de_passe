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
    if(chiffre.checked== true){
        function nombreAleatoire(min,max){
            return Math.floor(Math.random()*(max - min +1)) + min;
        }
        let nombre = nombreAleatoire(1,10);
        localStorage.setItem('nombres', nombre)
        console.log(nombre);
    }else{
        console.log('pas de chiffres');
    }

    if(minuscule.checked == true){
        const characters = 'abcdefghijklmnopqrstuvwxyz';

        function minusculeAleatoire(length){
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        let minuscules = minusculeAleatoire(1)
        localStorage.setItem('minuscule', minuscules)
        console.log(minuscules);
    }else{
        console.log('pas de minuscules');
    }

    if(majuscule.checked == true){
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        function majusculeAleatoire(length){
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        let majuscules = majusculeAleatoire(1)
        localStorage.setItem('majuscule', majuscules)
        console.log(majuscules);
    }else{
        console.log('pas de majuscule');
    }

    if(speciaux.checked == true){
        const characters = '&!@$-()_';

        function speciauxAleatoire(length){
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        let speciaux = speciauxAleatoire(1)
        localStorage.setItem('speciaux', speciaux)
        console.log(speciaux);
    }else{
        console.log('Pas de speciaux');
    }
    
    console.log(localStorage);
    let chiffres = localStorage.getItem('nombres');
    let minuscules = localStorage.getItem('minuscule');
    let majuscules = localStorage.getItem('majuscule');
    let speciauxcaractere = localStorage.getItem('speciaux');

    let mdp= document.querySelector('.mdp')

    mdp.innerHTML=mdp.innerHTML+`${chiffres+minuscules+majuscules+speciauxcaractere}`
    localStorage.clear()
})



