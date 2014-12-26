static var deltaTime:float;
static var fixedTime:float;
static var gravity:float=1;
static var healthMain:float = 20;
static var healthEnnergie:float = 0;


function Update (){
   deltaTime = Time.deltaTime;//récupérer le cadence du temps
   fixedTime = Time.fixedTime;//récupérer le temps au début de jeux
   
   }