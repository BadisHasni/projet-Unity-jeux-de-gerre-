function OnControllerColliderHit(hit : ControllerColliderHit){
	if(hit.gameObject.tag == "Battery"){
		Globaal.healthEnnergie ++;
		//Destroy("Battery");
	}
}

 


@script RequireComponent(AudioSource)