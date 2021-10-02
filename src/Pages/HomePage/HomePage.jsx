import React from "react"
import "./homePage.sass"
import ItemContainer from "../../Components/ItemContainer/ItemContainer"

const HomePage = (props) => (
	<div className="homepage">

		<ItemContainer />
		{console.log(props)}
	</div>
)

export default HomePage;