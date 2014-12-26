#pragma strict

private var targetCamera : Transform ;
private var to : Vector3;
private var targetCharacter : Transform ;
function Start () {
    //On va poiter la camera sur la shere Target
    targetCamera = GameObject.Find("Target").transform ;
    //On va poiter la camera sur le personnage Hero
    targetCharacter = GameObject.Find("Ice Golem").transform ;
    
    
}

function Update () {
    //(La camera)Pour suivre le hero
    //On accede à la position de la camera
    //1er para la posiion actuelle
    //2eme para la position de la sphere
    //3eme para la vitesse
    transform.position = Vector3.Lerp(transform.position,targetCamera.position,0.1);
    
    to = targetCharacter.transform.position - transform.position ;
    
    //pour la camera poinre sur  My Hero
    transform.rotation = Quaternion.Slerp(transform.rotation,Quaternion.LookRotation(to),0.1);
   
}