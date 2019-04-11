
var powerUp : GameObject;
var powerUp2 : GameObject;
var powerUp3 : GameObject;
var spawn_pos;
var spawn_pos2;
var spawn_pos3;
var timer = 0.0;
var timer2 = 0.0;
var timer3 = 0.0;




//---------------------------------------------------------------------------------
function spawnPowerUp ()
{
	spawn_pos = Vector3(-2.8,6.6,0);
	var tempSpawnPoweUp = Instantiate(powerUp, spawn_pos, Quaternion.identity);
	
}
//----------------------------------------------------------------------------------
function spawnPowerUp2 ()
{
	spawn_pos2 = Vector3(0.2,5.4,0);
	var tempSpawnPoweUp2 = Instantiate(powerUp2, spawn_pos2, Quaternion.identity);
}
//------------------------------------------------------------------------------------
function spawnPowerUp3 ()
{
	spawn_pos3 = Vector3(3.3,1.1,0);
	var tempSpawnPoweUp3 = Instantiate(powerUp3, spawn_pos3, Quaternion.identity);
}
function Update () 
{
 
	timer += Time.deltaTime;
	timer2 += Time.deltaTime;
	timer3 += Time.deltaTime;
	if (timer > 6)
	{
		spawnPowerUp();
		timer = 0.0;
	}
	if (timer2 > 10)
	{
		spawnPowerUp2();
		timer2 = 0.0;
	}
	if (timer3 > 15)
	{
		spawnPowerUp3();
		timer3 = 0.0;
	}


}
//----------------------------------------------------------------------------------
