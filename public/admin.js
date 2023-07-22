async function updateBookTitle(id, newTitle) {
    try {
        const response = await fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, title: newTitle })
        });

        const updatedBook = await response.json();
        console.log(The Legends of Arathrae.title); // Display the updated book's title
    } catch (error) {
        console.error('Error updating book title:', error.message);
    }
}

updateBookTitle(3, 'The Legends of Arathrae');
