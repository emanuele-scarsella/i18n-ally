<script lang="ts">
  import { i18n, i18next } from "./i18n";

  let title =  i18next.t("title");

  function changeLanguage(lang:string) {
    i18next.changeLanguage(lang)
    title =  i18next.t("title");
  }

</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <button type="button" on:click={()=>{changeLanguage("en")}}>en</button>
  <button type="button" on:click={()=>{changeLanguage("de")}}>de</button>
  <h1>{$i18n.t("pages:home.title")}</h1>
  <p>{$i18n.t("foo.bar")}</p>
</main>
