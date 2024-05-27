import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const CardKondan = () => {
	const [tasks, setTasks] = useState([]);
	const [selectedItemIndex, setSelectedItemIndex] = useState(null);
	const modalRef = useRef(null);

	const toggleModal = (index) => {
		setSelectedItemIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const handleOutsideClick = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setSelectedItemIndex(null);
		}
	};

	useEffect(() => {
		fetch(
			"https://api-v2.elchocrud.pro/api/v1/89df25de60ed5e3c6b8fff589085086d/darkent"
		)
			.then((response) => response.json())
			.then((data) => {
				setTasks(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	return (
		<FoodMenu>
			<NameMenu>Список блюд в категории</NameMenu>
			<CardBorder>
				{tasks.map((item, index) => (
					<form key={item.id}>
						<div>
							<ImageFood src={item.image} onClick={() => toggleModal(index)} />
							{selectedItemIndex === index && (
								<Modal>
									<ModalContent ref={modalRef}>
										<img src={item.image} />
									
									</ModalContent>
								</Modal>
							)}
							<h2>{item.name}</h2>
							<p>{item.price}</p>
						</div>
					</form>
				))}
			</CardBorder>
		</FoodMenu>
	);
};

export default CardKondan;

const ImageFood = styled.img`
	width: 200px;
	height: 200px;
	margin-left: 100px;
	cursor: pointer;
`;
const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ModalContent = styled.div`
	background-color: white;
	padding: 20px;
	border-radius: 30px;
  color: black;
`;
const CardBorder = styled.div`
	display: flex;
	gap: 60px;
	border: 3px solid gold;
	border-radius: 5px;
	flex-wrap: wrap;
`;
const FoodMenu = styled.div`
	font-family: Arial, Helvetica, sans-serif;
	color: white;
	text-align: center;
	padding-top: 200px;
`;
const NameMenu = styled.h1`
	text-align: center;
	background-image: linear-gradient(to right, #ffc800, #ff4800);
	border-radius: 5px;
`;
