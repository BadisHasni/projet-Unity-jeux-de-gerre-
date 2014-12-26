
public var particule : GameObject;
public var anim : Animation ;
public var coupDePg : boolean;

private var controller : CharacterController;
private var moveDirection : Vector3 ;
private var runAnim : boolean ;


function Start () {
    controller = GetComponent("CharacterController");
    
    characterContent = transform.Find("golem");
}

function Update () {
    moveDirection = Vector3(0,0,0);
   // Debug.Log(Input.GetAxis("Vertical"));
    
    
    if( Input.GetKey(KeyCode.Space) ){
       
         runAnim = true;
         
    }else{
        
             runAnim = false;
    }
    
    //coup de poing
    if(Input.GetKey(KeyCode.RightShift)){
        coupDePg = true;
        anim.CrossFade("punch",0.2);
    }
    
    //On test si l'ainimation est finie
    if(!anim["punch"].enabled){
         coupDePg = false;   
    }
      
     //Gestion de l'annimation
    if(Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.DownArrow) ){
        if(!runAnim){
            
            anim.CrossFade("walk",0.2);
        
        }else{
           
             anim.animation.CrossFade("run",0.2);
        }
    
    //si on ne cour pas et on ne marche pas on à l'état idle !
    }else if(!coupDePg){
    
         anim.CrossFade("idle",0.2);
         
    }
    
    if(Input.GetKey(KeyCode.LeftShift)){
       // moveDirection.y = jumpSpeed ;
        anim.CrossFade("jump",0.2);
    }
    
}

function OnTriggerEnter(hit : Collider){
    if(hit.transform.tag == "dagger"){ //si on detecte l'épée
        Global.healthHero --;
        var tmp = Instantiate(particule,transform.Find("Particule").position,transform.Find("Particule").rotation);//On instancie particle à la postion de notre Particule (qui 
                                        //se trouve dans l'hiérachie de notre Héro )
        //Destroy(tmp,1.5);
        
    }
}