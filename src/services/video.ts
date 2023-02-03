export const getVideos = async (apiKey, channelId ): Promise<any> => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`);
    const listVideos = await res.json();
    return listVideos
}