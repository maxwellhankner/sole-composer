export const uploadImage = async (file, newImage) => {
  const formData = new FormData();
  if (newImage) {
    formData.append('image', file, 'newImage');
  } else {
    formData.append('image', file);
  }

  return fetch('/api/assets/uploadimage', {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};
