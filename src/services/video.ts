export const getVideos = async (apiKey: string, channelId: string, maxResults: number): Promise<any> => {
  const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`);
  const listVideos = await res.json();
  return listVideos;
};
