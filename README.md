# Spacestagram 

### Challenge
Build a web application that uses one of NASA’s image APIs to fetch and display images and allow the user to “like” and “unlike” their favourite images.

### Description
The Spacestagram web application is built using HTML, CSS, Javascript, and ReactJS. See below for the dependencies. The website displays 25 images from NASA’s Astronomy Photo of the Day (APOD) API (24 days ago to today). The user can “like” and “unlike” images by clicking on the heart button. Users can share a particular image and its descriptive data (title, date, description) by clicking the Share button and copying the link provided. The user can also view a full (un-cropped) version of the image and its descriptive data by clicking on the image.

**[Click here to view the hosted project.](https://hopeful-poitras-f3fe16.netlify.app/)** 👽🪐

### Requirements
- Fetch data from one of NASA’s API’s and display resulting images 
- Display descriptive data for each image (title, date, description)
- Like image
- Unlike image

### Additional Features Implemented
- Display loading spinner while waiting for API to return data
- Create shareable links for each image and its descriptive data

### Future Improvements
- Pagination
    - The landing page only displays 25 images.
- Date picker
    - If the user would like to view the Photo of the Day from more than 25 days ago, they can visit `https://hopeful-poitras-f3fe16.netlify.app/{YYYY-MM-DD}`. (e.g. https://hopeful-poitras-f3fe16.netlify.app/1997-11-26) 
- Custom error page
    - Such as a Not Found page for dates that are too old or future dates

## How to Set Up

### Prerequisites

1. Download and install Node.js and npm (LTS): https://nodejs.org/en/
2. Install Git
3. Generate a NASA API key: https://api.nasa.gov/

### Steps

1. `git clone https://github.com/suzanne-lee/spacestagram.git`
1. `cd spacestagram`
1. `npm install`
1. `cp .env.sample .env`
1. `vi .env`
1. Replace `PASTE_API_KEY_HERE` with your NASA API key
1. Save and exit 
1. `npm run start`
1. Your browser should open [http://localhost:3000](http://localhost:3000) 🥳🎉
