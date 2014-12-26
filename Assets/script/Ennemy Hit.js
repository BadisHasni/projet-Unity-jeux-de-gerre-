
function OnTriggerEnter (hit : Collider) {
    if(hit.transform.name == "Ennemy"){
        hit.SendMessage("getHit",1);
    }

}