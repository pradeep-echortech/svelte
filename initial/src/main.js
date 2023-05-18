import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Pradeep'
	}
});

export default app;

// import Apps from './new.svelte';
// const apps = new Apps({
// 	target: document.body,
// })
// export default apps;