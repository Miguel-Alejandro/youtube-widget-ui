import { ApiError } from '../classes/ApiError';
import { Profile } from '../classes/Profile';
import { setError } from '../utils/utils';
import { profileBuilderClass } from './builder-pattern';

export class ProfileService {
  private static readonly BASE_URL = 'https://youtube.googleapis.com/youtube/v3';

  public static async profileData(
    youtubeKey: string,
    channelId: string
  ): Promise<Profile> {
    const url = `${this.BASE_URL}/channels?part=id%2Csnippet%2CcontentDetails&id=${channelId}&key=${youtubeKey}`;

    try {
        const res = await fetch(url);
        if (!res.ok) setError(res.status, url);

        const data = await res.json();
        return profileBuilderClass(data); 
    } catch (error) {
        throw ApiError.serverError(url);
    }
  }
}
