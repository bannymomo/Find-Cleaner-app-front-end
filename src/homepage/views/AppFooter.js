import React from "react";
import "../style/homepage.scss";
import googleplay from "../../assets/images/google-play.png";
import appstore from "../../assets/images/app-store.png";
import { Link } from "react-router-dom";
import { SIGNUP_URL } from "../../routes/URLMap";
// import { BUSINESS_ROLE } from "../../utils/variables";
import Grid from "@material-ui/core/Grid";

export default function AppFooter() {
	return (
		<footer>
			{/* <Grid container spacing={3}>
				<Grid item sm={3} xs={6}></Grid>
			</Grid> */}
			<Grid container spacing={0} className="footer__container--main">
				<Grid
					item
					md={2}
					sm={3}
					xs={6}
					className="footer__column-container--single"
				>
					<h3>Customer</h3>
					<ul>
						<li>Post a job</li>
						<li>User guide</li>
						<li>Customer experience</li>
					</ul>
				</Grid>
				<Grid
					item
					md={2}
					sm={3}
					xs={6}
					className="footer__column-container--single"
				>
					<h3>Business</h3>
					<ul>
						<li>
							<Link
								className="footer__links--white"
								to={{
									pathname: `${SIGNUP_URL}/user/business`
								}}
							>
								Register your business
							</Link>
						</li>
						<li>Look for a job</li>
						<li>My business</li>
						<li>Business owner experience</li>
					</ul>
				</Grid>
				<Grid
					item
					md={2}
					sm={3}
					xs={6}
					className="footer__column-container--single"
				>
					<h3>Broomer</h3>
					<ul>
						<li>About Us</li>
						<li>How Broomer works</li>
						<li>Our team</li>
						<li>Contact Us</li>
					</ul>
				</Grid>
				<Grid
					item
					md={2}
					sm={3}
					xs={6}
					className="footer__column-container--single"
				>
					<h3>Help</h3>
					<ul>
						<li>Frequently asked questions</li>
						<li>Blog</li>
						<li>Sitemap</li>
						<li>Category Index</li>
					</ul>
				</Grid>
				<Grid
					item
					sm={2}
					xs={6}
					className="footer__column-container--single"
				>
					<h3>Download our APP</h3>
					<button>
						<img
							className="footer__button-img--single"
							src={appstore}
							alt="appstore"
						/>
					</button>
					<button>
						<img
							className="footer__button-img--single"
							src={googleplay}
							alt="googleplay"
						/>
					</button>
				</Grid>
			</Grid>
			<div className="footer__copywirte--black">
				<div>
					Copyright © 2020 - 2022{" "}
					<span className="footer__logo--white">· Broomer </span>
				</div>

				<div>Content · IntegrityTerms & Conditions · Terms of use</div>
			</div>
		</footer>
	);
}
