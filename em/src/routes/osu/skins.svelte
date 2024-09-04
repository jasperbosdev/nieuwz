<script lang="ts">
    import tilt  from 'svelte-tilt';
    import { Lightbox } from 'svelte-lightbox';

    const Skins = [
        {
            name: "Mlawv1+idke Blue",
            img: "/skins/blue.jpg",
            link: "#/"
        },
        {
            name: "AristiaEdittrail",
            img: "/skins/edittrail.jpg",
            link: "#/"
        },
        {
            name: "#lionz_scuffed",
            img: "/skins/scuffed.jpg",
            link: "#/"
        },
        {
            name: "Tippy『IF』",
            img: "/skins/tippi.jpg",
            link: "#/"
        },
        {
            name: "-# OotoEgg -",
            img: "/skins/ooto.jpg",
            link: "#/"
        },
        {
            name: "Toke+Hamster",
            img: "/skins/hamster.jpg",
            link: "#/"
        }
    ]

    let visibleSkins = 3;

    function showMore() {
        if (visibleSkins + 3 <= Skins.length) {
            visibleSkins += 3;
        } else {
            visibleSkins = Skins.length;
        }
    }

    function showLess() {
        if (visibleSkins > 3) {
            visibleSkins -= 3;
        } else {
            visibleSkins = 3;
        }
    }

</script>

<div class="py-5">
    <p class="bold text-5xl"><span class="text-fuchsia-400">Sk</span>ins</p>
    <span class="text-sm">Last updated: 18.08.2024</span>
</div>

<div class="project-container flex flex-row flex-wrap gap-6">
    {#each Skins.slice(0, visibleSkins) as { name, img, link }}
        <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
            <div class="project-overview flex items-center justify-between">
                <div class="project-title text-3xl">
                    {name}<br>
                </div>
            </div>
            <div class="project-desc py-5">
                <Lightbox description="">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img src={img} class="rounded-lg">
                </Lightbox>
            </div>
            <div class="mt-3">
                <div class="project-footer flex items-center">
                    <a href={link} target="_blank" class="hover:scale-105 transition duration-200">
                        <i class="fas fa-share mr-1"></i>
                        <span class="text-sm md:text-base">download skin</span>
                        <span class="text-xs p-0">(click img for large preview)</span>
                    </a>
                </div>
            </div>
        </div>
    {/each}

    {#if visibleSkins < Skins.length}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showMore} class="text-fuchsia-400 support">Show more</a>
    </div>
    {/if}

    {#if visibleSkins > 3}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showLess} class="text-fuchsia-400 support">Show Less</a>
    </div>
    {/if}
</div>