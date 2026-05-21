<script lang="ts">
  import { t } from "src/i18n";
  import MainPageLayout from "src/layout/MainPageLayout.svelte";
  import Link from "src/components/Link.svelte";
</script>

<MainPageLayout title={t.title}>
  <ul>
    <li>Browse the <Link to="samples">samples</Link>.</li>
    <li>Browse the <Link to="learning">learning</Link>.</li>
  </ul>
</MainPageLayout>
