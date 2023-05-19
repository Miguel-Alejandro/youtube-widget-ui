
# Youtube Widget Ui

library to add videos, profile information or search for videos from your youtube channel, add any of these lightweight and powerful components to your web project. This library uses the youtube api v3


## 🚀 Features

- Component y-profile-info to display the information of your youtube channel
- Component y-video-list, to list the videos of your youtube channel
- y-search component, search for videos from your youtube channel


## 🖥️ Installation

This library can be used either in pure javascript or some framework like angular, react or vue. So next we will see how to install it.

### 🔴 Angular
If you are using or working with a javascript project with node.js to install this library follow the steps below

#### Installing

```bash
  npm install --save youtube-widget-ui
```

#### Using
In the app.module.ts we add the CUSTOM_ELEMENTS_SCHEMA
```javascript
schemas: [CUSTOM_ELEMENTS_SCHEMA]
```

The next thing to do is import the
defineCustomElements of the component itself
```javascript
import { defineCustomElements } from 'youtube-widget-ui/loader';
```

And then we add it
```javascript
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  defineCustomElements(window);
```

In future updates, the documentation to install in react and vue will be added


## 🧱 Knowing the components
Next we will know the components for what they are used and how to use each one of them

## y-profile-info
This component is for you to place your channel information like the name, your nickname and the description of your channel.

Next we will see the inputs that this component has

### Properties

| Property             | Attribute             | Description | Type      | Default     |
| -------------------- | --------------------- | ----------- | --------- | ----------- |
| `apiKey`             | `api-key`             |      youtube api key       | `string`  | `undefined` |
| `channelDescription` | `channel-description` |       add a different description to the one that comes by default      | `string`  | `undefined` |
| `channelImage`       | `channel-image`       |      url of the image of your channel       | `string`  | `undefined` |
| `customDescription`  | `custom-description`  |    in true to activate the channel-description and in false to bring the description by default         | `boolean` | `undefined` |

NOTE all these attributes have to contain a value, otherwise the component will not work correctly


## y-video-list
With this component you can show your first 50 videos, selecting a video will redirect you to the video on YouTube

### Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `apiKey`    | `api-key`    | youtube api-key            | `string` | `undefined` |
| `channelId` | `channel-id` | channel id     | `string` | `undefined` |

In the same way as the previous component, for the component to work correctly it is necessary to give a value to all its attributes


## y-search
With this component search for any video from your youtube channel


### Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `apiKey`    | `api-key`    |    youtube api-key         | `string` | `undefined` |
| `channelId` | `channel-id` |     channel id        | `string` | `undefined` |


## Events

| Event          | Description | Type                  |
| -------------- | ----------- | --------------------- |
| `searchResult` |       emits an event that returns the search result      | `CustomEvent<Search>` |


Next I show you how you can access this event and obtain the result.

In order to access the result of the event, they are handled like any other event in Angular, as can be seen in the following example.
```html
<y-search
  (searchResult)="search($event)"
  api-key="your api-key"
  channel-id="your channel id"
></y-search>

```


## This is not the end of the library, we will add more components and improve little by little. ENJOY THE LIBRARY!!! 🥳
