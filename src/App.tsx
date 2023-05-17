import React from 'react';
import './App.css';
import './styles.css';
import ImageCarousel, { ImageData } from './components/ImageCarousel';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';
import image10 from './assets/image10.jpg';



function App() {
  const images: ImageData[] = [
    {
      src: image1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat sagittis est, nec dapibus felis tempus vitae. Curabitur nec porta lacus. Nunc id gravida justo.',
    },
    {
      src: image2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat sagittis est, nec dapibus felis tempus vitae. Curabitur nec porta lacus. Nunc id gravida justo.cnsbuveibfioh98fheioiohdcjdjsknsknsknklnaskcbk',
    },
    {
      src: image3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce ',
    },
    {
      src: image4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
    },
    {
      src: image5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.klcnihcofoewpfjewpofjpw9uf09napuuc09',
    },
    {
      src: image6,
      description: 'kjjvjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.',
    },
    {
      src: image7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat sagittis est, nec dapibus felis tempus vitae. Curabitur nec porta lacus. Nunc id gravida justo.cnsbuveibfioh98fheioiohd',
    },
    {
      src: image8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.ckndhcisnacaojcacj98t89ehr30f-0u09c6846+5',
    },
    {
      src: image9,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat sagittis est, nec dapibus felis tempus vitae. Curabitur nec porta lacus. Nunc id gravida justo.cnsbuveibfioh98fheioiohd',
    },
    {
      src: image10,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.ckdkckkd',
    },
    // Add more images and descriptions as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welocome to Fotoley</h1>
      </header>
      <ImageCarousel images={images} />
    </div>
  );
}

export default App;
