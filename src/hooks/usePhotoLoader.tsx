import { useState, useEffect } from 'react';

type LoadPhotosType = { [id: number]: string };

const usePhotoLoader = (id: number) => {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    const photos = import.meta.glob('/src/assets/photos/main/*.jpg');
    const loadPhotos: LoadPhotosType = {};

    const loadPhoto = async (path: string) => {
      const module: any = await photos[path]();
      loadPhotos[id] = module.default;
      setPhoto(module.default);
    }

    loadPhoto(`/src/assets/photos/main/facility_${id}.jpg`);

  }, [id])

  return photo;
}

export default usePhotoLoader;
