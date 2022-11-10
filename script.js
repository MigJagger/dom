//console.log(document.getElementById("premier-paragraphe"))
//alert(document.getElementById("nom").value)
//alert(document.getElementById("prenom").value)

//click - event for user when it's clicking
// change - quand l'utilisateur a changé la valeur d'un champ de saisie
// mouseover - l'utilisateur à survoler un élément à l' aide de la souris

//addEventListener()
//let rot = 
//document.getElementById('mon-bouton').onclick = function direBonjour(){
  //  alert('bonjour')
//}

//let element = document.getElementById('second')
//element.classList.remove('hidden')
/*let elements = document.getElementsByClassName('spoiler')
for (let i = 0;i < elements.length; i++){
    const element = elements[i]
    element.classList.add('hidden')
}*/

/*function changerDisplay(classe, valeur){

}
document.getElementById('jaune').onclick = ()=>{
    let targets = document.getElementsByClassName('sportif')
    for (let i = 0;i < targets.length; i++){
        const element = targets[i]
        element.style. = 'sportif'   
}
}*/

/*et elem = document.getElementById('premier')
elem.style.backgroundColor = "green"
elem.style.fontSize = '400px'*/


/*function changerDisplay(classe, valeur) {
    let articles = document.getElementsByClassName(classe);
    for (let i=0; i<articles.length; ++i) {
      articles[i].style.display = valeur;
    }  
  }*/
  
  /*document.getElementById('tous').onclick = function() {
    changerDisplay('article', 'block'); // afficher tous les articles
  };
  
  document.getElementById('ludique').onclick = function() {
    changerDisplay('article', 'none'); // cacher tous les articles
    changerDisplay('ludique', 'block'); // afficher articles ludiques
  };
  
  document.getElementById('pratique').onclick = function() {
    changerDisplay('article', 'none'); // cacher tous les articles
    changerDisplay('pratique', 'block'); // afficher articles pratiques
  };
  
  document.getElementById('sportif').onclick = function() {
    changerDisplay('article', 'none'); // cacher tous les articles
    changerDisplay('sportif', 'block'); // afficher articles sportifs
  };*/

  //let image= document.getElementsByTagName('img')

  /*document.getElementsByTagName('h1')[0].innerHTML = 'Something'*/


  /*function mere (){
    console.log('fonction mere appelée')
    return function fille() {
      console.log('fonction fille appelée')
    }
  }
  let fct = mere()
  
  fct()
  
  
  function coucou(){
    console.log('Bonjour toi !')
    return function greetings(name){
      console.log('Bonjour', name)
    }
  }*/

  /*function mere(i){
    return function fille(){
      alert('vous avez cliqué sur l\'élément n°'+i)
    }
  }
  for(let i = 0; i < Element.length; i++){
    element[i].onclick=mere(i);
  }*/

//document.getElementById('mon-bouton').onclick = function(event){

//console.log(event)
 // }

 let buttons = document.getElementsByTagName('button')
 for(let i = 0; i <buttons.length; i++){
  buttons[i].onclick = function(event){
    alert('bouton clicked :' + event.currentTarget.innerHTML)
  }
 }

 // document.createElement(nom) : creer un element
// document.createTextNode(texte) : creation d'un noeud textuel
// conteneur.appendChild(element) : pour ajouter un element comme un enfant d'un autre element

 let bouton = document.createElement('button')
 let texteDuBouton = document.createTextNode('Mon beau bouton')
 bouton.appendChild(texteDuBouton)
 document.appendChild(bouton)
 document.body.removeChild(bouton)