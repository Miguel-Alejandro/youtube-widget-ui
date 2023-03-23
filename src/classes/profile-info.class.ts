export class Profile {
  etag: string;
  items: ProfileItem;
  kind: string;
  pageInfo: any;
}

export class ProfileItem {
  contentDetails: any;
  etag: string;
  id: string;
  kind: string;
  snippet: ProfileSnippet;
}

export class ProfileSnippet {
  customUrl: string;
  description: string;
  localized: ProfileLocalized;
  publishedAt: string;
  thumbnails: any;
  title: string
}

export class ProfileLocalized {
  description: string;
  title: string;
}
