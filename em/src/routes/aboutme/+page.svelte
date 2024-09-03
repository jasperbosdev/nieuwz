<script lang="ts">
    import tilt  from 'svelte-tilt';
    import Artists from './artists.svelte';
</script>

<div class="playstyle mb-10">
    <div class="col-span-2">
        <p class="bold text-6xl"><span class="text-fuchsia-400">/</span>me</p>
        Hii, I'm Lionz | he/him | 18+
        <div class="flex gap-x-1">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="w-12" src="/emotes/catpeek.png">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="w-12" src="/emotes/bisexual.png">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="w-12" src="/emotes/zzz.png">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img class="w-12" src="/emotes/blah.jpg">
        </div>
    </div>
</div>

<svelte:head>
    <title>@lionz 🐈 About Me</title>
</svelte:head>

<div class="yapping mb-10">
    <p>Hello!!! I go by my online alias Lionz<br>Just a silly guy who primarily plays Counter-Strike and osu! and if not, most of the time 
    you can find me in Visual Studio Code.<br>Because of my silly music taste I like to listen to artists like Sqwore, t1de, but I also 
    love all kinds of Rock, Metal, Hyperpop and Rap!<br>Make sure to also check out my 
    <a href="/aboutosu" class="text-fuchsia-400 support">about osu</a> page or my projects on the <a href="/" 
    class="text-fuchsia-400 support">home page</a> if you haven't already!</p>
</div>

<!-- <div class="misc">
    <div class="mb-4">
        <p class="bold text-5xl"><span class="text-fuchsia-400">Mi</span>sc</p>
    </div>
    <div class="project-container flex flex-row flex-wrap gap-6">
        <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
            <p class="mb-1">PC Specs</p>
            <p>
                CPU: Ryzen 5600x<br>MOBO: MSI B550 Gaming Plus<br> RAM: 32GB Vengenace Pro 3200MHZ<br>GPU: Asus TUF RTX 3070
            </p>
        </div>
        <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
            123
        </div>
        <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
            123
        </div>
    </div>
</div> -->

<!-- scroll indicator -->
<!-- <div class="py-10">
    <div class="split deck-split text-center flex justify-center items-center">
        <span>There is more below!</span>
        <div class="mouse">
            <div class="mouse-icon">
                <span class="mouse-wheel"></span>
            </div>
        </div>
    </div> 
</div> -->

<Artists />