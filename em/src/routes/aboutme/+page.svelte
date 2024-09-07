<script lang="ts">
    import tilt  from 'svelte-tilt';
    import Artists from './artists.svelte';
    import Songs from './songs.svelte';
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
    <meta property="og:title" content="@lionz 🐈 About Me" />
    <meta property="og:description" content="Find out more about me." />
    <meta name="theme-color" content="#FF00FF" />
    <meta name="keywords" content="Lionz, leeuwz, komako, komako.pw, lionz komako, lionz osu, lionz osu profile, lionz website, leeuwz osu" />
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:image" content="https://c.tenor.com/wTuLX2YrZs0AAAAC/tenor.gif" />
    <meta property="og:image:type" content="image/gif" />
</svelte:head>

<div class="yapping mb-10">
    <p>Hello!!! I go by my online alias Lionz.<br>Just a silly guy who primarily plays Counter-Strike and osu! and if not, most of the time 
    you can find me in Visual Studio Code.<br>Because of my silly music taste I like to listen to artists like Sqwore, t1de, but I also 
    love all kinds of Rock, Metal, Hyperpop and Rap!<br>Make sure to also check out my 
    <a href="/osu" class="text-fuchsia-400 support">osu</a> page or my projects on the <a href="/" 
    class="text-fuchsia-400 support">home page</a> if you haven't already!</p>
</div>

<Artists />

<div class="py-5">
    <div class="split deck-split text-center flex justify-center items-center">
        <span>There is more below!</span>
        <div class="mouse">
            <div class="mouse-icon">
                <span class="mouse-wheel"></span>
            </div>
        </div>
    </div> 
</div>

<Songs />