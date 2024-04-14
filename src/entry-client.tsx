import { onMount } from 'solid-js';
import { mount, StartClient } from "solid-start/entry-client";

mount(() => {
  onMount(() => {
    document.querySelectorAll('a').forEach((button) => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        var url = button.getAttribute('href');
        window.location.href = url;
      });

      button.addEventListener('touchstart', function (event) {
        event.preventDefault();
        var url = button.getAttribute('href');
        window.location.href = url;
      });
    });
  });

  return <StartClient />;
}, document);
