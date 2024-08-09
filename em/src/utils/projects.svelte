<script type="ts">
    import tilt  from 'svelte-tilt';
</script>

<div class="mb-4">
    <p class="bold text-5xl"><span class="text-fuchsia-400">Pr</span>ojects</p>
</div>

<div class="project-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                <span class="font-normal">leeuwz/</span><br>komako
            </div>
            <div class="project-img">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src="/komakoS.png" alt="project image" class="rounded-lg h-16">
            </div>
        </div>
        <div class="project-desc py-5">
            komako is a private server for the game osu! I am running a heavily customized and self-designed build of
            <a class="text-fuchsia-400" href="https://github.com/varkaria/guweb" target="_blank">guweb</a>
            and <a class="text-fuchsia-400" href="https://github.com/osuAkatsuki/bancho.py" target="_blank">bancho.py</a>
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="https://komako.pw" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-base">visit komako!</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                <span class="font-normal">leeuwz/</span><br>GrunnAPI
            </div>
            <div class="project-img">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src="/grun.png" alt="project image" class="rounded-lg h-16 h-16">
            </div>
        </div>
        <div class="project-desc py-5">
            GrunnAPI is a leaderboard for all osu! players from the province of
            <a href="https://maps.app.goo.gl/ZHVYEcDZQtUB9k699" target="_blank" class="text-fuchsia-400">Groningen</a>.
            It gathers data using a <a href="https://github.com/wait-what/osu-microapi" target="_blank" class="text-fuchsia-400">microAPI</a> that utilizes the osu! API to gather player stats.
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="https://leeuwz.pet/groningen" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-base">visit the website!</span>
                </a>
            </div>
        </div>
    </div>
    <div class="project-single" use:tilt={{ strength: 0.9, scale: 1.05, xAxis: true, transition: 150 }}>
        <div class="project-overview flex items-center justify-between">
            <div class="project-title text-3xl">
                <span class="font-normal">leeuwz/</span><br>komako-stack
            </div>
            <div class="project-img">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src="/komako-stack.png" alt="project image" class="rounded-lg w-16 h-16">
            </div>
        </div>
        <div class="project-desc py-5">
            Automatically set up guweb, bancho.py, mysql and caddy using Docker.
            Works both locally and in production environments. Thanks to help of <a class="text-fuchsia-400" href="https://github.com/wait-what" target="_blank">Wait What</a>.
        </div>
        <div class="mt-3">
            <div class="project-footer flex items-center">
                <a href="https://github.com/Komako-pw/bancho-guweb-stack" target="_blank" class="hover:scale-105 transition duration-200">
                    <i class="fas fa-share mr-1"></i>
                    <span class="text-base">visit repository!</span>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="mt-3">
    <a href="#/" class="text-fuchsia-400 support">Show more.</a>
</div>