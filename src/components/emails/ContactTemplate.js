import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";

const LeadContactEmail = ({ data }) => {
	const previewText = `New inquiry from ${data?.name ?? "a visitor"}`;

	return (
		<Html lang="en" dir="ltr">
			<Head />
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white">
					<Container className="mx-auto px-4 py-6">
						<Section>
							<Text className="text-[16px] leading-[26px] text-slate-900">
								Hello, I&apos;m{" "}
								<span className="font-bold">{data.name}</span> from{" "}
								<span className="font-bold">{data.companyName}</span>, a/an{" "}
								<span className="font-bold">{data.typeOfBusiness}</span> firm.
								We&apos;ve been looking into your work and would love to partner
								with you for{" "}
								<span className="font-bold">{data.service}</span>. You can
								reach me at{" "}
								<span className="font-bold">{data.phoneNumber}</span> and{" "}
								<span className="font-bold">{data.email}</span> to discuss how
								we can get started.
							</Text>
						</Section>

						<Section className="mt-6">
							<Text className="text-[12px] leading-[18px] text-slate-500">
								Replying to this email will go to: {data.email}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default LeadContactEmail;