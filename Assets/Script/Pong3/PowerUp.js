

function Update ()
{
	
}
function OnCollisionEnter(col : Collision) 
{
		

		if (col.collider.tag == "Power1Tag")
		{
			MainGame2.AddScoreForPowerUp1();//Gjorde AddScoreForBrick() Static
			Destroy(col.gameObject);
			
		} 
		if (col.collider.tag == "Power2Tag")
		{
			MainGame2.AddScoreForPowerUp2();//Gjorde AddScoreForBrick() Static
			Destroy(col.gameObject);
			
		} 
			if (col.collider.tag == "Power3Tag")
		{
			MainGame2.AddScoreForPowerUp3();//Gjorde AddScoreForBrick() Static
			Destroy(col.gameObject);
			
		} 
	
}
