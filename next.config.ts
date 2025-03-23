import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	basePath: "/products",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		unoptimized: true,
	},
};

export default nextConfig;
