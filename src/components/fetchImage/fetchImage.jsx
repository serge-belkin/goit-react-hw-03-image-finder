export const fetchImage = (search, page, signal) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=31325871-0cde844d39520f6c11f9b55e1&q&image_type=photo&orientation=horizontal&per_page=12`,
    { signal }
  );
};

export const API = { fetchImage, };
