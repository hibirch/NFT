import Image from 'next/future/image'

const Hero = () => {
	return (
		<div className='flex items-center justify-center py-16'>
			<div className='w-1/2 px-20'>
				<p className='break-words text-start text-5xl font-semibold leading-relaxed'>
					Create your own NFT <span className='text-red-400'>quickly</span> and{' '}
					<span className='text-red-400'>easily</span>, starting with the blockchain.
				</p>
				<div className='flex items-center gap-4'>
					<button className='rounded-full bg-mean-fruit px-4 py-2 shadow-md shadow-pink-300'>Get Started</button>
					<p className='w-2/3 font-semibold'>
						Follow the 3C principles:
						<span className='text-gray-400'>
							custom features, custom characters, custom shapes, unlimited transfers.
						</span>
					</p>
				</div>
			</div>
			<div className='flex w-1/2 items-center justify-center'>
				<div className='relative h-96 w-96'>
					<Image alt='hero' src='/hero.png' fill />
				</div>
			</div>
		</div>
	)
}

export default Hero
