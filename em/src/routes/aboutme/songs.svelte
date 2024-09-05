<script lang="ts">
    import tilt from 'svelte-tilt';

    const favSongs = [
        {
            title: "дорога",
            artist: "Sqwore",
            cover: "/covers/road.jpg",
            spotifyLink: "https://open.spotify.com/track/4QAj5AZDtyqKt9TMSTd01R?si=ef5939b43dd44f69"
        },
        {
            title: "Can't be replaced",
            artist: "Juice WRLD",
            cover: "/covers/replaced.jpg",
            spotifyLink: "https://open.spotify.com/track/5kelosFpKw4DTEwoKHhMwe?si=587c595b2a5c4991"
        },
        {
            title: "коммунарка",
            artist: "Sqwore",
            cover: "/covers/gemeente.jpg",
            spotifyLink: "https://open.spotify.com/track/0dqnN8TxVhDDN3vnksgM2c?si=b74a4214b0ce4b04"
        },
        {
            title: "Told Ya",
            artist: "Yeat",
            cover: "/covers/up2me.jpg",
            spotifyLink: "https://open.spotify.com/track/4Ub9rNZn644QkrTdML26by?si=bf08af5eb7ae44f2"
        },
        {
            title: "недошедшее",
            artist: "Sqwore",
            cover: "/covers/road.jpg",
            spotifyLink: "https://open.spotify.com/track/5xYthQcLSVMEKfncegEZeN?si=5e6ba7cd146846de"
        },
        {
            title: "Plug",
            artist: "Juice WRLD",
            cover: "/covers/drug.jpg",
            spotifyLink: "https://open.spotify.com/track/1wWzyb3dUzgRNIteCJdqjb?si=fd836eac6d2a426c"
        },
        {
            title: "Serpents",
            artist: "Neck Deep",
            cover: "/covers/life.jpg",
            spotifyLink: "https://open.spotify.com/track/4SqIMK3ILlAsC4FkVgC4Lf?si=ebc56d5c905d43c6"
        },
        {
            title: "девочка в окне напротив",
            artist: "Sqwore, 17 SEVENTEEN",
            cover: "/covers/gemeente.jpg",
            spotifyLink: "https://open.spotify.com/track/4w6BTpaSFnkEWx2RkJOYlA?si=9e36b6aa8c8a4a2b"
        },
        {
            title: "всего лишь сон",
            artist: "Sqwore",
            cover: "/covers/road.jpg",
            spotifyLink: "https://open.spotify.com/track/15yhKt3r5DYVQFUU2651sw?si=3bbac629a5b341eb"
        },
        {
            title: "нло",
            artist: "Sqwore, 17 SEVENTEEN",
            cover: "/covers/nlo.jpg",
            spotifyLink: "https://open.spotify.com/track/1Z8rKA2vzsHvXPGCPNptiR?si=c4dd257ca0cd4098"
        },
        {
            title: "Bloody Blade",
            artist: "Juice WRLD",
            cover: "/covers/blade.jpg",
            spotifyLink: "https://open.spotify.com/track/2xPL0NQFhMsWGL37U4Gi8E?si=4e373b28cf354df5"
        },
        {
            title: "сладких снов",
            artist: "Sqwore",
            cover: "/covers/eve.jpg",
            spotifyLink: "https://open.spotify.com/track/4CM0y30KhIbkiVyjoHi3pc?si=53d9fe257a824314"
        }
    ]

    let visibleSongs = 6;

    function showMore() {
        if (visibleSongs + 3 <= favSongs.length) {
            visibleSongs += 6;
        } else {
            visibleSongs = favSongs.length;
        }
    }

    function showLess() {
        if (visibleSongs > 6) {
            visibleSongs -= 6;
        } else {
            visibleSongs = 6;
        }
    }
    
</script>

<div class="fav-artists">
    <p class="bold text-4xl md:text-5xl"><span class="text-fuchsia-400">Fa</span>vorite Songs</p>
        <div class="flex flex-wrap gap-4 mt-5 justify-center md:justify-between">
            {#each favSongs.slice(0, visibleSongs) as { title, artist, cover, spotifyLink }}
                <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a href={spotifyLink} target="_blank">
                        <img src={cover} class="rounded-lg w-32">
                    </a>
                    <p class="text-center mt-3 text-sm max-w-[120px] truncate">{title}</p>
                    <p class="text-center text-xs">{artist}</p>
                </div>
            {/each}
        </div>
    
    {#if visibleSongs < favSongs.length}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showMore} class="text-fuchsia-400 support">Show more</a>
    </div>
    {/if}

    {#if visibleSongs > 6}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showLess} class="text-fuchsia-400 support">Show less</a>
    </div>
    {/if}

</div>