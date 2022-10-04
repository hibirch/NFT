import * as React from 'react'
import {useTheme} from 'next-themes'

import {BiSun} from 'react-icons/bi'
import {BsMoonStars} from 'react-icons/bs'

export default function ThemeToggler() {
	const {resolvedTheme, setTheme} = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [resolvedTheme])

	if (!mounted) return <></>

	return (
		<button
			onClick={() => {
				setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
			}}
		>
			{resolvedTheme === 'dark' ? <BiSun /> : <BsMoonStars />}
		</button>
	)
}
