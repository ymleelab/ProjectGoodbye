import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import wrapper from '../store/configureStore';

function MyApp({ Component }) {
	React.useEffect(() => {
		const start = () => {
			NProgress.start();
		};
		const end = () => {
			NProgress.done();
		};

		((o) => {
			if (document.getElementById(o.scriptId)) return;
			const d = document,
				t = 'script',
				$script = d.createElement(t),
				$element = d.getElementsByTagName(t)[0];
			$script.id = o.scriptId;
			$script.src =
				'https://hey-there.io/hey-there-resource/button/' +
				o.appId +
				'.js';
			$script.async = true;
			$script.defer = true;
			$element.parentNode.insertBefore($script, $element);
		})({
			scriptId: 'hey-there-loader',
			appId: 'bb4b190e-9bdd-450c-b971-5e68d8baf955',
		});

		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);

		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);
	return (
		<>
			<React.Suspense fallback={<>loading</>}>
				<Head>
					<meta charSet="utf-8" />
					<link rel="shortcut icon" href="#" />
					<title>GoodBye</title>
				</Head>
				<Component />
			</React.Suspense>
		</>
	);
}

export default wrapper.withRedux(MyApp);
