<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../app.css";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<div>
	<h1>atticus cornett.</h1>
	<h2><a href='/'>HOME</a> - <a href="/about">ABOUT</a> - <a href="/">PROJECTS</a> - <a href="/#contact">CONTACT</a></h2>
</div>

<style>
	:global(body){
		background: rgb(200,200,200);
	}


	h1 {
		font-family: "BDO Grotesk", sans-serif;
		text-align: center;
		text-decoration: underline 4px blue;
		font-size: 2rem;
	}

	h2 {
		font-family: Iptex, monospace;
		text-align: center;
		color: #323232;
		margin-bottom: 2rem;
	}

	a {
		color: #323232;
	}
</style>
