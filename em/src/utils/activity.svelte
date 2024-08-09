<script lang="ts">
    import { useLanyard } from 'sk-lanyard';
    import { onMount, onDestroy } from 'svelte';
    import { startRainbowEffect } from './rainbowtext';

    const presence = useLanyard({ method: 'ws', id: '673304389875925003', heartbeat_interval: 10000 });
    let localTime = '';
    let showMoreActivities = false; // Initialize showMoreActivities here
    let activityDurations = {};

    function updateTime() {
        const now = new Date();
        localTime = now.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            timeZone: 'Europe/Amsterdam'
        });

        updateActivityDurations(now);
    }

    function updateActivityDurations(now) {
        if ($presence && $presence.activities) {
            activityDurations = $presence.activities.reduce((acc, activity) => {
                if (activity.timestamps && activity.timestamps.start) {
                    const startTime = new Date(activity.timestamps.start);
                    const durationMs = now - startTime;
                    acc[activity.id] = formatDuration(durationMs);
                }
                return acc;
            }, {});
        }
    }

    function formatDuration(durationMs) {
        const totalSeconds = Math.floor(durationMs / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours > 0 ? hours + 'h ' : ''}${minutes}m ${seconds}s`;
    }

    onMount(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        const stopEffect = startRainbowEffect();
        return () => clearInterval(intervalId);

        onDestroy(() => {
            stopEffect();
        });
    });

    // Filter activities to exclude "custom" and "spotify:1" activities
    function getOtherActivities(activities) {
        return activities.filter(activity => !['custom', 'spotify:1'].includes(activity.id));
    }

    function getActivityWithSessionId(activities) {
        return activities.find(activity => activity.id);
    }

</script>

<div class="activity-info text-end pl-5">
    {#if $presence}
        {#if $presence.spotify}
            <div class="flex items-center">
                <div class="text-container text-base md:text-lg md:text-md text-center mr-4">
                    @em 🐈<br>
                    🎶 {($presence.spotify.song.length > 15) ? `${$presence.spotify.song.slice(0, 15)}...` : $presence.spotify.song}<br>
                    {#if $presence.spotify.artist == 'Sqwore'}
                    <span class="rgbtq">🎤 Sqwore 👑</span><br>
                    {:else if $presence.spotify.artist == 'Sqwore; 17 SEVENTEEN'}
                    <span class="rgbtq">🎤 Sqwore; 17 SEVENTEEN 👑</span><br>
                    {:else if $presence.spotify.artist == 'Sqwore; Grechka'}
                    <span class="rgbtq">🎤 Sqwore; Grechka 👑</span><br>
                    {:else if $presence.spotify.artist == 'Sqwore; rizza'}
                    <span class="rgbtq">🎤 Sqwore; rizza 👑</span><br>
                    {:else if $presence.spotify.artist == 'rizza; Sqwore'}
                    <span class="rgbtq">🎤 rizza; Sqwore 👑</span><br>
                    {:else if $presence.spotify.artist == 'treepside; Sqwore'}
                    <span class="rgbtq">🎤 treepside; Sqwore 👑</span><br>
                    {:else if $presence.spotify.artist == 'ЕГОР НАТС'}
                    <span class="rgbtq">ЕГОР НАТС 👑</span><br>
                    {:else}
                    🎤 {($presence.spotify.artist.length > 15) ? `${$presence.spotify.artist.slice(0, 15)}...` : $presence.spotify.artist}<br>
                    {/if}
                    {localTime}<br>
                    {#if activityDurations[$presence.spotify.id]}
                        For {activityDurations[$presence.spotify.id]}
                    {/if}
                    {#if getOtherActivities($presence.activities).length > 0 && !showMoreActivities}
                    <button on:click={() => showMoreActivities = true}>
                        <span class="rgbtq">Show more</span>
                    </button>
                    {/if}
                </div>
                <div class="img-container">
                    <a href="https://open.spotify.com/track/{$presence.spotify.track_id}" target="_blank">
                        <img src="{$presence.spotify.album_art_url}" alt="spotify-album" class="rounded-lg activity-img">
                    </a>
                </div>
            </div>
        {:else}
            {@const activityWithSessionId = getActivityWithSessionId($presence.activities)}
            {#if activityWithSessionId}
                <div class="flex items-center">
                    <div class="text-container text-base md:text-lg md:text-md text-center mr-4">
                        @em 🐈<br>
                        {activityWithSessionId.name}
                        <!-- {activityWithSessionId.state} -->
                        {#if activityWithSessionId.details}
                            <br>{activityWithSessionId.details}
                        {/if}<br>
                        {#if activityDurations[activityWithSessionId.id]}
                            For {activityDurations[activityWithSessionId.id]}<br>
                        {/if}
                        {localTime}<br>
                    </div>
                    <div class="img-container">
                        {#if activityWithSessionId.assets && activityWithSessionId.assets.large_image}
                            <img src={"https://cdn.discordapp.com/app-assets/" + activityWithSessionId.application_id + "/" + activityWithSessionId.assets.large_image} alt={activityWithSessionId.assets.large_text} title={activityWithSessionId.assets.large_text} class="rounded-lg activity-img">
                        {:else}
                            <img src="/pfpp.jpg" alt="placeholder-img" class="rounded-lg activity-img">
                        {/if}
                    </div>
                </div>
            {:else}
                <div class="flex items-center">
                    <div class="text-container text-base md:text-lg md:text-md text-center mr-4">
                        @em 🐈<br>
                        {$presence.discord_status || "error fetching status"}<br>
                        {localTime}
                    </div>
                    <div class="img-container">
                        <img src="../pfpp.jpg" alt="placeholder-img" class="rounded-lg activity-img">
                    </div>
                </div>
            {/if}
        {/if}

        <!-- Show additional activities if showMoreActivities is true -->
        {#if showMoreActivities}
            {#each getOtherActivities($presence.activities) as activity}
                <div class="flex items-center mt-4">
                    <div class="text-container text-base md:text-lg md:text-md text-center mr-4">
                        {activity.name}<br>
                        <!-- {activity.state} -->
                        {#if activity.details}
                            {activity.details}<br>
                        {/if}
                        {#if activityDurations[activity.id]}
                            For {activityDurations[activity.id]}<br>
                        {/if}
                        <button class="" on:click={() => showMoreActivities = false}>
                            <span class="rgbtq">Show less</span>
                        </button>
                    </div>
                    <div class="img-container">
                        {#if activity.assets && activity.assets.large_image}
                            <img src={"https://cdn.discordapp.com/app-assets/" + activity.application_id + "/" + activity.assets.large_image} alt={activity.assets.large_text} title={activity.assets.large_text} class="rounded-lg activity-img">
                        {:else}
                            <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="placeholder-img" class="rounded-lg activity-img">
                        {/if}
                    </div>
                </div>
            {/each}
        {/if}
    {:else if $presence === null}
        Error fetching data.<br>
    {:else}
        loading...<br>
    {/if}
</div>

<!-- CSS styles for consistent layout -->
<style>
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text-container {
        flex: 1;
        /* max-width: 60%; */
        text-align: end;
    }

    .img-container {
        flex-shrink: 0;
    }
</style>

<!-- debugging -->
<!-- {JSON.stringify($presence, null, 2)} -->
