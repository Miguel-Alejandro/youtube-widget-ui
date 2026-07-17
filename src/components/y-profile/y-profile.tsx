import { Component, h, Prop, State, Watch } from '@stencil/core';
import { ApiError } from '../../classes/ApiError';
import { Profile, ProfileSnippet } from '../../classes/Profile';
import { ProfileService } from '../../services/profile-service';

@Component({
  tag: 'ywui-profile-info',
  styleUrl: 'y-profile.css',
  shadow: false,
})
export class YwuiProfile {

  @State() profileData: Profile;
  @State() error: string = '';
  @State() isLoading: boolean = true;

  @Prop({ mutable: true }) apiKey: string;
  @Prop({ mutable: true, reflect: true }) channelId: string;
  @Prop({ mutable: true, reflect: true }) showDescription: boolean;

  @Watch('apiKey')
  @Watch('channelId')
  watchComponentProps() {
    this.getProfileInfo();
  }

  componentDidLoad() {
    this.getProfileInfo();
  }

  private getProfileInfo = async (): Promise<void> => {
    if (!this.apiKey || !this.channelId) {
      this.isLoading = false;
      this.error = 'API Key and Channel ID are required.';
      return;
    }

    this.isLoading = true;
    this.error = '';

    try {
      this.profileData = await ProfileService.profileData(this.apiKey, this.channelId);
    } catch (err) {
      console.error(err instanceof ApiError ? err.toJSON() : err);
      this.error = 'Something went wrong. Please try again later';
    } finally {
      this.isLoading = false;
    }
  };

  private getChannel(): ProfileSnippet {
    if(this.profileData.items.length === 0 ) return null;
    return this.profileData?.items?.[0]?.snippet;
  }

  render() {
    if (this.isLoading) {
      return (
        <div class="profile-loading">
          <div class="profile-skeleton avatar"></div>
          <div class="profile-skeleton title"></div>
          <div class="profile-skeleton username"></div>
          <div class="profile-skeleton text"></div>
        </div>
      );
    }

    if (this.error) {
      return (
        <div class="profile-error">
          <ion-icon name="alert-circle"></ion-icon>
          <p>{this.error}</p>
        </div>
      );
    }

    return (
      <div class="profile-card">
        <div class="profile-avatar-wrapper">
          <img
            class="profile-avatar"
            src={this.getChannel()?.thumbnails?.default?.url}
            alt={this.getChannel()?.title}
          />
          <div class="profile-avatar-badge">
            <ion-icon name="play"></ion-icon>
          </div>
        </div>

        <h1 class="profile-title">
          <ion-icon name="logo-youtube"></ion-icon>
          {this.getChannel()?.title}
        </h1>

        <p class="profile-username">{this.getChannel()?.customUrl ?? ''}</p>

        {this.showDescription && this.getChannel()?.description && (
          <p class="profile-description">{this.getChannel().description}</p>
        )}
      </div>
    );
  }
}
