import {motion} from 'framer-motion'

const HomePageHeader = () => {
	return (
		<div className='flex w-full items-center justify-between border-b py-8'>
			<motion.span
				whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
				className=' font-nova-flat cursor-pointer text-2xl font-bold'
			>
				NFT
			</motion.span>
			<div className='flex items-center gap-8 font-semibold'>
				<a href='' className='text-gray-500 hover:text-gray-900'>
					About
				</a>
				<a href='' className='text-gray-500 hover:text-gray-900'>
					Courses
				</a>
				<a href='' className='text-gray-500 hover:text-gray-900'>
					Contact
				</a>
				<a href='' className='text-gray-500 hover:text-gray-900'>
					How to start
				</a>
			</div>

			<motion.button
				whileHover={{scale: 1.05}}
				whileTap={{scale: 0.95}}
				className='rounded-full bg-pink-600 px-4 py-2 font-bold text-white'
			>
				Try for free
			</motion.button>
		</div>
	)
}

export default HomePageHeader
