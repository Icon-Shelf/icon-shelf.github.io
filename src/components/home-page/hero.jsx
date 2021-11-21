import * as React from "react"

const Hero = () => {
	return (
		<section>
			<section className="m-auto md:mt-20 px-6 md:px-0 max-w-default pb-12 md:pb-[138px]">
				<div className="flex flex-col text-center">
					<div className="order-2 mt-12 md:order-1 md:mt-0">
						<h1 className="font-medium text-mobile-h1 md:text-desktop-h1 text-slate-headline max-w-[754px] m-auto">
							Billing Simplified
						</h1>
						<p className="text-slate-body text-desktop-subheading mt-6 md:mt-[30px] max-w-[754px] m-auto">
							A subheading that addresses the what, the why we should care and
							hopefully some social proof.
						</p>
						<div className="mt-8">
							<button className="w-full px-8 py-4 text-white rounded-lg bg-slate-blue filter hover:brightness-125 text-desktop-paragraph md:w-auto">
								Try it free
							</button>
							<p className="text-slate-body text-[13px] mt-3">
								No credit card required
							</p>
						</div>
					</div>
					<div className="flex order-1 px-8 mt-12 md:mt-24 md:order-2 bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-2xl">
						<img
							src="/assets/heros/groupbanner.svg"
							className="pt-4 md:pt-[60px] m-auto -mb-6 md:-mb-12"
							alt=""
						/>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Hero;
