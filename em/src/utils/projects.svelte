<script lang="ts">
    import { onMount } from 'svelte';
    import tilt from 'svelte-tilt';

    const projects = [
        {
            title: "leeuwz/komako",
            imgSrc: "/komakoS.png",
            desc: `
                komako is a private server for the game osu! I am running a heavily customized and self-designed build of 
                <a class="text-fuchsia-400" href="https://github.com/varkaria/guweb" target="_blank">guweb</a> and 
                <a class="text-fuchsia-400" href="https://github.com/osuAkatsuki/bancho.py" target="_blank">bancho.py</a>.
            `,
            link: "https://komako.pw",
            button_text: "visit the website!"
        },
        {
            title: "leeuwz/GrunnAPI",
            imgSrc: "/grun.png",
            desc: `
                GrunnAPI is a leaderboard for all osu! players from the province of 
                <a href="https://maps.app.goo.gl/ZHVYEcDZQtUB9k699" target="_blank" class="text-fuchsia-400">Groningen</a>. 
                It gathers data using a 
                <a href="https://github.com/wait-what/osu-microapi" target="_blank" class="text-fuchsia-400">microAPI</a> 
                that utilizes the osu! API to gather player stats.
            `,
            link: "https://leeuwz.pet/groningen",
            button_text: "visit the page!"
        },
        {
            title: "leeuwz/komako-stack",
            imgSrc: "/komako-stack.png",
            desc: `
                Automatically set up guweb, bancho.py, mysql and caddy using Docker. 
                Works both locally and in production environments. Thanks to the help of 
                <a class="text-fuchsia-400" href="https://github.com/wait-what" target="_blank">Wait What</a>.
            `,
            link: "https://github.com/Komako-pw/bancho-guweb-stack",
            button_text: "visit the repo!"
        },
    ];

    let visibleProjects = 3; // Number of projects to show initially

    function showMore() {
        if (visibleProjects + 3 <= projects.length) {
            visibleProjects += 3;
        } else {
            visibleProjects = projects.length; // Show all if less than 3 remaining
        }
    }
</script>

<div class="mb-4">
    <p class="bold text-5xl"><span class="text-fuchsia-400">Pr</span>ojects</p>
</div>

<div class="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
    {#each projects.slice(0, visibleProjects) as project}
        <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
            <div class="project-overview flex items-center justify-between">
                <div class="project-title text-3xl">
                    <span class="font-normal">{project.title.split('/')[0]}/</span><br>{project.title.split('/')[1]}
                </div>
                <div class="project-img">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src={project.imgSrc} alt="project image" class="rounded-lg h-16">
                </div>
            </div>
            <div class="project-desc py-5">
                {@html project.desc} <!-- Use the @html directive to render HTML content -->
            </div>
            <div class="mt-3">
                <div class="project-footer flex items-center">
                    <a href={project.link} target="_blank" class="hover:scale-105 transition duration-200">
                        <i class="fas fa-share mr-1"></i>
                        <span class="text-base">{project.button_text}</span>
                    </a>
                </div>
            </div>
        </div>
    {/each}
</div>

{#if visibleProjects < projects.length}
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showMore} class="text-fuchsia-400 support">Show more</a>
    </div>
{/if}

{#if visibleProjects > 3 }
    <div class="mt-3">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="javascript:void(0)" on:click={showMore} class="text-fuchsia-400 support">Show less</a>
    </div>
{/if}