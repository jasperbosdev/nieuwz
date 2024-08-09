<script lang="ts">
    import "./groningen.css";
    import { onMount } from 'svelte';
    import * as timeago from 'timeago.js';
    import { showPopup, closePopup, getUsers, formatUsers } from './groningen.js';
    import tilt from 'svelte-tilt';

    let users = [];
    let loading = true;

    onMount(() => {
        // Fetch and format users
        getUsers()
            .then(results => {
                console.log("Raw user data:", results); // Log raw results
                users = formatUsers(results);
                console.log("Formatted users:", users); // Log formatted users
                loading = false;
            })
            .catch(err => {
                console.error(err);
                loading = false;
                document.querySelector('#osu-status').innerHTML = 'Could not load users';
            });

        // initializePopupEvents(); // Initialize popup event listeners
    });

    // Hardcoded user data
    const hardcodedUser = {
        id: '3',
        username: 'Lionz',
        avatar_url: 'https://a.komako.pw/3',
        statistics: {
            global_rank: 987,
            pp: '11,328'
        },
        rank_highest: {
            rank: 987,
            updated_at: '2022-10-01T00:00:00Z'
        }
    };

    // Add hardcoded user to the list
    $: usersWithHardcoded = [hardcodedUser, ...users];
</script>

<div class="deck-border">
    <div class="gro-header flex flex-col">
        <div class="gro-img flex justify-center">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="/GR.svg" class="h-6 rounded">
        </div>
        <div class="gro-desc text-center mt-2">
            Player rankings for <a href="https://maps.app.goo.gl/x3sK7vFnJ5Vmpj9d8" class="text-fuchsia-400 support" 
            target="_blank">Groningen</a>, The Netherlands<br> Automatically updated every 2 hours! <a href="#/" class="text-fuchsia-400
            support">(more info here)</a>
            <p class="text-sm mt-2">(click avatar to visite their profile)</p>
        </div>
    </div>

    <h2 id="osu-status" class="text-2xl font-bold">
        {#if loading}
            <p class="text-center">Retrieving the latest information, give it a second....</p>
        {:else}
            <p></p>
        {/if}
    </h2>
    
    <div class="player-list mt-5 mb-5" id="osu-users">
        {#each usersWithHardcoded as user, page_rank}
            <div class="osu-user {page_rank === 0 ? 'team-member1' : 'team-member2'}" style="min-width: 170.94px;" use:tilt={{ strength: 1.5, scale: 1.05 }}>
                <a href={user.id === '3' ? 'https://komako.pw/u/3' : `https://osu.ppy.sh/users/${user.id}`} target="_blank" class="osu-user-link">
                    <img src={user.avatar_url} class="osu-user-avatar pfp css-1f9fgxs" style="object-fit: contain;">
                </a>
                <div class="">
                    <h6 class="osu-user-username text-yellow-200"
                        style={user.id === '3' ? 'color: fuchsia; text-shadow: 0px 2px 7px fuchsia; background: url(./text_fx/text_bg_matrix.gif); font-weight: bold; font-size:1.25rem' : 'font-weight: bold; font-size:1.25rem'}>
                        {user.username}
                    </h6>
                </div>
                <h6 class="MuiTypography-root MuiTypography-subtitle1 css-10lynkh osu-user-rank"
                    data-title={`Peak @ #${user.rank_highest.rank.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} (${timeago.format(user.rank_highest.updated_at, 'en_US')}) | ${user.statistics.pp}pp`}>
                    #{page_rank + 1} | #{user.statistics.global_rank || '-'}
                </h6>
            </div>
        {/each}
    </div>
    
    <div id="osu-user-base" style="display: none;">
        <!-- Template for user -->
        <div class="osu-user team-member1 #item2" style="max-width: 170.94px;">
            <div class="osu-user-container" data-title="Peak @ #rank (date-achieved) ppcount">
                <a href="#" target="_blank" class="osu-user-link">
                    <img alt="" class="osu-user-avatar pfp css-1f9fgxs" style="object-fit: contain;">
                </a>
                <div>
                    <h6 class="MuiTypography-root MuiTypography-h6 css-7k7226 osu-user-username"></h6>
                </div>
                <h6 class="MuiTypography-root MuiTypography-subtitle1 css-10lynkh osu-user-rank"></h6>
            </div>
        </div>
    </div>    

    <div id="popup-container" class="popup-container">
        <!-- The pop-up window -->
        <div class="popup text-center leading-5">
            <p>F.A.Q.<br><br>
                Q: How can I be added on this list?<br>
                A: <a style="color:rgb(126, 148, 247)">If you are currently living in </a><a
                    style="color: #ff1878"
                    href="https://www.google.com/maps/place/Groningen/@53.195887,6.4171023,10z/data=!3m1!4b1!4m5!3m4!1s0x47c9c27b376202ab:0xf24577154131aa51!8m2!3d53.2887213!4d6.7060867"
                    target="_blank">Groningen</a><a style="color:rgb(126, 148, 247)">, contact Lionz
                    directly to be added.</a><br><br>
                Q: I just sniped someone on the rankings but I'm still below them?<br>
                A: <a style="color:rgb(126, 148, 247)">The API updates all data for each user every 2 hours.
                    You might be checking here too early, come back later! :p</a>
                <br><br>
                Q: I changed my profile picture but it hasn't updated?<br>
                A: <a style="color:rgb(126, 148, 247)">This is a browser cache issue. To solve this, hit
                    CLTR + F5 on your keyboard to refresh the browser cache.</a><br><br>
                Q: How do I know if the rankings have shifted?<br>
                A: <a style="color:rgb(126, 148, 247)">Currently you will need to remember where everyone is
                    placed if you wish to keep track, but I hope to add a feature to make
                    it easier in the future.</a><br><br>
                Q: How do I visit someone's profile?<br>
                A: <a style="color:rgb(126, 148, 247)">You can visit someone's profile by clicking their
                    profile picture. This will open their profile in a new tab.</a><br><br>
                Q: Why is Lionz on the list, isn't he restricted?<br>
                A: <a style="color:rgb(126, 148, 247)">Correct, I host this page and made my border red to
                    make it more obvious I technically don't count towards the rankings.
                    I included myself because its my website and like to preserve my performance and
                    peak.</a><br><br>
                More questions? Contact directly.<br><br>
                Last updated at: 10.09.2023<br>
            </p>
            <button on:click="{closePopup}">Close</button>
        </div>
    </div>
</div>