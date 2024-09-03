<script lang="ts">
    import tilt from 'svelte-tilt';

    const favArtists = [
        {
            artist: "Sqwore",
            img: "/artists/sqwore.jpg",
            spotifyLink: "https://open.spotify.com/artist/2IGZnq5Ot1NquCpks3zO4o"
        },
        {
            artist: "Linkin Park",
            img: "/artists/park.jpeg",
            spotifyLink: "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz?si=6MlTTIUCR5SydLRv1Lm27Q"
        },
        {
            artist: "Neck Deep",
            img: "/artists/neck.jpg",
            spotifyLink: "https://open.spotify.com/artist/2TM0qnbJH4QPhGMCdPt7fH"
        },
        {
            artist: "Juice WRLD",
            img: "/artists/wrld.jpg",
            spotifyLink: "https://open.spotify.com/artist/4MCBfE4596Uoi2O4DtmEMz"
        },
        {
            artist: "Origami Angel",
            img: "/artists/angel.jpg",
            spotifyLink: "https://open.spotify.com/artist/0cmSXx965Hnm6fP42oW6vY"
        },
        {
            artist: "ONE OK ROCK",
            img: "/artists/one.jpg",
            spotifyLink: "https://open.spotify.com/artist/7k73EtZwoPs516ZxE72KsO"
        },
        {
            artist: "Superheaven",
            img: "/artists/superheaven.jpg",
            spotifyLink: "https://open.spotify.com/artist/1IHjrY7ygKbmLVoUV1VcXc"
        },
        {
            artist: "Yeat",
            img: "/artists/yeat.jpg",
            spotifyLink: "https://open.spotify.com/artist/3qiHUAX7zY4Qnjx8TNUzVx"
        },
        {
            artist: "t1de",
            img: "/artists/t1de.jpg",
            spotifyLink: "https://open.spotify.com/artist/49tDmEsh9WIXqL6cmzENtu"
        },
        {
            artist: "17 SEVENTEEN",
            img: "/artists/17.jpg",
            spotifyLink: "https://open.spotify.com/artist/496nklFjflGjJOhhfhH2Nc"
        },
        {
            artist: "RomancePlanet",
            img: "/artists/romance.jpg",
            spotifyLink: "https://open.spotify.com/artist/37wN6xD9duyyxRWmObUUxE"
        },
        {
            artist: "Title Fight",
            img: "/artists/fight.jpg",
            spotifyLink: "https://open.spotify.com/artist/2CnhqfjUG0qzsru0SMuhrk"
        }
    ]

    let visibleArtists = 6;

    function showMore() {
        if (visibleArtists + 3 <= favArtists.length) {
            visibleArtists += 6;
        } else {
            visibleArtists = favArtists.length;
        }
    }

    function showLess() {
        if (visibleArtists > 6) {
            visibleArtists -= 6;
        } else {
            visibleArtists = 6;
        }
    }
    
</script>

<div class="fav-artists">
    <p class="bold text-4xl md:text-5xl"><span class="text-fuchsia-400">Fa</span>vorite Artists</p>
        <div class="flex flex-wrap gap-4 mt-5 justify-center md:justify-between">
            {#each favArtists.slice(0, visibleArtists) as { artist, img, spotifyLink }}
                <div class="artist-card" use:tilt={{ strength: 1.5, scale: 1.1 }}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a href={spotifyLink} target="_blank">
                        <img src={img} class="rounded-lg w-32">
                    </a>
                    <p class="text-center mt-3">{artist}</p>
                </div>
            {/each}
        </div>
    
    {#if visibleArtists < favArtists.length}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showMore} class="text-fuchsia-400 support">Show more</a>
    </div>
    {/if}

    {#if visibleArtists > 6}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showLess} class="text-fuchsia-400 support">Show less</a>
    </div>
    {/if}

</div>