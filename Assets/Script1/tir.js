var throwSound : AudioClip;
var coconutObject : Rigidbody;
var throwForce : float;

function Update () {
	if(Input.GetButtonUp("Fire1")){
	audio.PlayOneShot(throwSound);
	var newCoconut : Rigidbody = Instantiate(coconutObject, transform.position, transform.rotation);
	newCoconut.name = "bal";
	newCoconut.rigidbody.velocity = transform.TransformDirection (Vector3(0,0, throwForce));
	//if(!newCoconut.rigidbody) {
		//newCoconut.AddComponent(Rigidbody);
	//}
	
	//Ici, vous aviez besoin de trouver lÃ¢â‚¬â„¢objet parent de tous ces objets, mais vous 
    //pouvez utiliser la commande transform.parentsi vous faites seulement rÃƒÂ©fÃƒÂ©-rence au parent direct dÃ¢â‚¬â„¢un objet.
	Physics.IgnoreCollision(transform.root.collider, newCoconut.collider, true);
	}
	
}
@script RequireComponent(AudioSource)