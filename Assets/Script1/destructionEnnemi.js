function OnCollisionEnter(theObject : Collision) {
  if(theObject.gameObject.name=="bal"){
    Destroy(gameObject);
    affiche.charge++;
  }
}




@script RequireComponent(AudioSource)