import Layout from '@/component/layouts/layout'
import type {ReactElement} from 'react'

const HomePage = () => {
	return (
		<>
			<div className='container mx-auto flex min-h-screen flex-col items-center justify-center p-4'>
				<h1 className='text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]'>
					Create <span className='text-purple-300'>T3</span> App
				</h1>
			</div>
		</>
	)
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default HomePage
