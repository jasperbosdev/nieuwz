<script lang="ts">
    import { onMount } from 'svelte';
    import Activity from '../utils/activity.svelte'; // Ensure the path is correct

    onMount(() => {});
</script>

<div class="grid grid-rows-1 grid-flow-col"> <!-- maybe add 1.5em x padding to even with nav items-->
    <div class="me-card">
        <p class="bold text-6xl"><span class="text-fuchsia-400">Ir</span>cle</p>
        <div class="flex items-center socials mt-4">
            <div class="deck-border py-2 px-4 flex gap-x-4"> <!-- maybe remove border class n padding -->
                <a href="#/" class="transition duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-envelope"></i></a>
                <a href="#/" class="transition duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-comments"></i></a>
                <a href="#/" class="transition duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-youtube"></i></a>
                <a href="#/" class="transition duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-x-twitter"></i></a>
                <a href="#/" class="transition duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="activity-card flex justify-end items-center">
        <div class="grid grid-cols-2 gap-8 grid-flow-row deck-border items-center">
            <Activity /> <!-- using lanyard for discord activity; spotify, games etc -->
        </div>
    </div>
</div>