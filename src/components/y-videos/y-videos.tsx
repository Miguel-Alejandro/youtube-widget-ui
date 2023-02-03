import { Component, h, Prop } from '@stencil/core';
import { getVideos } from '../../services/video';

@Component({
  tag: 'y-video-list',
  styleUrl: 'y-videos.css',
  shadow: false,
})
export class YVideos {
  @Prop({mutable: true, reflect: true}) apiKey: string;
  @Prop({mutable: true, reflect: true}) channelId: string;

  constructor() {
    this.renderElement();
  }

  private async renderElement() {
    const videoData = await getVideos( this.apiKey, this.channelId );
    const videoContainer = document.getElementsByClassName('container');

    let videoCardContent: string = '';

    videoData.items.map( video => {
      console.log('VIDEO DATA',video);
      videoCardContent += `
      <div class="y-video-list">

        <div class="y-video-list__image">
          <img src="https://miro.medium.com/max/1400/1*8bPiDNL1K1ZdK9O_T5IVKw.png" />
        </div>

        <div class="y-video-list__content">
          <h1> ${video.snippet.title} </h1>

          <div class="y-video-list__content__info">
            <h2>${video.snippet.channelTitle}</h2>
            <p>${video.snippet.publishedAt}</p>
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
    })

    videoContainer[0].innerHTML = videoCardContent;

  }

  render() {
    return [
      <div class="container"></div>
    ]
  }

}
