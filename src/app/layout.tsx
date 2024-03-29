import type { Metadata } from "next";
import '@mantine/core/styles.css';
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React from "react";
import ContextWrapper from "./ContextWrapper";
import NavBar from "./NavBar";
import ChatPopup from "@/components/mini_chat/ChatPopup";


export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
			</head>
			<body className={"m-0"}>
				<ContextWrapper>
					<MantineProvider>
						<div className="flex flex-col h-screen overflow-hidden">
							<div className="flex flex-row overflow-hidden h-full">
								<NavBar />
								<main className="max-h-full flex-1 overflow-y-auto">
									{children}
								</main>
								<ChatPopup />
							</div>
						</div>
					</MantineProvider>
				</ContextWrapper>
			</body>
		</html>
	);
}
