import { Component, h, Prop } from '@stencil/core';
import { getVideos } from '../../services/video';
import moment from 'moment';

@Component({
  tag: 'y-video-list',
  styleUrl: 'y-videos.css',
  shadow: false,
})
export class YVideos {
  @Prop({ mutable: true, reflect: true }) apiKey: string;
  @Prop({ mutable: true, reflect: true }) channelId: string;

  constructor() {
    this.renderElement();
  }

  private fotmatDate(date: string): string {
    let newDate = moment(date).startOf('day').fromNow();
    return newDate;
  }

  private async renderElement() {
    const videoData = await getVideos(this.apiKey, this.channelId, 20);

    const videoContainer = document.getElementsByClassName('container');
    let videoCardContent: string = '';

    videoData.items.map(video => {
      const formattedDate = this.fotmatDate(video.snippet.publishedAt);

      videoCardContent += `
      <div class="y-video-list">

        <div class="y-video-list__image">
          <img src="${video.snippet.thumbnails.high.url}" />
        </div>

        <div class="y-video-list__content">
          <h1> ${video.snippet.title} </h1>

          <div class="y-video-list__content__info">
            <h2>${video.snippet.channelTitle}</h2>
            <p>${formattedDate}</p>
          </div>

          <div class="y-video-list__content__actions">
              <a 
                target='_blank'
                href='https://www.youtube.com/watch?v=${video.id.videoId}'>
                  Ver video
              </a>
          </div>
        </div>
      </div>
      `;
    });

    videoContainer[0].innerHTML = videoCardContent;
  }

  render() {
    return [<div class="container"></div>];
  }
}
