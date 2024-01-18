setTimeout(() => {
  var priceElement = document.querySelector(".norm-price");
  var url = window.location;

  if (priceElement && priceElement.textContent) {
    var currentPrice = priceElement.textContent;
    const adKey = url.pathname;

    chrome.storage.local.get(null).then((result) => console.log(result));

    chrome.storage.local.get([adKey]).then((results) => {
      const historicalPrices = results[adKey] ?? [];

      if (historicalPrices) {
        if (!historicalPrices.includes(currentPrice)) {
          chrome.storage.local.set({
            [adKey]: [...historicalPrices, currentPrice],
          });
        }
        historicalPrices.forEach((price) => {
          const pastPrice = document.createElement("div");
          pastPrice.setAttribute("style", "font-size: 20px; color: #16974a");
          pastPrice.append(price);
          priceElement.appendChild(pastPrice);
        });
      }
    });
  }
}, 1500);
