import React from "react";
import css from "./Menu.module.css";
import images from "../../assets/Images/1682342794_pictures-pibig-info-p-povar-risunok-vkontakte-2.jpg";
import styled from "styled-components";
const Menu = () => {
	return (
		<div >
			<div className={css.NameCaffe}>
				<CardProfil  width={'100px'}height={'100px'} src={images} />
        <div>

				  <div>

				<LinerGradient> Добро пожаловать!<p> </p>Мы открылись!</LinerGradient>
					</div>
        </div>
			</div>
		</div>
	);
};

export default Menu;

const CardProfil = styled.img`
	border-radius: 50%;
	cursor: pointer;
`
const LinerGradient = styled.p`
	       background-image: linear-gradient(to right, #ff0004, #aa00ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;

`