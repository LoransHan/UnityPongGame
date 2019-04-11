static var numBricks : int = 0;
public  var hitPoints : int = 1;


function Start ()
{
	numBricks++;

}
function Update () 
{

}
function OnCollisionEnter (col : Collision)
{
		hitPoints--;
		renderer.material.mainTexture = Resources.Load("cracked");  //Ändrar texturen vid första hitt
		if (hitPoints <= 0)
		{
			Die();
		}
	
}
function Die()
{
	Destroy(gameObject);

	numBricks--;
	Debug.Log(numBricks);

	if (numBricks <= 0)
	{
		Application.LoadLevel("Pong2");
		
	}
}