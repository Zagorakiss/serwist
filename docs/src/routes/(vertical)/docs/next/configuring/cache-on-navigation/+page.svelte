<script lang="ts">
  import Code from "$components/Code.svelte";
  import CodeTab from "$components/CodeTab.svelte";
  import InlineCode from "$components/InlineCode.svelte";

  const { data } = $props();
</script>

<h1>cacheOnNavigation</h1>
<h2>First added</h2>
<Code>next-pwa@5.2.1</Code>
<h2>Default</h2>
<Code>false</Code>
<h2>About</h2>
<p>
  Enables additional route caching when users navigate through pages with
  <InlineCode>next/link</InlineCode>. This improves the user experience in some cases but it also adds a bit of overhead due to additional network
  calls.
</p>
<h2>How it works</h2>
<p>
  It overrides <InlineCode>history.pushState</InlineCode> and <InlineCode>history.pushState</InlineCode>. When these functions are called, they call a
  function that posts a message containing the URL in their parameters to the <InlineCode>@serwist/next</InlineCode> worker, telling it to add this URL
  to the cache.
</p>
<h2>Usage</h2>
<CodeTab codes={data.code.usage} defaultTab="next.config.mjs" />
