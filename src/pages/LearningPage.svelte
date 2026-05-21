<script lang="ts">
  import { t } from "src/i18n";
  import MainPageLayout from "src/layout/MainPageLayout.svelte";
  import Link from "src/components/Link.svelte";

  let counter: number = $state(0);
  let title = "Learning Page";
</script>

<MainPageLayout {title}>
  <button class="btn success solid lg" onclick={() => counter++}
    >{counter}</button
  >
</MainPageLayout>

<style lang="postcss">
  @reference "../app.css";

  .btn.success.solid {
    @apply text-white hover:text-white bg-success-600 hover:bg-success-700 focus:ring-success-500/75;
  }
</style>
