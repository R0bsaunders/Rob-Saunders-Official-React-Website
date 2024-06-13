setTimeout(() => {

        const container = document.getElementById('background-container');
        const numImages = 5; // Number of images to display
        const imageSize = 500; // Size of the images

        // Adjust container height to match the document height
        container.style.height = `${document.body.scrollHeight}px`;

        // Calculate the number of rows and columns based on the total number of images
        const numColumns = Math.ceil(Math.sqrt(numImages));
        const numRows = Math.ceil(numImages / numColumns);

        // Calculate the width and height of each grid cell
        const cellWidth = window.innerWidth / numColumns;
        const cellHeight = document.body.scrollHeight / numRows;

        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numColumns; j++) {
                if ((i * numColumns + j) >= numImages) break; // Exit if we exceed the number of images

                const img = document.createElement('div');
                img.classList.add('background-image');

                // Random position within the cell
                const x = j * cellWidth + Math.random() * (cellWidth - imageSize);
                const y = i * cellHeight + Math.random() * (cellHeight - imageSize);

                img.style.left = `${x}px`;
                img.style.top = `${y}px`;

                container.appendChild(img);
            }
        }

}, 5)
