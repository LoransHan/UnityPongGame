public var brick : BrickScript;
private var ray : Ray;
private var rayCastHit : RaycastHit;







function Start ()
{
	
}
function Update () 
{
	if (Input.GetMouseButton(0))
	{
		ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		
		if (Physics.Raycast (ray, rayCastHit))
		{
			if (rayCastHit.transform.name == "PlayButton")
			{
				Application.LoadLevel("Pong3");
				brick.numBricks = 0;
			}
			
			if (rayCastHit.transform.name == "PlayButton2")
			{
				Application.LoadLevel("Pong");
								
			}
			if (rayCastHit.transform.name == "Highscore")
			{
				Application.LoadLevel("HighScore");
			}
			
		}
	}
}