/*function OnCollisionEnter(theObject : Collision) {
  if(theObject.gameObject.name=="cube"){
     Application.LoadLevel("Gagner2");
  }
}
*/


function OnControllerColliderHit(hit : ControllerColliderHit){
	if(hit.gameObject.tag == "Cube"){
		Application.LoadLevel("Gagner2");
	}
}

 


@script RequireComponent(AudioSource)