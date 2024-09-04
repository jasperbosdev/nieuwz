<script lang="ts">
    import tilt  from 'svelte-tilt';
    import Skins from './skins.svelte';
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

<Skins />