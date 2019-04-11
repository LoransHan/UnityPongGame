using UnityEngine;
using System.Collections;

public class Gun1 : MonoBehaviour {
	
	public Rigidbody bullet;
	public float speed = 45.5f;
	
	void Start () {
	
	}
	
	
	void Update () 
	{
		if(Input.GetButtonDown("Fire1"))
		{
			Rigidbody inp = Instantiate(bullet, transform.position, transform.rotation) as Rigidbody;
			inp.velocity = transform.TransformDirection(new Vector2(0, speed));
		}
	}
}
