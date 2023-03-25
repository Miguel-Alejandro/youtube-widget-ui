import { Search } from "../classes/search.class";
import { searchBuilderClass } from "./builder-pattern";

export const getSearch = async ( apikey: string, channelId: string, q: string ): Promise<Search> => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apikey}&channelId=${channelId}&part=snippet&q=${q}`);
    const searchResult = await res.json();

    const search = searchBuilderClass( searchResult )
    return search;
}