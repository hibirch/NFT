// src/pages/_app.tsx
import superjson from 'superjson'
import {withTRPC} from '@trpc/next'
import {ThemeProvider} from 'next-themes'
import {SessionProvider} from 'next-auth/react'
import {loggerLink} from '@trpc/client/links/loggerLink'
import {httpBatchLink} from '@trpc/client/links/httpBatchLink'

import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import type {AppRouter} from '../server/router'
import type {Session} from 'next-auth'
import type {ReactElement} from 'react'

import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactElement
}

type AppPropsWithLayout = AppProps<{session: Session | null}> & {
	Component: NextPageWithLayout
}

const MyApp: React.FC<AppPropsWithLayout> = ({Component, pageProps: {session, ...pageProps}}) => {
	const getLayout = Component.getLayout ?? ((page) => page)

	return getLayout(
		<ThemeProvider attribute='class' themes={['light', 'dark']}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
	)
}
const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
	return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
	config({ctx}) {
		const url = `${getBaseUrl()}/api/trpc`

		return {
			links: [
				loggerLink({
					enabled: (opts) =>
						process.env.NODE_ENV === 'development' || (opts.direction === 'down' && opts.result instanceof Error),
				}),
				httpBatchLink({url}),
			],
			url,
			transformer: superjson,

			headers: () => {
				if (ctx?.req) {
					const headers = ctx?.req?.headers
					delete headers?.connection
					return {
						...headers,
						'x-ssr': '1',
					}
				}
				return {}
			},
		}
	},
	ssr: false,
})(MyApp)
