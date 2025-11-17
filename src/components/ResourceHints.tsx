"use client";

import { useEffect } from "react";

export default function ResourceHints() {
  useEffect(() => {
    // Add DNS prefetch and preconnect for external resources
    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://images.unsplash.com";
    document.head.appendChild(preconnect);

    const dnsPrefetch = document.createElement("link");
    dnsPrefetch.rel = "dns-prefetch";
    dnsPrefetch.href = "https://images.unsplash.com";
    document.head.appendChild(dnsPrefetch);

    return () => {
      document.head.removeChild(preconnect);
      document.head.removeChild(dnsPrefetch);
    };
  }, []);

  return null;
}

