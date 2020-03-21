import React from "react";
// import ProductCategories from "./views/ProductCategories";
import AppFooter from "./views/AppFooter";
import ProductHero from "./views/ProductHero";
import ProductValues from "./views/ProductValues";
import ProductHowItWorks from "./views/ProductHowItWorks";
import ProductCTA from "./views/ProductCTA";
import MainNavigation from "../navigation/MainNavigation";
import BusinessGallery from "./views/businessGallery/BusinessGallery";

function HomePage() {
	return (
		<React.Fragment>
			<MainNavigation />
			<ProductHero />
			<ProductValues />
			{/* <ProductCategories /> */}
			<BusinessGallery />
			<ProductHowItWorks />
			<ProductCTA />
			<AppFooter />
		</React.Fragment>
	);
}

export default HomePage;
