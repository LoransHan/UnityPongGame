
var bullet : Rigidbody;
var speed : float = 45.5;	
//var mainGameScript : MainGame2;
function Update () 
{	
	if (Input.GetButtonDown("Fire1"))
	{
		var inp : Rigidbody = Instantiate(bullet, transform.position, transform.rotation);
		inp.velocity = transform.TransformDirection(new Vector2(0, speed));
	}	
		
}
