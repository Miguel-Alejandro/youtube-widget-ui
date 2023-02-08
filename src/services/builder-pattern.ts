import { Builder } from "builder-pattern";
import { Profile, ProfileItem } from "../interfaces/profile-info.interface";
import { Video, VideoList } from "../interfaces/video.interface";

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