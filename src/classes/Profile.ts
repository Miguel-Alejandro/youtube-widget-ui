export class Profile {
  etag: string;
  items: Array<ProfileItem>;
  kind: string;
  pageInfo: ProfilePageInfo;
}

export class ProfilePageInfo{
  resultsPerPage: number;
  totalResults: number;
}

export class ProfileContentDetails {
  relatedPlaylists: ProfileRelatedPlaylists;
}

export class ProfileRelatedPlaylists {
  likes:string;
  uploads: string;
}


export class ProfileItem {
  contentDetails: ProfileContentDetails;
  etag: string;
  id: string;
  kind: string;
  snippet: ProfileSnippet;
}

export class ProfileThumbnails {
  default: ThumbnailsProps
  medium: ThumbnailsProps
  high: ThumbnailsProps
}

export class ThumbnailsProps {
  url: string
  width: number
  height: number
}

export class ProfileSnippet {
  customUrl: string;
  description: string;
  localized: ProfileLocalized;
  publishedAt: string;
  thumbnails: ProfileThumbnails;
  title: string
}

export class ProfileLocalized {
  description: string;
  title: string;
}
