import React, { Fragment } from "react";
import "../style/homepage.scss";
import googleplay from "../../assets/images/google-play.png";
import appstore from "../../assets/images/app-store.png";
export default function AppFooter() {
	return (
		<footer>
			<div className="footer__container--main">
				<div className="footer__column-container--single">
					<h3>Customer</h3>
					<ul>
						<li>Post a job</li>
						<li>User guide</li>
						<li>Customer experience</li>
					</ul>
				</div>
				<div className="footer__column-container--single">
					<h3>Business</h3>
					<ul>
						<li>Register your business</li>
						<li>Look for a job</li>
						<li>My business</li>
						<li>Business owner experience</li>
					</ul>
				</div>
				<div className="footer__column-container--single">
					<h3>Broomer</h3>
					<ul>
						<li>About Us</li>
						<li>How Broomer works</li>
						<li>Our team</li>
						<li>Contact Us</li>
					</ul>
				</div>
				<div className="footer__column-container--single">
					<h3>Help</h3>
					<ul>
						<li>Frequently asked questions</li>
						<li>Blog</li>
						<li>Sitemap</li>
						<li>Category Index</li>
					</ul>
				</div>
				<div className="footer__column-container--single">
					<h3 style={{ minWidth: 150 + "px" }}>Download our APP</h3>
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
				</div>
			</div>
			<div className="footer__copywirte--black">
				<div>
					Copyright © 2020 - 2022{" "}
					<span style={{ fontWeight: "bold" }}>· Broomer </span>
				</div>

				<div>Content · IntegrityTerms & Conditions · Terms of use</div>
			</div>
		</footer>
	);
}
