<script lang="ts">
    import tilt  from 'svelte-tilt';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { Lightbox } from 'svelte-lightbox';

    // Function to convert playtime from seconds to days, hours, and minutes
    function convertPlaytime(seconds) {
      const days = Math.floor(seconds / (24 * 3600));
      seconds %= (24 * 3600);
      const hours = Math.floor(seconds / 3600);
      seconds %= 3600;
      const minutes = Math.floor(seconds / 60);
      return `${days}d ${hours}h ${minutes}m`;
    }

    let playerStats = writable(null);
    let error = writable(null);

    onMount(() => {
      fetch('https://api.komako.pw/get_player_info?id=3&scope=all')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network error');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 'success' && data.player && data.player.stats && data.player.stats[0]) {
            playerStats.set(data.player.stats[0]);
            console.log('Player Stats:', data.player.stats[0]);
          } else {
            throw new Error('Invalid data structure');
          }
        })
        .catch(err => {
          error.set(err.message);
          console.error('There was a problem fetching the data:', err);
        });
    });
</script>

<svelte:head>
    <title>@lionz 🐈 Osu</title>
</svelte:head>

<div class="grid grid-rows-1 grid-flow-col mb-10 grid-cols-1 md:grid-cols-3"> <!-- maybe add 1.5em x padding to even with nav items-->
    <div class="me-card col-span-2">
        <p class="bold text-6xl"><span class="text-fuchsia-400">/</span>osu</p>
        <div class="flex flex-row items-center mb-2">
            <span class="flex text-sm md:text-lg items-center">
                former top 🌐 987 | <img src="/NL.svg" class="rounded h-5 mx-2"> 20 | <img src="/GR.svg" class=" h-4 mx-2 rounded"> 1 @11,328pp
            </span>
        </div>
        <p>
            Here you can learn more about my playstyle, the hardware I use to play and all the skins I play with. Check out my <a href="/aboutosu" 
            class="text-fuchsia-400 support">/aboutosu</a> page if you wanna learn more about my achievements and other minute details 
            about my osu! journey.
        </p>
        <p class="mt-2 text-sm">
            I still play osu from time to time, mostly offline or on my own <a class="text-fuchsia-400 support" href="https://komako.pw" 
            target="_blank">private server</a> for fun or with friends.
        </p>
        <details style="font-size: 12px; cursor: help;" class="mt-2">
            <summary>Why don't you play on bancho?</summary>
            <br>I don't really go out of my way to tell people anymore, most of them who ask, try to poke fun at me but that doesn't work 
            nor do I care about what people might think of me :3<br><br>
            TLDR; A major factor is the quality and state of the game, which has fallen to an all time low.
        </details>
    </div>
</div>

<div class="md:grid md:grid-cols-3 gap-6 playstyle">
    <div class="col-span-2 py-5">
        <p class="bold text-5xl mb-4"><span class="text-fuchsia-400">Pl</span>aystyle</p>
        This is my current playstyle/setup for osu! Click <a href="/current.jpg" target="_blank" class="text-fuchsia-400">here
        (very outdated)</a> to see my setup in all its glory! I play tablet with my left hand and tap mostly full alt, 
        starting patterns with my index finger. If I'm using a keyboard I use K & L for my keybinds. Playing on a 39mm tablet, 
        switched to 60mm as of 08-2023, <a href="/area.png" target="_blank" class="text-fuchsia-400">click here for my tablet 
        settings (also outdated)</a> and <a href="https://www.youtube.com/watch?v=OrD620-JnoM" target="_blank" 
        class="text-fuchsia-400 support">here is a older liveplay</a> to see everything in action.
    </div>
    <div class="activity-card flex justify-center md:justify-end items-center">
        <div class="deck-border items-center text-center" use:tilt={{ strength: 1.5, scale: 1.1 }}>
            <span class="text-sm">List of my Periferals and Hardware</span><br>
            <a href="https://tinyurl.com/24pz43xx" target="_blank" class="text-fuchsia-400 support">Gigabyte Ultrawide 144hz Monitor</a><br>
            <a href="https://wooting.io/wooting-60he" target="_blank" class="text-fuchsia-400 support">Wooting 60HE+ w/ Linear45</a><br>
            <a href="https://wooting.io/configurator/wooting-uwu?model=RGB+White&quantity=1&addon=none" 
            target="_blank" class="text-fuchsia-400 support">Wooting UwU RGB</a><br>
            <a href="https://oblotzky.industries/products/nk65-milkshake-edition" target="_blank" class="text-fuchsia-400 support">
                NK65 Milkshake Edition</a><br>
            <a href="#/" class="text-fuchsia-400 support">Wacom 470, 472, 480 and 680</a>
            <br><span class="text-sm">Last updated: 18.08.2024</span>
        </div>
    </div>
</div>

<!-- scroll indicator -->
<div class="hidden md:block py-10">
    <div class="split deck-split text-center flex justify-center items-center">
        <span>There is more below!</span>
        <div class="mouse">
            <div class="mouse-icon">
                <span class="mouse-wheel"></span>
            </div>
        </div>
    </div> 
</div>

<div class="py-5">
    <p class="bold text-5xl"><span class="text-fuchsia-400">Sk</span>ins</p>
    <span class="text-sm">Last updated: 18.08.2024</span>
</div>

<div class="project-container flex flex-row flex-wrap gap-6">
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                Mlawv1+idke Blue<br>
            </div>
        </div>
        <div class="project-desc py-5">
            <Lightbox description="">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="/skins/blue.jpg" class="rounded-lg">
            </Lightbox>
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="#/" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-sm md:text-base">download skin</span>
                    <span class="text-xs p-0">(click img for large preview)</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                AristiaEdittrail<br>
            </div>
        </div>
        <div class="project-desc py-5">
            <Lightbox description="">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="/skins/edittrail.jpg" class="rounded-lg">
            </Lightbox>
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="#/" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-sm md:text-base">download skin</span>
                    <span class="text-xs p-0">(click img for large preview)</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                #lionz_scuffed<br>
            </div>
        </div>
        <div class="project-desc py-5">
            <Lightbox description="">
                <!-- svelte-ignore a11y-missing-attribute -->
                <img src="/skins/scuffed.jpg" class="rounded-lg">
            </Lightbox>
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="#/" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-sm md:text-base">download skin</span>
                    <span class="text-xs p-0">(click img for large preview)</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="mt-3">
    <a href="#/" class="text-fuchsia-400 support">Show more.</a>
</div>