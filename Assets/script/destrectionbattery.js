
private var controller : CharacterController ;
function OnCollisionEnter(theObject : Collision) {
if(theObject.gameObject.name=="controller"){
Destroy(gameObject);
//affiche.charge++;
}
}



@script RequireComponent(AudioSource)