var mainGameScript : MainGame2;
var particles_splash : GameObject;
var sound1 : AudioSource;
function Awake () 
{
	rigidbody.AddForce(4, 4, 0, ForceMode.Impulse);
	InvokeRepeating("IncreaseBallVelocity", 2, 2);
}

function Update ()
{
	if (transform.position.y <-5)
	{
		sound1.Play();
		mainGameScript.GameOver();
	 	//Application.LoadLevel("Menu");
	}
}

function IncreaseBallVelocity()
{
	rigidbody.velocity *= 1.05;
	Debug.Log("velocity is: " + rigidbody.velocity);
}

//function OnCollisionEnter(Collision : Collision) 
function OnCollisionEnter(col : Collision) 
{
	Instantiate(particles_splash, transform.position, transform.rotation);
	if (col.collider.name == "Brick")
	{
		mainGameScript.AddScoreForBrick();
		Destroy(col.gameObject);	
		
	}
	audio.Play();
}
