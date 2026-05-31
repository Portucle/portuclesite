const channelId = "UCLLL3iYtgkgLpGSEw2xjAEg";

const container = document.getElementById("youtube-videos");

fetch(
`https://api.rss2json.com/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
)
.then(res => res.json())
.then(data => {

container.innerHTML = "";

data.items.slice(0,3).forEach(video => {

const videoId =
video.link.split("v=")[1];

container.innerHTML += `
<div class="video-card">
<iframe
src="https://www.youtube.com/embed/${videoId}"
allowfullscreen>
</iframe>
<h3>${video.title}</h3>
</div>
`;

});

})
.catch(() => {
container.innerHTML =
"<p>Videolar yüklenemedi.</p>";
});
