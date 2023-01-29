async function postImage() {

    // get the file from the input element
    const file = document.getElementsByName('image')[0].files[0];
    
    // check if the file is selected
    if (!file) {
        alert('Please select a file');
        return;
    }

    // API endpoint
    const endpoint = new URL(`http://localhost:3000/upload`);
    // endpoint.append('foo', '42'); // add query parameters if needed

    // create a FormData object
    const formData = new FormData();
    formData.append('image', file) //('image', file);
    const response = await fetch(endpoint, {
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