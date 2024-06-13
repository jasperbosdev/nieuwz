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
<!-- background -->

<div class="container mx-auto">
  <div class="card"> <!-- container, main card and card content -->
    <div class="card-content">

      <div class="flex justify-between nav items-center"> <!-- navbar -->
        <div class="brand avi">
          <a href="/">
            <img src="https://a.ppy.sh/6519705?1598577889.jpeg" alt="logo"
            class="transition duration-200 hover:-translate-y-1.5">
          </a>
        </div>
        <div class="brand avi flex gap-x-14">
          <div href="#/"><a href="#/">/home</a></div>
          <div href="#/"><a href="#/">/content</a></div>
          <div href="#/"><a href="#/">/contact</a></div>
        </div>
        <div class="brand avi">
          <a href="#/"><i class="fa fa-heart fa-xl transition duration-200 hover:-translate-y-1.5"></i></a>
        </div>
      </div>


      <div class="py-12">
        <slot />
      </div>

      <footer class="text-center font-normal deck-border"> <!-- footer (duhhh) -->
        <p>© {currentYear} 🐈 em</p>
      </footer>

    </div>
  </div>
</div>