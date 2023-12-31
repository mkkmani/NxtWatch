#Nxt Watch

##Credentials for login the preview
```text
   username: rahul
   password: rahul@2021

  ```




### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Info

<details>
<summary>Functionalities added</summary>
<br/>

The app have the following functionalities

- Initially, the app is in **light** theme

- **Login Route**

  - When a invalid username and password are provided and the Login button is clicked, then the respective error message received from the response will be displayed
  - When a valid username and password are provided and the Login button is clicked, then the page should be navigated to the **Home** route
  - When an _unauthenticated_ user, tries to access the `HomeRoute`, `TrendingRoute`, `GamingRoute`, `SavedVideosRoute`, `VideoDetailsRoute`, then the page will be navigated to **Login** route
  - When an _authenticated_ user, tries to access the `HomeRoute`, `TrendingRoute`, `GamingRoute`, `SavedVideosRoute`, `VideoDetailsRoute`, then the page will be navigated to the respective route
  - When an authenticated user tries to access the `LoginRoute`, then the page will be navigated to the **Home** route
  - When show password checkbox is checked, then the password will be shown
  - When show password checkbox is unchecked, then the password will be masked

- **Home Route**

  - When an authenticated user opens the **Home** Route,
    - An HTTP GET request will be made to **homeVideosApiUrl** with query parameter as `search` and its initial value as empty string
      - **_Loader_** should be displayed while the HTTP request is fetching the data
      - After the data is fetched successfully, it displays the list of videos received in the response
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-failure-light-theme-lg-output.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to **homeVideosApiUrl**
    - When a non-empty value is provided in the Search Input and button with search icon is clicked
      - Makes an HTTP GET request to the **homeVideosApiUrl** with `jwt_token` in the Cookies and query parameter `search` with value as the text provided in the Search Input
      - **_Loader_** will be displayed while the HTTP request is fetching the data
      - After the data is fetched successfully, displays the list of videos received in the response
    - When the HTTP GET request made to the **homeVideosApiUrl** returns an empty list for videos then [No Videos View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-home-no-videos-light-theme-lg-output.png) will be displayed
  - When the **website logo** image is clicked, the page will be navigated to the **Home** route
  - When a **Video** is clicked, the page will be navigated to the **Video Item Details** route
  - Clicks on the **Trending** link in the Sidebar is clicked, then the page will be navigated to the **Trending** route
  - Clicks on the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the **Gaming** route
  - Clicks on the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the **SavedVideos** route

- **Trending Route**

  - When an authenticated user opens the **Trending** Route,
    - An HTTP GET request will be made to **trendingVideosApiUrl**
      - **_Loader_** will be displayed while the HTTP request is fetching the data
      - After the data is fetched successfully, display the list of videos received in the response
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-trending-failure-light-theme-lg-output.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to **trendingVideosApiUrl**
  - When the **website logo** image is clicked, the page will be navigated to the **Home** route
  - When a **Video** is clicked, the page will be navigated to the **Video Item Details** route
  - Clicks on the **Home** link in the Sidebar is clicked, then the page will be navigated to the **Home** route
  - Clicks on the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the **Gaming** route
  - Clicks on the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the **SavedVideos** route

- **Gaming Route**

  - When an authenticated user opens the **Gaming** Route,
    - An HTTP GET request will be made to **gamingVideosApiUrl**
      - **_Loader_** will be displayed while the HTTP request is fetching the data
      - After the data is fetched successfully, displays the list of videos received in the response
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-gaming-failure-light-theme-lg-output.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to **gamingVideosApiUrl**
  - When the **website logo** image is clicked, the page will be navigated to the **Home** route
  - When a **Video** is clicked, the page will be navigated to the **Video Item Details** route
  - Clicks on the **Home** link in the Sidebar is clicked, then the page will be navigated to the **Home** route
  - Clicks on the **Trending** link in the Sidebar is clicked, then the page will be navigated to the **Trending** route
  - Clicks on the **Saved Videos** link in the Sidebar is clicked, then the page will be navigated to the **SavedVideos** route

- **Video Item Details Route**

  - When an authenticated user opens the **Video Item Details** route
    - An HTTP GET request will be made to **videoItemDetailsApiUrl** with `jwt_token` in the Cookies and `video_id` as path parameter
      - **_loader_** will be displayed while the HTTP request is fetching the data
      - After the HTTP request is successful, the response received will be displayed
      - If the HTTP GET request made is unsuccessful, then the [Failure view](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-video-item-details-failure-light-theme-lg-output.png) will be displayed
        - When the **Retry** button is clicked, an HTTP GET request will be made to **videoItemDetailsApiUrl**
  - Corresponding video will be displayed using `react-player` package
  - Initially, all the three buttons (Like, Dislike, Save) will be inactive
  - When the **Like** button is clicked,
    - It will change to an active state
    - If the **Dislike** button is already in the active state, then the **Dislike** button needs to be changed to the inactive state
  - When the **Dislike** button is clicked,

    - It will change to an active state
    - If the **Like** button is already in the active state, then the **Like** button needs to be changed to the inactive state

  - When the **Save** button is clicked
    - The button will change to an active state and the respective video details should be added to the list of saved videos
    - **Save** button text will be changed to **Saved**
  - When the **Saved** button is clicked
    - The button will change to an inactive state and the respective video details will be removed from the list of saved videos
    - **Saved** button text will be changed to **Save**

- **SavedVideos Route**

  - When an authenticated user opens the **SavedVideos** Route,
    - If the list of saved videos is empty, then [No Saved Videos Found View](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-no-saved-videos-light-theme-lg-output.png) will be displayed
    - The **Videos** in the list of saved videos will be displayed as a list of videos
  - When the **website logo** image is clicked, the page will be navigated to the **Home** route
  - When a **Video** is clicked, then the page will be navigated to the **Video Item Details** route
  - Clicks on the **Home** link in the Sidebar is clicked, then the page will be navigated to the **Home** route
  - Clicks on the **Trending** link in the Sidebar, then the page will be navigated to the **Trending** route
  - Clicks on the **Gaming** link in the Sidebar is clicked, then the page will be navigated to the **Gaming** route

- **Not Found Route**

  - When a random path is provided in the URL then the page will navigates to the **Not Found** route

- When the **theme** button in the header is clicked, then the theme will be changed accordingly

- **Logout**
  - When the **Logout** button in the header is clicked, then the [Logout Popup](https://assets.ccbp.in/frontend/content/react-js/nxt-watch-logout-popup-light-theme-lg-output.png) will be displayed
    - When **Cancel** button is clicked, then the popup will be closed and the page should not be navigated
    - When **Confirm** button is clicked, then the page will be navigated to the **Login** route

</details>

<details>
- User credentials

  ```text
   username: rahul
   password: rahul@2021

  ```
</details>
