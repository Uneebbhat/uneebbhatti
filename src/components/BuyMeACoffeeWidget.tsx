"use client";

import { useEffect } from "react";

export const BuyMeACoffeeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "uneebbhatti");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute(
      "data-message",
      "Appreciate you stopping by! Your support helps me build, share, and create more valuable content. Feel free to buy me a coffee. 🙌"
    );
    script.setAttribute("data-color", "#5F7FFF");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return null;
};
