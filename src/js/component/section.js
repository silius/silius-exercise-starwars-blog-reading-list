import React from "react";
import { Card } from "./card";
import { Cardp } from "./cardp";
import { CardDeck, Container } from "react-bootstrap";

export const Section = props => {
	//TODO: Card component can be rendered conditionally on title  👌
	return (
		<>
			<h1 className="mbt-3">{props.title}</h1>
			<Container>
				<CardDeck className="d-flex flex-row flex-nowrap scroll">
					{props.dlist.map((item, index) => {
						return props.title == "Characters" ? (
							<Card key={index} content={item} />
						) : (
							<Cardp key={index} content={item} />
						);
					})}
				</CardDeck>
			</Container>
		</>
	);
};
