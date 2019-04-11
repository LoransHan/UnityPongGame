private var ray : Ray;
private var rayCastHit : RaycastHit;

var highScore3DText : TextMesh;
var highScore3DPong2Text : TextMesh;

function Awake ()
{
	//PlayerPrefs.DeleteAll();
	highScore3DText.text = "" + PlayerPrefs.GetInt("highScore").ToString();
	highScore3DPong2Text.text = "" + PlayerPrefs.GetInt("highScore2").ToString();
}

function Update () 
{
	if (Input.GetMouseButton(0))
	{
		ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		if (Physics.Raycast (ray, rayCastHit))
		{
			if (rayCastHit.transform.name == "Menu")
			{
				Application.LoadLevel("Menu1");
			}
		}
	}
}