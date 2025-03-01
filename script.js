function downloadMedia() {
    let url = document.getElementById("urlInput").value;

    if (url.trim() === "") {
        document.getElementById("message").innerText = "Please enter a valid URL.";
        return;
    }

    fetch("/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.download_link;
        } else {
            document.getElementById("message").innerText = "Download failed.";
        }
    });
}
