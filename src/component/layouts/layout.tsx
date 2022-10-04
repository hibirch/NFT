import Head from 'next/head'
import * as React from 'react'

import HomePageHeader from '@/component/homePageHeader'
interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
	return (
		<>
			<Head>
				<title>NFT</title>
				<meta name='description' content='NFT-T3-ETH Demo' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<HomePageHeader />
				{children}
			</main>
		</>
	)
}

export default Layout
