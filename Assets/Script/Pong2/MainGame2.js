var score3DText : TextMesh;
private static var score : int = 0;



function Awake () 
{
	InvokeRepeating("UpdateScore", 0.05, 0.05);
}
function Start ()
{
	DontDestroyOnLoad(gameObject);
	DontDestroyOnLoad(GameObject.Find("score3DText"));
}
function UpdateScore () 
{
	//score += 1;

	score3DText.text = "Score: " + score.ToString();
}
//--------SCORE-------------------------------------------------------
static function AddScoreForBrickHard ()
{
	score +=10;
}
static function AddScoreForBrick ()
{
	score +=20;
}
static function AddScoreForPowerUp1 ()
{
	score +=30;
}
static function AddScoreForPowerUp2 ()
{
	score +=40;
}
static function AddScoreForPowerUp3 ()
{
	score +=50;
}
//------------------------------------------------------------
function GameOver ()
{
	if (score > PlayerPrefs.GetInt("highScore2"))
	{
		PlayerPrefs.SetInt("highScore2", score);
	
	}
	
	score= 0;
	Application.LoadLevel("Menu1");
}
