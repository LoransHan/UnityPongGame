var mainGameScript : MainGame;
var particles_squares : GameObject; 

function OnTriggerEnter (collision : Collider) 
{
	if (collision.transform.name == "Ball")
	{
		Instantiate(particles_squares, transform.position, transform.rotation);
		mainGameScript.AddScoreForBonusArea();
		audio.Play();
	}
}