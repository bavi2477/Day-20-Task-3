function fetchUVData(latitude, longitude) {
  return new Promise((resolve, reject) => {
    const apiKey = 'openuv-fsrlsahqg4c-io'; 
    const apiUrl = `https://api.openuv.io/api/v1/uv?lat=${latitude}&lng=${longitude}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'x-access-token': apiKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      resolve(data);
    })
    .catch(error => {
      reject(error);
    });
  });
}


function displayUVData(uvData) {
  const uvDataContainer = document.getElementById('uv-data');

  const convertUTCToIST = (utcTime) => {
    const date = new Date(utcTime);
    const istOffset = 5.5 * 60 * 60 * 1000; 
    const istTime = new Date(date.getTime() + istOffset);
    return istTime.toLocaleString();
  };

  uvDataContainer.innerHTML = `
    <p>UV Index: ${uvData.result.uv}</p>
    <p>Maximum UV Index: ${uvData.result.uv_max} </p>
    <p>Date and Maximum UV Time: ${convertUTCToIST(uvData.result.uv_max_time)}</p>
    <p>Ozone Level: ${uvData.result.ozone}</p>
    <p>Date and Ozone Time: ${convertUTCToIST(uvData.result.ozone_time)}</p>
  `;
}

function validateInput(latitude, longitude) {
  let errorMessage = '';

  if (latitude < -90 || latitude > 90) {
    errorMessage += 'Latitude must be between -90 and 90.\n';
  }
  
  if (longitude < -180 || longitude > 180) {
    errorMessage += 'Longitude must be between -180 and 180.\n';
  }

  if (errorMessage !== '') {
    throw new Error(errorMessage);
  }
}


document.getElementById('fetchUVDataBtn').addEventListener('click', () => {
  const latitude = parseFloat(document.getElementById('latitude').value);
  const longitude = parseFloat(document.getElementById('longitude').value);

  try {
    validateInput(latitude, longitude);
    fetchUVData(latitude, longitude)
      .then(uvData => {
        displayUVData(uvData);
      })
      .catch(error => {
        console.error('Error fetching UV data:', error);
      });
  } catch (error) {
    alert(error.message);
  }
});