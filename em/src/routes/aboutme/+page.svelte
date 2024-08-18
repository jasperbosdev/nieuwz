<script lang="ts">
    import tilt  from 'svelte-tilt';
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
    you can find me in Visual Studio Code.<br>Because I ruined my music taste I now listen to artists like Sqwore, t1de, but I also 
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

<div class="fav-artists">
    <p class="bold text-4xl md:text-5xl"><span class="text-fuchsia-400">Fa</span>vorite Artists</p>
    <div class="">
        <div class="flex flex-wrap gap-4 mt-5 justify-center md:justify-between">
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/2IGZnq5Ot1NquCpks3zO4o" target="_blank">
                    <img src="/artists/sqwore.jpg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">Sqwore</p>
            </div>
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=6MlTTIUCR5SydLRv1Lm27Q" target="_blank">
                    <img src="/artists/park.jpeg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">Linkin Park</p>
            </div>
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/2TM0qnbJH4QPhGMCdPt7fH" target="_blank">
                    <img src="/artists/neck.jpg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">Neck Deep</p>
            </div>
            
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz" target="_blank">
                    <img src="/artists/wrld.jpg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">Juice WRLD</p>
            </div>
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/0cmSXx965Hnm6fP42oW6vY" target="_blank">
                    <img src="/artists/angel.jpg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">Origami Angel</p>
            </div>
            <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a href="https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO" target="_blank">
                    <img src="/artists/one.jpg" class="rounded-lg w-32">
                </a>
                <p class="text-center mt-3">ONE OK ROCK</p>
            </div>
        </div>
    </div>
    <div class="mt-3 hidden md:block">
        <a href="#/" class="text-fuchsia-400 support">Show more.</a>
    </div>
</div>