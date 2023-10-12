import { useState, useEffect } from 'react';

const usePhotoLoader = (id?: number |  null) => {
  const [photo, setPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    const photos = import.meta.glob('/src/assets/photos/facility_primary/*.jpg');

    const loadPhoto = async (path: string) => {
      const module: any = photos[path] ? await photos[path]() : null;
      if (module) {
        setPhoto(module.default);
      } else {
        setPhoto(`/src/assets/photos/facility_primary/default.jpg`);
      }
    }

    loadPhoto(`/src/assets/photos/facility_primary/facility_${id}.jpg`);

  }, [id])

  return photo;
}

export default usePhotoLoader;
