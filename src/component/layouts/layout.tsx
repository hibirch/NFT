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
			<main className='text container mx-auto  min-h-screen  dark:bg-regal-200 dark:text-regal-100'>
				<HomePageHeader />
				{children}
			</main>
		</>
	)
}

export default Layout
