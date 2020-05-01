const apiKey = "UKlz71kgfGUxUqxsP9i9bUHlCKxfjYZZ8tRRemxMXlUzgkNGYkhVLOsvMasCbTWVN3fL7TjVKqqDE_mGjwO_YZcrXMwbnNrFd4nIIguO4nwbn6z26WJ_M5NC88-rXnYx";
const clientId = "Yg2r9sVfVYAjLWxKEYfVIg";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then((response) =>  response.json()).then((jsonResponse) => {
                if(jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipcode: business.location.zip_code,
                            category: business.categories["title"],
                            rating: business.rating,
                            review_count: business.review_count
                        }
                    })
                }
            });
    }
}

export default Yelp;