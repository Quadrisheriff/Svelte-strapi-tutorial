<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { goto } from '$app/navigation';
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/posts');
		const response = await res.json();
		return { props: { posts: response.data } };
	};
</script>

<script lang="ts">
	export let posts: any;
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful blog</h1>
</div>
<div class="container mx-auto mt-4">
	{#each posts as post}
		<div
			class="hover:bg-gray-200 cursor-pointer px-6 py-2 border-b border-gray-500"
			on:click={() => goto('/blog/' + post.id)}
		>
			<h4 class="font-bold">{post.attributes.title}</h4>
			<p class="mt-2 text-gray-800">{post.attributes.description}</p>
			<p class="text-gray-500">By: {post.attributes.author.data.attributes.username}</p>
		</div>
	{/each}
</div>
