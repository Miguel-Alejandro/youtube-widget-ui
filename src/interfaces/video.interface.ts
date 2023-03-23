export class Video {
        etag: string;
        items: VideoList;
        kind: string;
        pageInfo: VideoListPageInfo;
        regionCode: string;

}

export  class VideoList {
    etag: string;
    id: VideoListId;
    kind: string;
    snippet: VideoListSnippet;
}

export class VideoListId {
    kind: string;
    videoId: string;
}

export class VideoListSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: VideoListThumbnails;
    title: string;
}

export class VideoListThumbnails {
    default: VideoListThumbnailsData;
    high: VideoListThumbnailsData;
    medium: VideoListThumbnailsData;
}

export class VideoListThumbnailsData {
    height?: number;
    url: string;
    width?: number;
}

export class VideoListPageInfo {
    resultsPerPage: number;
    totalResults: number;
}