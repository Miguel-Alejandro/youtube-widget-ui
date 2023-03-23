import { Builder } from "builder-pattern";
import { Profile, ProfileItem } from "../classes/profile-info.class";
import { Video, VideoList } from "../classes/video.class";
import { Item, Search, Snippet, Thumbnails } from "../classes/search.class";

export const profileBuilderClass = (res:any): Profile => {
    return Builder(Profile)
    .etag(res.etag)
    .items(
      res.items.map( resItem => 
        Builder(ProfileItem)
        .contentDetails(resItem.contentDetails)
        .etag(resItem.etag)
        .id(resItem.id)
        .kind(resItem.kind)
        .snippet(resItem.snippet)
        .build()
      )
    )
    .kind(res.kind)
    .pageInfo(res.pageInfo)
    .build();
}


export const videoBuilderClass = (res:any): Video => {
  return Builder(Video)
    .etag(res.etag)
    .items(
      res.items.map( (resItem: any) => 
        Builder(VideoList)
        .etag(resItem.etag)
        .id(resItem.id)
        .kind(resItem.kind)
        .snippet(resItem.snippet)
        .build(),
      )
    )
    .kind(res.kind)
    .pageInfo(res.pageInfo)
    .regionCode(res.regionCode)
    .build();
}

export const searchBuilderClass = (res:any): Search =>  {
  console.log('RES PARAM', res)
 return Builder(Search)
  .etag(res.etag)
  .items(
      res.items.map( (resItem: any) => 
        Builder(Item)
        .etag(resItem.etag)
        .id(resItem.id)
        .kind(resItem.kind)
        .snippet(
            Builder(Snippet)
            .channelId(resItem.snippet.channelId)
            .channelTitle(resItem.snippet.channelTitle)
            .description(resItem.snippet.description)
            .liveBroadcastContent(resItem.snippet.liveBroadcastContent)
            .publishTime(resItem.snippet.publishTime)
            .publishedAt(resItem.snippet.publishedAt)
            .thumbnails(
              Builder(Thumbnails)
              .default(resItem.snippet.thumbnails.default)
              .high(resItem.snippet.thumbnails.high)
              .medium(resItem.snippet.thumbnails.medium)
              .build()
            )
            .title(resItem.snippet.title)
            .build()
        )

        
        .build()
      )
    )
  .kind(res.kind)
  .pageInfo(res.pageInfo)
  .regionCode(res.regionCode)
  .build();
}