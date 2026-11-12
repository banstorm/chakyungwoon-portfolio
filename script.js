const desktop = window.matchMedia("(min-width: 48rem) and (any-pointer: fine)");
const preview = document.getElementById("pdf-preview");
const pdfFrame = document.getElementById("pdf-frame");

function updatePreview() {
  if (desktop.matches && navigator.pdfViewerEnabled !== false) {
    if (!preview.firstElementChild) {
      preview.append(pdfFrame.content.cloneNode(true));
    }
    return;
  }

  preview.replaceChildren();
}

desktop.addEventListener("change", updatePreview);
updatePreview();
