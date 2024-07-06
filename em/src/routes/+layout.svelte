<script lang="ts">
  import "../style.css";
  import { onMount } from 'svelte';
  import { createBackground } from '../utils/background';

  let currentYear = new Date().getFullYear();

  onMount(() => {
    const container = document.querySelector('.viewport') as HTMLElement;
    createBackground(container);
  });
</script>

<div class="viewport"></div>
<div class="viewport-bg"></div>
<!-- background -->

<div class="container mx-auto max-w-7xl">
  <div class="card"> <!-- container, main card and card content -->
    <div class="card-content">

      <div class="flex justify-between nav items-center"> <!-- navbar -->
        <div class="brand avi">
          <a href="/">
            <img src="/pfp.jpg" alt="logo"
            class="transition duration-200 hover:-translate-y-1.5">
          </a>
        </div>
        <div class="brand avi flex gap-x-14">
          <div href="#/"><a href="#/">/home</a></div>
          <div href="#/"><a href="#/">/content</a></div>
          <div target="_blank"><a href="https://komako.pw">/komako</a></div>
          <div href="#/"><a href="#/">/contact</a></div>
        </div>
        <div class="brand avi">
          <a href="#/"><i class="fa fa-heart fa-xl transition delay-0 duration-200 hover:-translate-y-1.5"></i></a>
        </div>
      </div>


      <div class="py-20">
        <slot />
      </div>

      <footer class="text-center font-normal deck-border"> <!-- footer (duhhh) -->
        <p>© {currentYear} 🐈 em</p>
      </footer>

    </div>
  </div>
</div>