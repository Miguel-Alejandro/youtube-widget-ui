import { Component, h, Prop, State } from '@stencil/core';
import { Profile } from '../../interfaces/profile-info.interface';
import { profileData } from '../../services/profile-data';

@Component({
  tag: 'y-profile-info',
  styleUrl: 'y-profile.css',
  shadow: false,
})
export class YProfile {

  constructor() {
    this.getProfileInfo();
  }

  @State() profileData: Profile;
  @Prop({ mutable: true }) apiKey: string;
  @Prop({ mutable: true, reflect: true }) customDescription: boolean;
  @Prop({ mutable: true, reflect: true }) channelDescription: string;
  @Prop({ mutable: true, reflect: true }) channelImage: string;

  private getProfileInfo = async (): Promise<void> => {
    this.profileData = await profileData(this.apiKey);
    console.log('PRINT INFO', this.profileData.items[0].snippet.thumbnails.default.url);
  };

  render() {
    return [
      <div class="y-profile">
        <div class="y-profile__image">
          <img class="y-profile__image__img" src={this.channelImage} alt="" />
        </div>

        <div class="y-profile__info">
          <h1>
            <ion-icon class="icon--red" name="logo-youtube"></ion-icon>
            {this.profileData?.items[0]?.snippet?.title}
          </h1>
          <span> {this.profileData?.items[0]?.snippet?.customUrl ?? ''} </span>
          <p> {this.customDescription ? this.profileData?.items[0]?.snippet?.description : this.channelDescription} </p>
        </div>
      </div>,
    ];
  }
}
