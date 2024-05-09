import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UsersJPH } from "./UsersJPH";

export const Home = () => (
	<div className="text-center mt-5">
		<p>
			{/* <img src={rigoImage} /> */}
		</p>
		{/* <a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a> */}
		<UsersJPH/>
	</div>
);
