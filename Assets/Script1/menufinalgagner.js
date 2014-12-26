function OnGUI(){

 if(GUI.Button(Rect(Screen.width/4.5 +300,Screen.height/3+300,200,50),"Quit the game"))
{
 Application.Quit();
  Debug.Log("Cette partie fonctionne !!!");

   
    }
    
    if(GUI.Button(Rect(Screen.width/4.5 +300,Screen.height/3+200,200,50),"Start the game"))
{
     Application.LoadLevel("scéne");


   
    }
    
    
    
      }