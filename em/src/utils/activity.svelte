<script lang="ts">
    import { useLanyard } from 'sk-lanyard';
    const presence = useLanyard({ method: 'ws', id: '673304389875925003'})
</script>

<div class="activity-info text-end">
    {#if $presence}
        @em 🐈<br>
        activity<br>
        {JSON.stringify($presence.discord_status ?? {}, null, 2)}<br>
        local time
    {:else}
        loading...
    {/if}
</div>
<div class="activity-preview">
    <img src="https://via.placeholder.com/128" alt="activity-img" class="rounded-lg activity-img">
    <!-- <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="activity-img" class="rounded-lg activity-img"> -->
</div>