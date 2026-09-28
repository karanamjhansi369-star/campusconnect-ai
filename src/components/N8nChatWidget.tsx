import React, { useEffect, useRef } from 'react';

export const N8N_WEBHOOK_URL = 'https://jhansi-tech.app.n8n.cloud/webhook/28eb0b61-ed90-4528-9936-94c3bc23c045/chat';

export const openN8nChat = () => {
  // Try to find the n8n chat toggle button in the DOM
  const toggleBtn = document.querySelector<HTMLButtonElement>(
    '.chat-window-toggle, [class*="chat-window-toggle"], [class*="chat-toggle"], button[aria-label*="chat" i], .n8n-chat-widget button'
  );

  if (toggleBtn) {
    toggleBtn.click();
    return true;
  }

  // If window is already open, do nothing or focus input
  const inputEl = document.querySelector<HTMLInputElement | HTMLTextAreaElement>(
    '.chat-window input, .chat-window textarea, [class*="chat-input"] input'
  );
  if (inputEl) {
    inputEl.focus();
    return true;
  }

  return false;
};

export const N8nChatWidget: React.FC = () => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    // Check if n8n chat is already initialized in window
    if (document.querySelector('.chat-window, .chat-window-toggle')) {
      return;
    }

    const loadN8nChat = async () => {
      try {
        // Dynamically import the ES module bundle from jsdelivr
        // @ts-ignore
        const module = await import(/* @vite-ignore */ 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js');

        if (module && typeof module.createChat === 'function') {
          module.createChat({
            webhookUrl: N8N_WEBHOOK_URL,
            webhookConfig: {
              method: 'POST',
              headers: {}
            },
            showWelcomeScreen: false,
            initialMessages: [
              'Hello! 👋 I am your CampusConnect AI Assistant.',
              'Ask me anything about upcoming campus events, library hours, clubs, or student resources!'
            ],
            i18n: {
              en: {
                title: 'CampusConnect AI',
                subtitle: 'Smart Campus Assistant · Powered by n8n',
                footer: 'CampusConnect AI System',
                getStarted: 'Start Conversation',
                inputPlaceholder: 'Ask about events, resources, timings...',
              }
            }
          });
        }
      } catch (error) {
        console.error('Error initializing n8n chat widget:', error);
      }
    };

    loadN8nChat();
  }, []);

  return null;
};
