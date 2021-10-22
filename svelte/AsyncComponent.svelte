<script>
    export let promise;
</script>

{#await promise}
    <slot name="loading">
        <p>...</p>
    </slot>
{:then text}
    <slot value={text}>
        <div />
    </slot>
{:catch error}
    <slot name="error" {error}>
        <p style="color: red;">{error.message ?? error}</p>
    </slot>
{/await}