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

    const photos = import.meta.glob("/src/assets/photos/facility_primary/*.jpg");

    const loadPhoto = async (path: string) => {
      let photoModule: ImageModule | null = null;

      if (photos[path]) {
        photoModule = (await photos[path]()) as ImageModule;
      }

      if (!photoModule) {
        photoModule = (await photos["/src/assets/photos/facility_primary/facility_0.jpg"]()) as ImageModule;
      }

      setPhoto(photoModule.default);
    };

    loadPhoto(`/src/assets/photos/facility_primary/facility_${id}.jpg`);
  }, [id]);

  return photo;
};

export default usePhotoLoader;
