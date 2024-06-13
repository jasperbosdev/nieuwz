<script lang="ts">
    import { useLanyard } from 'sk-lanyard';
    import { onMount } from 'svelte';

    const presence = useLanyard({ method: 'ws', id: '673304389875925003' });

    let localTime = '';

    function updateTime() {
        const now = new Date();
        localTime = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Europe/Amsterdam'
        });
    }

    onMount(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    });
</script>

<div class="activity-info text-end">
    {#if $presence}
        @em 🐈<br>
        <!-- activity<br> --> <!-- todo -->
        {$presence.discord_status || "error fetching status"}<br>
        <!-- discord status msg -->
        {#if $presence.activities && $presence.activities[0] && $presence.activities[0].state}
            💬: {$presence.activities[0].state}<br>
        {/if}
        {localTime}
    {:else if $presence === null}
        Error fetching data.
    {:else}
        loading...
    {/if}
</div>
<div class="activity-preview">
    <!-- <img src="https://via.placeholder.com/128" alt="activity-img" class="rounded-lg activity-img"> -->
    <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="activity-img" class="rounded-lg activity-img">
    <!-- probably write a function to take and display the discord user's pfp -->
</div>