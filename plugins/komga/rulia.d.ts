/* eslint-disable */

interface Window {
  /**
   * APIs available for Rulia plugins.
   */
  Rulia: {
    /**
     * End execution of current plugin context without returning any data.
     */
    end: () => void

    /**
     * End execution of current plugin context with some data returned.
     *
     * @param payload Data passed to Rulia.
     */
    endWithResult: (payload: any) => void

    /**
     * End execution of current plugin context with raising an exception.
     *
     * @param errorMsg Error message.
     */
    endWithException: (errorMsg: string) => void

    /**
     * Make an app toast.
     * You can use this function to tell user something if you need to.
     *
     * @param message Toast message.
     */
    appToast: (message: string) => void

    /**
     * Make a http request.
     *
     * @example
     * // 1. Make a get request.
     * // ===========================================
     * const payload = new URLSearchParams()
     * payload.append('region', 'japan')
     * payload.append('keyword', 'school')
     *
     * const rawResponse = await window.Rulia.httpRequest({
     *   url: 'https://example.com/v1/comic-list',
     *   method: 'GET',
     *   payload: payload.toString()  // 'region=japan&keyword=school'
     * })
     *
     * // If your response is a JSON.
     * const response = JSON.parse(rawResponse)
     *
     * @example
     * // 2. Make a post request with "application/json".
     * // ===========================================
     * const payload = {
     *   name: 'John Smith',
     *   age: 100
     * }
     * const rawResponse = await window.Rulia.httpRequest({
     *   url: 'https://example.com/v1/add-user',
     *   method: 'POST',
     *   payload: JSON.stringify(payload),
     *   contentType: 'application/json'
     * })
     *
     * // If your response is some kind of customized string, just use it.
     * const response = rawResponse
     *
     * @example
     * // 3. Make a post request with "application/x-www-form-urlencoded".
     * // ===========================================
     * const payload = new URLSearchParams()
     * payload.append('name', 'John Smith')
     * payload.append('age', 100)
     *
     * const rawResposne = await window.Rulia.httpRequest({
     *   url: 'https://example.com/v1/add-user',
     *   method: 'POST',
     *   payload: payload.toString(),
     *   contentType: 'application/x-www-form-urlencoded'
     * })
     *
     * @example
     * // 4. Make a post request with your custom type.
     * // ===========================================
     * const rawResponse = await window.Rulia.httpRequest({
     *   url: 'https://example.com/some/api/requires/xml',
     *   method: 'POST',
     *   payload: '<user><name>John Smith</name><age>100</age></user>',  // Let's say the server requires a piece of XML.
     *   contentType: 'application/must-be-written-in-this-way'  // The required content type by the server.
     * })
     *
     * // For an example, the sever responses with a YAML string.
     * const myYAML = parseYAML(rawResponse)
     */
    httpRequest: (params: {
      /**
       * Request URL.
       */
      url: string

      /**
       * Http method.
       */
      method: string

      /**
       * Request data.
       * It only accepts string, you have to serialize it yourself.
       * Check the example above to see how to do this.
       */
      payload?: string

      /**
       * Content type of the payload.
       * It has to match the payload that you send to server.
       */
      contentType?: string
    }) => Promise<string>

    /**
     * Get app version. Maybe you need it.
     *
     * @returns {string} Version string.
     */
    getAppVersion: () => string

    /**
     * Get user config of the plugin.
     * User config fields are defined in the section "userConfig" in the package.json.
     */
    getUserConfig: () => Record<string, string>
  }
}

/**
 * This is the data type that you need to pass to Rulia
 * in function "getMangaList".
 */
interface IGetMangaListResult {
  list: {
    title: string
    url: string
    coverUrl: string
  }[]
  totalPage?: number
}

/**
 * This is the data type that you need to pass to Rulia
 * in function "getMangaData".
 */
interface IGetMangaDataResult {
  title: string
  description: string
  coverUrl: string
  chapterList: {
    title: string
    url: string
  }[]

  /**
   * There will be a continue button if you provide this information.
   */
  lastReadChapter?: {
    title: string
    url: string
  }
}

/**
 * This is the image data for each single image.
 */
interface IRuliaChapterImage {
  url: string
  width: number
  height: number
}
