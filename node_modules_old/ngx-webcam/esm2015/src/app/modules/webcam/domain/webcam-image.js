/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */
export class WebcamImage {
    constructor(imageAsDataUrl, mimeType, imageData) {
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
    static getDataFromDataUrl(dataUrl, mimeType) {
        return dataUrl.replace(`data:${mimeType};base64,`, '');
    }
    /**
     * Get the base64 encoded image data
     * @returns base64 data of the image
     */
    get imageAsBase64() {
        return this._imageAsBase64 ? this._imageAsBase64
            : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
    }
    /**
     * Get the encoded image as dataUrl
     * @returns the dataUrl of the image
     */
    get imageAsDataUrl() {
        return this._imageAsDataUrl;
    }
    /**
     * Get the ImageData object associated with the canvas' 2d context.
     * @returns the ImageData of the canvas's 2d context.
     */
    get imageData() {
        return this._imageData;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViY2FtLWltYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXdlYmNhbS8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJjYW0vZG9tYWluL3dlYmNhbS1pbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSCxNQUFNLE9BQU8sV0FBVztJQUV0QixZQUFtQixjQUFzQixFQUFFLFFBQWdCLEVBQUUsU0FBb0I7UUFNaEUsY0FBUyxHQUFXLElBQUksQ0FBQztRQUNsQyxtQkFBYyxHQUFXLElBQUksQ0FBQztRQUNyQixvQkFBZSxHQUFXLElBQUksQ0FBQztRQUMvQixlQUFVLEdBQWMsSUFBSSxDQUFDO1FBUjVDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFRRDs7OztPQUlHO0lBQ0ssTUFBTSxDQUFDLGtCQUFrQixDQUFDLE9BQWUsRUFBRSxRQUFnQjtRQUNqRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxRQUFRLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDOUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb250YWluZXIgY2xhc3MgZm9yIGEgY2FwdHVyZWQgd2ViY2FtIGltYWdlXHJcbiAqIEBhdXRob3IgYmFzc3QzMTQsIGRhdmlkc2hlbjg0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgV2ViY2FtSW1hZ2Uge1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoaW1hZ2VBc0RhdGFVcmw6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZywgaW1hZ2VEYXRhOiBJbWFnZURhdGEpIHtcclxuICAgIHRoaXMuX21pbWVUeXBlID0gbWltZVR5cGU7XHJcbiAgICB0aGlzLl9pbWFnZUFzRGF0YVVybCA9IGltYWdlQXNEYXRhVXJsO1xyXG4gICAgdGhpcy5faW1hZ2VEYXRhID0gaW1hZ2VEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWFkb25seSBfbWltZVR5cGU6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfaW1hZ2VBc0Jhc2U2NDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9pbWFnZUFzRGF0YVVybDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9pbWFnZURhdGE6IEltYWdlRGF0YSA9IG51bGw7XHJcblxyXG5cclxuICAvKipcclxuICAgKiBFeHRyYWN0cyB0aGUgQmFzZTY0IGRhdGEgb3V0IG9mIHRoZSBnaXZlbiBkYXRhVXJsLlxyXG4gICAqIEBwYXJhbSBkYXRhVXJsIHRoZSBnaXZlbiBkYXRhVXJsXHJcbiAgICogQHBhcmFtIG1pbWVUeXBlIHRoZSBtaW1lVHlwZSBvZiB0aGUgZGF0YVxyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIGdldERhdGFGcm9tRGF0YVVybChkYXRhVXJsOiBzdHJpbmcsIG1pbWVUeXBlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBkYXRhVXJsLnJlcGxhY2UoYGRhdGE6JHttaW1lVHlwZX07YmFzZTY0LGAsICcnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgYmFzZTY0IGVuY29kZWQgaW1hZ2UgZGF0YVxyXG4gICAqIEByZXR1cm5zIGJhc2U2NCBkYXRhIG9mIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaW1hZ2VBc0Jhc2U2NCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlQXNCYXNlNjQgPyB0aGlzLl9pbWFnZUFzQmFzZTY0XHJcbiAgICAgIDogdGhpcy5faW1hZ2VBc0Jhc2U2NCA9IFdlYmNhbUltYWdlLmdldERhdGFGcm9tRGF0YVVybCh0aGlzLl9pbWFnZUFzRGF0YVVybCwgdGhpcy5fbWltZVR5cGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBlbmNvZGVkIGltYWdlIGFzIGRhdGFVcmxcclxuICAgKiBAcmV0dXJucyB0aGUgZGF0YVVybCBvZiB0aGUgaW1hZ2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGltYWdlQXNEYXRhVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VBc0RhdGFVcmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIEltYWdlRGF0YSBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYW52YXMnIDJkIGNvbnRleHQuXHJcbiAgICogQHJldHVybnMgdGhlIEltYWdlRGF0YSBvZiB0aGUgY2FudmFzJ3MgMmQgY29udGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGltYWdlRGF0YSgpOiBJbWFnZURhdGEge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlRGF0YTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==