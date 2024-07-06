<script lang="ts">
    import { onMount } from 'svelte';
    import tilt  from 'svelte-tilt';
    import Activity from '../utils/activity.svelte'; // Ensure the path is correct

    onMount(() => {});
</script>

<div class="grid grid-rows-1 grid-flow-col mb-20"> <!-- maybe add 1.5em x padding to even with nav items-->
    <div class="me-card">
        <p class="bold text-6xl"><span class="text-fuchsia-400">Li</span>onz</p>
        <div class="flex items-center socials mt-4">
            <div class="deck-border py-2 px-4 flex gap-x-4"> <!-- maybe remove border class n padding -->
                <a href="#/" target="_blank" class="transition delay-0 duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-envelope"></i></a>
                <a href="#/" target="_blank" class="transition delay-0 duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-comments"></i></a>
                <a href="#/" target="_blank" class="transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-github"></i></a>
                <a href="#/" target="_blank" class="transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-youtube"></i></a>
                <a href="#/" target="_blank" class="transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-x-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="activity-card flex justify-end items-center">
        <div class="grid grid-cols-[1fr_auto] deck-border items-center" use:tilt={{ strength: 1.5, scale: 1.1 }}>
            <Activity /> <!-- using lanyard for discord activity; spotify, games etc -->
        </div>
    </div>
</div>

<!-- divider -->
<!-- <div class="mb-20">
    <div class="split deck-split text-center">🐈</div> 
</div> -->

<div class="yapping">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tempus est. 
    Nullam dignissim sem at mattis vehicula. Suspendisse accumsan ut purus sollicitudin dignissim. 
    Proin mollis lectus vitae elit tincidunt molestie. Nunc congue luctus tortor, id viverra risus maximus sit amet. 
    Morbi egestas augue ante, vel commodo quam vehicula ut. Donec pellentesque nunc tristique elit bibendum, ac sagittis mi rhoncus.
</div>