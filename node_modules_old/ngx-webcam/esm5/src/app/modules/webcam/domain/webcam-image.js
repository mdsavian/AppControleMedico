/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
var WebcamImage = /** @class */ (function () {
    function WebcamImage(imageAsDataUrl, mimeType, imageData) {
        this._mimeType = null;
        this._imageAsBase64 = null;
        this._imageAsDataUrl = null;
        this._imageData = null;
        this._mimeType = mimeType;
        this._imageAsDataUrl = imageAsDataUrl;
        this._imageData = imageData;
    }
    /**
     * Extracts the Base64 data out of the given dataUrl.
     * @param dataUrl the given dataUrl
     * @param mimeType the mimeType of the data
     */
    WebcamImage.getDataFromDataUrl = function (dataUrl, mimeType) {
        return dataUrl.replace("data:" + mimeType + ";base64,", '');
    };
    Object.defineProperty(WebcamImage.prototype, "imageAsBase64", {
        /**
         * Get the base64 encoded image data
         * @returns base64 data of the image
         */
        get: function () {
            return this._imageAsBase64 ? this._imageAsBase64
                : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageAsDataUrl", {
        /**
         * Get the encoded image as dataUrl
         * @returns the dataUrl of the image
         */
        get: function () {
            return this._imageAsDataUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebcamImage.prototype, "imageData", {
        /**
         * Get the ImageData object associated with the canvas' 2d context.
         * @returns the ImageData of the canvas's 2d context.
         */
        get: function () {
            return this._imageData;
        },
        enumerable: true,
        configurable: true
    });
    return WebcamImage;
}());
export { WebcamImage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViY2FtLWltYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYmNhbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJjYW0vZG9tYWluL3dlYmNhbS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtJQUVFLHFCQUFtQixjQUFzQixFQUFFLFFBQWdCLEVBQUUsU0FBb0I7UUFNaEUsY0FBUyxHQUFXLElBQUksQ0FBQztRQUNsQyxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixlQUFVLEdBQWMsSUFBSSxDQUFDO1FBUjVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFRRDs7OztPQUlHO0lBQ1ksOEJBQWtCLEdBQWpDLFVBQWtDLE9BQWUsRUFBRSxRQUFnQjtRQUNqRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBUSxRQUFRLGFBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBTUQsc0JBQVcsc0NBQWE7UUFKeEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjO2dCQUM5QyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakcsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyx1Q0FBYztRQUp6Qjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLGtDQUFTO1FBSnBCOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnRhaW5lciBjbGFzcyBmb3IgYSBjYXB0dXJlZCB3ZWJjYW0gaW1hZ2VcclxuICogQGF1dGhvciBiYXNzdDMxNCwgZGF2aWRzaGVuODRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBXZWJjYW1JbWFnZSB7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpbWFnZUFzRGF0YVVybDogc3RyaW5nLCBtaW1lVHlwZTogc3RyaW5nLCBpbWFnZURhdGE6IEltYWdlRGF0YSkge1xyXG4gICAgdGhpcy5fbWltZVR5cGUgPSBtaW1lVHlwZTtcclxuICAgIHRoaXMuX2ltYWdlQXNEYXRhVXJsID0gaW1hZ2VBc0RhdGFVcmw7XHJcbiAgICB0aGlzLl9pbWFnZURhdGEgPSBpbWFnZURhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9taW1lVHlwZTogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIF9pbWFnZUFzQmFzZTY0OiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ltYWdlQXNEYXRhVXJsOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ltYWdlRGF0YTogSW1hZ2VEYXRhID0gbnVsbDtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEV4dHJhY3RzIHRoZSBCYXNlNjQgZGF0YSBvdXQgb2YgdGhlIGdpdmVuIGRhdGFVcmwuXHJcbiAgICogQHBhcmFtIGRhdGFVcmwgdGhlIGdpdmVuIGRhdGFVcmxcclxuICAgKiBAcGFyYW0gbWltZVR5cGUgdGhlIG1pbWVUeXBlIG9mIHRoZSBkYXRhXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGF0YUZyb21EYXRhVXJsKGRhdGFVcmw6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGRhdGFVcmwucmVwbGFjZShgZGF0YToke21pbWVUeXBlfTtiYXNlNjQsYCwgJycpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBiYXNlNjQgZW5jb2RlZCBpbWFnZSBkYXRhXHJcbiAgICogQHJldHVybnMgYmFzZTY0IGRhdGEgb2YgdGhlIGltYWdlXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBpbWFnZUFzQmFzZTY0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VBc0Jhc2U2NCA/IHRoaXMuX2ltYWdlQXNCYXNlNjRcclxuICAgICAgOiB0aGlzLl9pbWFnZUFzQmFzZTY0ID0gV2ViY2FtSW1hZ2UuZ2V0RGF0YUZyb21EYXRhVXJsKHRoaXMuX2ltYWdlQXNEYXRhVXJsLCB0aGlzLl9taW1lVHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGVuY29kZWQgaW1hZ2UgYXMgZGF0YVVybFxyXG4gICAqIEByZXR1cm5zIHRoZSBkYXRhVXJsIG9mIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaW1hZ2VBc0RhdGFVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZUFzRGF0YVVybDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgSW1hZ2VEYXRhIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGNhbnZhcycgMmQgY29udGV4dC5cclxuICAgKiBAcmV0dXJucyB0aGUgSW1hZ2VEYXRhIG9mIHRoZSBjYW52YXMncyAyZCBjb250ZXh0LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaW1hZ2VEYXRhKCk6IEltYWdlRGF0YSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbn1cclxuIl19