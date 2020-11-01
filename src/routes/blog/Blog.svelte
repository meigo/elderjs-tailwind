<script>
  export let data; // data is mainly being populated from the /plugins/edlerjs-plugin-markdown/index.js
  const { html, frontmatter } = data;
</script>

<style>
  :global(h2) {
    margin-top: 2rem;
  }

  :global(pre) {
    background: #eee;
    padding: 1rem;
    border-radius: 1rem;
  }

  :global(blockquote) {
    margin: 0;
    background: #ddd;
    padding: 3px 1.5rem 3px 3rem;
    position: relative;
    border-radius: 1rem;
  }
  :global(blockquote:after) {
    content: '>';
    color: #aaa;
    font-size: 30px;
    position: absolute;
    top: 33%;
    left: 1rem;
  }

  :global(blockquote p) {
    padding: 0;
  }
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
</svelte:head>
<a href="/">&LeftArrow; Home</a>

<div class="pb-4 my-4 border-b border-gray-300 border-solid">
  <h1 class="mb-3">{frontmatter.title}</h1>
  {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}
</div>

{#if html}
  {@html html}
{:else}
  <h1>Oops!! Markdown not found!</h1>
{/if}
