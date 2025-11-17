"use client";

import { useEffect } from "react";

export default function ResourceHints() {
  useEffect(() => {
    // Add preconnect for critical origins
    const origins = [
      "https://images.unsplash.com",
      "https://cal.com",
    ];

    const links: HTMLLinkElement[] = [];

    origins.forEach((origin) => {
      // Preconnect for faster connection
      const preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = origin;
      preconnect.crossOrigin = "anonymous";
      document.head.appendChild(preconnect);
      links.push(preconnect);

      // DNS prefetch as fallback
      const dnsPrefetch = document.createElement("link");
      dnsPrefetch.rel = "dns-prefetch";
      dnsPrefetch.href = origin;
      document.head.appendChild(dnsPrefetch);
      links.push(dnsPrefetch);
    });

    return () => {
      links.forEach((link) => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, []);

  return null;
}

