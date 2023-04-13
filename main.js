// ==UserScript==
// @name         ChatGPT Search Query Parser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chat.openai.com/chat*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function() {
  // Extracts the 'search' query parameter from the URL.
  function extractQueryFromUrl(url) {
    const parsedUrl = new URL(url);
    const searchParams = new URLSearchParams(parsedUrl.search);
    const query = searchParams.get('search');

    return query;
  }

  // Inserts the content into the textarea.
  function updateTextareaContent(newContent) {
    const textarea = document.querySelector('.flex.flex-col textarea');
    textarea.value = newContent;
  }

  // Simulates an input event on the textarea.
  function simulateInputEvent() {
    const textarea = document.querySelector('.flex.flex-col textarea');
    const inputEvent = new Event('input', { bubbles: true });
    textarea.dispatchEvent(inputEvent);
  }

  // Simulates a click on the button.
  function simulateButtonClick() {
    const button = document.querySelector('button.absolute.p-1.rounded-md.text-gray-500');
    button.click();
  }

  // Main execution
  const url = window.location.href;
  const query = extractQueryFromUrl(url);
  updateTextareaContent(query);
  simulateInputEvent();
  setTimeout(simulateButtonClick, 100);
};

})();