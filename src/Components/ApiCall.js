
import axios from "axios";

const ApiCall = async (searchQuery) => {
  console.log('searchQueryApiCallll...........',searchQuery);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const query = searchQuery ? searchQuery : 'mumbai';
  const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;

  try {
    const response = await axios.get(url);
    return response?.data?.photos?.photo;
  } catch (err) {
    console.log('Error: API call has failed.', err);
    // Optionally, you can throw the error to handle it outside of this function.
  }
};

export default ApiCall;
