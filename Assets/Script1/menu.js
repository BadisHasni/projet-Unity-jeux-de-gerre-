

function OnGUI(){

//GUI.Button(Rect(Screen.width/4.5 +300 ,Screen.height/3,115,115),"");
//GUI.Button(Rect(Screen.width/4.5 +500 ,Screen.height/3,115,115),"");


if(GUI.Button(Rect(Screen.width/4.5 +400 ,Screen.height/3,115,115),"Scéne 2")){
 Application.LoadLevel("scéne2");


}

 
if(GUI.Button(Rect(Screen.width/4.5 +400 ,Screen.height/3+150,115,115),"Scéne 1")){
 Application.LoadLevel("scéne");

}

 if(GUI.Button(Rect(Screen.width/4.5+50 ,Screen.height/3+50,200,50),"Start the game"))
{
    Application.LoadLevel("scéne");
    }
    
 else if (GUI.Button(Rect(Screen.width/4.5+50 ,Screen.height/2+100,200,50),"Quit the game")){   

 Application.Quit();
 Debug.Log("Cette partie fonctionne !!!");
 
 }
 
 ///else if(GUI.Button(Rect(Screen.width/4.5+50,Screen.height/3+250,200,50),"The Best Score")){
 
// Application.Quit();
 //Debug.Log("Cette partie fonctionne !!!");

 //}
 
 

}