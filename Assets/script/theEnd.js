function OnTriggerEnter(hit : Collider){
    	if(Global.ennemy_dead >= Global.objectiv){
    	    Application.LoadLevel("YouWin");
    	}
}