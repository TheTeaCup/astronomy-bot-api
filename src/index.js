const fetch = require("node-fetch");

/**
 * @class AstronomyBotAPI
 */
class AstronomyBotAPI {
    /**
     * @param {string} key - your AstronomyBotAPI key prefix by "astronomy-"
     */
    constructor(key, client) {

        // Key error handling
        if (!key) throw new Error('"key" is missing or undefined');
        if (typeof key !== "string") throw new TypeError('"key" is not typeof string');
        if (!key.startsWith("astronomy-")) throw new Error('"key" is not prefixed by "astronomy-", please follow the key format');

        // API config
        this.baseApiUrl = "https://astrology.mythicalbots.xyz/api";
        this.key = key;

    }

     /**
     * Image API
     * @returns {Promise<boolean | Error>} returns false if there was no error, returns an error if there was.
     */
    async randomImage() {
        
        let res = await fetch(
            `${this.baseApiUrl}/gallery/random`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                Authorization: this.key
              }
            }
          );

        // Get body as JSON
        let responseData = await res.json();

        if(responseData.code === "429") {
            // ratelmited
            return Promise.reject(new Error(responseData.message));
        }  
        if (responseData.code === "401") {
            // unauth
            return Promise.reject(new Error(responseData.message));
        }  
            // success

            return Promise.resolve(responseData.message)  

    }
}

module.exports = AstronomyBotAPI;
