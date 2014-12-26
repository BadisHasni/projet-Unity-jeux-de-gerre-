var speed : int; 
var anim : Animation;

private var controller : CharacterController ;
private var moveDirection : Vector3 ;
private var delayRotation : float ;
private var changeRotation : float ;
private var newRotation : float ;
private var hit : RaycastHit ;
private var dirToHero : Vector3;
private var fight : boolean;
private var health : int;
private var script : AI;//script de type AI, en effet chaque scipt est un classe qui porte le nom de ce script

function Start () {
    health = 5;//health de l'ennemi
    delayRotation = Random.Range(0,11);
    newRotation = Random.Range(-361,361);
    controller = GetComponent("CharacterController");
    script = GetComponent("AI");//On recupère le scipt AI qui est un composant
    
}

function Update () {
    
    if(health <= 0){
        anim.CrossFade("die",0.5);
        Destroy(gameObject,5);//detruire l'ennemi
        Global.ennemy_dead ++;
        script.enabled = false;//descactiver le script (1)
        
        return;//pour stopper l'exécution du code !  (2)
    } //(1) et (2) pour decharger le scipt de la mémoire !

    //Direction au personnage principale !
    dirToHero = GameObject.Find("FPC").transform.position - GameObject.Find("skeletonDark").transform.position;
    //dirToHero=Vector3.zero;
    //Pour s'assurer que l'ennemi ne s'eleve pas !
    //dirToHero.y = 0;
     
   if(!fight){
     //Si la sistance entre l'Hero et l'ennemi est < 6 alors on l'attaque !
    if(dirToHero.magnitude < 10){
        moveDirection = dirToHero * 0.5;
        transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(dirToHero),10 * Global.deltaTime);
    
    }else{
        //Vecteur directeur
         moveDirection = Vector3.forward * speed ; 
   
        //Toute les secondes (un nombre aléatoire)on va calculer un nombre aléatoire d'angle de rotation
        if(changeRotation + delayRotation < Global.fixedTime){ //fixedTime compte le tps lorsque le jeu est lancé
            newRotation = Random.Range(-361,361);
           changeRotation = Global.fixedTime ;
           delayRotation = Random.Range(1,11);
         }
    
        //On envoie un Raycast
        if(Physics.Raycast(transform.Find("origin").position , transform.forward , hit)){
            //Si on detecte un objet à un rayon <5 on change de direction (on affecte l'angle opposé)
            if( hit.distance < 3){
            
                transform.rotation = Quaternion.Slerp(transform.rotation,transform.rotation*Quaternion.Euler(0,180,0),0.5 * Global.deltaTime);
        
            }else{//Si non on continue !
                transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.Euler(0,newRotation,0),0.5 * Global.deltaTime);
            }
        }
        
        //Transformation locale
        moveDirection = transform.TransformDirection(moveDirection);
    }
   }
    
   //On peut se battre
    if(dirToHero.magnitude < 4){
        fight = true;
        //On arrete le personnage
        moveDirection = Vector3.zero ; //vecteur nul
        //On continue à regarder dans la direction de mon Hero
        transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(dirToHero),10 * Global.deltaTime);
    }else{
        fight = false;
    }
    
    
    //Quaternion.Slerp(from, to , t) faire un mouvement de rotation de la posi° from à to
    //+Annimation
    if(fight){
        anim.CrossFade("attack",0.5 *Global.deltaTime);
    }else{
        anim.CrossFade("run",0.5 *Global.deltaTime);
    }
   
     moveDirection.y -= Global.gravity;
    
    controller.Move( moveDirection * Global.deltaTime);
    
}

//Le collision avec les arbres
function OnControllerColliderHit(hit : ControllerColliderHit){
   if(hit.transform.name != "Terrain"){
         transform.rotation = Quaternion.Slerp(transform.rotation,transform.rotation*Quaternion.Euler(0,180,0),0.5 * Global.deltaTime);    
    }
 }
 
 
//
function getHit(nb : int){ // pour l'acceder ailleur
    health = health - nb;
}