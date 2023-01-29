async function postImage() {

    // tier2 API endpoint
    const tier2endpoint = new URL(`http://localhost:3000/upload`);
    // tier2endpoint.append('foo', '42'); // add query parameters if needed

    // get the file from the input element
    const file = document.getElementsByName('image')[0].files[0];
    
    // check if the file is selected
    if (!file) {
        alert('Please select a file');
        return;
    }

    // create a FormData object
    const formData = new FormData();
    formData.append('image', file) //('image', file);
    const response = await fetch(tier2endpoint, {
        method: 'POST',
        body: formData
    });

    // check the response status
    if (response.status === 200) {
        alert('Image uploaded successfully');
    } else {
        alert('Image upload failed');
    }


    // read the response as JSON
    const data = await response.json();
    console.log(data);
    // console.log(endpoint); // get the URL without query parameters
    // console.log(endpoint.toString()); // get the full URL
} 