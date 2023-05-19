import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';
import { getSearch } from '../../services/search';
import { Search } from '../../classes/search.class';

@Component({
  tag: 'y-search',
  styleUrl: 'y-search.css',
  shadow: false,
})
export class YSearch {
  @Prop({ mutable: true }) apiKey: string;
  @Prop({ mutable: true }) channelId: string;

  @State() toSearch: string;
  @Event() searchResult: EventEmitter<Search>;

  constructor() {}

  async valueOfSearch(event: Event): Promise<void> {
    this.toSearch = (event.target as HTMLInputElement).value;

    if (this.toSearch != '') {
      const result = await getSearch(this.apiKey, this.channelId, this.toSearch);
      this.searchResult.emit(result);
    }
  }

  render() {
    return [
      <div class="search">
        <div class="search__input">
          <ion-icon name="search-outline"></ion-icon>
          <input class="input" onInput={this.valueOfSearch.bind(this)} placeholder="Buscar video" />
        </div>
      </div>,
    ];
  }
}
