<script lang="ts">
  import Code from "$components/Code.svelte";
  import CodeTab from "$components/CodeTab.svelte";
  import { clsx } from "$lib/clsx";

  const { data } = $props();
</script>

<div
  class={clsx(
    "flex w-full flex-col gap-8 self-stretch bg-white px-8 py-6 text-black md:gap-24 md:p-24 dark:bg-black dark:text-white",
    "[&>div]:flex [&>div]:w-full [&>div]:max-w-screen-lg [&>div]:flex-col [&>div]:gap-6 [&>div]:md:self-center"
  )}
>
  <div class="py-24 md:py-0">
    <h1 class="text-6xl font-semibold tracking-tight">Serwist.</h1>
    <h2 class="text-4xl font-semibold tracking-tight text-comment">A Swiss Army knife for service workers.</h2>
    <Code showIcon>npm install -D serwist @serwist/build</Code>
  </div>
  <div>
    <h2 class="text-4xl font-semibold tracking-tight">
      Dead simple. <span class="text-comment">You need as much as ten lines of code to get started.</span>
    </h2>
    <CodeTab codes={data.code.gettingStarted} defaultTab="sw.ts" />
  </div>
  <div>
    <h2 class="text-4xl font-semibold tracking-tight">
      Customizable. <span class="text-comment">Just do it your way.</span>
    </h2>
    <CodeTab codes={data.code.customizing} defaultTab="sw.ts" />
  </div>
  <div>
    <h2 class="text-4xl font-semibold tracking-tight">
      Interoperable. <span class="text-comment">The Serwist API. The Service Worker API. It doesn't matter.</span>
    </h2>
    <CodeTab codes={data.code.interoperating} defaultTab="sw.ts" />
  </div>
</div>
