// import * as React from "react";
import { default as SECRET } from "../master/secret";


export default {
    getQueryGiphy: (query) => {
        let url = `${SECRET.GIPHY_URL}${query}${SECRET.GIPHY_API_KEY}`;
        fetch(url)
            .then((res) => console.log(res))
    }
    // fetch()
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
}    