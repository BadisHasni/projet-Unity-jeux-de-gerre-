var speed : int; 
//var anim : Animation;

private var controller : CharacterController ;
private var moveDirection : Vector3 ;
private var delayRotation : float ;//variable qui permet de changer la rotation de l'ennemie
private var changeRotation : float ;
private var newRotation : float ;
private var hit : RaycastHit ;
private var dirToHero : Vector3;
private var fight : boolean;
//private var health : int;
//private var script : AI;//script de type AI

function Start () {
    //health = 5;
    delayRotation = Random.Range(0,11);
    newRotation = Random.Range(-361,361);//calculer une angle aléatoire entre -361 et 361
    controller = GetComponent("CharacterController");
    //script = GetComponent("AI");//On recupère le scipt AI qui est un composant
    
}

function Update () {
  
   // if(health <= 0){
        //anim.CrossFade("die",0.5);
        //Destroy(gameObject,5);
        //script.enabled = false;
       // Debug.Log("Ennnnnnnnnnnnnnnnn !");
       // return;//pour stopper l'exécution du code !
    //}

    //Direction au personnage principale !
    dirToHero = GameObject.Find("First Person Controller").transform.position - GameObject.Find("skeletonDark").transform.position;
    
    //Pour s'assurer que l'ennemi ne s'eleve pas !
    dirToHero.y = 0;
     
   if(!fight){
     //Si la distance entre l'Hero et l'ennemi est < 6 alors on l'attaque !
    if(dirToHero.magnitude < 20){
        moveDirection = dirToHero * 0.5;
        transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(dirToHero),10 * Globaal.deltaTime);
    
    }else{
        //Vecteur directeur
         moveDirection = Vector3.forward * speed ; 
         //Chaque foi ,il prend une direction ou une rotation aléatoire
        //Toute les secondes (un nombre aléatoire)on va calculer un nombre aléatoire d'angle de rotation
        if(changeRotation + delayRotation < Globaal.fixedTime){ //fixedTime compte le tps lorsque le jeu est lancé
            newRotation = Random.Range(-361,361);
           changeRotation = Globaal.fixedTime ;
           delayRotation = Random.Range(1,11);
         }
    
        //On envoie un Raycast qui détecter les objets
        if(Physics.Raycast(transform.Find("origin").position , transform.forward , hit)){
            //Si on detecte un objet à un rayon <5 on change de direction (on affecte l'angle opposé)
            if( hit.distance < 5){
            
                transform.rotation = Quaternion.Slerp(transform.rotation,transform.rotation*Quaternion.Euler(0,180,0),0.5 * Globaal.deltaTime);
        
            }else{//Si non on continue !(cad l'objet >5m)
                transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.Euler(0,newRotation,0),0.5 * Globaal.deltaTime);
            }
        }
        
        //Transformation locale
        moveDirection = transform.TransformDirection(moveDirection);
        
        
        }
        }
        
         //On peut se battre
    if(dirToHero.magnitude < 8){
        fight = true;
        //On arrete le personnage
        moveDirection = Vector3.zero ; //vecteur nul
        //On continue à regarder dans la direction de mon Hero
        transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(dirToHero),10 * Globaal.deltaTime);
    }else{
        fight = false;
    }
        
        
        
        
        //Debug.DrawRay(transform.Find("origin").position,transform.forward,Color.red,1);
        if(fight){
                transform.Find("skeletonDark").animation.CrossFade("attack",0.5 *Globaal.deltaTime);
        }else{
                transform.Find("skeletonDark").animation.CrossFade("run",0.5 *Globaal.deltaTime);

      }  
        moveDirection.y -= Globaal.gravity;
        controller.Move( moveDirection * Globaal.deltaTime); 

        }
    //}
   //}
    
  
    
    
    //Quaternion.Slerp(from, to , t) faire un mouvement de rotation de la posi° from à to
    //+Annimation
    /*
    if(fight){
        anim.CrossFade("attack",0.5 *Globaal.deltaTime);
    }else{
        anim.CrossFade("run",0.5 *Globaal.deltaTime);
    }
   
     moveDirection.y -= Globaal.gravity;
    
    controller.Move( moveDirection * Globaal.deltaTime);
    
}
*/
//Le collision avec les arbres
function OnControllerColliderHit(hit : ControllerColliderHit){
   if(hit.transform.name != "Terrain"){
         transform.rotation = Quaternion.Slerp(transform.rotation,transform.rotation*Quaternion.Euler(0,180,0),0.5 * Globaal.deltaTime);    
    }
 }
 
 
//
//function getHit(nb : int){ //static pour l'acceder ailleur
    //health = health - nb;
//}


