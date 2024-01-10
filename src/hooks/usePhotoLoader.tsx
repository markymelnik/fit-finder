import { useState, useEffect } from 'react';

type ImageModule = {
  default: string;
};

const usePhotoLoader = (id?: number | null) => {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const photos = import.meta.glob("/src/assets/photos/facility_primary/*.webp");

    const loadPhoto = async (path: string) => {
      try {
        let photoModule: ImageModule | null = null;

        if (photos[path]) {
          photoModule = (await photos[path]()) as ImageModule;
        }
  
        if (!photoModule) {
          photoModule = (await photos["/src/assets/photos/facility_primary/facility_0.webp"]()) as ImageModule;
        }
        
        setPhoto(photoModule.default);

      } catch (err) {
        console.error('Error loading photos')
      }
    };

    loadPhoto(`/src/assets/photos/facility_primary/facility_${id}.webp`);
  }, [id]);

  return photo;
};

export default usePhotoLoader;
