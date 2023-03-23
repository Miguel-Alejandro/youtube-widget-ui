export class Search {
    kind: string;
    etag: string;
    regionCode: string;
    pageInfo: PageInfo;
    items: Item[];
  }
  
  export class PageInfo {
    totalResults: number;
    resultsPerPage: number;
  }
  
  export class Item {
    kind: string;
    etag: string;
    id: Id;
    snippet: Snippet;
  }
  
  export class Id {
    kind: string;
    channelId?: string;
    videoId?: string;
  }
  
  export class Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
  
  export class Thumbnails {
    default: Default;
    medium: Medium;
    high: High;
  }
  
  export class Default {
    url: string;
    width?: number;
    height?: number;
  }
  
  export class Medium {
    url: string;
    width?: number;
    height?: number;
  }
  
  export class High {
    url: string;
    width?: number;
    height?: number;
  }
  