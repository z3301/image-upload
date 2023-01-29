async function postImage() {
    const file = document.getElementById('imgPost').files[0];

    if (!file) {
        alert('Please select a file');
        return;
    }


    // API endpoint
    const endpoint = new URL(`http://localhost:3000/upload`);
    // endpoint.append('foo', '42'); // add query parameters if needed


    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(endpoint, {
        headers: { 
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: formData
    });

    if (response.status === 200) {
        alert('Image uploaded successfully');
    } else {
        alert('Image upload failed');
    }

    const data = await response.json();
    console.log(data);
    // console.log(endpoint); // get the URL without query parameters
    // console.log(endpoint.toString()); // get the full URL
}