import Layout from '@/component/layouts/layout'
import type {ReactElement} from 'react'
import Hero from '@/component/Hero'

const HomePage = () => {
	return (
		<>
			<Hero />
		</>
	)
}

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default HomePage
