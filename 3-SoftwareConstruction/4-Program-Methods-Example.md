```node.js
async function createProject(name, description) {
    // Check if the name argument is more than 100 characters, return -1
    if (name.length > 100) {
        return -1;
    }

    // Check if the description argument is more than 1000 characters, return -2
    if (description.length > 1000) {
        return -2;
    }

    try {
        // Assuming you have a Sequelize model named Project and a projectRepository object
        const project = await Project.create({
            user: this, // Assuming 'this' refers to the current user
            name: name,
            description: description,
        });

        // The project has been successfully saved to the database
        return 1;
    } catch (error) {
        // Handle any errors that occur during the database save operation
        console.error('Error creating project:', error);
        return -3; // You can choose an appropriate error code
    }
}

