<script>
  export let hook;
  export let i;
  export let hookEntityDefinitions;
</script>

<style>
  .list {
    @apply block mb-2 text-sm;
  }

  .list .code {
    cursor: help;
  }

  .hook {
    @apply p-4 mb-4 max-w-full border border-solid border-gray-300 border-collapse break-words rounded-lg relative bg-yellow-400;
  }

  .hook-number {
    @apply absolute top-0 right-0 w-8 h-8 rounded-tr-lg rounded-bl-lg text-center pt-1 bg-red-500 text-sm text-white;
  }

  @media (min-width: 768px) {
    .hook:nth-child(even) {
      margin-left: 0.5rem;
    }
    .hook:nth-child(odd) {
      margin-right: 0.5rem;
    }
  }

  .use {
    font-size: 14px;
  }
  :global(.use ul) {
    padding-left: 1rem;
  }
</style>

<div class="hook">
  {#if i || i === 0}<span class="hook-number">{i + 1}.</span>{/if}

  <div class="pb-3 mb-3 mr-4 border-b border-gray-300 border-solid">
    <span class="hook-name">
      {#if hook.link && hook.link.length > 0}<a href={hook.link}>{hook.hook}</a>{:else}{hook.hook}{/if}
    </span> : {hook.context}
  </div>
  <div class="use">
    {@html hook.use}
  </div>

  <div class="list">
    <strong>Props</strong> : {#each hook.props as prop}
      <div class="code" data-balloon-length="medium" data-balloon-pos="up" aria-label={hookEntityDefinitions[prop]}>
        {prop}
      </div>
    {/each}
  </div>
  <div class="list">
    <strong>Mutable</strong> : {#each hook.mutable as mutable}
      <div class="code" data-balloon-length="medium" data-balloon-pos="up" aria-label={hookEntityDefinitions[mutable]}>
        {mutable}
      </div>
    {/each}
  </div>

  {#if hook.advanced}
    <div><small>This hook is an 'advanced' hook meaning it geared towards advanced users or plugins.</small></div>
  {/if}

  <small>{hook.expiremental ? 'Expiremental' : 'Stable'} &middot; Location: {hook.location}</small>
</div>
