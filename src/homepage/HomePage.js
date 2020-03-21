import React from "react";
import ProductCategories from "./views/ProductCategories";
import AppFooter from "./views/AppFooter";
import ProductHero from "./views/ProductHero";
import ProductValues from "./views/ProductValues";
import ProductHowItWorks from "./views/ProductHowItWorks";
import ProductCTA from "./views/ProductCTA";
import ProductAchievments from "./views/ProductAchievments";
import MainNavigation from "../navigation/MainNavigation";

function HomePage() {
	return (
		<React.Fragment>
			<MainNavigation />
			<ProductHero />
			<ProductValues />
			<ProductCategories />
			<ProductAchievments />
			<ProductHowItWorks />
			<ProductCTA />
			<AppFooter />
		</React.Fragment>
	);
}

export default HomePage;
