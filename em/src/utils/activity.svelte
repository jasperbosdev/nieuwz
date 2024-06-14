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

<div class="grid grid-cols-[1fr_auto] gap-8 deck-border items-center">
    <div class="activity-info text-end pl-5">
            @em 🐈<br>
            <!-- activity<br> --> <!-- todo -->
            {#if $presence}
                {#if $presence.spotify}
                    {#if $presence.spotify.song}
                        🎶 {($presence.spotify.song.length > 20) ? `${$presence.spotify.song.slice(0, 20)}...` : $presence.spotify.song}<br>
                    {/if}
                    {#if $presence.spotify.artist}
                        🎤 {($presence.spotify.artist.length > 20) ? `${$presence.spotify.artist.slice(0, 20)}...` : $presence.spotify.artist}<br>
                    {/if}
                {:else}
                    {$presence.discord_status || "error fetching status"}<br>
                {/if}
            {:else if $presence === null}
                Error fetching data.<br>
            {:else}
                loading...<br>
            {/if}
            {localTime}
    </div>
    <div class="activity-preview">
        <!-- <img src="https://via.placeholder.com/128" alt="activity-img" class="rounded-lg activity-img"> -->
        <!-- <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="activity-img" class="rounded-lg activity-img"> -->
        <!-- probably write a function to take and display the discord user's pfp -->
        {#if $presence}
            {#if $presence.spotify}
                <img src="{$presence.spotify.album_art_url}" alt="spotify-album" class="rounded-lg activity-img">
            {:else}
                <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="placeholder-img" class="rounded-lg activity-img">
            {/if}
        {/if}
    </div>
</div>

<!-- {JSON.stringify($presence, null, 2)} -->