<script lang="ts">
    import { onMount } from 'svelte';
    import Typed from 'typed.js';
    import tilt  from 'svelte-tilt';
    import Activity from '../utils/activity.svelte';
    import Projects from '../utils/projects.svelte';

    onMount(() => {
      const options = {
         strings: ["Monster Ultra Addict", "You should play on komako.pw!", "Frikandelbroodje Enjoyer", 
                   "Noob frontend dev", "Fumo Connaisseur", "awrff >w&lt;"],
         typeSpeed: 40,
         startDelay: 250,
         backSpeed: 30,
         backDelay: 3300,
         loop: true,
         showCursor: true
      };

      new Typed('.typed', options);
   });

   const mail = "dxmpup@proton.me"
</script>

<svelte:head>
    <title>@lionz 🐈</title>
    <meta property="og:title" content="@lionz 🐈" />
    <meta property="og:description" content="some silly guy on the internet." />
    <meta name="theme-color" content="#FF00FF" />
    <meta name="keywords" content="Lionz, leeuwz, komako, komako.pw, lionz komako, lionz osu, lionz osu profile, lionz website, leeuwz osu" />
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:image" content="https://c.tenor.com/wTuLX2YrZs0AAAAC/tenor.gif" />
    <meta property="og:image:type" content="image/gif" />
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 gap-10 md:gap-0">
    <div class="me-card flex flex-col justify-center md:justify-start items-center md:items-start">
        <p class="bold text-6xl"><span class="text-fuchsia-400">Li</span>onz</p>
        <div class="">
            <p class="typed flex flex-row font-sm"></p>
        </div>
        <div class="flex items-center socials mt-4">
            <div class="deck-border py-2 px-4 flex gap-x-4" use:tilt={{ strength: 0.8, scale: 1.0, xAxis: false  }}> <!-- maybe remove border class n padding -->
                <a href="mailto:{mail}" target="_blank" class="social transition delay-0 duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-envelope"></i></a>
                <a href="https://t.me/dumpup" target="_blank" class="social transition delay-0 duration-200 hover:-translate-y-1.5"><i class="far fa-lg fa-comments"></i></a>
                <a href="https://github.com/leeuwz" target="_blank" class="social transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-github"></i></a>
                <a href="https://youtube.com/@stupidpup" target="_blank" class="social transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-youtube"></i></a>
                <a href="https://x.com/leeuwuz" target="_blank" class="social transition delay-0 duration-200 hover:-translate-y-1.5"><i class="fab fa-lg fa-x-twitter"></i></a>
            </div>
        </div>
    </div>
    <div class="activity-card flex justify-center md:justify-end items-center">
        <div class="grid grid-cols-[1fr_auto] deck-border items-center" use:tilt={{ strength: 1.5, scale: 1.1 }}>
            <Activity /> <!-- using lanyard for discord activity; spotify, games etc -->
        </div>
    </div>
</div>

<Projects />