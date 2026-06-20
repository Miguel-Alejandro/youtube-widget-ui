import { Component, h, Prop, State } from '@stencil/core';
import { Profile } from '../../classes/profile-info.class';
import { ProfileService } from '../../services/profile-data';

@Component({
  tag: 'ywui-profile-info',
  styleUrl: 'y-profile.css',
  shadow: false,
})
export class YwuiProfile {

  constructor() {
    this.getProfileInfo();
  }

  @State() profileData: Profile;

  @Prop({ mutable: true }) apiKey: string;
  @Prop({ mutable: true, reflect: true }) channelId: string;
  @Prop({ mutable: true, reflect: true }) showDescription: boolean;

  private getProfileInfo = async (): Promise<void> => {
    this.profileData = await ProfileService.profileData(this.apiKey, this.channelId);
  };

  render() {
    return [
      <div class="y-profile">
        <div class="y-profile__image">
          <img class="y-profile__image__img" src={this.profileData?.items[0]?.snippet?.thumbnails?.default?.url} alt="" />
        </div>

        <div class="y-profile__info">
          <h1>
            <ion-icon class="icon--red" name="logo-youtube"></ion-icon>
            {this.profileData?.items[0]?.snippet?.title}
          </h1>
          <span> {this.profileData?.items[0]?.snippet?.customUrl ?? ''} </span>
          {
            this.showDescription && 
            <p>{this.profileData?.items[0]?.snippet?.description}</p>
          }
        </div>
      </div>,
    ];
  }
}
