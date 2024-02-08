# UV Index Data Fetcher

This project is a simple web application that allows users to fetch UV index data based on latitude and longitude coordinates. It utilizes the OpenUV API to retrieve UV index information for a given location.

## Features

- Input fields for latitude and longitude coordinates
- Fetch button to retrieve UV index data
- Display of UV index, maximum UV index, maximum UV time, ozone level, and ozone time
- Validation for latitude and longitude inputs
- Display of error messages for invalid inputs or failed API requests

## Technologies Used

- HTML5
- CSS3 (Bootstrap 5.3)
- JavaScript (ES6)

## Usage

To use this application, follow these steps:

1. Ensure you have an internet connection.
2. Open the `index.html` file in a web browser.
3. Enter the latitude and longitude coordinates for the desired location.
4. Click the "Fetch UV Data" button.
5. View the retrieved UV index data displayed on the page.

## API Integration

This project integrates with the OpenUV API to fetch UV index data. The API key used for authentication is included in the JavaScript code (`script.js`). Replace the placeholder API key with your own key if necessary.

## Acknowledgements

- Bootstrap (https://getbootstrap.com/) for CSS framework.
- OpenUV API (https://www.openuv.io/) for UV index data.

## License

This project is licensed under the [MIT License](LICENSE).