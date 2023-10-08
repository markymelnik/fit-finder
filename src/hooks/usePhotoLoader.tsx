import { useState, useEffect } from 'react';

type LoadPhotosType = { [id: number]: string };

const usePhotoLoader = (id: number) => {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const photos = import.meta.glob('/src/assets/photos/facility_primary/*.jpg');
    const loadPhotos: LoadPhotosType = {};

    const loadPhoto = async (path: string) => {
      if (photos[path]) {
        const module: any = await photos[path]();
        loadPhotos[id] = module.default;
        setPhoto(module.default);
      } else {
        setPhoto(`/src/assets/photos/facility_primary/default.jpg`)
      }
      
    }

    loadPhoto(`/src/assets/photos/facility_primary/facility_${id}.jpg`);

  }, [id])

  return photo;
}

export default usePhotoLoader;
