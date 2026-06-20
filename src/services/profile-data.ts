import { profileBuilderClass } from "./builder-pattern";

export class ProfileService{

    public static async profileData( youtubeKey: string, chanelId: string ) {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=id%2Csnippet%2CcontentDetails&id=${chanelId}&key=${youtubeKey}`)
        const resInJson = await res.json();

        const profileInfo = profileBuilderClass(resInJson);
        return profileInfo;
    }
}