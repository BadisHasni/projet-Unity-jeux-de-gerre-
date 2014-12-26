


/*function OntTriggerEnter(hit : Collider){
      if(hit.transform.tag == "dagger"){
      //Debug.Log("Collision");
      Globaal.healthMain -- ;

}
}  
*/

function OnControllerColliderHit(hit : ControllerColliderHit){
	if(hit.gameObject.tag == "dagger"){
		Globaal.healthMain -- ;
	}
}


@script RequireComponent(AudioSource)