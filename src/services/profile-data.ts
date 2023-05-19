import { Profile } from "../classes/profile-info.class";
import { profileBuilderClass } from "./builder-pattern";


export const profileData = async ( youtubeKey: string ): Promise<Profile> => {
    const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2CcontentDetails&id=UChCB2gUQEe74105Nwludm-w&key=${youtubeKey}`)
    const resInJson = await res.json();

    const profileInfo = profileBuilderClass(resInJson);
    return profileInfo;
}