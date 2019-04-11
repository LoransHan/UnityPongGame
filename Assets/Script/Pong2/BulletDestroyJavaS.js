public var mainGameScript : MainGame2;

function Start () 
{
	Destroy(gameObject, 1);
}
function OnCollisionEnter(col : Collision) 

{
	if (col.collider.name == "Brick")
	
	{
		//mainGameScript.AddScoreForBrick();
		Destroy(col.gameObject);
	
	}
}