<script lang="ts">
  import "../style.css";
  import { onMount } from 'svelte';
  import { createBackground } from '../utils/background';

  onMount(() => {
    const container = document.querySelector('.viewport') as HTMLElement;
    createBackground(container);
  });
</script>

<div class="viewport"></div>
<div class="card">
  <div class="card-content">
    <div class="flex justify-between nav items-center">
      <div class="brand avi px-2">
        <img src="https://cdn.discordapp.com/avatars/673304389875925003/313942663304fbff713fec390cc6b657.png" alt="logo">
      </div>
      <div class="brand avi flex gap-x-14">
        <div href="#/">/home</div>
        <div href="#/">/content</div>
        <div href="#/">/contact</div>
      </div>
      <div class="brand avi">
        <i class="fa fa-heart fa-xl"></i>
      </div>
    </div>
  </div>
</div>

<slot />