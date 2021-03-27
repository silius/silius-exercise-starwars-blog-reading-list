import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Section } from "../component/section";

export const Home = () => (
	<div className="mt-5">
		<h1>Characters</h1>
		<br />
		<Section />
		<h1>Planets</h1>
		<Section />
	</div>
);
