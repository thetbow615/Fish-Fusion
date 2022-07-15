const { mongerReady } = require("./fishMonger.js")
const { chefOptions } = require("./fishMonger.js") 

//grabs array MongerReady from fishMonger
// 1. define a function that builds HTML Menu and return the HTML
//let chefsMenu = chefOptions()

const fishMenu = () => {
    let HTMLstring = `<h1> Chefs Menu </h1>
    <article class="menu"> `;

    for (const species of chefOptions) {
        HTMLstring += `<h2> ${species.species} </h2>
        <section class="menu__item"> ${species.species} Soup </section>
        <section class="menu__item"> ${species.species} Sandwhich </section>
        <section class="menu__item"> Grilled ${species.species} </section>
    </article> \n`
}
return HTMLstring;
}


module.exports = {fishMenu}

//console.log(redayMenu)    
 
// ----------------------HTML MENU -----------------------------------
/*<h1> Menu </h1>
<article class= 'menu'>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>    
</article>
*/
