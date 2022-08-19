# Read me
The application contains bundled backend and frontend application.  
Node is bundled via gradle plugin and npm build is triggered as a gradle task.

## Usage
* To use the aplication start it with: `gradle bootRun`  
* To rebuild only the frontend and show the change in the browser while the backend is running trigger the task: `gradle processResources` which rebuilds the frontend and copies the output to the static resources of the backend.  
* Refresh the browser and watch out for browser cache; check network tab in developer tools  and select “Disable cache” option.