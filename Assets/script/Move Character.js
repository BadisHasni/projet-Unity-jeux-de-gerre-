
//Public var
var speed : float;
var speedRun : float;
var speedRotate : float;
//var gravity : float;
var jumpSpeed : float;

//Private vat
private var controller : CharacterController;
private var moveDirection : Vector3;
//private var deltaTime : float;
private var runAnim : boolean ;
private var characterContent ;


private var jump : boolean ;

function Start () {
   
     controller = GetComponent("CharacterController");
     
     characterContent = transform.Find("golem");
}

function Update () {
    //Cadence du temps
   // deltaTime =  Time.deltaTime;
    runAnim = false;
    
  if(controller.isGrounded){
    //Deplacement haut/bas le vecteur directeur 
    //Si on appuie sur shift on donne de la vitesse supplémentaire
    if( Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift) ){
       
         moveDirection = Vector3(0  ,0,Input.GetAxis("Vertical") * speedRun);
         runAnim = true;
        
    }else{
        
        moveDirection = Vector3( 0 ,0,Input.GetAxis("Vertical") * speed );
      
    }
    
    //Gestion de l'annimation
    if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.DownArrow)){
        if(!runAnim){
            
            characterContent.animation.CrossFade("walk",0.2);
        
        }else{
           
             characterContent.animation.CrossFade("run",0.2);
        }
    
    //si on ne cour pas et one marche pas on à l'état idle !
    }else{
    
         characterContent.animation.CrossFade("idle",0.2);
    }
    
    if(Input.GetKey(KeyCode.Space)){
        moveDirection.y = jumpSpeed ;
        characterContent.animation.CrossFade("jump",0.2);
    }
  }
    
    //transformer du locale vers le globale et vise versa !
    moveDirection = transform.TransformDirection(moveDirection);
    
    
    //Rotation de mon personnage
    transform.Rotate(Vector3(0,Input.GetAxis("Horizontal") * speedRotate * Global.deltaTime , 0));
    
    //Gravité
    moveDirection.y -= Global.gravity * Global.deltaTime ;
    
    
    //Deplacement du CharacterController
    controller.Move(moveDirection * Global.deltaTime);
    
    
}