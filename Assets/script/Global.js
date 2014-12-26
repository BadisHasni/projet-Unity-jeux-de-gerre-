static var deltaTime : float;
static var fixedTime : float;
static var gravity : float;
static var healthHero :float = 7;
static var objectiv : float = 1;//le nbre des ennemis à tuer !
static var ennemy_dead : int = 0; //le nbre des ennemis tués

var theEnd : GameObject ; //Systheme de particule !

function Start () {
    gravity = 3;
    theEnd.renderer.enabled = false ; //désactiver l'affichage du Systheme de particule
}

function Update () {
   
    deltaTime = Time.deltaTime;
    fixedTime = Time.fixedTime;
    
    if(ennemy_dead >= objectiv){            //si On atteint l'objectif du jeu on 
         theEnd.renderer.enabled = true ; //affiche le Systheme de particule !
    }
    
    if(healthHero <=0){
        Application.LoadLevel("YouLose");
    }
}