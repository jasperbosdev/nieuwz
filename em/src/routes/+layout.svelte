<script lang="ts">
  import "../style.css";
  import { page } from "$app/stores";
  import { derived } from "svelte/store";
  import { onMount } from 'svelte';
  import { createBackground } from '../utils/background';
  import { fly } from 'svelte/transition';

  const currentPath = derived(page, $page => $page.url.pathname);

  let currentYear = new Date().getFullYear();

  function handleTransitionStart() {
    document.querySelector('body')!.style.overflow = 'hidden';
  }

  function handleTransitionEnd() {
    document.querySelector('body')!.style.overflow = 'auto';
  }

  onMount(() => {
    const container = document.querySelector('.viewport') as HTMLElement;
    createBackground(container);

    // JavaScript to toggle the navbar on mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('hidden')) {
          navLinks.classList.remove('hidden');
          navLinks.classList.add('flex', 'flex-row');
        } else {
          navLinks.classList.remove('flex', 'flex-row');
          navLinks.classList.add('hidden');
        }
      });
    }
  });
</script>

<div class="viewport"></div>
<div class="viewport-bg"></div>
<!-- background -->

<div class="container mx-auto max-w-7xl">
  <div class="card"> <!-- container, main card and card content -->
    <div class="card-content">

      <div class="md:flex md:justify-between nav p-4 bg-gray-800 text-white"> <!-- flex justify-between nav items-center p-4 bg-gray-800 text-white -->
        <div class="flex justify-between items-center">
          <!-- Brand and logo -->
          <div class="brand avi">
            <a href="/">
              <img src="/pfpp.jpg" alt="logo" class="transition duration-300 hover:-translate-y-1.5 w-12 h-12">
            </a>
          </div>
          
          <!-- Hamburger button -->
          <div class="block md:hidden">
            <button id="hamburger" class="text-white focus:outline-none">
              <i class="fas fa-bars fa-2x"></i>
            </button>
          </div>
          <div class="brand avi block md:hidden">
            <a href="https://ko-fi.com/leeuwz" target="_blank" class="support">
              <i class="fa fa-heart fa-xl transition delay-0 duration-300 hover:-translate-y-1.5"></i>
            </a>
          </div>
        </div>
        
        <!-- Navbar links -->
        <div id="nav-links" class="hidden md:flex flex-row flex-wrap justify-center text-center gap-x-6 gap-y-4 mt-4 md:mt-0 items-center w-full md:w-fit">
          <div class="around-nav">
            <div class="nav-item" class:active={$currentPath === '/'}>
              <a href="/">/home</a>
            </div>
          </div>
          <div class="around-nav has-dropdown">
            <div class="nav-item" class:active={$currentPath === '/aboutme' || $currentPath === '/aboutosu'}>
              <a href="#/">/about</a>
            </div>
            <div class="nav-dropdown">
              <div class="dropdown-item">
                <a href="/aboutme">/me</a>
              </div>
              <div class="dropdown-item">
                <a href="/aboutosu">/osu</a>
              </div>
            </div>
          </div>
          <div class="around-nav">
            <div class="nav-item" class:active={$currentPath === '/osu'}>
              <a href="osu">/osu</a>
            </div>
          </div>
          <div class="around-nav">
            <div class="nav-item">
              <a href="https://komako.pw" target="_blank">/komako</a>
            </div>
          </div>
          <div class="around-nav has-dropdown">
            <div class="nav-item" class:active={$currentPath === '/more' || $currentPath === '/groningen'}>
              <a href="#/">/more</a>
            </div>
            <div class="nav-dropdown">
              <div class="dropdown-item">
                <a href="/groningen">/groningen</a>
              </div>
            </div>
          </div>
        </div>
        <div class="brand avi hidden md:block md:flex md:items-center">
          <a href="https://ko-fi.com/leeuwz" target="_blank" class="support">
            <i class="fa fa-heart fa-xl transition delay-0 duration-300 hover:-translate-y-1.5"></i>
          </a>
        </div>
      </div>
      

      <div class="py-8 md:py-16">
        {#key $currentPath}
          <div
            in:fly={{ x: -200, duration: 400, delay: 150 }}
            on:introstart={handleTransitionStart}
            on:introend={handleTransitionEnd}
          >
            <slot />
          </div>
        {/key}
      </div>
    
      <footer class="text-center font-normal deck-border"> <!-- footer (duhhh) -->
        <div class="flex gap-x-1.5 justify-center items-center">
          <div class="around-nav"><div class="nav-item text-sm"><a href="https://github.com/leeuwz" target="_blank">/github</a></div></div>
          <span class="font-bold">&#x2022;</span>
          <div class="around-nav"><div class="nav-item text-sm"><a href="https://t.me/dumpup" target="_blank">/contact</a></div></div>
        </div>
        <p>© 2021 - {currentYear} 🐈 em</p>
      </footer>

    </div>
  </div>
</div>
